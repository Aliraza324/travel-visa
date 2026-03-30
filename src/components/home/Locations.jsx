import React from 'react'
import { Plane, ArrowRight } from 'lucide-react'
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import three from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import five from "../../assets/images/five.png"

const locations = [
    { name: "United Kingdom", tours: 356, activities: 248, image: one, size: "large" },
    { name: "United State", tours: 356, activities: 248, image: two, size: "large" },
    { name: "Canada", tours: 356, activities: 248, image: three, size: "small" },
    { name: "Middle East", tours: 356, activities: 248, image: four, size: "small" },
    { name: "London", tours: 356, activities: 248, image: five, size: "small" },
]

const LocationCard = ({ name, tours, activities, image }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 flex items-center gap-6">
            <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0a1628] font-el-messiri">{name}</h4>
                <p className="text-xs text-gray-400 font-el-messiri">{tours} Tours,  {activities} Activities</p>
            </div>
            <div className="border border-gray-200 rounded-full p-1.5">
                <ArrowRight size={14} className="text-gray-500" />
            </div>
        </div>
    </div>
)

const Locations = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full py-2 px-5 shadow-sm">
                        <Plane size={16} className="text-[#0D3463]" />
                        <span className="text-sm font-semibold text-[#0D3463] tracking-wide font-el-messiri">LOCATIONS</span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0a1628] mb-10 sm:mb-14 font-el-messiri leading-tight">
                    Our Popular Destinations
                </h2>

                {/* Top Row - 2 large cards (60/40 split) */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 mb-5">
                    <div className="sm:col-span-3 h-[280px] sm:h-[320px] lg:h-[360px]">
                        <LocationCard {...locations[0]} />
                    </div>
                    <div className="sm:col-span-2 h-[280px] sm:h-[320px] lg:h-[360px]">
                        <LocationCard {...locations[1]} />
                    </div>
                </div>

                {/* Bottom Row - 3 small cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {locations.filter(l => l.size === "small").map((loc, idx) => (
                        <div key={idx} className="h-[240px] sm:h-[260px] lg:h-[300px]">
                            <LocationCard {...loc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Locations
