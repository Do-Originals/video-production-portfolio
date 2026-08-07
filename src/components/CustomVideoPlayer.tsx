"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function CustomVideoPlayer({ url }: { url: string }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={playing}
          muted={muted}
          controls={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                modestbranding: 1,
                rel: 0,
                disablekb: 1,
                origin: typeof window !== 'undefined' ? window.location.origin : ''
              }
            }
          }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>

      {/* Controls */}
      <div 
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full transition-opacity duration-300 ${
          isHovered || !playing ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); setPlaying(prev => !prev); }}
          className="text-white hover:text-[#d41c5c] transition-colors"
        >
          {playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
        </button>
        <div className="w-[1px] h-6 bg-white/20"></div>
        <button 
          onClick={(e) => { e.stopPropagation(); setMuted(prev => !prev); }}
          className="text-white hover:text-[#d41c5c] transition-colors"
        >
          {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
