import { X, Check } from "lucide-react";

export default function Solution() {
  const problems = [
    "Editing takes me forever.",
    "I miss uploads trying to finish videos.",
    "I hate editing. I just want to record.",
    "My videos don't look pro enough.",
    "Captions are a pain to add."
  ];

  const solutions = [
    "Done-for-you edits, always on time.",
    "Fast turnaround",
    "You record. We handle the rest.",
    "Cinematic, clean, and branded.",
    "Burned-in, style-matched captions."
  ];

  return (
    <section 
      className="w-full py-24 px-4 md:px-6 bg-[#fafafa] flex flex-col items-center relative overflow-hidden" 
      style={{ 
        backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Top Badge */}
      <div className="bg-white px-5 py-2 rounded-full text-[15px] font-semibold mb-8 shadow-sm border border-gray-100 flex items-center gap-1.5 text-black tracking-wide">
        <span className="text-[#d41c5c] font-bold text-lg leading-none">+</span> Our Solution
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-center text-black leading-tight tracking-tight mb-5">
        Why Most Creators Burn Out
      </h2>
      <p className="text-[#52525b] text-[18px] md:text-[20px] text-center mb-16 max-w-2xl font-medium">
        A quick side-by-side of the struggles you shouldn't have to deal with and how we make sure you don't.
      </p>

      {/* Comparison Container */}
      <div className="bg-white w-full max-w-[1000px] rounded-[2.5rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row relative z-10">
        
        {/* Creators Problem */}
        <div className="flex-1 flex flex-col pt-8 pb-10 px-6 md:px-12">
          <h3 className="text-2xl font-medium text-black text-center mb-12">Creators Problem</h3>
          <div className="flex flex-col gap-7 w-full max-w-[320px] mx-auto">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                  <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                </div>
                <p className="text-black text-[17px] font-medium tracking-tight">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Solution */}
        <div className="flex-1 bg-[#141414] rounded-[2rem] flex flex-col pt-8 pb-10 px-6 md:px-12 relative overflow-hidden">
          <h3 className="text-2xl font-medium text-[#d41c5c] text-center mb-12 relative z-10">Our Solution</h3>
          <div className="flex flex-col gap-7 w-full max-w-[320px] mx-auto relative z-10">
            {solutions.map((solution, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d41c5c] flex items-center justify-center">
                  <Check className="w-[14px] h-[14px] text-white" strokeWidth={3.5} />
                </div>
                <p className="text-white text-[17px] font-medium tracking-tight">{solution}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
