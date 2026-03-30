import React from "react";
import { Quote } from "lucide-react";
import svg from "../../assets/images/SVG.png";
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="relative bg-[#dfe7e6] rounded-2xl px-6 py-10 text-center shadow-sm">
      
      {/* Quote Icon */}
      <div className="flex justify-center mb-4 text-[#0f3d3a]">
        <img src={svg} alt="Quote" />
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto ">
        {item.text}
      </p>

      {/* Avatar */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <img
          src={item.img}
          alt="user"
          className="w-12 h-12 rounded-full object-cover border-4 border-white shadow"
        />
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <section className="bg-[#f5f7f6] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gray-600 uppercase border border-gray-300 px-3 py-1 rounded-full">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b3c] mt-4 font-el-messiri">
            Reviews From Real Tour <br /> And Travel.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};