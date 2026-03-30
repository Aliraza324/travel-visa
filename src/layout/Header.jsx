import React, { useState, useEffect } from 'react'
import leftShadow from "../assets/images/left.png"
import rightShadow from "../assets/images/right.png"
import logo from "../assets/images/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Search, Menu, X, ChevronRight } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const menu = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "FAQ's", link: "/faq" },
        { name: "Contact Us", link: "/contact" }
    ]

    const isActive = (path) => location.pathname === path

    return (
        <div className='relative'>
            {/* top shadows */}
            <img src={leftShadow} alt="" className='absolute top-0 left-0' />
            <img src={rightShadow} alt="" className='absolute top-0 right-0' />

            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
                <div className="flex justify-between items-center bg-[#0D3463] rounded-full py-2.5 sm:py-3 px-3 sm:px-4 lg:px-6 shadow-lg">
                    {/* logo */}
                    <div className='h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0'>
                        <img src={logo} alt="Logo" className='object-cover w-full h-full rounded-full' />
                    </div>

                    {/* menu - desktop */}
                    <div className="hidden lg:flex justify-center items-center gap-8">
                        {menu.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.link}
                                className={`text-sm font-medium transition-colors relative py-1 ${
                                    isActive(item.link)
                                        ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded-full'
                                        : 'text-white/80 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* action - desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="border border-white/30 rounded-full p-2.5 cursor-pointer text-white flex items-center hover:bg-white/10 transition-colors">
                            <Search size={16} />
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-[#0a1628] font-semibold py-2 px-5 rounded-full flex items-center gap-2 cursor-pointer text-sm transition-colors">
                            Book Now
                            <span className="bg-blue-500 rounded-full p-1 text-white">
                                <ArrowUpRight size={14} />
                            </span>
                        </button>
                    </div>

                    {/* hamburger - mobile */}
                    <button
                        className="lg:hidden text-white cursor-pointer p-1"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="relative w-6 h-6">
                            <X
                                size={24}
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                                }`}
                            />
                            <Menu
                                size={24}
                                className={`absolute inset-0 transition-all duration-300 ${
                                    isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* mobile menu overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* mobile menu panel */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-[#0D3463] to-[#091d3d] z-50 shadow-2xl transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* mobile menu header */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                        <div className='h-10 w-10'>
                            <img src={logo} alt="Logo" className='object-cover w-full h-full rounded-full' />
                        </div>
                        <button
                            className="text-white cursor-pointer p-1 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* mobile nav links */}
                    <nav className="flex-1 overflow-y-auto px-4 py-6">
                        <div className="flex flex-col gap-1">
                            {menu.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.link}
                                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                                        isActive(item.link)
                                            ? 'bg-white/15 text-white'
                                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <ChevronRight size={16} className="opacity-40" />
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* mobile menu footer */}
                    <div className="px-6 py-6 border-t border-white/10 space-y-3">
                        <button className="w-full bg-white hover:bg-gray-100 text-[#0a1628] font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm transition-colors">
                            Book Now
                            <span className="bg-blue-500 rounded-full p-1 text-white">
                                <ArrowUpRight size={14} />
                            </span>
                        </button>
                        <button className="w-full border border-white/30 rounded-full py-3 px-5 cursor-pointer text-white flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors">
                            <Search size={16} />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header