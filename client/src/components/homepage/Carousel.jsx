import React, { useState } from "react";
import HeroImage from "../../assets/images/homepage/carousel-img.png";

const CarouselData = [
  { image: HeroImage, text: "Carausel Image 1" },
  { image: HeroImage, text: "Carausel Image 2" },
  { image: HeroImage, text: "Carausel Image 3" },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === CarouselData.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? CarouselData.length - 1 : slide - 1)
  }


  return (
    <>
      {CarouselData.map((imageData, index) => (
        <div key={index} className={slide ===  index ? "relative": 'hidden'}>
          <div className="bg-black text-white px-7">
            <div className="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 z-50 cursor-pointer"
                onClick={prevSlide}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="flex items-center">
                <img src={imageData.image} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 cursor-pointer"
                  onClick={nextSlide}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-white pt-20 pl-20 absolute top-0">
            <div className="flex items-center gap-x-1 gap-y-4 -ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
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
              <h2 className="text-3xl">Up to 10% off Voucher</h2>
              <p className="text-sm">{imageData.text}</p>
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
        </div>
      ))}
    </>
  );
};

export default Carousel;
