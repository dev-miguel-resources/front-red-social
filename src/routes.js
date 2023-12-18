import { useRoutes } from 'react-router-dom';
import AuthTabs from '@molecules/auth/organisms/auth-tabs/AuthTabs';
import ForgotPassword from '@molecules/auth/organisms/forgot-password/ForgotPassword';
import ResetPassword from '@molecules/auth/organisms/reset-password/ResetPassword';
import ErrorNotFound from '@molecules/error/ErrorNotFound';
import Social from '@molecules/social/Social';
import Streams from '@molecules/social/Streams';


export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    },
    {
      path: '/app/social',
      element: <Social />,
      children: [
        {
          path: 'streams',
          element: <Streams />
        }
      ]
    },
    {
      path: '*',
      element: <ErrorNotFound />
    }
  ]);

  return elements;
};
