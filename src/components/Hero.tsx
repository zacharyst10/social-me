import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex items-center transform scale-x-[-1] "
      style={{ backgroundImage: `url('./road.jpg')` }}
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-white h-screen transform scale-x-[-1] ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <img
            src="./social_me_icon_lg.png"
            className="h-36 w-auto my-5 rounded-xl"
            alt="Social Me Icon"
          />
          <p className="font-source-sans mb-8 leading-relaxed font-extrabold">
            We Bring Therapy To Your Doorstep
          </p>
          <p className="font-source-sans mb-8 font-light lg:w-1/2 leading-relaxed">
            Social Me Mobile Therapy uses renovated
            buses-turned-mobile-therapy-offices so that you can get{" "}
            <span className="font-extrabold">
              quality mental health treatment wherever you need it.
            </span>
          </p>
          {/* <p className="font-source-sans mb-8 leading-relaxed">
            Our offices are housed in custom-built buses so that your therapist
            can truly meet you where you're at.
          </p> */}
          {/* <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Social Me Mobile Therapy Can Help
          </h1> */}

          <Link to="Contact" smooth={true} duration={500}>
            <button
              type="submit"
              className="flex mx-auto text-black bg-custom-blue border-0 py-2 px-8 focus:outline-none hover:bg-hover-blue rounded text-lg"
            >
              Begin Your Healing Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
