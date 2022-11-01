import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import RouteSchedulePage from "../views";

const RouteScheduleRoutes = [
  {
    path: "route-schedule",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <RouteSchedulePage /> },
      //   { path: "add", element: <AddPost /> },
      //   { path: "edit/:id", element: <EditPost /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default RouteScheduleRoutes;
