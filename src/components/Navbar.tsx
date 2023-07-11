import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="hidden md:flex items-center">
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
              duration={300}
              className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden text-center pt-3 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="WhatWeDo"
            smooth={true}
            duration={300}
            className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            onClick={handleToggle}
          >
            What We Do
          </Link>
          <Link
            to="HowWeHelp"
            smooth={true}
            duration={300}
            className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            onClick={handleToggle}
          >
            How We Help
          </Link>
          <Link
            to="WhoWeAre"
            smooth={true}
            duration={300}
            className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            onClick={handleToggle}
          >
            Who We Are
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={300}
            className="text-gray-500 hover:text-custom-orange mx-3 cursor-pointer"
            onClick={handleToggle}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
