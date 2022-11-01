import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import DriverPage from "../views";

const DriverRoutes = [
  {
    path: "driver",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <DriverPage /> },
      //   { path: "add", element: <AddPost /> },
      //   { path: "edit/:id", element: <EditPost /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default DriverRoutes;
