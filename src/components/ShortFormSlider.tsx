"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export interface ShortFormVideo {
  id: string | number;
  videoUrl: string;
  title?: string;
}

interface ShortFormSliderProps {
  title: React.ReactNode;
  description: string;
  videos: ShortFormVideo[];
}

export default function ShortFormSlider({ title, description, videos }: ShortFormSliderProps) {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [muted, setMuted] = useState<Record<string, boolean>>(() => {
    const initMuted: Record<string, boolean> = {};
    videos.forEach((v) => (initMuted[v.id] = true));
    return initMuted;
  });
  
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const togglePlay = (id: string | number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlaying((prev) => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlaying((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMuted((prev) => ({ ...prev, [id]: video.muted }));
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    // Get the first child to find its width. We assume the first child is a video card.
    const firstChild = sliderRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    
    const itemWidth = firstChild.clientWidth;
    // Calculate gap approximately. We have gap-6 (24px) or gap-8 (32px).
    const gap = window.innerWidth >= 768 ? 32 : 24; 
    
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    // Ensure index doesn't go out of bounds
    if (newIndex >= 0 && newIndex < videos.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const firstChild = sliderRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    
    const itemWidth = firstChild.clientWidth;
    const gap = window.innerWidth >= 768 ? 32 : 24;
    sliderRef.current.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full py-12 md:py-16 bg-[#fafafa] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 md:px-12 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            {title}
          </h2>
          <p className="text-[#52525b] text-[18px] md:text-[20px] font-medium leading-relaxed max-w-2xl mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full mt-10">
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-8 pt-4 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative min-w-[240px] w-[240px] h-[426px] md:min-w-[280px] md:w-[280px] md:h-[498px] rounded-[2rem] overflow-hidden snap-center flex-shrink-0 bg-[#1c1c21] shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
              onClick={() => togglePlay(video.id)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                src={video.videoUrl}
                poster={video.videoUrl.replace('.mp4', '.jpg')}
                className="w-full h-full object-cover"
                loop
                playsInline
                muted={muted[video.id]}
                preload="metadata"
              />

              {/* Title Overlay */}
              {video.title && (
                <div className="absolute top-0 left-0 w-full p-5 md:p-6 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                    {video.title}
                  </h3>
                </div>
              )}

              {/* Play/Pause Overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
                  playing[video.id] ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-lg transition-transform group-hover:scale-105">
                  {playing[video.id] ? (
                    <Pause className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
                  ) : (
                    <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                  )}
                </div>
              </div>

              {/* Bottom Gradient for buttons */}
              <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />

              {/* Mute Toggle Button */}
              <button
                onClick={(e) => toggleMute(video.id, e)}
                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-colors z-20"
              >
                {muted[video.id] ? (
                  <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                )}
              </button>
            </div>
          ))}
          {/* Spacer for right edge */}
          <div className="min-w-[10px] w-[10px] md:min-w-[30px] md:w-[30px] flex-shrink-0" />
        </div>
        
        {/* Animated Dots Pagination */}
        <div className="flex items-center justify-center gap-2.5 mt-4 md:mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                index === activeIndex 
                  ? "w-8 md:w-10 bg-[#d41c5c]" 
                  : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
