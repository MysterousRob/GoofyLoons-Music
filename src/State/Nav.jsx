import React from "react";
import { Link } from "react-router-dom";


let navOptions = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/my-songs",
    title: "My Songs",
  },
  {
    href: "/about-me",
    title: "About Me",
  },
  {
    href: "/song-manager",
    title: "Song Manager",
  }
];

export const Nav1 = () => {
    return (
    <>
      <nav className="flex flex-row gap-4">
        {navOptions.map((nav, i) => (
          <Link
            key={i}
            to={nav.href}
            className="no-underline text-black px-2 py-1 hover:border-white transition duration-500 rounded"
          >
            <p className="p-1 hover:border-white transition duration-500 rounded">
              {nav.title}
            </p>
          </Link>
        ))}
      </nav>
    </>
  );
}

export const Nav2 = () => {
    return (
    <>
      <nav className="flex flex-col gap-4">
        {navOptions.map((nav, i) => (
          <Link
            key={i}
            to={nav.href}
            className="no-underline text-white px-2 py-1 hover:border-white transition duration-500 rounded"
          >
            <p className="p-1 hover:border-white transition duration-500 rounded">
              {nav.title}
            </p>
          </Link>
        ))}
      </nav>
    </>
  );
}