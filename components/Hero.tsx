"use client";

import Silk from "@/components/Silk";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1120]">
            {/* Silk Background - Edge to Edge - Raw Output */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#14adff"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center px-8 md:px-16">
                <div className="max-w-4xl">
                    <p className="text-[#94A3B8] mb-4 text-sm tracking-wide font-medium">
                        Hi, I'm
                    </p>

                    <h1 className="text-6xl md:text-[5.5rem] font-extrabold text-[#F8FAFC] tracking-[0.02em] uppercase font-sora leading-[1.1] mb-8">
                        Tarun Kumar
                    </h1>

                    <p className="text-xl md:text-2xl text-[#F8FAFC] leading-relaxed font-inter max-w-2xl">
                        Exploring systems, solving problems, building with intent.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <button className="bg-[#14adff] text-[#0F172A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#0091ff] transition-all duration-300">
                            View Projects
                        </button>

                        <button className="border-2 border-[#14adff] text-[#14adff] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#14adff]/10 transition-all duration-300">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
