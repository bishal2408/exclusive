import React from "react";
import { Link } from "react-router-dom";

const CategorySidebar = ({categoryName, className = "", hasSubCategory = false }) => {
    if (hasSubCategory) {
        className += 'items-center justify-between'
    }
  return (
    <div className="mb-2">
      <Link to="/" className={`flex py-1 pr-3 ${className}`} >
        {categoryName}
        {hasSubCategory && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-3 float-right"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </Link>
    </div>
  );
};

export default CategorySidebar;
