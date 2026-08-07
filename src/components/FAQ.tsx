"use client";

import { useState } from "react";
import { Plus, X, MousePointer2 } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of videos do you edit?",
      a: "We handle everything from short-form TikToks and Reels to long-form YouTube videos, documentaries, and commercial ads."
    },
    {
      q: "How fast is the delivery?",
      a: "As quick as a jump cut. Usually 3-5 business days, depending on the scope of the edit."
    },
    {
      q: "Can I request revisions?",
      a: "We include up to 2 rounds of revisions to ensure you're absolutely thrilled with the final cut."
    },
    {
      q: "Do I need to provide all the footage and assets?",
      a: "Yes, you provide the raw footage, and we handle the rest—including sourcing stock media, music, and sound effects if needed."
    },
    {
      q: "What if I'm not happy with the result?",
      a: "We work closely with you during the revision process to get it right. Our priority is making sure you are 100% satisfied with the final video."
    }
  ];

  return (
    <section className="w-full bg-[#f4f4f5] py-24 px-4 md:px-6 overflow-hidden" style={{
      backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide">
          FAQs
        </div>
        
        <h2 className="text-4xl md:text-[2.8rem] font-bold text-center text-black leading-tight tracking-tight mb-4 flex flex-col items-center gap-2">
          <span>Got Questions? Hmm..</span>
          <span className="flex items-center gap-3">
            We Got Answers 
            {/* Inline Face Icon */}
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white overflow-hidden">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
                 <circle cx="12" cy="12" r="10"></circle>
                 <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                 <line x1="9" y1="9" x2="9.01" y2="9"></line>
                 <line x1="15" y1="9" x2="15.01" y2="9"></line>
               </svg>
            </div>
          </span>
        </h2>
        
        <p className="text-[#71717a] text-[15px] text-center max-w-sm font-medium mb-16">
          A reel of answers to the questions we get all the time plus some insides!
        </p>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full items-start">
          
          {/* FAQ Accordions */}
          <div className="flex flex-col gap-3.5 w-full max-w-[500px]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col w-full rounded-[1.2rem] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer shadow-sm ${isOpen ? 'bg-[#c4124c]' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {/* Header Row */}
                  <div className={`flex items-center justify-between p-5 md:px-6 md:py-4 transition-colors ${isOpen ? 'bg-white rounded-t-[1.2rem] rounded-b-xl border-b border-gray-100' : 'bg-transparent'}`}>
                    <h3 className="text-[15px] font-bold text-black">{faq.q}</h3>
                    {isOpen ? (
                      <X className="w-5 h-5 text-black" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-black" strokeWidth={2.5} />
                    )}
                  </div>
                  
                  {/* Body */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-5 md:px-6 md:py-5 flex items-start gap-4">
                      {/* Avatar Icon */}
                      <div className="w-10 h-10 rounded-full border-[2.5px] border-white flex-shrink-0 flex items-center justify-center bg-white/20">
                         <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                           <circle cx="9" cy="9" r="2"></circle>
                           <circle cx="15" cy="9" r="2"></circle>
                         </svg>
                      </div>
                      <p className="text-white text-[15px] font-medium leading-relaxed pt-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Polaroids */}
          <div className="relative h-[600px] w-full hidden md:block mt-8">
            
            {/* Polaroid 1 (Top Right) */}
            <div className="absolute top-0 right-4 transform rotate-[6deg] z-20">
              <div className="bg-white p-3 pb-8 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.1)] w-[200px] relative border border-gray-100">
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#111] transform -rotate-3 shadow-sm"></div>
                <div className="w-full h-[140px] bg-gray-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80" alt="Working" className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-4 text-gray-700 text-lg" style={{ fontFamily: "cursive, 'Comic Sans MS', sans-serif" }}>Working!</p>
              </div>
            </div>

            {/* Polaroid 2 (Middle Left) */}
            <div className="absolute top-32 left-0 transform -rotate-[4deg] z-10">
              <div className="bg-white p-3 pb-8 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.1)] w-[200px] relative border border-gray-100">
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#111] transform rotate-6 shadow-sm"></div>
                <div className="w-full h-[140px] bg-gray-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1551887196-72e32cb14081?w=400&q=80" alt="Coffee" className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-4 text-gray-700 text-[15px]" style={{ fontFamily: "cursive, 'Comic Sans MS', sans-serif" }}>coffee with client ans</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
