import React from "react";
import babel from "../images/babel.png";

function CategoryCard({ imageSrc, title, id, imgSize}) {
  const defaultImageSrc = babel;

  const handleCategoryClick = (id) => {
    // Perform the PUT request using the categoryId
    // You can replace the placeholder URL with your actual API endpoint
    fetch(`http://localhost:8000/api/clicks/${id}`, {
      method: "PUT",
      // Add any necessary headers or body data for the PUT request
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Handle any errors that occur during the PUT request
      });
  };

  return (
    <div className="rounded overflow-hidden shadow-lg py-4 h-full">
      <img
        className={`object-cover ${imgSize}`}
        src={imageSrc || defaultImageSrc}
        alt="Card"
      />
      <div className="">
        <div className="px-6 py-2 pb-4">
          <div className="flex flex-row-reverse font-bold text-xl text-orange-600 px-2">
            {title}
          </div>
        </div>
        <div className="flex flex-row-reverse px-6 mb-2">
          <button className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-3xl" onClick={() => handleCategoryClick(id)}>
            المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
