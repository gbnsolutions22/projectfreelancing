import React from "react";

import Login from "../pages/Login";

import UserLayout from "../pages/user/UserLayout";
import WelcomePage from "../pages/user/welcomePage/WelcomePage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import RequireAuth from "../pages/RequireAuth";
import Unauthorized from "../pages/Unauthorized";
import Home from "../pages/user/homePage";

const routes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "Contact",
        element: <ContactUs />,
      },
      {
        path: "404",
        element: <PageNotFound />,
      },
      {
        path: "homePage",
        element: <Home />,
      },
    ],
  },
];

export default routes;
