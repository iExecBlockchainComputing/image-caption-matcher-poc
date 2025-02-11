import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { AddProtectedImage } from './views/AddProtectedImage/AddProtectedImage.tsx';
import { EditProtectedImage } from './views/EditProtectedImage/EditProtectedImage.tsx';
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
        element: <AddProtectedImage />,
      },
      {
        path: '/protected-images/:protectedDataAddress/edit',
        element: <EditProtectedImage />,
      },
    ],
  },
]);
