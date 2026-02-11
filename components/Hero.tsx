"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Animation */}
            <HeroBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                    >
                        <span className="text-gray-300 text-xs font-semibold tracking-wider flex items-center gap-3 uppercase font-display">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Open to work and collaborations
                        </span>
                    </motion.div>

                    {/* Title */}
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-none"
                        >
                            <span className="font-space font-bold block md:inline">Tarun</span>
                            <span className="font-space font-bold text-vibrant-orange md:ml-4 block md:inline">
                                Kumar.
                            </span>
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light tracking-wide font-space"
                    >
                        Engineering student focused on systems, data, and reliability{" "}
                        <span className="text-white/20 mx-3"></span>
                    </motion.p>

                    {/* Text CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-8 sm:items-center"
                    >
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 text-white/90 font-medium text-lg hover:text-vibrant-orange transition-colors"
                        >
                            Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 font-medium text-lg hover:text-white transition-colors relative group"
                        >
                            Resume
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
