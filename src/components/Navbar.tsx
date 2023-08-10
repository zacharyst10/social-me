import React, { useState, useEffect, useRef } from "react";
import { Link, ScrollLink } from "react-scroll";

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

  return (
    <nav
      ref={node}
      className="bg-white shadow-lg md:px-10 sm:px-0 sticky top-0 z-50 border-gray-200 dark:bg-gray-900"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center"
          to="Hero"
          smooth={true}
          duration={300}
        >
          <img
            className="h-16 w-auto lg:mx-5 sm:px-0 cursor-pointer"
            src="./social_me_circle.png"
            alt="Logo"
          />
        </Link>
        <div className="lg:hidden flex items-center">
          <img
            src="./phone.png"
            alt="phone icon"
            className="w-6 h-6 mr-1 justify-center"
          />
          <a
            className="font-source-sans text-custom-blue mx-1 "
            href="tel:+13853231880"
          >
            385–323–1880
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className={`${isMenuOpen ? "" : "hidden"} w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                to="WhatIsSoMe"
                smooth={true}
                duration={300}
                className="font-source-sans block py-2 pl-3 pr-4 text-gray-500 hover:bg-gray-100 lg:hover:bg-transparent cursor-pointer rounded lg:bg-transparent hover:text-custom-orange lg:p-0 dark:text-white lg:dark:text-blue-500"
                aria-current="page"
                onClick={handleToggle}
              >
                What is 'So ME'
              </Link>
            </li>
            <li>
              <Link
                href="/"
                to="WhatWeDo"
                smooth={true}
                duration={300}
                className="font-source-sans block py-2 pl-3 pr-4 text-gray-500 hover:bg-gray-100 lg:hover:bg-transparent cursor-pointer rounded lg:bg-transparent hover:text-custom-orange lg:p-0 dark:text-white lg:dark:text-blue-500"
                aria-current="page"
                onClick={handleToggle}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                href="/"
                to="WhoWeAre"
                smooth={true}
                duration={300}
                className="font-source-sans block py-2 pl-3 pr-4 text-gray-500 hover:bg-gray-100 lg:hover:bg-transparent cursor-pointer rounded lg:bg-transparent hover:text-custom-orange lg:p-0 dark:text-white lg:dark:text-blue-500"
                aria-current="page"
                onClick={handleToggle}
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/#Contact"
                to="Contact"
                smooth={true}
                duration={300}
                onClick={handleToggle}
                className="font-source-sans block py-2 pl-3 pr-4 text-gray-500 rounded cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-custom-orange lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li className="lg:flex hidden sm:py-2 sm:pl-3 lg:py-0 lg:pl-0">
              <p className="flex xl:ml-10">
                <img
                  src="./phone.png"
                  alt="phone icon"
                  className="w-6 h-6 mr-1 flex justify-center"
                />
                <a
                  className="font-source-sans text-custom-blue mx-1 "
                  href="tel:+13853231880"
                >
                  385-323-1880
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
