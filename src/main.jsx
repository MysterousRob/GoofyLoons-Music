import * as React from "react";
import * as ReactDOM from "react-dom/client";
// my main page imports
import App from './App.jsx';
import A
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ImageOff } from "lucide-react";
import reportWebVitals from "../reportWebVitals.js";


const ErrorPage = () => {
  return (
    <h1 className="text-black text-[100px]">
      Oops! Something went wrong!!!!!!
    </h1>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
