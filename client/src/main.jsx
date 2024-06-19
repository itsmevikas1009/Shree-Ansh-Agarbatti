import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction.jsx";
import Home from "./pages/Home.jsx";
import CC from "./pages/CC.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UnderConstruction />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/*",
        element: <UnderConstruction />,
      },
      {
        path: "/CC",
        element: <CC />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
