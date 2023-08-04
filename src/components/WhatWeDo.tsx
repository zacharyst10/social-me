import react from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./arches.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <img
            src="./social_me_icon_lg.png"
            className="h-36 w-auto my-5 rounded-xl"
            alt="Social Me Icon"
          />
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
            Social Me Mobile Therapy Can Help...
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            - New moms who need to stay close to home <br /> - Individuals who
            struggle to leave the house due to their severe anxiety or
            obsessive-compulsive spectrum disorder <br /> - Families with young
            children <br /> - Members of rural communities <br /> - ... and
            more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
