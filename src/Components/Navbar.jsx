import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../hamburger.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id) => {
    // Perform the PUT request using the title
    // Replace the placeholder URL with your actual API endpoint
    fetch(`http://localhost:8000/api/clicks/${id}`, {
      method: "PUT",
      // Add any necessary headers or body data for the PUT request
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Handle any errors that occur during the PUT request
        console.error(error);
      });
  };

  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center text-gray-200 lg:text-white">
      <nav className="">
        <div className="flex flex-row-reverse lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="block w-8 text-gray-300 hover:text-gray-800 focus:text-gray-800 focus:outline-none"
          >
            <HamburgerIcon />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } grid grid-cols-2 absolute z-40 lg:static w-full lg:flex lg:flex-row-reverse lg:justify-between lg:items-center sm:gap-0 lg:gap-10 mt-2 font-bold lg:text-sm xl:text-2xl bg-emerald-400 lg:bg-transparent rounded-lg`}
        >
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200 md:pr-6"
          >
            الرئيسية
          </Link>
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(5)}
          >
            اخبار
          </Link>
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(2)}
          >
            اقتصاد
          </Link>
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(4)}
          >
            رياضة
          </Link>
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(6)}
          >
            ثقافة
          </Link>
          <Link
            to="/"
            className="block border border-gray-50 lg:border-0 lg:border-l lg:border-grey-500/50 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(3)}
          >
            فيديو و صور
          </Link>
          <Link
            to="/"
            className="block lg:border-none col-start-1 col-end-3 md:pl-6 lg:pl-10 pt-6 pb-6 hover:text-gray-800 lg:hover:text-gray-200"
            onClick={() => handleLinkClick(1)}
          >
            آراء
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
