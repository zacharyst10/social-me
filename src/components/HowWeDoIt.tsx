import react from "react";

const HowWeDoIt = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./slot-canyon.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            What is 'So ME' therapy?
          </h1>

          <p className="font-source-sans mb-8 leading-relaxed">
            Good question! Social Me helps our clients experience therapy that's
            'So ME' by offering interventions that are personalized, empowering,
            and designed to support your individual needs. This transformative
            approach fosters personal growth and authentic connections so that
            you can rediscover what it means to feel 'So ME' again.
          </p>
          <h1 className="font-banschrift title-font sm:text-2xl text-3xl mb-4 font-medium text-custom-blue">
            Customized care that includes...
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0EC7E0"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CBT-ERP done with you in mind so you can get back to living life
              your way{" "}
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0EC7E0"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              DBT skills made simple so that life can be more manageable
            </div>

            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0EC7E0"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Dynamic, hands-on, real-time exposures with personalized coaching
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0EC7E0"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Live skills calls and accountability coaching packages available
              as needed{" "}
            </div>
            <div className="flex pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0EC7E0"
                className="w-6 h-6 mr-3 flex-shrink-0 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              ...and more!
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowWeDoIt;
