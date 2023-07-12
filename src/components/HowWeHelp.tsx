import React from "react";

const HowWeHelp = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          How We Help
          <div className="rounded-lg h-64">
            <img
              alt="feature"
              className="m-auto mt-6 object-fit object-center h-full w-1/2 rounded-lg"
              src="./salt_flats.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row lg:mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:mb-8 lg:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center mt-5  justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M0.877197 7.49984C0.877197 3.84216 3.84234 0.877014 7.50003 0.877014C11.1577 0.877014 14.1229 3.84216 14.1229 7.49984C14.1229 11.1575 11.1577 14.1227 7.50003 14.1227C3.84234 14.1227 0.877197 11.1575 0.877197 7.49984ZM7.50003 1.82701C4.36702 1.82701 1.8272 4.36683 1.8272 7.49984C1.8272 10.6328 4.36702 13.1727 7.50003 13.1727C10.633 13.1727 13.1729 10.6328 13.1729 7.49984C13.1729 4.36683 10.633 1.82701 7.50003 1.82701ZM7.12457 9.00001C7.06994 9.12735 6.33165 11.9592 6.33165 11.9592C6.26018 12.226 5.98601 12.3843 5.71928 12.3128C5.45255 12.2413 5.29425 11.9672 5.36573 11.7004C5.36573 11.7004 6.24661 8.87268 6.24661 8.27007V6.80099L4.28763 6.27608C4.0209 6.20461 3.86261 5.93045 3.93408 5.66371C4.00555 5.39698 4.27972 5.23869 4.54645 5.31016C4.54645 5.31016 6.20042 5.87268 6.84579 5.87268H8.15505C8.80042 5.87268 10.4534 5.31042 10.4534 5.31042C10.7202 5.23895 10.9943 5.39724 11.0658 5.66397C11.1373 5.93071 10.979 6.20487 10.7122 6.27635L8.74661 6.80303V8.27007C8.74661 8.87268 9.62663 11.6971 9.62663 11.6971C9.6981 11.9639 9.5398 12.238 9.27307 12.3095C9.00634 12.381 8.73217 12.2227 8.6607 11.956C8.6607 11.956 7.91994 9.12735 7.86866 9.00001C7.81994 8.87268 7.65006 8.87268 7.65006 8.87268H7.34317C7.34317 8.87268 7.16994 8.87268 7.12457 9.00001ZM7.50043 5.12007C8.12175 5.12007 8.62543 4.61639 8.62543 3.99507C8.62543 3.37375 8.12175 2.87007 7.50043 2.87007C6.87911 2.87007 6.37543 3.37375 6.37543 3.99507C6.37543 4.61639 6.87911 5.12007 7.50043 5.12007Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  On-Demand Accessibility
                </h2>
                <p className="leading-relaxed text-base">
                  Our mobile therapy service erases the distance between you and
                  mental health support. Located within your community, our
                  therapy offices in custom-built buses ensure that professional
                  help is always accessible, right in your neighborhood.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center lg:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center mt-5  justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Personalized Therapy Sessions
                </h2>
                <p className="leading-relaxed text-base">
                  We believe that therapy should be as unique as you are. Our
                  expert therapists are equipped with a variety of tools and
                  approaches, from Cognitive Behavioral Therapy to mindfulness
                  practices, to tailor each session to your specific needs and
                  preferences.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3  text-center sm:pl-8 lg:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center mt-5 justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Comfortable Environment
                </h2>
                <p className="leading-relaxed text-base">
                  Traditional therapy often takes place in clinical settings
                  that can feel impersonal or intimidating. Our mobile offices
                  adapt to your surroundings, fostering a more comfortable and
                  familiar environment that can enhance the therapeutic process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
