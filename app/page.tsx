import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      
      {/* Wrapper for Hero and About sharing the Silk background */}
      <div className="relative w-full">
        {/* Silk Background Container spanning 150vh */}
        <div className="absolute top-0 left-0 w-full h-[150vh] z-0 overflow-hidden pointer-events-none">
            <Silk
                speed={1.5}
                scale={1}
                color="#3A1D1D"
                noiseIntensity={0.8}
                rotation={0}
            />
            {/* Single gradient overlay to fade into black */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10" />
        </div>
        
        {/* Relative content on top */}
        <div className="relative z-10 flex flex-col">
            <Hero />
            <About />
        </div>
      </div>

      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
