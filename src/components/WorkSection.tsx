import { Play, TrendingUp } from "lucide-react";
import Image from "next/image";

export interface EditItem {
  id: number;
  thumbnail: string;
  channelAvatar: string;
  channelName: string;
  views: string;
  title: string;
  description: string;
}

interface WorkSectionProps {
  title: React.ReactNode;
  description: string;
  edits: EditItem[];
}

export default function WorkSection({ title, description, edits }: WorkSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 flex justify-center bg-[#fafafa]">
      <div className="w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            {title}
          </h2>
          
          <p className="text-[#52525b] text-[18px] md:text-[20px] font-medium leading-relaxed max-w-2xl mt-1">
            {description}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {edits.map((edit) => (
            <div key={edit.id} className="flex flex-col gap-5 group cursor-pointer">
              
              {/* Thumbnail Container */}
              <div className="w-full aspect-[16/9] relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-black">
                <Image 
                  src={edit.thumbnail} 
                  alt={edit.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30 border border-white/10 shadow-lg">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
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
                  <h3 className="text-[22px] font-bold text-black leading-snug group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    {edit.title}
                  </h3>
                  <p className="text-[#626262] text-[16px] leading-relaxed line-clamp-2 font-medium">
                    {edit.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
