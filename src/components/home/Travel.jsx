import React from "react";
import plane from "../../assets/images/plane.png";
import tour from "../../assets/images/tour.png";
import study from "../../assets/images/study.png";
import visa from "../../assets/images/visa.png";
import { ArrowRight, Building, Plane, PlaneTakeoff, Send } from "lucide-react";

const services = [
  {
    img: tour,
    alt: "Travel & Tours",
    icon: PlaneTakeoff,
    title: "Travel & Tours",
    desc: "Safe and affordable travel solutions.",
  },
  {
    img: study,
    alt: "Study Abroad",
    icon: Send,
    title: "Study Abroad",
    desc: "Helping students get admission in top international universities.",
  },
  {
    img: visa,
    alt: "Visa Services",
    icon: Building,
    title: "Visa Services",
    desc: "Professional visa support with expert guidance.",
  },
];

const Travel = () => {
  return (
    <section className="bg-[#e8f2f1] w-full py-12 px-4 font-sans relative">
      
      {/* Airplane doodle */}
      <div className="absolute right-0 top-0 hidden md:block">
        <img src={plane} alt="plane" />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center mb-8 relative max-w-7xl mx-auto">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#0F172A] uppercase border border-gray-300 rounded-full px-4 py-1 mb-4 bg-white/60">
          <Plane size={16} />
          Services
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a38] text-center leading-tight font-el-messiri">
          Our Travel Services
        </h2>

        <p className="text-gray-500 text-sm mt-2 text-center max-w-md">
          We provide end-to-end support for students, travelers, and families.
          <br className="hidden md:block" />
          Ut elit tellus, luctus nec
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon; // ✅ correct placement

          return (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                
                {/* Icon */}
                <div className="mb-3">
                  <Icon size={20} className="text-[#1a3a38]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a3a38] mb-2">
                  {service.title}
                </h3>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-auto gap-3">
                  <p className="text-gray-500 text-sm">
                    {service.desc}
                  </p>

                  <button className="bg-[#1a3a38] hover:bg-teal-700 transition-colors duration-200 text-white rounded-full w-10 h-10 flex items-center justify-center shadow shrink-0">
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Travel;