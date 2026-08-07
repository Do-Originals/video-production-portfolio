import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    <Image key="1" src="/clients/Italian_channel_client.webp" alt="Italian Channel" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />,
    <Image key="2" src="/clients/Arok_client.webp" alt="Arok" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />,
    <Image key="3" src="/clients/vercelli_client.webp" alt="Vercelli" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />,
    <Image key="4" src="/clients/dandj_client.webp" alt="D&J" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />,
    <Image key="5" src="/clients/rishab_world_client.png" alt="Rishab World" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />,
    <Image key="6" src="/clients/knox_client.webp" alt="Knox" width={320} height={128} className="object-contain h-16 md:h-24 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
  ];

  return (
    <section className="w-full bg-[#f4f4f5] px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-[1440px] mx-auto w-full bg-white rounded-[2rem] md:rounded-[3rem] py-4 md:py-6 overflow-hidden relative shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
        
        {/* Fade Edges (Masking overlay) */}
        <div 
          className="absolute inset-0 pointer-events-none z-10" 
          style={{
            background: "linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)"
          }}
        ></div>

        {/* Marquee Track */}
        <div className="flex w-full group relative overflow-hidden">
          {/* First track */}
          <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 md:gap-24 px-8 min-w-full">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center select-none opacity-90 transition-opacity hover:opacity-100">
                {logo}
              </div>
            ))}
          </div>
          {/* Second track for seamless loop */}
          <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 md:gap-24 px-8 min-w-full" aria-hidden="true">
            {logos.map((logo, i) => (
              <div key={i + "-dup"} className="flex items-center justify-center select-none opacity-90 transition-opacity hover:opacity-100">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
