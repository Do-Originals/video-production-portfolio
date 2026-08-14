import { Aperture, Film, Target, Video, MousePointer2, Send, PlayCircle } from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

const avatars = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=13",
  "https://i.pravatar.cc/100?img=14",
  "https://i.pravatar.cc/100?img=15",
];

export default function Hero() {
  return (
    <section className="px-4 py-6 md:px-6 w-full max-w-[1440px] mx-auto">
      <div className="bg-black w-full rounded-[2.5rem] py-24 md:py-32 flex flex-col items-center justify-center relative overflow-hidden px-4">
        
        {/* Avatar Group & Social Proof */}
        <div className="flex items-center gap-4 mb-10 z-10">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Creator"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
                style={{ zIndex: 5 - i }}
              />
            ))}
          </div>
          <span className="text-[#a1a1aa] text-[15px] font-medium tracking-wide">
            Trusted by 100+ Creators
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-[5rem] font-bold tracking-tight text-white leading-none text-center z-10 relative">
          <div className="flex items-center justify-center flex-wrap gap-y-2 md:gap-y-1">
            Scroll-Stopping
            <span className="inline-flex items-center justify-center bg-gradient-to-b from-[#f9f9f9] to-[#dcdcdc] text-black w-[1.1em] h-[1.1em] rounded-[1.2rem] mx-2 shadow-[0_8px_20px_rgba(255,255,255,0.15)] md:mx-3">
              <Aperture className="w-[60%] h-[60%]" strokeWidth={2.5} />
            </span>
          </div>
          <div className="flex items-center justify-center flex-wrap mt-2 md:mt-1 gap-y-2">
            Edits
            <span className="inline-flex items-center justify-center bg-gradient-to-b from-[#fb3a7e] to-[#d41c5c] text-white w-[1.1em] h-[1.1em] rounded-[1.2rem] mx-2 shadow-[0_8px_20px_rgba(251,58,126,0.3)] md:mx-3">
              <Film className="w-[60%] h-[60%]" strokeWidth={2.5} />
            </span>
            Start Here.
          </div>
        </h1>

        {/* Subheading */}
        <p className="text-[#a1a1aa] text-lg md:text-[20px] mt-6 text-center font-medium z-10 max-w-xl">
          Video editing for YouTubers, agencies & content creators.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 z-10">
          <button 
            data-cal-namespace="15min"
            data-cal-link="dooriginals/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="group relative bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold text-[17px] flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg overflow-hidden border border-transparent hover:border-[#d41c5c]"
          >
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#d41c5c] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Let's Roll</span>
            <div className="relative z-10 bg-black group-hover:bg-white text-white group-hover:text-[#d41c5c] p-2.5 rounded-[1rem] transition-colors duration-300 w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
               <Target className="w-5 h-5 absolute transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0" />
               <Send className="w-5 h-5 absolute transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </button>
          
          <TransitionLink href="/work" className="group relative bg-transparent border border-[#3f3f46] text-white px-7 py-3.5 rounded-full font-semibold text-[17px] flex items-center gap-2.5 transition-all duration-300 active:scale-95 overflow-hidden">
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#f4f4f5] rounded-full scale-0 group-hover:scale-[20] transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Showcase</span>
            <div className="relative z-10 w-5 h-5 flex items-center justify-center text-white group-hover:text-black transition-colors duration-300 overflow-hidden">
              <Video className="w-5 h-5 absolute transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-0" />
              <PlayCircle className="w-5 h-5 absolute transition-all duration-300 translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </TransitionLink>
        </div>
        
      </div>
    </section>
  );
}
