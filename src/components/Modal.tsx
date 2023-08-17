import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ open, onClose, activeBullet }) {
  const renderContent = () => {
    if (activeBullet === 1) {
      return {
        title: "CBT-ERP",
        description:
          "CBT-ERP focuses on identifying patterns of thinking and behavior that are harmful or non-productive and replaces them with more accurate thoughts and functional behaviors. It's especially effective for those with obsessive-compulsive tendencies.",
      };
    } else if (activeBullet === 2) {
      return {
        title: "DBT",
        description:
          "Dialectical Behavior Therapy (DBT) emphasizes the psychosocial aspects of treatment. It's designed to help people change patterns of behavior that are not helpful, such as self-harm, suicidal ideation, and substance abuse.",
      };
    } else if (activeBullet === 3) {
      return {
        title: "Virtual Reality?",
        description:
          "Virtual Reality (VR) therapy uses immersive virtual environments to confront sources of distress and has proven to be exceptionally effective for phobias and trauma therapy.",
      };
    } else if (activeBullet === 4) {
      return {
        title: "Personalized Accountability Coaching",
        description:
          "This form of coaching prioritizes personal responsibility and proactive behavior, empowering individuals to take charge of their lives and achieve their desired outcomes.",
      };
    } else {
      return {
        title: "Default title",
        description: "Default description...",
      };
    }
  };

  const content = renderContent();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-60" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-55 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <img
                      src="./social_me_circle.png"
                      alt="Logo"
                      className="h-12 w-auto text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {content.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-custom-blue px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-hover-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
