import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import CustomVideoCard from "./CustomVideoCard";

export default function OurWork() {
  return (
    <section 
      className="w-full py-28 px-4 md:px-6 bg-[#fafafa] flex flex-col items-center relative overflow-hidden" 
    >
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ 
        backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Subtle Glow Orb */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Top Badge */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full text-[14px] font-bold mb-8 shadow-sm border border-gray-200/80 flex items-center gap-2 text-gray-800 tracking-wide uppercase">
        <span className="w-2 h-2 rounded-full bg-[#d41c5c] animate-pulse"></span> Hall of Fame
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-4xl md:text-[4rem] font-extrabold text-center leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        Our Recent Edits in Action
      </h2>
      <p className="relative z-10 text-gray-500 text-[18px] md:text-[20px] text-center mb-12 max-w-2xl font-medium">
        From tech reviews to gameplay breakdowns — here's a glimpse of how we turn raw footage into cinematic gold.
      </p>

      {/* Grid Container */}
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Top Row - Large Item */}
        <div className="w-full bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-3 md:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-blue-500/20 flex flex-col hover:-translate-y-2 transition-transform duration-500 group">
          <div className="w-full aspect-[21/9] max-h-[600px] rounded-[2rem] overflow-hidden relative shadow-inner">
            <MuxPlayer
              playbackId="aMC4qDcz9KH6SnXSnjpzBIMW9aXul1sFEbzqBSJsbVI"
              className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
              accentColor="#d41c5c"
            />
          </div>
        </div>

        {/* Bottom Row - 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          <CustomVideoCard playbackId="UUk9yIu02QI00OxyMAVm301FrmRttphy017HzUeLwYoLdKk" theme="light" />
          <CustomVideoCard playbackId="fSwCLAE005kF84JzEk7eHegUSV35DcwdsYgoJIIIC017A" theme="dark" />
          <CustomVideoCard playbackId="gqFzffyJPXhHcYKUOJRnLK2xQItmN02DiXPx013zQsHOg" theme="light" />
        </div>
      </div>

      {/* See More Edits Button */}
      <div className="relative z-10 mt-16 flex justify-center w-full">
        <Link 
          href="/work" 
          className="group relative bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold text-[17px] flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg overflow-hidden border border-transparent hover:border-[#d41c5c]"
        >
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#d41c5c] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">See More Edits</span>
          <div className="relative z-10 bg-black group-hover:bg-white text-white group-hover:text-[#d41c5c] p-2.5 rounded-[1rem] transition-colors duration-300 w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
             <Play className="w-5 h-5 absolute transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0" />
             <ArrowRight className="w-5 h-5 absolute transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </Link>
      </div>
    </section>
  );
}
