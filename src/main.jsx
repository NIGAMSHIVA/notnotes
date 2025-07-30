import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Cart from './components/Cart';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Me from './components/Me';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';
import Error from './components/Error';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const AboutMeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error />,
    children: [
      {
        path: "",
        element: <RestaurantCard />
      },
      {
        path: "/About",        
        element: <AboutMeLayout />,
        children: [
          {
            path: "",         
            element: <About />
          },
          {
            path: "me",       
            element: <Me />
          }
        ]
      },
      {
        path: "/Contacts",
        element: <Contacts />
      },
      {
        path: "/Cart",
        element: <Cart />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
