"use client";

import Silk from "@/components/Silk";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1120]">
            {/* Silk Background - Edge to Edge - Raw Output */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={1.5}
                    scale={1}
                    color="#3A1D1D"
                    noiseIntensity={1.0}
                    rotation={0}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center px-8 md:px-16">
                <div className="max-w-4xl">
                    <p className="text-[#F3F4F6] mb-4 text-sm tracking-wide font-semibold">
                        Hi, I'm
                    </p>

                    <h1 className="text-7xl md:text-[7rem] font-extrabold text-[#F3F4F6] tracking-[0.02em] uppercase font-sora leading-[1.05] mb-6 whitespace-nowrap">
                        TARUN KUMAR<span className="text-[#F3F4F6]">.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed font-inter max-w-2xl">
                        Exploring systems, solving problems, building with intent.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <button className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#F3F4F6] hover:shadow-[0_4px_14px_0_rgba(255,255,255,0.15)]">
                            View Projects
                        </button>

                        <button className="border-2 border-[#1A1A1A] bg-[#111111] text-[#F3F4F6] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#1A1A1A]">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
