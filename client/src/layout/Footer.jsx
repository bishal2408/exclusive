import React from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import Qrcode from "../assets/images/footer/Qrcode.png";
import PlayStoreImage from "../assets/images/footer/playstore.png";
import AppleStoreImage from "../assets/images/footer/applestore.png";

const Footer = () => {
  return (
    <div className="px-10 py-16 mt-5 bg-black text-white">
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 justify-between">
        <div className="mb-3">
          <h3 className="text-2xl font-bold mb-2">Exclusive</h3>
          <h3 className="text-lg font-bold my-4">Subscribe</h3>
          <div>
            <p>Get 10% off your first order</p>
            <div className="inline-block outline outline-1 outline-gray-600 rounded mt-3">
              <div className="flex items-center">
                <InputField
                  type="text"
                  placeholder="Enter your email"
                  className="!outline-none bg-transparent !px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 cursor-pointer mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </InputField>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <div >
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="my-1">exclusive@gmail.com</p>
            <p>+977 9873658368</p>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-bold mb-2">Account</h3>
          <div className="flex flex-col">
            <Link to="/" className="mb-3">
              My Account
            </Link>
            <Link to="/" className="mb-3">
              Login / Register
            </Link>
            <Link to="/" className="mb-3">
              Cart
            </Link>
            <Link to="/" className="mb-3">
              Wishlist
            </Link>
            <Link to="/">Shop</Link>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-bold mb-2">Quick Link</h3>
          <div className="flex flex-col">
            <Link to="/" className="mb-3">
              Privacy Policy
            </Link>
            <Link to="/" className="mb-3">
              Terms of Use
            </Link>
            <Link to="/" className="mb-3">
              FAQ
            </Link>
            <Link to="/" className="mb-3">
              Contact
            </Link>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-lg font-bold mb-2">Download App</h3>
          <div className="inline-block">
            <p>Save $3 with App New User Only</p>
            <div className="grid gap-1 grid-cols-2 items-center overflow-hidden mt-3">
              <div className="flex">
                  <img src={Qrcode} alt="qr code" className="object-cover h-24" />
              </div>

              <div className="grid -ml-4">
                <div className="flex">
                  <img src={PlayStoreImage} alt="" className="object-cover h-12" />
                </div>
                <div className="flex">
                  <img src={AppleStoreImage} alt="" className="object-cover h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
