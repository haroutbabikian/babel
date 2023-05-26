import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

function PageTop() {
  return (
    <div>
      <div className="mb-2">
        <div className="relative lg:hidden">
          <Navbar className=" absolute r-0 b-0" />
        </div>
        <Header />

      </div>

      <div className="relative mt-2 pt-2">
        <Carousel />
        <div className="hidden lg:block lg:absolute top-0 w-full z-30">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default PageTop;
