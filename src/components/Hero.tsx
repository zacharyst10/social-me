import React from "react";

const Hero = () => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            What We Do
          </h1>
          <p className="mb-8 leading-relaxed">
            We bring therapy to your doorstep. Our mobile therapy offices,
            housed in custom-built buses, cater to both youth and adults
            combating anxiety. Our offices adapt to your surroundings,
            eliminating the need for travel to distant clinics. Our
            well-equipped spaces and highly trained therapists tailor each
            session to your unique needs, from Cognitive Behavioral Therapy
            (CBT) to mindfulness practices. We're local, we're mobile, and we're
            dedicated to guiding you on your journey to a healthier mental
            state.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
