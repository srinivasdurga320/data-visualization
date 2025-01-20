import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <div style={{ display: "flex" }}>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
