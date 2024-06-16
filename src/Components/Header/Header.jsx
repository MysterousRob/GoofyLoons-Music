import React from "react";
import { Nav1 } from "../../State/Nav";

function Header() {
  return (
    <div className="relative w-full">
      <div className="top-0 left-0 bg-logo2 h-64 w-full bg-cover bg-center flex items-center p-[10px] relative">
        <div className="absolute bottom-5 left-4 bg-white rounded-3xl p-[10px]">
          <h1 className="text-6xl font-bold text-black text-left">
            GoonyLoons
          </h1>
        </div> 
        <div className="absolute top-5 right-5 bg-white rounded-3xl p-[10px]">
          <Nav1 />
        </div>
      </div>
    </div>
  );
}

export default Header;
