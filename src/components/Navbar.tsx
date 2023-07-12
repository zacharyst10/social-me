import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setIsMenuOpen(false));

  // rest of your code...
  return (
    <nav
      ref={node}
      className="bg-white shadow-lg px-10 sticky top-0 z-50 border-gray-200 dark:bg-gray-900"
    >
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          className="flex items-center"
          to="WhatWeDo"
          smooth={true}
          duration={300}
        >
          <img
            className="h-16 w-auto mx-5 cursor-pointer"
            src="./social_me_circle.png"
            alt="Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="WhatWeDo"
                smooth={true}
                duration={300}
                className="block py-2 pl-3 pr-4 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent   cursor-pointer rounded md:bg-transparent hover:text-custom-orange md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                onClick={handleToggle}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                to="HowWeHelp"
                smooth={true}
                duration={300}
                onClick={handleToggle}
                className="block py-2 pl-3 pr-4 text-gray-500 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                How We Help
              </Link>
            </li>
            <li>
              <Link
                to="WhoWeAre"
                smooth={true}
                duration={300}
                onClick={handleToggle}
                className="block py-2 pl-3 pr-4 text-gray-500 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={300}
                onClick={handleToggle}
                className="block py-2 pl-3 pr-4 text-gray-500 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-orange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
