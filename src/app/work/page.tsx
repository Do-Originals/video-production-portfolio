import WorkSection from "@/components/WorkSection";
import CTA from "@/components/CTA";

export default function WorkPage() {
  const shortFormEdits = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=sf1",
      channelName: "TikTok Trends",
      views: "1.2M+ Views",
      title: "Viral Dance Challenge Edit",
      description: "A fast-paced, high-energy short form edit optimized for TikTok algorithm.",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=sf2",
      channelName: "Reels Pro",
      views: "800k+ Views",
      title: "Quick Tech Tips: iPhone Hacks",
      description: "Snappy Instagram Reel with dynamic captions and engaging sound effects.",
    },
  ];

  const longFormEdits = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=lf1",
      channelName: "Tech Insider",
      views: "450k+ Views",
      title: "The Future of AI: Full Deep Dive",
      description: "A 20-minute comprehensive essay video with motion graphics and cinematic b-roll.",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=lf2",
      channelName: "Travel Vlogs",
      views: "210k+ Views",
      title: "Exploring Hidden Tokyo - Cinematic Travel Vlog",
      description: "Immersive storytelling focusing on beautiful color grading and seamless transitions.",
    },
  ];

  const commercialEdits = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=cm1",
      channelName: "SaaS Launch",
      views: "5M+ Views",
      title: "Introducing DataSync Pro",
      description: "High-conversion commercial promo highlighting key features in under 60 seconds.",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=cm2",
      channelName: "Lifestyle Brand",
      views: "2.3M+ Views",
      title: "Summer Collection 2024",
      description: "Vibrant, stylish commercial edit for a lifestyle and clothing brand campaign.",
    },
  ];

  const documentaryEdits = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=dc1",
      channelName: "History Now",
      views: "890k+ Views",
      title: "The Lost City: Untold Story",
      description: "A gripping mini-documentary featuring archival footage and intense narrative pacing.",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=dc2",
      channelName: "Nature Docs",
      views: "1.1M+ Views",
      title: "Into the Amazon",
      description: "Stunning wildlife documentary edit with award-winning sound design.",
    },
  ];

  const podcastEdits = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=pc1",
      channelName: "The Daily Chat",
      views: "120k+ Views",
      title: "Episode 45: Tech Entrepreneurship",
      description: "Multi-cam podcast edit synced perfectly with clean audio mixing.",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?q=80&w=2000&auto=format&fit=crop", 
      channelAvatar: "https://i.pravatar.cc/150?u=pc2",
      channelName: "Deep Dive Podcast",
      views: "300k+ Views",
      title: "Interview with a CEO",
      description: "Engaging podcast highlights focusing on key conversational moments.",
    },
  ];

  return (
    <main className="flex flex-col w-full bg-white min-h-screen font-sans pt-12 md:pt-20">
      
      {/* Global Page Header */}
      <section className="w-full pt-16 md:pt-24 px-4 md:px-12 flex justify-center bg-[#fafafa]">
        <div className="w-full max-w-[1200px] flex flex-col items-start gap-6 max-w-3xl">
          <div className="bg-white border border-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-[14px] font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="text-[#ea580c] font-bold text-lg leading-none">+</span> Selected Works
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-bold text-black leading-[1.05] tracking-tight">
            Our Recent Edits<br/>
            <span className="text-[#ea580c]">in Action</span>
          </h1>
        </div>
      </section>

      <WorkSection 
        title={<>Short form <br/><span className="text-[#ea580c]">(Reels, Shorts)</span></>}
        description="Bite-sized, highly engaging content engineered for algorithmic success on TikTok, Reels, and Shorts."
        edits={shortFormEdits}
      />
      
      <div className="w-full h-px bg-gray-200"></div>

      <WorkSection 
        title={<>Long form <br/><span className="text-[#ea580c]">Videos</span></>}
        description="Comprehensive, retention-optimized videos that tell a complete story and keep viewers hooked."
        edits={longFormEdits}
      />

      <div className="w-full h-px bg-gray-200"></div>

      <WorkSection 
        title={<><span className="text-[#ea580c]">Commercials</span></>}
        description="High-end promotional edits designed to convert viewers into customers with premium branding."
        edits={commercialEdits}
      />

      <div className="w-full h-px bg-gray-200"></div>

      <WorkSection 
        title={<><span className="text-[#ea580c]">Documentary</span></>}
        description="Cinematic storytelling, pacing, and color grading that bring real-world stories to life."
        edits={documentaryEdits}
      />

      <div className="w-full h-px bg-gray-200"></div>

      <WorkSection 
        title={<><span className="text-[#ea580c]">Podcast</span></>}
        description="Seamless multi-camera switching and audio cleanup for professional video podcasts."
        edits={podcastEdits}
      />

      <CTA />
    </main>
  );
}
