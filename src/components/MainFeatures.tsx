import React from "react";

const MainFeatures = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto text-center title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
          Who We Are
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Experience and Innovation
                </h2>
                <p className="leading-relaxed text-base">
                  As an Executive Director, my focus is always on you, the
                  client. I've worked tirelessly to expand and refine our
                  services, ensuring we provide the highest quality of care
                  while continuously developing new ways to meet your mental
                  health needs.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:py-8">
              <div className="rounded-lg h-64 mt-5 overflow-hidden">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-full"
                  src="./meadow.jpg"
                />
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Leadership and Results
                </h2>
                <p className="leading-relaxed text-base">
                  My dedication to achieving real, impactful results means we
                  constantly evolve our services. Through comprehensive staff
                  training and thoughtful program development, we are better
                  equipped to facilitate meaningful, positive change in the
                  lives of those we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
