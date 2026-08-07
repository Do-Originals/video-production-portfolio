import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Process from "@/components/Process";
import OurWork from "@/components/OurWork";
import Solution from "@/components/Solution";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white font-sans w-full">
      <main className="flex flex-1 w-full flex-col items-center sm:items-start">
        <Hero />
        <LogoMarquee />
        <WhoWeAre />
        <Services />
        <Process />
        <OurWork />
        <Solution />
        <FAQ />
      </main>
    </div>
  );
}
