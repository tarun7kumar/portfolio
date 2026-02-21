"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden min-h-screen flex items-center bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Background "STORY" Text */}
                <div className="absolute top-1/2 right-35 -translate-y-1/2 select-none pointer-events-none hidden lg:block z-0">
                    <h2 className="text-[12rem] font-black text-white/[0.03] tracking-tighter leading-none font-display rotate-90 whitespace-nowrap">
                        STORY
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

                    {/* Text Content */}
                    <div className="md:col-span-6 lg:7 flex flex-col justify-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-gray-500 text-xs tracking-[0.3em] font-medium mb-6 border-l border-white/20 pl-4 uppercase font-display">
                                01 // Biography
                            </div>

                            <h2 className="text-4xl md:text-6xl font-inter font-black text-white leading-tight tracking-tighter mb-4">
                                about <span className="text-[#14adff]">ME.</span>
                            </h2>

                            {/* Refined Gradient Underline */}
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#14adff] to-transparent mb-8 rounded-full opacity-80" />

                            {/* Strong Subheading */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-display leading-snug">
                                Building reliable systems from the ground up.
                            </h3>

                            {/* Refined Paragraphs */}
                            <p className="text-gray-400 text-lg leading-relaxed font-inter font-light mb-6 max-w-xl">
                                I build to understand how systems truly work. As an engineering student, I focus on developing reliable and scalable web applications with a strong backend foundation.
                            </p>

                            <p className="text-gray-400 text-lg leading-relaxed font-inter font-light mb-6 max-w-xl">
                                I’ve worked on full-stack projects that strengthened my understanding of APIs, databases, and system architecture. I care about clean, maintainable code and building solutions that are practical and efficient.
                            </p>

                            <p className="text-gray-400 text-lg leading-relaxed font-inter font-light mb-8 max-w-xl">
                                Currently, I’m focused on backend development and cloud technologies, continuously improving my ability to design systems that scale.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image/Visual */}
                    <div className="md:col-span-6 lg:5 relative flex justify-center md:justify-end mt-12 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-sm aspect-[4/5]"
                        >
                            {/* Image Container with Grayscale & Soft Glow */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-[0_0_40px_rgba(20,173,255,0.15)]">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Tarun Kumar"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-40" />
                            </div>

                            {/* Subtle Decorative Frame */}
                            <div className="absolute top-5 -right-5 w-full h-full border border-white/5 rounded-2xl -z-10 hidden sm:block" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
