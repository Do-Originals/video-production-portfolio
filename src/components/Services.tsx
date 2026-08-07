"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Type, Clock, Target, MousePointer2, Zap, FastForward, DollarSign, CheckCircle, Sparkles, Search, Star, Film } from "lucide-react";

export default function Services() {
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggled((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
       bg: "bg-[#fbcfe8]", 
       tags: "Reels, TikToks, Shorts",
       title: "Short-form Editing",
       desc: "Fast-paced, punchy edits that retain attention and match current trends.",
       illustration: (
         <div className="mt-8 relative h-[300px] w-full flex justify-center">
           <style>{`
             @keyframes triangle-revolve {
               0%, 20% { transform: translate(-140px, -40px); }
               33%, 53% { transform: translate(140px, -30px); }
               66%, 86% { transform: translate(80px, 90px); }
               100% { transform: translate(-140px, -40px); }
             }
             .animate-triangle-1 {
               animation: triangle-revolve 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
             }
             .animate-triangle-2 {
               animation: triangle-revolve 9s cubic-bezier(0.4, 0, 0.2, 1) infinite -3s;
             }
             .animate-triangle-3 {
               animation: triangle-revolve 9s cubic-bezier(0.4, 0, 0.2, 1) infinite -6s;
             }
           `}</style>
           
           <div className="absolute top-4 border-[7px] border-black rounded-[2.5rem] rounded-b-none bg-[#c4124c] h-[300px] w-[220px] flex flex-col items-center pt-8 overflow-hidden">
             {/* Yellow Circle */}
             <div className="w-[120px] h-[120px] rounded-full bg-[#fde047] z-10 relative"></div>
             {/* Cyan Triangle */}
             <div className="w-0 h-0 border-l-[70px] border-r-[70px] border-b-[110px] border-l-transparent border-r-transparent border-b-[#1ef0a0] absolute top-[110px] z-20 drop-shadow-sm"></div>
             {/* Yellow Rectangle */}
             <div className="w-[80px] h-[35px] rounded-xl bg-[#fde047] absolute bottom-8 z-10"></div>
           </div>
           
           {/* Tags Revolve Wrappers */}
           {/* Tag 1: Snappy Pacing */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-1">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <FastForward className="w-4 h-4" /> Snappy pacing
             </div>
           </div>

           {/* Tag 2: Viral Ready */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-2">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <TrendingUp className="w-4 h-4" /> Viral Ready
             </div>
           </div>
           
           {/* Tag 3: Subtitled */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-3">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <Type className="w-4 h-4" /> Subtitled
             </div>
           </div>
         </div>
       )
    },
    {
       bg: "bg-[#bae6fd]", 
       tags: "YouTube, Podcasts",
       title: "Long-form Editing",
       desc: "Engaging storytelling that keeps viewers hooked from start to finish.",
       illustration: (
         <div className="mt-8 relative h-[300px] w-full flex justify-center">
           <div className="absolute top-4 border-[7px] border-black rounded-[2.5rem] rounded-b-none bg-[#0284c7] h-[300px] w-[280px] flex flex-col items-center">
             <div className="h-10 w-full border-b-[7px] border-black flex items-center px-4 gap-2 bg-[#f8fafc] rounded-t-[2rem]">
               <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444]"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-[#facc15]"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e]"></div>
             </div>
             <div className="flex-1 w-full flex items-center justify-center relative">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-2 shadow-lg z-10">
                  <div className="w-0 h-0 border-l-[25px] border-t-[16px] border-b-[16px] border-l-black border-t-transparent border-b-transparent"></div>
                </div>
                <div className="absolute bottom-8 left-6 right-6 flex gap-2">
                  <div className="h-4 bg-[#60a5fa] rounded-full w-1/3 border border-black/10"></div>
                  <div className="h-4 bg-white rounded-full w-1/4"></div>
                  <div className="h-4 bg-[#60a5fa] rounded-full w-1/3 border border-black/10"></div>
                </div>
             </div>
           </div>
           
           {/* Tags Revolve Wrappers */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-1">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <DollarSign className="w-4 h-4" /> High Retention
             </div>
           </div>

           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-2">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <MousePointer2 className="w-4 h-4" /> Click-Magnet
             </div>
           </div>
           
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-3">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <TrendingUp className="w-4 h-4" /> Viral Ready
             </div>
           </div>
         </div>
       )
    },
    {
       bg: "bg-[#bbf7d0]", 
       tags: "UGC, Promo Ads",
       title: "Commercials & Ads",
       desc: "High-converting video ads designed to drive sales and scale your brand.",
       illustration: (
         <div className="mt-8 relative h-[300px] w-full flex justify-center">
           <div className="absolute top-4 border-[7px] border-black rounded-[2.5rem] rounded-b-none bg-[#15803d] h-[300px] w-[240px] flex flex-col items-center justify-center relative">
             <Target className="w-28 h-28 text-white mb-10" strokeWidth={2.5} />
             <MousePointer2 className="w-14 h-14 text-black fill-[#facc15] absolute top-1/2 left-1/2 -mt-2 ml-4 -rotate-12 z-20 drop-shadow-lg" />
           </div>
           
           {/* Tags Revolve Wrappers */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-1">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <CheckCircle className="w-4 h-4" /> Social Optimized
             </div>
           </div>

           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-2">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <MousePointer2 className="w-4 h-4" /> Multiplatform
             </div>
           </div>
           
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-3">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <FastForward className="w-4 h-4" /> Fast Turnaround
             </div>
           </div>
         </div>
       )
    },
    {
       bg: "bg-[#e9d5ff]", 
       tags: "Documentary, AI Edits",
       title: "Documentaries & AI",
       desc: "In-depth storytelling combined with the best AI tools to elevate your content.",
       illustration: (
         <div className="mt-8 relative h-[300px] w-full flex justify-center">
           <div className="absolute top-4 border-[7px] border-black rounded-[2.5rem] rounded-b-none bg-[#9333ea] h-[300px] w-[240px] flex flex-col items-center justify-center relative">
             <Film className="w-24 h-24 text-white mb-10" strokeWidth={2.5} />
             <Sparkles className="w-12 h-12 text-[#facc15] fill-[#facc15] absolute top-1/2 left-1/2 -mt-2 ml-4 rotate-12 z-20 drop-shadow-lg" />
           </div>
           
           {/* Tags Revolve Wrappers */}
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-1">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <Search className="w-4 h-4" /> In-depth
             </div>
           </div>

           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-2">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <Sparkles className="w-4 h-4" /> AI Edits
             </div>
           </div>
           
           <div className="absolute top-[140px] left-1/2 w-0 h-0 z-30 animate-triangle-3">
             <div className="absolute -translate-x-1/2 -translate-y-1/2 w-max bg-white px-3.5 py-2 rounded-xl font-bold text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 text-black">
               <Star className="w-4 h-4" /> Best Quality
             </div>
           </div>
         </div>
       )
    }
  ];

  return (
    <section id="services" className="w-full bg-[#f4f4f5] border-t border-gray-200/50 py-24" style={{
      backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 px-6 lg:px-10">
        
        {/* Left Side (Sticky Info) */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start lg:sticky top-32 h-fit z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-sm">
              Services
            </span>
            <div 
              className={`w-[54px] h-[30px] rounded-full border-[2px] border-black flex items-center px-[3px] shadow-sm transition-colors duration-500 ${isToggled ? 'bg-white' : 'bg-[#f4f4f5]'}`}
            >
              <div className={`w-[20px] h-[20px] rounded-full border-[2px] border-black transition-all duration-500 ${isToggled ? 'translate-x-[24px] bg-[#0284c7]' : 'translate-x-0 bg-[#ffd700]'}`}></div>
            </div>
          </div>
          
          <h2 className="text-[3.2rem] md:text-[3.5rem] leading-[1.05] font-bold text-black tracking-tight mb-5 max-w-md">
            What We Cook in the Edit Suite
          </h2>
          <p className="text-[#52525b] text-[18px] md:text-[20px] font-medium max-w-sm">
            Whether you're a content creator, coach, or brand—we've got your back.
          </p>
        </div>

        {/* Right Side (Scrolling Cards) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start w-full gap-16 lg:gap-32 lg:pb-32">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className={`${card.bg} rounded-[2.5rem] p-6 sm:p-8 pb-0 w-full sm:w-[360px] md:w-[500px] max-w-full h-[520px] shrink-0 flex flex-col relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 lg:sticky transition-transform duration-300 ease-out`}
              style={{ 
                top: `calc(8rem + ${i * 30}px)`,
                zIndex: 20 + i 
              }}
            >
              <div className="bg-white text-black font-bold text-[13px] px-4 py-1.5 rounded-full w-fit mb-6 shadow-sm">
                {card.tags}
              </div>
              <h3 className="text-3xl font-bold text-black tracking-tight">{card.title}</h3>
              <p className="text-[#3f3f46] font-medium mt-3 text-[17px] leading-snug pr-4">
                {card.desc}
              </p>
              {card.illustration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
