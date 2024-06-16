import React from "react";
import { Nav2 } from "../../State/Nav";


function Footer() {
  return (
    <div className="bg-black p-[15px]">
      <div className="footer-container flex justify-around p-[1px] bg-gray-800 text-white">
        {/* Contact */}
        <div className="footer-section flex-1 m-2 p-4 bg-gray-700">
          <h1 className="text-white">
            Contact
          </h1>
          {/* Form goes here */}
        </div>
        {/* Where to find me */}
        <div className="footer-section flex-1 m-2 p-4 bg-gray-700">
          <h1 className="text-white">
            Where to find me
          </h1>
        </div>
        {/* Quick Links */}
        <div className="footer-section flex-1 m-2 p-4 bg-gray-700">
          <h1 className="text-white">
            Quick Links
          </h1>
          <div className="">
              <Nav2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
