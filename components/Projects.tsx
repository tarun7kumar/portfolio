"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./ui/ios-pointer";

const projects = [
    {
        title: "Heart Attack Risk Prediction System",
        description: "A machine learning-based prediction system designed to analyze key medical attributes and estimate the risk of heart-related conditions. Built to explore how data-driven models can assist in early detection.",
        tech: ["Python", "Scikit-learn", "Pandas", "ML"],
        github: "https://github.com/tarun7kumar/heart-attack-risk-prediction",
        highlights: [
            "End-to-end ML workflow from data to prediction",
            "Data preprocessing and feature handling",
            "Model training and evaluation",
            "Real-world health risk prediction use case"
        ]
    },
    {
        title: "Portfolio Website",
        description: "A modern, high-performance developer portfolio designed to establish a strong personal brand. Built with a focus on clean aesthetics, smooth interactions, and type-safe code.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "#",
        github: "https://github.com/tarun7kumar/portfolio-website",
        highlights: [
            "Custom design system with Tailwind CSS",
            "Type-safe implementation using TypeScript",
            "Orchestrated animations with Framer Motion",
            "Responsive and accessible architecture"
        ]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-[#000000]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-left"
                >
                    <div className="flex justify-start">
                        <div className="text-gray-500 text-xs tracking-[0.3em] font-medium mb-8 border-l border-white/20 pl-4 uppercase">
                            03 // Learning by Building
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-inter leading-tight tracking-tighter">
                        Things I’ve <span className="text-[#FF6A00]">Built.</span>
                    </h2>
                    <div className="flex justify-start">
                        <div className="w-16 h-1.5 bg-[#FF6A00] mb-8" />
                    </div>
                    <p className="text-gray-400 text-lg font-inter max-w-2xl leading-relaxed">
                        Projects I built while learning how real systems behave.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">

                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-bold text-white font-inter tracking-tight group-hover:text-[#E65C00] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed font-inter max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    {project.highlights && (
                                        <ul className="space-y-2 mb-6">
                                            {project.highlights.map((highlight, hIndex) => (
                                                <li key={hIndex} className="flex items-center text-gray-500 text-sm font-inter">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mr-3" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-gray-500 uppercase tracking-wider">
                                        {project.tech.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-6 pt-2">
                                        {project.link && (
                                            <Magnetic>
                                                <Link
                                                    href={project.link}
                                                    className="inline-flex items-center gap-2 text-white font-semibold font-inter hover:text-[#E65C00] transition-colors group/link"
                                                >
                                                    View Project <ArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </Link>
                                            </Magnetic>
                                        )}
                                        <Magnetic>
                                            <Link
                                                href={project.github}
                                                className="inline-flex items-center gap-2 text-gray-500 font-medium font-inter hover:text-white transition-colors"
                                            >
                                                <Github size={18} /> Code
                                            </Link>
                                        </Magnetic>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            {index !== projects.length - 1 && (
                                <div className="w-full h-px bg-white/5 mt-24" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <Magnetic>
                        <Link
                            href="https://github.com/tarun7kumar"
                            target="_blank"
                            className="inline-block px-8 py-4 border-2 border-[#FF6A00] text-[#FF6A00] font-bold font-inter rounded-full hover:bg-[rgba(255,106,0,0.1)] transition-all duration-300"
                        >
                            View More on GitHub
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}
