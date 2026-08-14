"use client";

import React, { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface CustomVideoCardProps {
  playbackId: string;
  theme?: "light" | "dark"; // Light or dark styling for the card border
}

export default function CustomVideoCard({ playbackId, theme = "light" }: CustomVideoCardProps) {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // default to true to allow autoplay or just for safety

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playerRef.current) {
      const newMuted = !isMuted;
      playerRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const isDark = theme === "dark";

  return (
    <div 
      className={`w-full max-w-[360px] backdrop-blur-xl rounded-[2.5rem] p-3 md:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] ring-1 flex flex-col hover:-translate-y-3 transition-all duration-500 group relative cursor-pointer
        ${isDark ? "bg-gray-900/95 ring-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]" : "bg-white/80 ring-gray-200/60"}
      `}
      onClick={togglePlay}
    >
      <div className={`w-full aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-inner ${isDark ? "ring-1 ring-white/5" : ""}`}>
        <MuxPlayer
          ref={playerRef}
          playbackId={playbackId}
          className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          accentColor="#d41c5c"
          onPlay={handlePlay}
          onPause={handlePause}
          style={{ '--controls': 'none' } as React.CSSProperties}
          muted={isMuted}
          nohotkeys
        />
        
        {/* Play/Pause overlay icon - Centered */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isPlaying ? "opacity-0" : "opacity-100 group-hover:opacity-100"}`}>
          <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <Play className="w-8 h-8 text-white ml-1 fill-white" />
          </div>
        </div>

        {/* Mute/Unmute Button - Bottom Right */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-20 border border-white/20 hover:scale-110"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>

      </div>
    </div>
  );
}
