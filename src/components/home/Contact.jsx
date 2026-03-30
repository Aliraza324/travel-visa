import React from "react";
import { Phone, Mail, Play, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="bg"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D3463]/100 opacity-70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          
          <button className="border border-white/40 px-4 py-2 rounded-full text-sm">
            OUR CONTACT
          </button>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-el-messiri">
            Plan Your Next <br /> Unforgettable Adventure
          </h1>

          {/* Contact Info */}
          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <div className="bg-[#003839] p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-lg">If You Will Need Any Help?</p>
                <p className="text-sm text-gray-300">(+55) 123 456 7859</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#003839] p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-lg">Email Address</p>
                <p className="text-sm text-gray-300">solar@gmail.com</p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#003839] px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Contact Now
            </button>

            <button className="flex items-center gap-2 hover:opacity-80">
              <Play size={18} /> Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/20">
          
          <h2 className="text-2xl font-semibold mb-6">
            Send Us A Message
          </h2>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none placeholder:text-gray-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none placeholder:text-gray-300"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full mt-4 bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none placeholder:text-gray-300"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full mt-4 bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none placeholder:text-gray-300"
          />

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full w-full md:w-auto hover:bg-gray-200 transition flex items-center justify-center gap-2">
            Send Message <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;