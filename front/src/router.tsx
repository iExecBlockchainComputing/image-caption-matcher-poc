import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { AddProtectedImages } from './views/AddProtectedImages/AddProtectedImages.tsx';
import { Index } from './views/Index.tsx';
import { ProtectedImages } from './views/ProtectedImages/ProtectedImages.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
      {
        path: '/protected-images',
        element: <ProtectedImages />,
      },
      {
        path: '/protected-images/new',
        element: <AddProtectedImages />,
      },
    ],
  },
]);
