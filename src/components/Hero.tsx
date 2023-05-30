import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./nature_3.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            What We Do
          </h1>
          <p className="mb-8 leading-relaxed">
            We go to where our community needs us most. We are a mobile therapy
            office designed to help youth and adults triumph over their anxiety.
            Our offices are located inside our custom built buses. What's even
            better is that our offices can expand into the environment in which
            you are located. That’s right no more hoping to get an appointment
            at a far-off clinic. We bring the therapy to you, to the comfort and
            familiarity of your own neighborhood, right at your doorstep. We
            understand that every person is unique, and their therapy should be
            too. That's why our state-of-the-art, mobile therapy offices are
            equipped with the latest therapeutic tools and technologies to
            personalize each session to your specific needs. Whether it's
            Cognitive Behavioral Therapy (CBT), mindfulness practices, or a
            simple supportive chat, our highly-trained and compassionate
            therapists are ready to guide you on your journey towards a
            healthier mental state.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
