import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mySongs" element={<MySongs />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/SongManager" element={<SongManager />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
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

reportWebVitals();