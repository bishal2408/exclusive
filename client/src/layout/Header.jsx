import React from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const Header = () => {
  return (
    <header className="py-4 px-10 flex justify-between items-center border ">
      <Link to={"/"}>
        <span className="font-bold text-xl">Exclusive</span>
      </Link>

      <div className="flex gap-x-10">
        <div>
          <Link to={"/"}>
            <span className="font-medium underline underline-offset-2">
              Home
            </span>
          </Link>
        </div>

        <div>
          <Link to={"/"}>
            <span>Contact</span>
          </Link>
        </div>

        <div>
          <Link to={"/"}>
            <span>About</span>
          </Link>
        </div>

        <div>
          <Link to={"/"}>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center bg-gray-200 rounded pr-3">
          <InputField
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-200 mr-2 !outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </InputField>
        </div>

        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
