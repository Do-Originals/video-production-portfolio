import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 md:px-6 my-24 relative z-20">
      <div className="bg-[#111111] w-full rounded-[2.5rem] py-20 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-[#222]">
        
        {/* Background glow & stars */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#d41c5c]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        {/* Little stars/dots effect */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full blur-[1px]"></div>
          <div className="absolute top-[40%] left-[20%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-70"></div>
          <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-white rounded-full blur-[1px]"></div>
          <div className="absolute top-[60%] right-[8%] w-2 h-2 bg-white rounded-full blur-[2px] opacity-50"></div>
          <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white tracking-tight leading-tight mb-5">
            Ready to Level Up?
          </h2>
          <p className="text-[#a1a1aa] text-[17px] md:text-[19px] max-w-2xl font-medium mb-10 leading-relaxed">
            Whether it's a one-off edit or a full channel transformation, we're ready when you are. Let's talk ideas.
          </p>

          <button className="group relative bg-white text-black pl-8 pr-3 py-3 rounded-full font-bold text-[17px] flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
            <span>Book a Call</span>
            <div className="bg-[#d41c5c] text-white p-2.5 rounded-full flex items-center justify-center group-hover:bg-[#fb3a7e] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Floating Tags (Desktop & Tablet) */}
        <div className="absolute bottom-[-10px] w-full left-0 right-0 h-32 pointer-events-none z-20 hidden md:block">
          
          {/* Left Side */}
          <div className="absolute bottom-10 left-[5%] transform -rotate-[15deg] bg-[#1a1a1a] border border-[#333] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg">
            From meh to wow!
          </div>
          <div className="absolute bottom-2 left-[20%] transform rotate-[2deg] bg-[#d41c5c] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg">
            No Editor? No Problem
          </div>
          
          {/* Right Side */}
          <div className="absolute bottom-16 right-[22%] transform -rotate-[12deg] bg-[#1a1a1a] border border-[#333] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg">
            Watch Time Wins
          </div>
          <div className="absolute bottom-4 right-[8%] transform -rotate-[5deg] bg-[#d41c5c] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg">
            Conversion Boost
          </div>
          <div className="absolute top-0 right-[2%] transform rotate-[10deg] bg-[#1a1a1a] border border-[#333] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg">
            Low Views? Fixed
          </div>
          
        </div>
        
        {/* Floating Tags (Mobile) */}
        <div className="absolute -bottom-4 w-full left-0 right-0 flex justify-center gap-4 pointer-events-none z-20 md:hidden opacity-50 blur-[1px]">
          <div className="transform -rotate-[5deg] bg-[#d41c5c] text-white px-4 py-2 rounded-xl text-[12px] font-bold">
            No Editor? No Problem
          </div>
          <div className="transform rotate-[5deg] bg-[#1a1a1a] border border-[#333] text-white px-4 py-2 rounded-xl text-[12px] font-bold">
            Watch Time Wins
          </div>
        </div>

      </div>
    </section>
  );
}
