// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'; // react testing library with jest (código/react)

import 'jest-canvas-mock' // mocks in the browser environment

// referencias de emulación del backend (node)

// simular un comportamiento integrado con el backend de node
import { server } from '@mocks/server';

// ciclos del servidor del servidor, el cual debe estar levantado para los tests
beforeAll(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
})

afterAll(() => {
	server.close();
})

