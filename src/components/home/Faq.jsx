import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Plane } from "lucide-react";

const faqs = [
  {
    question: "Do You Offer Customized Tour Packages?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What Payment Methods Do You Accept?",
    answer: "We accept all major credit cards, bank transfers, and online payments.",
  },
  {
    question: "Are Flight Tickets Included In The Tour Price?",
    answer: "Flight tickets are optional and depend on the package you select.",
  },
  {
    question: "What Is Your Cancellation Policy?",
    answer: "You can cancel up to 48 hours before the trip for a full refund.",
  },
  {
    question: "How Do I Book A Tour?",
    answer: "You can book directly through our website or contact our support team.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#dfe7e6] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gray-600 uppercase border border-gray-300 px-3 py-1 rounded-full">
            <Plane size={16} />
            FAQ'S
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b3c] mt-4 font-el-messiri">
            Answers To Your Travel <br /> Questions
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="travel"
              className="w-full h-full object-cover min-h-[320px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur rounded-xl p-5 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Do You Have Any Question?
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
              </p>

              <button className="flex items-center gap-2 bg-white text-black text-sm px-4 py-2 rounded-full">
                Contact Us
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT FAQ ACCORDION */}
          <div className="flex flex-col gap-3">

            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition ${
                    isOpen ? "bg-[#123a63] text-white" : "bg-white"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
                  >
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;