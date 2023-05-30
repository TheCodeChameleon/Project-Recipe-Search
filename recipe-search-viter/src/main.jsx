import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RecipesProvider from "./context/RecipesContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import { RecipesPage } from "./routes/RecipesPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipes", element: <RecipesPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  </React.StrictMode>
);
