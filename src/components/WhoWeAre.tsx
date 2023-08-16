import react from "react";

const WhoIsWe = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-6/6 mx-auto text-center title-font sm:text-4xl text-3xl mb-2 font-extrabold text-gray-900">
          Who We Are
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img src="./MountainSunOrange.svg" alt="Plant Sun" />
              </div>
              <div className="flex-grow">
                <h2 className="font-banschrift text-gray-900 text-lg title-font font-bold mb-3">
                  Experience and Innovation
                </h2>
                <p className="font-source-sans leading-relaxed font-normal text-base">
                  As founder of Social ME, my focus is always on you, the
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
                  src="./woman-on-rock.jpg"
                />
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8 lg:py-3">
              <div className="w-20 h-20 mt-5 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img src="./MountainSunOrange.svg" alt="Plant Sun" />
              </div>
              <div className="flex-grow">
                <h2 className="font-banschrift text-gray-900 text-lg  title-font font-bold mb-3">
                  Leadership and Results
                </h2>
                <p className="font-source-sans leading-relaxed font-normal text-base">
                  Our dedication to achieving real, impactful results means we
                  constantly evolve our services. Through comprehensive staff
                  training and thoughtful program development, we are better
                  equipped to facilitate meaningful, positive change in the
                  lives of those we serve.
                </p>
              </div>
            </div>
          </div>
          <div className="text-2xl my-5 flex flex-col items-center ">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
              <img src="./MountainCloudBlue.svg" alt="Sun Flower" />
            </div>
            <div className="border-2 border-gray-500 rounded-2xl">
              <div className="p-10">
                <p className="pb-5">MISSION STATEMENT:</p>
                Social ME’s mission is to improve access to quality mental
                health services by helping individuals and communities overcome
                their unique barriers to care. We believe everyone deserves the
                opportunity to move from “surviving to thriving,” regardless of
                their location or circumstances.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoIsWe;
