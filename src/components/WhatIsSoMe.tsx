import React, { useState } from "react";
import Modal from "./Modal";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

// on button click open modal
const WhatIsSoMe = () => {
  const [open, setOpen] = useState(false);

  const [activeBullet, setActiveBullet] = useState(null);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        activeBullet={activeBullet}
      />

      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row px-10 py-20 items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <header>
              <h1 className="font-source-sans title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
                What is 'So ME' mobile therapy?
              </h1>
            </header>

            <main>
              <p className="font-source-sans mb-8 leading-relaxed">
                Good question! Social ME helps our clients experience therapy
                that's 'So ME' by offering interventions that are personalized,
                empowering, and designed to support your individual needs. This
                transformative approach fosters personal growth and authentic
                connections so that you can rediscover what it means to feel 'So
                ME' again.
              </p>

              <h2 className="font-banschrift title-font sm:text-2xl text-3xl mb-4 font-medium text-custom-blue">
                'So ME' care includes...
              </h2>

              <div className="font-source-sans mb-8 leading-relaxed">
                <button
                  className="transition-all ease-in-out duration-300 hover:scale-105 hover:bg-gray-200 p-4 m-2 rounded-lg shadow-md border border-gray-300 hover:shadow-xl w-full md:max-w-xl cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setActiveBullet(1);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0EC7E0"
                        className="w-6 h-6 mr-3 flex-shrink-0 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="flex-1 text-left">
                        CBT-ERP done with you in mind so you can get back to
                        living life your way
                      </div>
                    </div>
                    <PlusCircleIcon className="h-5 w-5" />
                  </div>
                </button>

                <button
                  className="transition-all ease-in-out duration-300 hover:scale-105 hover:bg-gray-200 p-4 m-2 rounded-lg shadow-md border border-gray-300 hover:shadow-xl w-full md:max-w-xl cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setActiveBullet(2);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0EC7E0"
                        className="w-6 h-6 mr-3 flex-shrink-0 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="flex-1 text-left">
                        DBT skills made simple so life can feel more manageable
                      </div>
                    </div>
                    <PlusCircleIcon className="h-5 w-5" />
                  </div>
                </button>
                <button
                  className="transition-all ease-in-out duration-300 hover:scale-105 hover:bg-gray-200 p-4 m-2 rounded-lg shadow-md border border-gray-300 hover:shadow-xl w-full md:max-w-xl cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setActiveBullet(3);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0EC7E0"
                        className="w-6 h-6 mr-3 flex-shrink-0 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="flex-1 text-left">
                        Virtual reality, hands-on, and real-time exposures with
                        personalized coaching
                      </div>
                    </div>
                    <PlusCircleIcon className="h-5 w-5" />
                  </div>
                </button>
                <button
                  className="transition-all ease-in-out duration-300 hover:scale-105 hover:bg-gray-200 p-4 m-2 rounded-lg shadow-md border border-gray-300 hover:shadow-xl w-full md:max-w-xl cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setActiveBullet(4);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0EC7E0"
                        className="w-6 h-6 mr-3 flex-shrink-0 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="flex-1 text-left">
                        Live skills calls and personalized accountability
                        coaching to foster real change
                      </div>
                    </div>
                    <PlusCircleIcon className="h-5 w-5" />
                  </div>
                </button>

                <div className="flex pb-5">
                  <button className="transition-transform duration-500 hover:scale-105">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#0EC7E0"
                      className="w-6 h-6 mr-3 flex-shrink-0 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <div className=" text-left">...and more!</div>
                </div>
              </div>
            </main>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <img
              className="object-cover object-center rounded-xl"
              alt="An illustrative image describing 'So ME' therapy"
              src="./slot-canyon.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsSoMe;
