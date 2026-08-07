"use client";

import { useState } from "react";
import { Sparkles, Send, AlertCircle } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { submitContactForm } from "@/app/actions/contact";

type FieldErrors = {
  name?: string[];
  email?: string[];
  projectType?: string[];
  message?: string[];
};

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleAction(formData: FormData) {
    setIsPending(true);
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});

    const result = await submitContactForm(formData);

    if (result?.fieldErrors) {
      setFieldErrors(result.fieldErrors);
      setStatus("error");
      setErrorMessage(result.error || "Please check the highlighted fields.");
    } else if (result?.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
    
    setIsPending(false);
  }

  return (
    <main className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Contact Form Section */}
      <section 
        className="flex flex-col items-center bg-[#fafafa] w-full pt-20 pb-24 md:pt-32 md:pb-32 px-4 md:px-6 relative overflow-hidden border-b border-gray-200/50"
        style={{
          backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 z-10 relative">
          
          {/* Text Content */}
          <div className="flex flex-col flex-1 w-full max-w-[550px] lg:pt-10">
            {/* Badge */}
            <div className="bg-white border border-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 flex items-center gap-1.5 shadow-sm w-fit self-start">
              <span className="text-[#d41c5c] font-bold text-base leading-none">+</span> Contact
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-black mb-4">
              Start Your <span className="text-[#d41c5c]">Next</span><br />
              <span className="text-[#d41c5c]">Project</span> With Us
            </h1>
            
            <p className="text-[#52525b] text-sm md:text-base font-medium max-w-md mb-8 leading-relaxed">
              Got a project in mind or just want to say hi? Fill out the form and we'll get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="flex-1 w-full max-w-[550px] lg:max-w-none">
            <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-full relative z-20">
            <form action={handleAction} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-900 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Jane Smith" 
                  className={`w-full bg-[#fcfcfc] border rounded-xl px-3.5 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-1 transition-all shadow-sm ${
                    fieldErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200/80 focus:border-[#d41c5c] focus:ring-[#d41c5c]/20"
                  }`}
                />
                {fieldErrors.name && (
                  <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4" /> {fieldErrors.name[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-900 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="jane@framer.com" 
                  className={`w-full bg-[#fcfcfc] border rounded-xl px-3.5 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-1 transition-all shadow-sm ${
                    fieldErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200/80 focus:border-[#d41c5c] focus:ring-[#d41c5c]/20"
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4" /> {fieldErrors.email[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-sm font-semibold text-gray-900 ml-1">Project Type</label>
                <div className="relative">
                  <select 
                    id="projectType"
                    name="projectType"
                    className="w-full bg-[#fcfcfc] border border-gray-200/80 rounded-xl px-3.5 py-2.5 text-[14px] text-gray-600 appearance-none focus:outline-none focus:bg-white focus:border-[#d41c5c] focus:ring-1 focus:ring-[#d41c5c]/20 transition-all cursor-pointer shadow-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>Select...</option>
                    <option value="short">Short-form Editing</option>
                    <option value="long">Long-form Editing</option>
                    <option value="commercial">Commercials & Ads</option>
                    <option value="documentary">Documentary</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900 ml-1">Drop a Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write about your project" 
                  className={`w-full bg-[#fcfcfc] border rounded-xl px-3.5 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-1 transition-all resize-y shadow-sm ${
                    fieldErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200/80 focus:border-[#d41c5c] focus:ring-[#d41c5c]/20"
                  }`}
                ></textarea>
                {fieldErrors.message && (
                  <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4" /> {fieldErrors.message[0]}
                  </p>
                )}
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-2xl font-medium border border-green-200 text-[15px] flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Thanks for reaching out! We'll get back to you shortly.
                </div>
              )}
              
              {status === "error" && errorMessage && !fieldErrors.name && !fieldErrors.email && !fieldErrors.message && (
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl font-medium border border-red-200 text-[15px] flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isPending}
                className="mt-2 bg-[#111] hover:bg-black text-white font-semibold text-[15px] rounded-xl px-4 py-3 flex items-center justify-center transition-all active:scale-[0.98] w-full shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {isPending ? "Sending..." : "Submit"}
              </button>

            </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />

    </main>
  );
}
