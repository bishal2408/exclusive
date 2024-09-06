import React from "react";
import CategorySidebar from "../components/homepage/CategorySidebar";
import Carousel from "../components/homepage/Carousel";

const HomePage = () => {
  return (
    <div className="grid grid-cols-[.5fr_2fr]">
      <div className="border-r">
        <div className="mb-10"></div>

        <CategorySidebar
          categoryName={"Women's Fashion"}
          hasSubCategory={true}
        />
        <CategorySidebar categoryName={"Men's Fashion"} hasSubCategory={true} />
        <CategorySidebar categoryName={"Electronics"} />
        <CategorySidebar categoryName={"Home & Lifestyle"} />
        <CategorySidebar categoryName={"Medicine"} />
        <CategorySidebar categoryName={"Sports & Outdoor"} />
        <CategorySidebar categoryName={"Baby's & Toys"} />
        <CategorySidebar categoryName={"Groceries & Pets"} />
        <CategorySidebar categoryName={"Health & Beauty"} />
      </div>

      <div className="mt-10 ml-10">
          <Carousel />
      </div>

    </div>
  );
};

export default HomePage;
