import { Link} from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { PlaneIcon, PlaneTakeoff } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Study Abroad', path: '/services/study-abroad' },
    { name: 'Visa Services', path: '/services/visa' },
    { name: 'Travel & Tours', path: '/services/travel-tours' },
  ];

  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="max-w-[1320px] mx-auto px-5 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Logo & About */}
          <div>
            <img src={logo} alt="Millennium Minds" className="w-20 mb-5" />
            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Millennium Minds is a trusted education and visa consultancy helping students achieve global success.
            </p>
            <h4 className="text-lg font-bold mb-3">Follow Us :</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Main Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Main Pages</h3>
            <div className="flex items-center gap-1 mb-6">
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-8 h-[2px] bg-white"></span>
            </div>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.name} className="flex items-center gap-2">
                  <PlaneIcon size={14} />
                  <Link to={page.path} className="text-sm text-gray-300 hover:text-white transition">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <div className="flex items-center gap-1 mb-6">
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-8 h-[2px] bg-white"></span>
            </div>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center gap-2">
                  <PlaneIcon size={14} />
                  <Link to={service.path} className="text-sm text-gray-300 hover:text-white transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center gap-1 mb-6">
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-8 h-[2px] bg-white"></span>
            </div>
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-base">Contact Us</h5>
                  <p className="text-sm text-gray-300">+123 4566 7899</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-base">Mail Us</h5>
                  <p className="text-sm text-gray-300">example@Domain.com</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-base">Our Office Location</h5>
                  <p className="text-sm text-gray-300">16 Green Road Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/15">
        <div className="max-w-[1320px] mx-auto px-5 py-5 text-center">
          <p className="text-sm text-gray-300">
            TourDen &copy; Copyright {new Date().getFullYear()}. All rights reserved by ashikacademy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
