import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Routes/PrivateRoute";
import CheckOut from "../Pages/CheckOut/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://edu-server-phi.vercel.app/courses"),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: () => fetch("https://edu-server-phi.vercel.app/courses"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://edu-server-phi.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`https:/edu-server-phi.vercel.app//courses/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
