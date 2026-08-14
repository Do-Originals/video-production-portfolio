import { MousePointer2 } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f5] px-4 md:px-6 pb-6 pt-12" style={{
      backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-[1440px] mx-auto w-full bg-black rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative pt-24 pb-8 px-8 md:px-24 flex flex-col min-h-[650px] shadow-2xl">
        
        {/* Content (Z-10 so it's above the glow) */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between w-full">
          {/* Left Column */}
          <div className="flex flex-col max-w-sm mb-16 md:mb-0 mt-2">
            <div className="flex items-baseline gap-1">
              <Image src="/logo.jpg" alt="Do Originals Logo" width={180} height={60} className="object-contain h-14 w-auto rounded-xl" />
            </div>
            <p className="text-[#d4d4d8] font-medium text-[15px] leading-relaxed mt-4">
              Where raw footage finds its storyline.
            </p>
            <div className="mt-[80px]">
               <a href="mailto:dooriginals08@gmail.com" className="text-white font-bold text-[15px]">
                 dooriginals08@gmail.com
               </a>
            </div>
          </div>

          {/* Right Columns (Links) */}
          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-12 md:gap-24 pr-2">
            {/* Column 1 */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-[15px]">Menu</h3>
              <ul className="flex flex-col gap-4 text-[#d4d4d8] text-[15px] font-medium">
                <li><TransitionLink href="/" className="hover:text-white transition-colors">Home</TransitionLink></li>
                <li><TransitionLink href="/" className="hover:text-white transition-colors">Services</TransitionLink></li>
                <li><TransitionLink href="/work" className="hover:text-white transition-colors">Work</TransitionLink></li>
                <li><TransitionLink href="/contact" className="hover:text-white transition-colors">Contact</TransitionLink></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-[15px]">Company</h3>
              <ul className="flex flex-col gap-4 text-[#d4d4d8] text-[15px] font-medium">
                <li><TransitionLink href="#" className="hover:text-white transition-colors">Process</TransitionLink></li>
                <li><TransitionLink href="#" className="hover:text-white transition-colors">404</TransitionLink></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-[15px]">Socials</h3>
              <ul className="flex flex-col gap-4 text-[#d4d4d8] text-[15px] font-medium">
                <li><TransitionLink href="https://www.instagram.com/_dooriginals_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</TransitionLink></li>
                <li><TransitionLink href="https://www.youtube.com/@DoOriginals" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Youtube</TransitionLink></li>
              </ul>
            </div>
          </div>
        </div>



        {/* Bottom Section (Copyright) */}
        <div className="mt-auto relative z-20 w-full flex flex-col items-center justify-end pt-32 pb-4">
          <div className="bg-white text-black font-bold text-[14px] px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            Copyright 2026 to @DoOriginals
          </div>
        </div>

        {/* Exact Sunset Semicircle Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem]">
          <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[2200px] h-[1000px]"
               style={{
                 background: "radial-gradient(ellipse 50% 50% at 50% 100%, #fef08a 0%, #eab308 15%, #f97316 35%, #e11d48 60%, #831843 85%, transparent 100%)",
                 opacity: 1,
               }}>
          </div>
        </div>
      </div>
    </footer>
  );
}
