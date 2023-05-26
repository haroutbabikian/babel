import React from "react";
import { useQuery } from "react-query";
import CategoryCard from "./CategoryCard";

const fetchMostClickedCategories = async () => {
  const response = await fetch("http://localhost:8000/api/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data;
};

const CardGrid = () => {
  const { data: categories, isLoading, isError } = useQuery(
    "mostClickedCategories",
    fetchMostClickedCategories
  );

  // Check if categories are loading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if an error occurred while fetching categories
  if (isError) {
    return <p>Error fetching categories</p>;
  }

  // Sort categories based on click_count
  const sortedCategories = categories.sort(
    (a, b) => b.click_count - a.click_count
  );

  // Limit the number of categories to 4
  const limitedCategories = sortedCategories.slice(1, 5);
  const topCategory = sortedCategories[0];

  return (
    <div className="grid justify-items-center grid-cols-1 lg:grid-cols-2 lg:gap-8 my-4 mt-6">
      <div className="grid grid-cols-1 items-center md:justify-center sm:grid-cols-2 sm:gap-8">
        {limitedCategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            imageSrc={category.imageURL}
            imgSize={"h-64"}
            id={category.id}
          />
        ))}
      </div>

      <CategoryCard
        title={topCategory.name}
        imageSrc={topCategory.imageURL}
        imgSize={"h-5/6"}
        id={topCategory.id}
      />
    </div>
  );
};

export default CardGrid;
