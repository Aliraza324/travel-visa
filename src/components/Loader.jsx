import { Plane } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D3463]">
      {/* Animated plane circling */}
      <div className="relative w-40 h-40 mb-6">
        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />

        {/* Dashed animated ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_6s_linear_infinite]" />

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-16 animate-pulse" />
        </div>

        {/* Orbiting plane */}
        <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Plane size={24} className="text-white fill-white rotate-90" />
          </div>
        </div>
      </div>

      {/* Trail dots */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-white/80 animate-[bounce_1s_ease-in-out_infinite]" />
        <span className="w-2 h-2 rounded-full bg-white/60 animate-[bounce_1s_ease-in-out_0.2s_infinite]" />
        <span className="w-2 h-2 rounded-full bg-white/40 animate-[bounce_1s_ease-in-out_0.4s_infinite]" />
      </div>

      {/* Text */}
      <p className="text-white/70 text-sm tracking-widest uppercase font-el-messiri">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
