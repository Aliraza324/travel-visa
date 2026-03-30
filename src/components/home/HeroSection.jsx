import React from 'react'
import heroRight from '../../assets/images/heroRight.png'
import { Globe,  Play,  ArrowUpRight } from 'lucide-react'
import icon from '../../assets/images/icon.png'
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full py-2 px-5 shadow-sm">
                            <span className="text-sm font-medium text-[#0052B4] font-el-messiri">Explore the world!</span>
                            <span className=" ">
                               <img src={icon} alt="Icon" />
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-[#0a1628] font-el-messiri">
                            Your Gateway to<br />
                            Global Education &<br />
                            Visa Success
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-base sm:text-lg  max-w-md font-el-messiri">
                            We help students and travelers achieve their dreams of studying, visiting, and settling abroad with trusted visa and education consultancy services.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#0D3463] hover:bg-[#0a2a52] text-white font-semibold py-3.5 px-7 rounded-full flex items-center gap-2 cursor-pointer text-sm transition-colors font-el-messiri">
                                Book Free Consultation
                            </button>
                            <button className="flex items-center gap-2 text-[#0a1628] font-semibold cursor-pointer text-sm font-el-messiri group">
                                Learn More
                                <span className="border-2 border-[#0D3463] rounded-full p-1.5 text-[#0D3463] group-hover:bg-[#0D3463] group-hover:text-white transition-colors">
                                    <Play size={12} fill="currentColor" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Dashed circle arc */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[420px] h-[90%] sm:h-[420px]  pointer-events-none" />


                  

                        

                        {/* Hero Image */}
                        <div className="relative z-10 w-[280px] sm:w-[360px] lg:w-[711px]">
                            <img
                                src={heroRight}
                                alt="Traveler with backpack"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                      

                     
                    </div>
                </div>
            </div>

            {/* Request A Free Quote Bar - overlapping bottom */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16">
                <div className="w-full lg:w-[70%] bg-[#f4f7fb] rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0a1628] mb-5 font-el-messiri">Request A Free Quote</h3>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <input
                            type="text"
                            placeholder="Your  Name"
                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors font-el-messiri"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors font-el-messiri"
                        />
                        <input
                            type="text"
                            placeholder="Date"
                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors font-el-messiri"
                        />
                        <div>
                            <button className="bg-[#0D3463] hover:bg-[#0a2a52] text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 cursor-pointer text-sm transition-colors font-el-messiri whitespace-nowrap w-full sm:w-auto">
                                Submit
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
