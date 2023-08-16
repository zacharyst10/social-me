import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState("email");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactMethodChange = (method: string) => {
    setContactMethod(method);
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const saveSettings = async () => {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    };

    try {
      await saveSettings();
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="./social_me_circle.png"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="font-source-sans text-sm font-medium text-gray-900">
                  👋 Thanks for reaching out!
                </p>
                <p className="font-source-sans mt-1 text-sm text-gray-500">
                  Someone from the Social ME team will be in contact soon!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.remove(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-custom-blue hover:text-hover-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            >
              Close
            </button>
          </div>
        </div>
      ));
      return null; // Prevent the automatic toast from being created
    } catch (err) {
      setLoading(false);
      toast.error(`Could not send: ${err.message}`);
    }
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <div className="lg:w-4/6 mx-auto text-center title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
            Contact Us
          </div>
          <p className="font-source-sans lg:w-2/3 mx-auto leading-relaxed text-base">
            Reaching out can be difficult, but we're here to help!
          </p>
          <p className="font-source-sans">How would you like to contact us?</p>
          <span className="isolate inline-flex rounded-md mx-auto mt-10 shadow-sm">
            <button
              type="button"
              onClick={() => handleContactMethodChange("email")}
              className={`font-source-sans relative text-xl inline-flex items-center rounded-l-md px-3 py-2  text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:text-custom-orange focus:z-10 ${
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
              className={`font-source-sans relative -ml-px text-xl inline-flex items-center rounded-r-md px-3 py-2  text-gray-900 ring-1 ring-inset ring-gray-300 hover:text-custom-orange hover:bg-gray-200 focus:z-10 ${
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
          onSubmit={submit}
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
                    className="font-source-sans leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name} // controlled input
                    onChange={(e) => setName(e.target.value)} // update state on change
                    className="w-full bg-white rounded border border-gray-300 focus:border-custom-blue focus:ring-2 focus:ring-custom-blue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {responseMessage && <p>{responseMessage}</p>}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="font-source-sans leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email} // controlled input
                    onChange={(e) => setEmail(e.target.value)} // update state on change
                    className="w-full bg-white rounded border border-gray-300 focus:border-custom-blue focus:ring-2 focus:ring-custom-blue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {responseMessage && <p>{responseMessage}</p>}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="font-source-sans leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message} // controlled input
                    onChange={(e) => setMessage(e.target.value)} // update state on change
                    placeholder="Tell us how we can help!"
                    className="w-full bg-white rounded border border-gray-300 focus:border-custom-blue focus:ring-2 focus:ring-custom-blue h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                {responseMessage && <p>{responseMessage}</p>}
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex mx-auto text-black bg-custom-blue border-0 py-2 px-8 focus:outline-none hover:bg-hover-blue rounded text-lg"
                >
                  {loading ? <Loader /> : "Send Message"}
                </button>
              </div>
            </div>
          )}
          <div className="text-center mt-10">
            {contactMethod === "call" && (
              <>
                <p className="font-source-sans">
                  Want to talk to a person? Give us a call!
                </p>
                <p className="font-source-sans">
                  Phone:
                  <a className="text-custom-blue mx-1" href="tel:+13853231880">
                    385–323–1880
                  </a>
                </p>
                <p className="font-source-sans">
                  We're available during the following business hours:
                </p>
                <p className="font-source-sans">
                  {" "}
                  Monday - Friday: 8am - 5pm MST
                </p>
              </>
            )}
          </div>

          <p className="font-source-sans mt-10 text-black text-xs text-left">
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
