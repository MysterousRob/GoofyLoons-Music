import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// my main page imports
import App from './App.jsx';
import MySongs from "./Pages/MySongs/MySongs.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import SongManager from "./Pages/MySongs/SongManager/SongManager.jsx";
// css imports
import "./index.css";
// router imports
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
  {
    path: "/mySongs",
    element: <MySongs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
    errorElement: <ErrorPage />
  },
  {
    path: "/SongManager",
    element: (
      <App>
        {({ songs, updateSongs }) => (
          <SongManager songs={songs} updateSongs={updateSongs} />
        )}
      </App>
    ),
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

let navOptions = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/mySongs",
    title: "My Songs",
  },
  {
    href: "/aboutMe",
    title: "About Me",
  },
  {
    href: "/SongManager",
    title: "Song Manager",
  }
];