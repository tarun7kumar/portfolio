import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4EBD9]">
      <Navbar />
      
      {/* Wrapper for Hero sharing the Silk background */}
      <div className="relative w-full bg-[#000000]">
        {/* Silk Background Container spanning 100vh */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
            <Silk
                speed={1.5}
                scale={1}
                color="#3A2A1D"
                noiseIntensity={0.8}
                rotation={0}
            />
            {/* Single gradient overlay to fade into black */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10" />
        </div>
        
        {/* Relative content on top */}
        <div className="relative z-10 flex flex-col">
            <Hero />
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

