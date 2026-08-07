"use client";

import { useEffect, useState, useRef } from "react";
import { Film, Smile, Gift } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let observer: IntersectionObserver;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad
      const easeProgress = progress === 1 ? 1 : 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhoWeAre() {
  return (
    <section className="py-24 px-4 md:px-6 w-full bg-[#f4f4f5] flex flex-col items-center" style={{
      backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      {/* Top Tag */}
      <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
        Who We Are
      </div>
      
      {/* Headings */}
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-center text-black leading-[1.05] max-w-3xl mb-4 tracking-tight">
        We're a team of video editors <br className="hidden md:block" /> obsessed with storytelling
      </h2>
      <p className="text-[#71717a] text-[18px] text-center mb-12 max-w-2xl font-medium">
        Whether you're a content creator, coach, or brand—we've got your back.
      </p>
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px]">
        
        {/* Card 1 */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 h-[320px] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group transition-transform hover:-translate-y-1 duration-300">
          <div className="z-10">
            <div className="w-12 h-12 rounded-xl bg-[#ffdf3f] flex items-center justify-center mb-6">
              <Film className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
            <div className="relative inline-block mt-4">
              <h3 className="text-[4rem] font-bold text-black leading-none tracking-tight">
                <CountUp end={100} suffix="+" />
              </h3>
              {/* Yellow Scribble */}
              <svg className="absolute left-0 -bottom-3 w-[110%] h-[30px] text-[#ffdf3f] -z-10" viewBox="0 0 200 40" fill="none">
                <path d="M 10 20 C 50 -10, 150 -10, 190 20 C 150 40, 50 40, 10 20 C 30 10, 170 10, 190 25 C 150 35, 30 35, 10 20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="text-black font-semibold text-lg z-10 mt-auto">Videos delivered</p>
          
          {/* Black Arrow */}
          <svg className="absolute right-6 top-8 w-24 h-24 text-black" viewBox="0 0 100 100" fill="none">
            <path d="M85 35 C65 15, 35 25, 15 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            <path d="M15 45 L35 40 M15 45 L20 25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 h-[320px] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group transition-transform hover:-translate-y-1 duration-300">
          {/* Pink Ribbons */}
          <svg className="absolute inset-0 w-full h-full text-[#d41c5c] pointer-events-none" viewBox="0 0 300 320" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M0 60 C 100 30, 150 100, 320 70" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
            <polygon points="280,62 300,71 285,82" fill="currentColor" />
            <path d="M-20 200 C 80 260, 140 140, 60 230 C 20 280, 150 320, 320 260" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
          </svg>

          <div className="z-10">
            <div className="w-12 h-12 rounded-xl bg-[#d41c5c] flex items-center justify-center mb-6">
              <Smile className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div className="mt-4">
              <h3 className="text-[4rem] font-bold text-black leading-none tracking-tight">
                <CountUp end={60} suffix="+" />
              </h3>
            </div>
          </div>
          <p className="text-black font-semibold text-lg z-10 mt-auto">Creators who trusted</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 h-[320px] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group transition-transform hover:-translate-y-1 duration-300">
          {/* Cyan Blobs & Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 320" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M150 -50 C 300 0, 350 150, 300 200 C 200 150, 150 -50, 150 -50 Z" fill="#1ef0a0" opacity="0.9" />
            <path d="M-50 200 C 50 150, 200 250, 250 350 L -50 350 Z" fill="#1ef0a0" opacity="0.9" />
            
            <path d="M180 -10 C 150 80, 280 120, 320 100" stroke="black" strokeWidth="2.5" fill="none"/>
            <path d="M-20 220 C 100 180, 180 280, 120 320" stroke="black" strokeWidth="2.5" fill="none"/>
            <path d="M30 320 C 80 250, 200 250, 250 320" stroke="black" strokeWidth="2.5" fill="none"/>
          </svg>

          <div className="z-10">
            <div className="w-12 h-12 rounded-xl bg-[#1ef0a0] flex items-center justify-center mb-6">
              <Gift className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
            <div className="mt-4">
              <h3 className="text-[4rem] font-bold text-black leading-none tracking-tight">
                <CountUp end={3} suffix=" Days" />
              </h3>
            </div>
          </div>
          <p className="text-black font-semibold text-lg z-10 mt-auto">Average turnover</p>
        </div>

      </div>
    </section>
  );
}
