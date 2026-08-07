"use client";

import TransitionLink from "@/components/TransitionLink";
import { Home, Briefcase, Grid, Mail, Send, Menu, X, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Services", icon: Briefcase, href: "/" },
  { name: "Work", icon: Grid, href: "/work" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    if (linkName === "Services") {
      e.preventDefault();
      if (pathname === "/") {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
        setTimeout(() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
    // Also close mobile menu if it's open
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="w-full bg-[#f4f4f5] flex items-center justify-between px-4 py-4 md:px-12 border-b border-gray-200/50 sticky top-0 z-50">
        <div className="flex items-center gap-1">
          <TransitionLink href="/">
            <Image src="/logo.jpg" alt="Do Originals Logo" width={160} height={50} className="object-contain h-8 md:h-10 w-auto mix-blend-multiply scale-[1.2] md:scale-[1.5] origin-left ml-2 md:ml-0" />
          </TransitionLink>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isHovered = hoveredLink === link.name;
              
              return (
                <TransitionLink
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === "Services") {
                      handleLinkClick(e, link.name);
                    }
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`
                    relative flex items-center justify-center
                    px-4 py-2 rounded-xl text-[15px] font-medium transition-all duration-300 ease-out
                    ${isHovered ? "bg-[#e4e4e7] text-black" : "text-[#52525b] hover:text-black"}
                  `}
                >
                  <div 
                    className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
                      isHovered ? "w-[18px] opacity-100 mr-1.5" : "w-0 opacity-0 mr-0"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px] stroke-[2px]" />
                  </div>
                  <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                </TransitionLink>
              );
            })}
          </div>

          <button 
            data-cal-namespace="15min"
            data-cal-link="dooriginals/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="hidden md:flex group relative bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full text-[15px] font-medium items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm overflow-hidden border border-transparent hover:border-[#d41c5c]"
          >
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] bg-[#d41c5c] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Book a Spot</span>
            <div className="relative z-10 bg-white group-hover:bg-white text-black group-hover:text-[#d41c5c] p-1.5 rounded-full transition-colors duration-300 w-[34px] h-[34px] flex items-center justify-center overflow-hidden">
               <Target className="w-4 h-4 absolute transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0" />
               <Send className="w-4 h-4 absolute transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 text-black z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#f4f4f5] z-40 transition-transform duration-500 ease-[0.22,1,0.36,1] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col`}
      >
        <div className="flex-1 flex flex-col justify-center px-6 gap-6 pt-20">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <TransitionLink
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.name)}
                className={`flex items-center gap-4 text-3xl font-bold text-black border-b border-gray-200/50 pb-4 transition-transform duration-500 delay-${idx * 100} ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                {link.name}
              </TransitionLink>
            );
          })}
          
          <button 
            data-cal-namespace="15min"
            data-cal-link="dooriginals/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`mt-8 group relative bg-black text-white pl-6 pr-2 py-2 rounded-full text-xl font-bold flex justify-center items-center gap-4 transition-all duration-500 delay-400 overflow-hidden shadow-lg ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-[#d41c5c] rounded-full scale-0 group-hover:scale-[15] group-active:scale-[15] transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 transition-colors duration-300">Book a Spot</span>
            <div className="relative z-10 bg-white text-black group-hover:text-[#d41c5c] group-active:text-[#d41c5c] p-2 rounded-full transition-colors duration-300 w-[44px] h-[44px] flex items-center justify-center overflow-hidden">
               <Target className="w-5 h-5 absolute transition-all duration-300 group-hover:-translate-x-8 group-active:-translate-x-8 group-hover:opacity-0 group-active:opacity-0" />
               <Send className="w-5 h-5 absolute transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-active:translate-x-0 group-hover:opacity-100 group-active:opacity-100" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
