import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex h-screen "
      style={{ backgroundImage: `url('./road.jpg')` }}
    >
      <div className="container mx-auto px-5 flex md:flex-row flex-col items-center text-center text-white">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center text-center">
          {/* <img
            src="./social_me_icon_lg.png"
            className="h-36 w-auto my-5 rounded-xl"
            alt="Social ME Icon"
          /> */}

          <p className="font-roboto mb-8 text-6xl text-white font-thin">
            Mental Health Therapy Gone Mobile
          </p>
          <p className="font-roboto mb-5 lg:w-1/2 text-lg mx-5 text-white font-bold leading-relaxed">
            'So ME' (Social Me) Mobile Therapy uses renovated
            buses-turned-mobile-therapy-offices so that you can get quality
            mental health treatment wherever you need it.
          </p>

          <Link to="Contact" smooth={true} duration={500}>
            <button
              type="submit"
              className="flex mx-auto font-source-sans text-black font-thin bg-custom-blue border-0 py-2 px-8 focus:outline-none hover:bg-hover-blue rounded text-lg"
            >
              Begin Your Mobile Therapy Journey Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
