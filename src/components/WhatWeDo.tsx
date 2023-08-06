import react from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            We Bring Therapy To You
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            Social Me is a mobile therapy clinic designed to remove treatment
            roadblocks for both youth and adults who are struggling with anxiety
            disorders.
          </p>
          <p className="font-source-sans mb-8 leading-relaxed">
            Our offices are housed in custom-built buses so that your therapist
            can truly meet you where you're at.
          </p>
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Social Me Mobile Therapy Can Help
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              New moms who need to stay close to home
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Individuals who struggle to leave the house due to their severe
              anxiety or obsessive-compulsive spectrum disorder
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Families with young children
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Members of rural communities
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#F78100"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              and more!
            </div>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./arches.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
