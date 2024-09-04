import React from "react";
import HeroImage from "../../assets/images/homepage/carousel-img.png";

const Carousel = () => {
  return (
    <>
      <img src={HeroImage} className="float-right" />
      <div className="text-white pt-14 pl-10 ">
        <div className="flex items-center gap-x-1 gap-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <p className="text-gray-200">iPhone 14 Series</p>
        </div>

        <div className="mt-4 mb-7">
          <h2 className="text-5xl ">Up to 10% off Voucher</h2>
        </div>

        <div>
          <button className="flex items-center gap-2">
            <p className="underline underline-offset-[7px] font-bold">
              Shop Now
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 -mb-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
