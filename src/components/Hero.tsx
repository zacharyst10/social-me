import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('./road-compressed.jpg')` }}
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-white ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <img
            src="./social_me_icon_lg.png"
            className="h-36 w-auto my-5 rounded-xl"
            alt="Social Me Icon"
          />
          <h1 className="font-banschrift font-extrabold title-font sm:text-4xl text-3xl mb-4 text-white">
            We Bring Therapy To Your Doorstep
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            Social Me Mobile Therapy uses renovated
            buses-turned-mobile-therapy-offices so that you can get{" "}
            <span className="font-extrabold">
              quality mental health treatment wherever you need it.
            </span>
          </p>
          <p className="font-source-sans mb-8 leading-relaxed">
            Our offices are housed in custom-built buses so that your therapist
            can truly meet you where you're at.
          </p>
          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Social Me Mobile Therapy Can Help
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            - New moms who need to stay close to home <br /> - Individuals who
            struggle to leave the house due to their severe anxiety or
            obsessive-compulsive spectrum disorder <br /> - Families with young
            children <br /> - Members of rural communities <br /> -...and more!
          </p>
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
