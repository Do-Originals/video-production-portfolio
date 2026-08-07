"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const gridRef = useRef<HTMLDivElement>(null);
  const [columns] = useState(10);

  // Handle enter animation when path changes
  useEffect(() => {
    if (!gridRef.current) return;
    const blocks = gridRef.current.querySelectorAll(".transition-block");
    
    // We start with full scale (1) covering the screen
    // Then scaleY down to 0 to reveal the new page
    gsap.killTweensOf(blocks);
    gsap.set(gridRef.current, { pointerEvents: "auto" });
    
    // Set origin to bottom so it shrinks downwards, or top so it shrinks upwards
    gsap.set(blocks, { transformOrigin: "bottom" }); 
    
    gsap.to(blocks, {
      scaleY: 0,
      duration: 0.4,
      stagger: {
        amount: 0.2,
        from: "start"
      },
      ease: "power4.inOut",
      onComplete: () => {
        if (gridRef.current) {
          gsap.set(gridRef.current, { pointerEvents: "none" });
        }
      }
    });
  }, [pathname]);

  // Handle exit animation event from TransitionLink
  useEffect(() => {
    const handleStartTransition = () => {
      if (!gridRef.current) return;
      const blocks = gridRef.current.querySelectorAll(".transition-block");
      
      gsap.killTweensOf(blocks);
      gsap.set(gridRef.current, { pointerEvents: "auto" });
      
      // Expand from top
      gsap.set(blocks, { scaleY: 0, transformOrigin: "top" });
      
      gsap.to(blocks, {
        scaleY: 1,
        duration: 0.4,
        stagger: {
          amount: 0.2,
          from: "start"
        },
        ease: "power4.inOut",
        onComplete: () => {
          // Tell TransitionLink to actually push the route now
          window.dispatchEvent(new CustomEvent("transition-ready-to-route"));
        }
      });
    };

    window.addEventListener("start-page-transition", handleStartTransition);
    return () => window.removeEventListener("start-page-transition", handleStartTransition);
  }, []);

  return (
    <>
      <div 
        ref={gridRef}
        className="fixed inset-0 z-[99999] flex pointer-events-none"
      >
        {Array.from({ length: columns }).map((_, i) => (
          <div 
            key={i} 
            className="transition-block flex-1 h-full bg-[#111] border-r border-[#222]"
            style={{ transform: "scaleY(1)" }}
          />
        ))}
      </div>
      {children}
    </>
  );
}
