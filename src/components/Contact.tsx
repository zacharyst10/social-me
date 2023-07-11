import { useState } from "react";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState(null);

  const handleContactMethodChange = (method: string) => {
    setContactMethod(method);
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Reaching out can be difficult, but we're here to help!
          </p>
          <p>How would you like to contact us?</p>
          <span className="isolate inline-flex rounded-md mx-auto mt-10 shadow-sm">
            <button
              type="button"
              onClick={() => handleContactMethodChange("email")}
              className={`relative text-xl inline-flex items-center rounded-l-md px-3 py-2  text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:text-custom-orange focus:z-10 ${
                contactMethod === "email"
                  ? "bg-gray-200 text-custom-orange"
                  : "bg-white"
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => handleContactMethodChange("call")}
              className={`relative -ml-px text-xl inline-flex items-center rounded-r-md px-3 py-2  text-gray-900 ring-1 ring-inset ring-gray-300 hover:text-custom-orange hover:bg-gray-200 focus:z-10 ${
                contactMethod === "call"
                  ? "bg-gray-200 text-custom-orange"
                  : "bg-white"
              }`}
            >
              Call
            </button>
          </span>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />
          {contactMethod === "email" && (
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-black bg-custom-blue border-0 py-2 px-8 focus:outline-none hover:bg-hover-blue rounded text-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          )}
          <div className="text-center mt-10">
            {contactMethod === "call" && (
              <>
                <p>Want to talk to a person? Give us a call!</p>
                <p>
                  Phone:
                  <a className="text-custom-blue mx-1" href="tel:+13853231880">
                    385–323–1880
                  </a>
                </p>
                <p>We're available during the following business hours:</p>
                <p> Monday - Friday: 8am - 5pm MST</p>
              </>
            )}
          </div>

          <p className="mt-10 text-black text-xs">
            * Please be aware that Social ME is NOT a crisis mobile unit. We
            value your mental health and well-being greatly. However, we are not
            equipped to handle mental health emergencies. If you or a loved one
            is experiencing a mental health crisis, we strongly advise you to
            call 911 or visit your nearest emergency room immediately. Our
            services should not be used as a substitute for emergency medical
            care.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
