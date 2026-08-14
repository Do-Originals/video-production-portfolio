"use client";

import React, { useRef, useState } from "react";
import { Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import { EditItem } from "./WorkSection";

interface PodcastSliderProps {
  title: React.ReactNode;
  description: string;
  edits: EditItem[];
}

export default function PodcastSlider({ title, description, edits }: PodcastSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const firstChild = sliderRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    
    const itemWidth = firstChild.clientWidth;
    const gap = window.innerWidth >= 768 ? 32 : 24; 
    
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    if (newIndex >= 0 && newIndex < edits.length) {
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
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            {title}
          </h2>
          <p className="text-[#52525b] text-[18px] md:text-[20px] font-medium leading-relaxed max-w-2xl mt-1">
            {description}
          </p>
        </div>
      </div>

      <div className="w-full mt-10">
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-8 pt-4 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {edits.map((edit) => (
            <div
              key={edit.id}
              className="relative min-w-[320px] w-[320px] md:min-w-[600px] md:w-[600px] snap-center flex-shrink-0 flex flex-col gap-5 group"
            >
              {/* Thumbnail / Player Container */}
              <div className="w-full aspect-[16/9] relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-black group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                {edit.playbackId ? (
                  <MuxPlayer
                    playbackId={edit.playbackId}
                    className="w-full h-full object-cover"
                    accentColor="#d41c5c"
                  />
                ) : edit.videoUrl ? (
                  <video
                    src={edit.videoUrl}
                    poster={edit.videoUrl.replace('.mp4', '.jpg')}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Image 
                      src={edit.thumbnail} 
                      alt={edit.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30 border border-white/10 shadow-lg">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Text Card Container */}
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-4 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:border-gray-200">
                
                {/* Top Row: Channel & Views */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md overflow-hidden relative bg-blue-100">
                      <Image src={edit.channelAvatar} alt={edit.channelName} fill className="object-cover" />
                    </div>
                    <span className="text-gray-700 font-medium text-[15px]">{edit.channelName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[14px] font-medium">{edit.views}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2.5 mt-1">
                  <h3 className="text-[22px] font-bold text-black leading-snug group-hover:text-[#d41c5c] transition-colors line-clamp-2">
                    {edit.title}
                  </h3>
                  <p className="text-[#626262] text-[16px] leading-relaxed line-clamp-2 font-medium">
                    {edit.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
          <div className="min-w-[10px] w-[10px] md:min-w-[30px] md:w-[30px] flex-shrink-0" />
        </div>
        
        {/* Animated Dots Pagination */}
        <div className="flex items-center justify-center gap-2.5 mt-2 md:mt-4">
          {edits.map((_, index) => (
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
