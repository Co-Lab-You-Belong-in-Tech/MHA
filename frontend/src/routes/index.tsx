import Layout from '@/components/layout';
import ProtectedRoute from '@/components/protected-route';
import AuthLanding from '@/pages/auth-landing';
import Email from '@/pages/email/email';
import ErrorPage from '@/pages/error';
import FindTherapist from '@/pages/find-therapist';
import Landing from '@/pages/landing';
import MatchLayout from '@/pages/match/layout';
import Recommended from '@/pages/recommended';
import Register from '@/pages/register';
import Therapist from '@/pages/therapist';
import Therapists from '@/pages/therapists';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'therapists',
        element: <Therapists />,
      },
      {
        path: 'therapist/:therapistId',
        element: <Therapist />,
      },
      {
        path: 'find-therapist',
        element: <FindTherapist />,
      },
      {
        path: 'recommended',
        element: <Recommended />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'home',
            element: <AuthLanding />,
          },
        ],
      },
      {
        path: 'verify',
        element: <Email />,
      },
    ],
  },
  {
    path: 'match/:matchId',
    element: <MatchLayout />,
  },
  {
    path: 'auth/:register',
    element: <Register />,
  },
]);

export default router;
