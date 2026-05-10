import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingLines from "@/components/FloatingLines";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4EBD9]">
      <Navbar />
      
      {/* Wrapper for Hero sharing the FloatingLines background */}
      <div className="relative w-full bg-[#000000]">
        {/* FloatingLines Background Container spanning 100vh */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
            <FloatingLines
                linesGradient={["#FF5733", "#F97316", "#E64C2B"]}
                enabledWaves={["top", "middle", "bottom"]}
                lineCount={[6]}
                lineDistance={[5]}
                animationSpeed={1}
                interactive={true}
                parallax={true}
                parallaxStrength={0.2}
            />
            {/* Single gradient overlay to fade into black */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10 pointer-events-none" />
        </div>
        
        {/* Relative content on top */}
        <div className="relative z-10 flex flex-col pointer-events-none">
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

