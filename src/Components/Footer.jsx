import React from "react";
import MostReadSection from "./MostReadSection";
import AdBox from "./AdBox";
import SocialLegal from "./SocialLegal";

function Footer() {
  return (
    <div className="mt-6">
        <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 auto-rows-fr">
        <MostReadSection />
        <div className="h-2/3">
        <AdBox />

        </div>
      </div>
      <hr />
      <div className="mt-8">
      <SocialLegal />

      </div>
    </div>
  );
}

export default Footer;
