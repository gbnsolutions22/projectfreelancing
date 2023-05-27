import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import routesConf from "./routes.conf";

const router = createBrowserRouter(routesConf);

const RoutesWrapper = () => {
  const renderRoutesWrapper = () => {
    return <RouterProvider router={router} />;
  };

  return renderRoutesWrapper();
};

RoutesWrapper.propTypes = {};

RoutesWrapper.defaultProps = {};

export default RoutesWrapper;
