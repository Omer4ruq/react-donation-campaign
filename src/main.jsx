import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Donated from "./components/Donated/Donated";
import DetailsPage from "./components/detailsPage/DetailsPage";
import Listcard from "./components/Listcard/Listcard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donated",
        element: <Donated></Donated>,
        loader: () => fetch("/db.json"),
      },

      {
        path: "/listcard/:id",
        element: <Listcard></Listcard>,
        loader: () => fetch("../db.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
