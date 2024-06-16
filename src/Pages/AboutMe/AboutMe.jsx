import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function AboutMe() {
  return (
    <div classname="relative bottom-0 w-full">
      <Header />
      <div>
        <h1>
            About Me
        </h1>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
