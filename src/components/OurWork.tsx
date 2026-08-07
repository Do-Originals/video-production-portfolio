import Image from "next/image";
import { Play } from "lucide-react";
import CustomVideoPlayer from "./CustomVideoPlayer";

export default function OurWork() {
  return (
    <section 
      className="w-full py-24 px-4 md:px-6 bg-[#fafafa] flex flex-col items-center relative overflow-hidden" 
      style={{ 
        backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Top Badge */}
      <div className="bg-white px-5 py-2 rounded-full text-[15px] font-semibold mb-8 shadow-sm border border-gray-100 flex items-center gap-2 text-black tracking-wide">
        <span className="w-2 h-2 rounded-full bg-[#d41c5c]"></span> Hall of Fame
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-center text-black leading-tight tracking-tight mb-5">
        Our Recent Edits in Action
      </h2>
      <p className="text-[#52525b] text-[18px] md:text-[20px] text-center mb-16 max-w-2xl font-medium">
        From tech reviews to gameplay breakdowns — here's a glimpse of how we turn raw footage.
      </p>

      {/* Grid Container */}
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-6 relative z-10">
        
        {/* Top Row - Large Item */}
        <div className="w-full bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-indigo-500 flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <div className="w-full aspect-video rounded-[1.5rem] overflow-hidden relative">
            <CustomVideoPlayer url="https://youtu.be/JmnwDv34H5w" />
          </div>
        </div>

        {/* Bottom Row - 2 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="w-full bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full aspect-video rounded-[1.5rem] overflow-hidden relative group cursor-pointer mb-5">
              <Image 
                src="/work/youtuber_studio.png" 
                alt="Master Framer Fast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            
            <div className="px-2 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative bg-gray-200">
                    <Image src="/work/youtuber_studio.png" alt="GeorgeTech" fill className="object-cover" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">GeorgeTech</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                  1.2M Views
                </div>
              </div>
              <h3 className="text-[19px] leading-tight font-semibold text-black mb-2">Master Framer Fast: Core Concepts in Motion</h3>
              <p className="text-gray-500 text-[14px]">From tech reviews to gameplay breakdowns.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-black rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full aspect-video rounded-[1.5rem] overflow-hidden relative group cursor-pointer mb-5">
              <Image 
                src="/work/creator_micro.png" 
                alt="Creator Micro 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            
            <div className="px-2 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative bg-gray-800">
                    <Image src="/work/creator_micro.png" alt="Smith Will" fill className="object-cover" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300">Smith Will</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                  4.2M Views
                </div>
              </div>
              <h3 className="text-[19px] leading-tight font-semibold text-white mb-2">Meet the Creator Micro 2, Small Size, Big Impact</h3>
              <p className="text-gray-400 text-[14px]">From tech reviews to gameplay breakdowns.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
