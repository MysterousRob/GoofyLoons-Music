import React from "react";

let navOptions = [
  {
    href: "/",
    title: "Home",
  },
];

const Nav = () => {
    return (
    <>
      <nav className="flex flex-row gap-4">
        {navOptions.map((nav, i) => (
          <Link
            key={i}
            to={nav.href}
            className="no-underline text-white border border-transparent px-2 py-1 hover:border-white transition duration-500 rounded"
          >
            <p className="border border-transparent p-1 hover:border-white transition duration-500 rounded">
              {nav.title}
            </p>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Nav;