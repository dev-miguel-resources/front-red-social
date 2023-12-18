// complemento de config. para características especiales de react
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@redux-toolkit/store";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";

// testear mi redux-toolkit -> contexto de que mis comps. de toda mi app sepan que existe el state management
const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<Router>{children}</Router>
		</Provider>
	)
}

PropTypes.propTypes = {
	children: PropTypes.node.isRequired
}

// cuando genere un test mis componentes a renderizar deben ya tener contexto de redux
const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

const renderWithRouter = (ui) => {
	const history = createBrowserHistory();
	return {
		history,
		...render(ui, { wrapper: Providers })
	}
}

export * from "@testing-library/react";
export { customRender }
export { renderWithRouter }
