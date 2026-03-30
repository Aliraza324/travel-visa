import React from "react";
import choose from "../../assets/images/choose.png";
import { Plane } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Experienced Consultants",
    desc: "We offer cost-effective and flexible service packages designed to suit different budgets and needs",
  },
  {
    num: "02",
    title: "Affordable & Flexible Packages",
    desc: "Our dedicated support team is available around the clock to assist you with queries and updates",
  },
  {
    num: "03",
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available around the clock to assist you with queries and updates",
  },
  {
    num: "04",
    title: "High Visa Success Rate",
    desc: "We follow proven processes and careful documentation to maximize visa approval chances",
  },
];

const Choose = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* ── LEFT: Image collage ── */}
        <div className="relative w-full lg:w-[45%] flex-shrink-0 select-none">
          {/* Top-left large image */}
          <div className="rounded-2xl  h-[570px] ">
            <img
              src={choose}
              alt="Dubai skyline"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="w-full lg:w-[55%]">
          {/* Label */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#0D3463] uppercase mb-4">
            <Plane size={16} />
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000]  font-el-messiri leading-tight mb-4">
            Why Your Journey Is <br className="hidden sm:block" />Safe With Us
          </h2>

          {/* Sub-text */}
          <p className="text-gray-500 text-sm mb-8 max-w-lg">
            With deep knowledge of international education systems and visa processes,
            we help you make informed decisions and avoid common mistakes.
          </p>

          {/* Reasons list */}
          <div className="space-y-6">
            {reasons.map((item) => (
              <div key={item.num} className="flex gap-5 items-start">
                {/* Number */}
                <span className="text-3xl font-extrabold text-[#0D3463]  font-el-messiri leading-none w-10 flex-shrink-0">
                  {item.num}
                </span>
                {/* Text */}
                <div>
                  <h4 className="text-base font-bold text-[#0D3463] mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Choose;