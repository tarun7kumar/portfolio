"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();
    
    // Map scroll from 0px to 300px to blur and opacity
    const blurFilter = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(10px)"]);
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);
    // Backdrop blur for the page background behind the hero text
    const backdropFade = useTransform(scrollY, [0, 300], [0, 1]);

    return (
        <section className="relative min-h-screen w-full bg-transparent">
            {/* Backdrop overlay that blurs the Silk background underneath */}
            <motion.div 
                className="absolute inset-0 pointer-events-none z-0" 
                style={{ 
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    opacity: backdropFade
                }} 
            />
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center px-8 md:px-16">
                <div className="max-w-4xl relative z-10 w-full">
                    <motion.div style={{ filter: blurFilter, opacity: opacityFade }}>
                        <p className="font-inter text-lg font-light tracking-[0.08em] text-[#F4EBD9] mb-3 ml-1 md:ml-2">
                            Hi, I'm
                        </p>
                    </motion.div>

                    <h1 className="font-inter text-7xl md:text-[7rem] font-extrabold text-[#F4EBD9] tracking-[0.02em] uppercase leading-[1.05] mb-0 whitespace-nowrap">
                        TARUN KUMAR<span className="text-[#FF5733]">.</span>
                    </h1>

                    <motion.div style={{ filter: blurFilter, opacity: opacityFade }}>
                        <p className="font-inter text-lg md:text-xl font-light text-[#FFFFFF] mt-5 leading-relaxed max-w-2xl">
                            Exploring systems, solving problems, building with intent.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">
                        <button className="bg-[#FF5733] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#E64C2B] hover:shadow-[0_4px_14px_0_rgba(255,87,51,0.3)]">
                            View Projects
                        </button>

                        <button className="border-2 border-[#FFFFFF]/40 bg-[#1A1A1A] text-[#F4EBD9] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#555555] hover:border-[#FFFFFF]">
                            Resume
                        </button>
                    </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
