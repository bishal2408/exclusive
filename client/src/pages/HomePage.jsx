import React, { useState, useEffect } from "react";
import CategorySidebar from "../components/homepage/CategorySidebar";
import Carousel from "../components/homepage/Carousel";
import Timer from "../components/homepage/Timer";
import ProductImage from "../assets/images/homepage/image.png";

const categories = [
  { name: "Women's Fashion", hasSubCategory: true },
  { name: "Women's Fashion", hasSubCategory: true },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
];

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-[.5fr_2fr]">
        <div className="border-r">
          <div className="mb-10"></div>
          {categories.map((category, index) => (
            <CategorySidebar
              key={index}
              categoryName={category.name}
              hasSubCategory={category.hasSubCategory}
            />
          ))}
        </div>

        <div className="mt-10 ml-10">
          <Carousel />
        </div>
      </div>

      <div className="my-16">
        <div>
          <div className="flex items-center gap-x-3">
            <div className="bg-red-500 rounded w-4 h-10"></div>
            <div className="text-red-500 font-medium">Today's</div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <div className="flex items-center justify-between gap-x-24">
              <h3 className="text-3xl font-semibold">Flash Sales</h3>
              <Timer timeInDays={12} />
            </div>

            <div className="flex gap-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 cursor-pointer" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          <div className="shadow-sm">
            <div className="flex bg-gray-100 relative">
              <img src={ProductImage} className="w-full h-44 object-contain"/>
              <div className="bg-red-400 px-[10px] py-[2px] rounded m-2 absolute">
                  <span className="text-white text-sm">-40%</span>
              </div>
            </div>

            <div className="px-2 py-3">
              <p className="text-md font-semibold mb-1">HAVIT HV-G92 Gamepad</p>
              <p className="text-red-500 font-semibold">
                $120 <s className="text-gray-400 ml-3">$160</s>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
