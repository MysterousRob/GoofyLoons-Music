import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function MySongs() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <h1>My Songs</h1>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default MySongs;
