import React from "react";

const OtherFeatures = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          How We Help
          <div className="rounded-lg h-64">
            <img
              alt="feature"
              className="m-auto mt-6 object-fit object-center h-full w-1/2 rounded-lg"
              src="./salt_flats.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 rounded-sm"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  On-Demand Accessibility
                </h2>
                <p className="leading-relaxed text-base">
                  Our mobile therapy service erases the distance between you and
                  mental health support. Located within your community, our
                  therapy offices in custom-built buses ensure that professional
                  help is always accessible, right in your neighborhood.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:py-8">
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
                  Personalized Therapy Sessions
                </h2>
                <p className="leading-relaxed text-base">
                  We believe that therapy should be as unique as you are. Our
                  expert therapists are equipped with a variety of tools and
                  approaches, from Cognitive Behavioral Therapy to mindfulness
                  practices, to tailor each session to your specific needs and
                  preferences.
                </p>
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
                  Comfortable Environment
                </h2>
                <p className="leading-relaxed text-base">
                  Traditional therapy often takes place in clinical settings
                  that can feel impersonal or intimidating. Our mobile offices
                  adapt to your surroundings, fostering a more comfortable and
                  familiar environment that can enhance the therapeutic process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherFeatures;
