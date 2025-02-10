import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { AddProtectedImages } from './views/AddProtectedImages/AddProtectedImages.tsx';
import { ProtectedImages } from './views/ProtectedImages/ProtectedImages.tsx';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <Navigate to="/protected-images" />,
      },
      {
        index: true,
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
