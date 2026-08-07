import { Sparkles, Play, Video, PenTool, MessageSquare, MousePointer2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Process() {
  const cards = [
    {
      number: "01",
      title: "Drop Your Footage",
      desc: "Upload your raw clips — WeTransfer, Google Drive, Dropbox — whatever works for you.",
      illustration: (
        <div className="absolute inset-x-0 top-0 bottom-[140px] w-full">
          <Image 
            src="/images/process/process1.png" 
            alt="Drop Your Footage" 
            fill 
            className="object-contain object-center" 
          />
        </div>
      )
    },
    {
      number: "02",
      title: "We Do Our Magic",
      desc: "We cut, trim, color-grade, and add engaging transitions.",
      illustration: (
        <div className="absolute inset-x-0 top-0 bottom-[140px] w-full">
          <Image 
            src="/images/process/process2.png" 
            alt="We Do Our Magic" 
            fill 
            className="object-contain object-center" 
          />
        </div>
      )
    },
    {
      number: "03",
      title: "Feedback? Easy",
      desc: "Want something changed? We offer smooth revision rounds to make sure everything.",
      illustration: (
        <div className="absolute inset-x-0 top-0 bottom-[140px] flex items-center justify-center p-6">
          <div className="relative w-full h-full max-w-[280px] flex items-center justify-center">
             {/* Pink Glow */}
             <div className="absolute w-48 h-48 bg-[#d41c5c]/15 blur-[40px] rounded-full z-0" />
             
             {/* White bubble */}
             <div className="absolute top-[18%] left-[8%] bg-white rounded-2xl pl-6 pr-4 py-2.5 flex items-center gap-2 z-10 border border-dashed border-gray-300">
               <div className="absolute -left-3 w-7 h-7 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-sm border border-white">
                 <img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="w-full h-full object-cover" />
               </div>
               <span className="text-gray-800 font-medium text-[15px]">Requested a Revision</span>
             </div>

             {/* Pink cursor */}
             <MousePointer2 className="absolute top-[42%] left-[12%] w-6 h-6 text-[#d41c5c] fill-[#d41c5c] transform -rotate-[100deg] drop-shadow-sm z-30" />

             {/* Pink bubble */}
             <div className="absolute top-[55%] right-[0%] bg-[#d41c5c] rounded-full px-6 py-2.5 shadow-[0_8px_20px_rgba(212,28,92,0.3)] flex items-center transform -rotate-[8deg] z-20">
               <span className="text-white font-medium text-[15px]">Revision is in progress!</span>
             </div>
          </div>
        </div>
      )
    },
    {
      number: "04",
      title: "Upload & Grow",
      desc: "We deliver your final video in ready-to-upload YouTube format.",
      illustration: (
        <div className="absolute inset-x-0 top-0 bottom-[140px] flex items-center justify-center p-6">
          <div className="relative w-full h-full max-w-[280px] flex items-center justify-center">
             {/* Pink Glow */}
             <div className="absolute w-48 h-48 bg-[#d41c5c]/15 blur-[40px] rounded-full z-0" />
             
             {/* Black pill */}
             <div className="absolute top-[18%] right-[5%] bg-[#222] rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2.5 z-20 transform rotate-3">
               <Video className="w-4 h-4 text-gray-300" />
               <span className="text-gray-100 font-medium text-[14.5px]">Final_Cut_v2.mp4</span>
             </div>

             {/* White pill */}
             <div className="absolute top-[52%] left-[2%] bg-white border border-dashed border-gray-300 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-2 z-10 transform -rotate-[15deg]">
               <ImageIcon className="w-4 h-4 text-gray-500" />
               <span className="text-gray-700 font-medium text-[14.5px]">Thumbnail.png</span>
             </div>

             {/* Publish button */}
             <div className="absolute bottom-[18%] right-[10%] bg-[#d41c5c] rounded-xl px-7 py-2.5 shadow-[0_8px_20px_rgba(212,28,92,0.3)] transform rotate-[10deg] z-30">
               <span className="text-white font-medium text-[16px]">Publish</span>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden flex flex-col items-center relative" style={{
      backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      {/* Header */}
      <div className="bg-white border border-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-6 flex items-center gap-1.5 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#d41c5c]" /> Process
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-4 tracking-tight">
        How It Works?
      </h2>
      <p className="text-gray-500 text-lg text-center mb-16 max-w-[500px] font-medium px-4">
        A quick overview of how we work together to make your edit best in class!
      </p>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto px-4 w-full">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded-[2rem] w-full aspect-square md:aspect-auto md:h-[420px] flex flex-col relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
            {/* Top Left Number */}
            <div className="absolute top-6 left-6 bg-gray-50 text-gray-500 font-medium px-3 py-1 rounded-lg text-sm border border-gray-100 z-30">
              {card.number}
            </div>

            {/* Illustration Area */}
            {card.illustration}

            {/* Content Area */}
            <div className="absolute bottom-0 inset-x-0 p-8 z-30 bg-gradient-to-t from-white via-white to-transparent pt-12">
              <h3 className="text-[22px] font-bold text-gray-900 tracking-tight mb-2">{card.title}</h3>
              <p className="text-gray-500 font-medium text-[15px] leading-relaxed pr-4">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
