import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page/home-page';
import CarListPage from 'pages/cars-list-page/index';
import CarPage from 'pages/car-page';
import CarFormPage from 'pages/car-form-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.CarListPage,
        element: <CarListPage />,
      },
      {
        path: routes.CarPage.routerPath,
        element: <CarPage />,
      },
      {
        path: routes.CarCreatePage,
        element: <CarFormPage />,
      },
      {
        path: routes.CarUpdatePage.routerPath,
        element: <CarFormPage mode="update" />,
      },
    ],
  },
]);

export default router;
