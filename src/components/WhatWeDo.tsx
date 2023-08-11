import react from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-1 md:order-1">
          <img
            className="object-cover object-center rounded-xl"
            alt="hero"
            src="./arches.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center order-2 md:order-2">
          <h1 className="font-banschrift title-font  sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
            What We Do
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            Social ME is a mobile therapy clinic designed to remove treatment
            roadblocks for both youth and adults who are struggling with anxiety
            & obsessive-compulsive disorders.
          </p>
          <p className="font-source-sans mb-8 leading-relaxed">
            We understand how difficult life can be when you're struggling with
            mental health issues. That's why we've created a mobile therapy
            clinic that brings the treatment to you. Our buses are equipped with
            everything you need to get the help you deserve, including a private
            office, virtual exposure technology, and trained professionals. We
            also offer telehealth services for those who prefer to meet with
            their therapist virtually.
          </p>
          <h1 className="font-banschrift title-font  sm:text-2xl text-3xl mb-7 font-medium text-custom-orange">
            We bring therapy to...
          </h1>

          <div className="font-source-sans mb-8 leading-relaxed">
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className=" text-left">
                Youth and adults who want access to innovative and dynamic
                therapy
              </div>
            </div>

            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className=" text-left">
                Students K-12 who need therapy integrated into the schoolday
              </div>
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className=" text-left">
                New or established parents who need additional support through
                all phases of perinatal care
              </div>
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className=" text-left">
                Communities that lack access to mental health professionals and
                in person therapeutic services
              </div>
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className=" text-left">YOU!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
