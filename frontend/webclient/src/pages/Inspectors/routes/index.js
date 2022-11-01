import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import InspectorsPage from "../views";

const InspectorRoutes = [
  {
    path: "inspector",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <InspectorsPage /> },
      //   { path: "add", element: <AddPost /> },
      //   { path: "edit/:id", element: <EditPost /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default InspectorRoutes;
