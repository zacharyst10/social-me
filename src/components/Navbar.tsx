import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="WhatWeDo"
              smooth={true}
              duration={300}
              className="text-gray-800 text-lg font-bold hover:text-gray-700 cursor-pointer"
            >
              <img
                className="h-16 w-auto mx-5"
                src="./social_me_circle.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="WhatWeDo"
              smooth={true}
              duration={300}
              className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            >
              What We Do
            </Link>
            <Link
              to="HowWeHelp"
              smooth={true}
              duration={300}
              className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            >
              How We Help
            </Link>
            <Link
              to="WhoWeAre"
              smooth={true}
              duration={300}
              className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            >
              Who We Are
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
