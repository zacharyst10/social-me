import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ open, onClose, activeBullet }) {
  const renderContent = () => {
    if (activeBullet === 1) {
      return {
        title: "CBT-ERP",
        description:
          "CBT focuses on identifying patterns of thinking and behavior that are harmful or non-productive and replaces them with more accurate thoughts and functional behaviors. It's especially effective for those with obsessive-compulsive tendencies. ERP is a form of CBT that focuses on confronting fears and triggers in a safe and controlled environment. ",
      };
    } else if (activeBullet === 2) {
      return {
        title: "DBT",
        description:
          "Dialectical Behavior Therapy (DBT) emphasizes the psychosocial aspects of treatment. It's designed to help people change patterns of behavior that are not helpful, such as self-harm, suicidal ideation, and substance abuse.",
      };
    } else if (activeBullet === 3) {
      return {
        title: "Personalized Exposures",
        description:
          "Exposure therapy is most effective when tailored to your unique needs and fears. Our personalized approach uses hands-on, real-time exposures with dedicated coaching to help you confront and overcome sources of distress in a supportive environment.",
      };
    } else if (activeBullet === 4) {
      return {
        title: "Personalized Accountability Coaching",
        description:
          "This form of coaching prioritizes personal responsibility and proactive behavior, empowering individuals to take charge of their lives and achieve their desired outcomes.",
      };
    } else if (activeBullet === 5) {
      return {
        title: "Youth and adults wanting innovative therapy",
        description:
          "According to NAMI, over 42 million U.S. adults have an anxiety disorder. The IOCDF reports that approximately 1 in 40 adults—about 8.2 million people—have OCD. Among children and teens, at least 1 in 100 are affected by OCD.",
      };
    } else if (activeBullet === 6) {
      return {
        title: "Students K-12",
        description:
          "CDC reported that 7.1% of children aged 3-17 years (about 4.4 million) have diagnosed anxiety. Childhood OCD affects 1-3% of the U.S. population, per the International OCD Foundation.",
      };
    } else if (activeBullet === 7) {
      return {
        title: "PANDAS/PANS Treatment Support",
        description:
          "PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections) and PANS (Pediatric Acute-onset Neuropsychiatric Syndrome) can cause sudden onset of OCD, anxiety, and other neuropsychiatric symptoms in children. We provide therapeutic support to complement medical treatment protocols.",
      };
    } else if (activeBullet === 8) {
      return {
        title: "Communities lacking mental health access",
        description:
          " Approximately half of those with OCD do not receive treatment, often due to lack of understanding about the disorder or lack of access to specialists. Only 36.9% of those with an anxiety disorder are receiving treatment, as per the Anxiety and Depression Association of America.",
      };
    } else if (activeBullet === 9) {
      return {
        description:
          'Social ME\'s mission is to improve access to quality mental health services. We believe everyone deserves the opportunity to move from "Surviving to Thriving".',
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
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
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
                      className="text-base font-roboto font-semibold leading-6 text-gray-900"
                    >
                      {content.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm font-source-sans text-left text-gray-500">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex font-source-sans w-full justify-center rounded-md bg-custom-blue px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-hover-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue"
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
