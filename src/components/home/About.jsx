import React from 'react'
import { Plane, Globe, ArrowUpRight, Quote, Target } from 'lucide-react'
import review from "../../assets/images/review.png"
const About = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full py-2 px-5 shadow-sm">
                        <Plane size={16} className="text-[#0D3463]" />
                        <span className="text-sm font-semibold text-[#0D3463] tracking-wide font-el-messiri">ABOUT US</span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0a1628] mb-12 sm:mb-16 font-el-messiri leading-tight">
                    Your Trusted Travel<br />Partner For You
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left - Image with testimonial */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden h-[280px] sm:h-[400px] lg:h-[520px]">
                            <img
                                src={review}
                                className="w-full h-full object-cover"
                            />
                        </div>

                       
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        {/* Vision & Mission Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Our Vision */}
                            <div className="bg-[#f0f4f8] rounded-2xl px-6 py-8 text-center">
                                <div className="flex justify-center mb-5">
                                    <span className="bg-[#0D3463] text-white font-semibold py-2.5 px-7 rounded-lg text-sm font-el-messiri">
                                        Our Vision
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed font-el-messiri">
                                    Our mission is to empower students and families by providing honest guidance, reliable visa services
                                </p>
                            </div>

                            {/* Our Mission */}
                            <div className="bg-[#f0f4f8] rounded-2xl px-6 py-8 text-center">
                                <div className="flex justify-center mb-5">
                                    <span className="bg-[#0D3463] text-white font-semibold py-2.5 px-7 rounded-lg text-sm font-el-messiri inline-flex items-center gap-2">
                                        <Target size={14} />
                                        Our Mission
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed font-el-messiri">
                                    Our vision is to become a globally trusted consultancy known for transforming lives through education
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                                <div className="bg-[#0D3463] rounded-full p-2.5 sm:p-3 text-white flex-shrink-0">
                                    <Globe size={18} className="sm:hidden" />
                                    <Globe size={20} className="hidden sm:block" />
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D3463] font-el-messiri">20+</p>
                                    <p className="text-xs sm:text-sm font-semibold text-[#0a1628] font-el-messiri">Travel Experience</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                                <div className="bg-[#0D3463] rounded-full p-2.5 sm:p-3 text-white flex-shrink-0">
                                    <Globe size={18} className="sm:hidden" />
                                    <Globe size={20} className="hidden sm:block" />
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D3463] font-el-messiri">50+</p>
                                    <p className="text-xs sm:text-sm font-semibold text-[#0a1628] font-el-messiri">Destinations Covered</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-el-messiri">
                            Millennium Minds is a trusted education and visa consultancy dedicated to helping students and travelers achieve their international goals. We provide professional guidance, transparent processes
                        </p>

                        {/* CTA Button */}
                        <button className="bg-[#0D3463] hover:bg-[#0a2a52] text-white font-semibold py-3 px-7 rounded-full flex items-center gap-2 cursor-pointer text-sm transition-colors font-el-messiri">
                            More About Us
                            <span className="bg-white/20 rounded-full p-1">
                                <ArrowUpRight size={14} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
