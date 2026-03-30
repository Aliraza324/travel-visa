import React from "react";

const galleries = [
  {
    id: 1,
    title: "Cruises",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=300&fit=crop",
    tall: false,
  },
  {
    id: 2,
    title: "Beach Tours",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop",
    tall: true,
  },
  {
    id: 3,
    title: "Food",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    tall: false,
  },
  {
    id: 4,
    title: "Hiking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=600&fit=crop",
    tall: true,
  },
  {
    id: 5,
    title: "Museum Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1618604440689-d5465097c6a0",
    tall: false,
  },
  {
    id: 6,
    title: "City Tours",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
    tall: false,
  },
];

const GalleryCard = ({ item }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-sm group ${
        item.tall ? "row-span-2" : ""
      }`}
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition duration-300"
      />

      {/* Overlay gradient (optional but premium look) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Title Badge */}
      <span className="absolute bottom-20 left-4 bg-[#0052B4]  font-el-messiri text-white text-sm font-semibold px-4 py-2 rounded-lg shadow">
        {item.title}
      </span>

      {/* Description Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-md">
        <p className="text-gray-600 text-xs leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const Galleries = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-3">
            Gallery
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a38] text-center  font-el-messiri">
            View Our Popular Galleries
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

          {galleries.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Galleries;