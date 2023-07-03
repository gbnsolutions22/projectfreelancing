import React from "react";

import Login from "../pages/Login";

import UserLayout from "../pages/user/UserLayout";
import UserLoginLaout from "../pages/user/userLoginLayout";
import WelcomePage from "../pages/user/welcomePage/WelcomePage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import RequireAuth from "../pages/RequireAuth";
import Unauthorized from "../pages/Unauthorized";
import Home from "../pages/user/homePage";
import Auth from "../containers/authentication/Authorization";

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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "404",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "",
    element: (
      <Auth>
        <UserLoginLaout />
      </Auth>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
