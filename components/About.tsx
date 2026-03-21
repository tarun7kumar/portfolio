"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden min-h-screen flex items-center bg-transparent">
            <div className="max-w-[85rem] mx-auto px-4 md:px-8 relative z-10 w-full">

                {/* Main Card Container */}
                <div className="bg-[#050505] border border-zinc-900 rounded-[2.5rem] p-8 md:p-14 lg:p-20 relative overflow-hidden ring-1 ring-white/5 shadow-2xl">

                    {/* Background Decorative Dashed Lines */}
                    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
                        <svg className="w-full h-full text-white/5" viewBox="0 0 1200 800" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6">
                            {/* Top swooping line */}
                            <path d="M 320 120 C 550 80 800 250 850 180" />
                            {/* Extended curve for visual balance without contact section */}
                            <path d="M 200 650 C 450 750 750 700 850 650" />
                        </svg>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between items-center lg:items-stretch">

                        {/* Left Column: Content */}
                        <div className="lg:w-[55%] flex flex-col justify-center relative z-10 w-full lg:py-12">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Flush About me pill */}
                                <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] text-black font-black tracking-tight font-inter text-4xl md:text-5xl lg:text-6xl px-8 md:px-12 py-5 lg:py-6 rounded-r-[3rem] inline-block mb-12 -ml-8 md:-ml-14 lg:-ml-20 shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                                    About me.
                                </div>

                                {/* Text Paragraph */}
                                <div className="space-y-6">
                                    <p className="text-gray-300 font-inter text-base md:text-lg leading-relaxed max-w-xl">
                                        I enjoy working through problems that don’t have obvious answers. Most of my time goes into figuring things out whether it’s understanding how something works under the hood or building it from scratch until it feels right.
                                    </p>
                                    <p className="text-gray-300 font-inter text-base md:text-lg leading-relaxed max-w-xl">
                                        I’m drawn to systems, logic, and clean structure, but I also care about how things look and feel when someone actually uses them. Lately, I’ve been focusing on improving my problem-solving skills and building projects that reflect that process.
                                    </p>
                                </div>
                            </motion.div>

                        </div>

                        {/* Right Column: Image */}
                        <div className="lg:w-[45%] flex items-center justify-center lg:justify-end relative z-10 w-full mt-12 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative w-full max-w-sm lg:max-w-md aspect-[3/4]"
                            >
                                {/* Image Pill Shape */}
                                <div className="w-full h-full rounded-t-[10rem] rounded-b-[10rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-[0_0_50px_rgba(255,106,0,0.1)] relative group isolate">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                        alt="Tarun Kumar"
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                                    />
                                    {/* Subtle gradient overlay to blend gently with the dark theme */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none mix-blend-overlay z-10" />
                                </div>

                                {/* Background ambient glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF6A00]/10 blur-[80px] rounded-[10rem] -z-10 opacity-60" />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
