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
            How We Do It
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            Our highly-trained therapists tailor each session to your unique
            needs. We combine the power of Cognitive Behavioral Therapy (CBT)
            and Dialectical Behavior Therapy (DBT) to guide clients through a
            balanced healing journey. Our therapeutic approach fosters the
            development of helpful coping skills and encourages clients to
            challenge negative thought patterns. Your therapist will help you
            cultivate mindfulness and emotional regulation so that you can get
            back to living a life you love.
          </p>

          <h1 className="font-banschrift title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Experience Therapy That's 'SoMe'
          </h1>
          <p className="font-source-sans mb-8 leading-relaxed">
            Why do we abbreviate Social Me Mobile Therapy to 'SoMe'? Good
            question! Social Me helps our clients experience therapy that's
            'SoMe' by offering interventions that are personalized, empowering,
            and designed to support your individual needs. This transformative
            approach fosters personal growth and authentic connections so that
            you can rediscover what it means to feel 'so me' again.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowWeDoIt;
