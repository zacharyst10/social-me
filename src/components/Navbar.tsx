import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-8 w-auto mr-4"
              src="./social_me_logo.png"
              alt="Logo"
            />
            <a
              className="text-gray-800 text-lg font-bold hover:text-gray-700"
              href="#"
            >
              SocialMe
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              What We Do
            </a>
            <a
              href="#features"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              How We Help
            </a>
            <a
              href="#pricing"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Who We Are
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
