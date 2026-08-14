"use client";

import WorkSection from "@/components/WorkSection";
import CommercialSlider from "@/components/CommercialSlider";
import PodcastSlider from "@/components/PodcastSlider";
import CTA from "@/components/CTA";
import ShortFormSlider from "@/components/ShortFormSlider";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";

export default function WorkPage() {
  const shortFormVideos = [
    {
      id: "vid1",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/DO_NEW_INTT_dsvfqo.mp4",
      title: ""
    },
    {
      id: "vid2",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/Every_great_project_begins_with_an_idea.This_is_the_final_result_crafted_with_creativity_precis_nk7xtv.mp4",
      title: ""
    },
    {
      id: "vid3",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/Driving_impact_with_every_frame.Tharwani_Real_Estate_s_vision_captured_with_precision_-_shoot_by_yzhkns.mp4",
      title: ""
    },
    {
      id: "vid4",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/3_years._Countless_stories._One_dream._%EF%B8%8F_Today_Tiny_Talkies_turns_3.Every_frame_every_challe_uym5nf.mp4",
      title: ""
    },
    {
      id: "vid5",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/AQMgwBxjti3EpCAbWvTj47lNMOy-PrmjBoZQQTm0vO6zijbNnVr55CZIhfGsK7NPDwqxzWEEOK6mKa62_7j-2lQOasxPiJ4siBaYS2s_ixpne4.mp4",
      title: ""
    },
    {
      id: "vid6",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/AQNYtYdzHHvXKcyDI3-6tcYSsIYO6Le7ueD1o6OxWpVkllXW6Vti_u2T3Ormgvh9GNEPXHeJ_6a9xho5rMMRPLblmcdXF66mdBY0PSo_m6bmaq.mp4",
      title: ""
    },
    {
      id: "vid7",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/%E0%A4%89%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AA%E0%A4%BE%E0%A4%B8%E0%A5%82%E0%A4%A8_%E0%A4%AE%E0%A5%81%E0%A4%82%E0%A4%AC%E0%A4%88_%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%B2%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A5%87_%E0%A4%AE%E0%A5%8B%E0%A4%A0%E0%A4%BE_%E0%A4%AC%E0%A4%A6%E0%A4%B2_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%87%E0%A4%95_%E0%A4%AE%E0%A5%81%E0%A4%82%E0%A4%AC%E0%A4%88%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%87_%E0%A4%B9%E0%A5%80_%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80_%E0%A4%A8%E0%A4%95%E0%A5%8D%E0%A4%95%E0%A5%80_%E0%A4%AA%E0%A4%BE%E0%A4%B9%E0%A4%BE._Save_Share_Fo_bin7un.mp4",
      title: ""
    },
    {
      id: "vid8",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/%E0%A4%86%E0%A4%B3%E0%A4%82%E0%A4%A6%E0%A5%80%E0%A4%A4%E0%A5%80%E0%A4%B2_%E0%A4%AA%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%B0_%E0%A4%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%A3%E0%A5%80_%E0%A4%A8%E0%A4%A6%E0%A5%80_%E0%A4%AA%E0%A5%81%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A4%BE_%E0%A4%8F%E0%A4%95%E0%A4%A6%E0%A4%BE_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%82%E0%A4%B7%E0%A4%A3%E0%A4%BE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE_%E0%A4%B5%E0%A4%BF%E0%A4%B3%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A4_vari_newstyle_marathinews_kyygxx.mp4",
      title: ""
    },
    {
      id: "vid9",
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/Rajani_client_ah1ojz.mp4",
      title: ""
    }
  ];

  const commercialEdits = [
    {
      id: 1,
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/Tiny_Talkies_Presents-_Swami_Narayan_City_Fulfilling_Dreams_Looking_for_your_dream_home_Swa_cnnfng.mp4",
      thumbnail: "",
      channelAvatar: "https://i.pravatar.cc/150?u=cm1",
      channelName: "Swami Narayan City",
      views: "1.2M+ Views",
      title: "Fulfilling Dreams TVC",
      description: "A premium commercial highlighting the dream homes of Swami Narayan City.",
    },
    {
      id: 2,
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/The_effort_happens_behind_the_scenes.The_results_speak_for_themselves._Every_frame_is_crafte_epy6ur.mp4",
      thumbnail: "",
      channelAvatar: "https://i.pravatar.cc/150?u=cm2",
      channelName: "Tiny Talkies",
      views: "500k+ Views",
      title: "Effort Meets Results",
      description: "A cinematic look behind the scenes showcasing our production quality.",
    },
    {
      id: 3,
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/AQMjMClgiGnboMqYtzD5Mg5Y7YTEibymko8uC8Fna0KH1zssJw1bi5UjK8wIP5hqVFCvTQzNRWD7y_rC2061iBd6fl-t-1eIqIILFSM_rxnjpg.mp4",
      thumbnail: "",
      channelAvatar: "https://i.pravatar.cc/150?u=cm3",
      channelName: "Brand Campaign",
      views: "800k+ Views",
      title: "Cinematic Promo",
      description: "High-end promotional edit designed to captivate and convert.",
    },
    {
      id: 4,
      videoUrl: "https://res.cloudinary.com/akjttfwt/video/upload/Home_isn_t_just_a_place_it_s_a_feeling_%EF%B8%8F_Watch_our_TVC_for_Tharwani_Infra_and_experience_the_pwhfxc.mp4",
      thumbnail: "",
      channelAvatar: "https://i.pravatar.cc/150?u=cm4",
      channelName: "Tharwani Infra",
      views: "2M+ Views",
      title: "Home is a Feeling",
      description: "An emotional and visually stunning TVC for Tharwani Infra.",
    },
  ];

  const documentaryEdits = [
    {
      id: 3,
      playbackId: "aMC4qDcz9KH6SnXSnjpzBIMW9aXul1sFEbzqBSJsbVI",
      thumbnail: "https://image.mux.com/aMC4qDcz9KH6SnXSnjpzBIMW9aXul1sFEbzqBSJsbVI/thumbnail.jpg?time=0", 
      channelAvatar: "https://i.pravatar.cc/150?u=dc3",
      channelName: "New Documentary",
      views: "750k+ Views",
      title: "Documentary Feature",
      description: "A compelling documentary edit showcasing advanced narrative pacing.",
    },
    {
      id: 4,
      playbackId: "4N3IKbvQ9E4F02EHTBUxGVhF00XQHQSW7R15SjHQBFvW00",
      thumbnail: "https://image.mux.com/4N3IKbvQ9E4F02EHTBUxGVhF00XQHQSW7R15SjHQBFvW00/thumbnail.jpg?time=0", 
      channelAvatar: "https://i.pravatar.cc/150?u=dc4",
      channelName: "Cinematic Journey",
      views: "1.2M+ Views",
      title: "Untold Stories",
      description: "Another incredible documentary edit featuring seamless transitions and flawless color grading.",
    },
  ];

  const podcastEdits = [
    {
      id: 1,
      playbackId: "zvVhI01lCZy1zt4Und41mfk01BfPTyPoENpP02rgS7UEF4",
      thumbnail: "https://image.mux.com/zvVhI01lCZy1zt4Und41mfk01BfPTyPoENpP02rgS7UEF4/thumbnail.jpg?time=0",
      channelAvatar: "https://i.pravatar.cc/150?u=podcast1",
      channelName: "Finance Insights",
      views: "250k+ Views",
      title: "Finance & Wealth Management",
      description: "Deep dive into investment strategies and smart wealth management for the modern era.",
    },
    {
      id: 2,
      playbackId: "37V9iM2fR6Oe996mhB6O602Ao00GRt9hdpV8f51A93ge00",
      thumbnail: "https://image.mux.com/37V9iM2fR6Oe996mhB6O602Ao00GRt9hdpV8f51A93ge00/thumbnail.jpg?time=0",
      channelAvatar: "https://i.pravatar.cc/150?u=podcast2",
      channelName: "Mental Health Matters",
      views: "180k+ Views",
      title: "Emotional Wellness & Relationships",
      description: "A candid conversation about relationship goals, emotional wellness, and personal growth.",
    },
    {
      id: 3,
      playbackId: "4LMs7Ep7dm82fhcPN4NKKGGIdABxpXjKXSV6XPd8C01Q",
      thumbnail: "https://image.mux.com/4LMs7Ep7dm82fhcPN4NKKGGIdABxpXjKXSV6XPd8C01Q/thumbnail.jpg?time=0",
      channelAvatar: "https://i.pravatar.cc/150?u=podcast3",
      channelName: "Creator Series",
      views: "320k+ Views",
      title: "Building a Creative Business",
      description: "Expert insights on scaling a creative business and mastering the art of content creation.",
    },
  ];

  return (
    <main className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Global Page Header with Lamp Effect */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-4 mt-8"
        >

          
          <h1 className="text-center text-5xl md:text-[6.5rem] font-bold text-white leading-[1.1] tracking-tighter">
            Our Recent Edits<br/>
            <span className="bg-gradient-to-r from-rose-400 to-[#d41c5c] bg-clip-text text-transparent drop-shadow-sm">in Action</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl text-center mt-4 font-medium leading-relaxed">
            Explore our curated portfolio of high-performing video content, crafted to engage audiences and elevate brands across every platform.
          </p>
        </motion.div>
      </LampContainer>

      <ShortFormSlider 
        title={<>Short form <br/><span className="text-[#d41c5c]">(Reels, Shorts)</span></>}
        description="Bite-sized, highly engaging content engineered for algorithmic success on TikTok, Reels, and Shorts."
        videos={shortFormVideos}
      />
      
      <div className="w-full h-px bg-gray-200"></div>

      <CommercialSlider 
        title={<><span className="text-[#d41c5c]">Commercials</span></>}
        description="High-end promotional edits designed to convert viewers into customers with premium branding."
        edits={commercialEdits}
      />

      <div className="w-full h-px bg-gray-200"></div>

      <WorkSection 
        title={<><span className="text-[#d41c5c]">Documentary</span></>}
        description="Cinematic storytelling, pacing, and color grading that bring real-world stories to life."
        edits={documentaryEdits}
      />

      <div className="w-full h-px bg-gray-200"></div>

      <PodcastSlider 
        title={<><span className="text-[#d41c5c]">Podcast</span></>}
        description="Seamless multi-camera switching and audio cleanup for professional video podcasts."
        edits={podcastEdits}
      />

      <CTA />
    </main>
  );
}
