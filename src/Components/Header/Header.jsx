import React from "react";
import Nav from "../../State/Nav";

function Header() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 bg-logo h-64 w-full bg-cover bg-center flex items-center justify-center p-[10px]">
        <div className="bg-pink-300 rounded-3xl p-[10px] items-canter">
          <h1 className="text-6xl font-bold text-white text-center">
            GoonyLoons
          </h1>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
