import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex items-center h-screen"
      style={{ backgroundImage: `url('./windingRoad.jpg')` }}
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-white ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
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
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
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

export default Hero;
