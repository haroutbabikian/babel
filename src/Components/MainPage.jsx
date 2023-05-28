import React from "react";
import PageTop from "./PageTop";
import Footer from "./Footer";
import CardGrid from "./CardGrid";

function MainPage() {
  return (
    <div className="sm:bg-repeat sm:bg-green-900/[.98] sm:heropattern-boxes-green-900">
      <div className="m-0 w-0 h-0">&nbsp;</div>
      <div className="bg-white m-4 sm:m-14 rounded-lg sm:px-14 py-2">
        <PageTop />
        <div className="">
          <CardGrid />
        </div>
        <Footer />
      </div>
      <div className="m-0 w-0 h-0">&nbsp;</div>
    </div>
  );
}

export default MainPage;
