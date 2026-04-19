"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./ui/ios-pointer";

const projects = [
    {
        title: "Heart Disease Prediction using Machine Learning",
        date: "Nov 2025 – Dec 2025",
        description: "Engineered an end-to-end heart disease classification pipeline on a clinical dataset of 303 samples, applying EDA and preprocessing techniques to improve data quality across 14 features.",
        tech: ["Python", "scikit-learn", "ML"],
        github: "https://github.com/tarun7kumar/heart-attack-risk-prediction",
        highlights: [
            "Benchmarked 4 ML models (Random Forest, SVM, MLP, XGBoost) with hyperparameter tuning",
            "Achieved 83.6% accuracy and 96.9% recall using Random Forest",
            "Minimized false negatives for real-world clinical screening applications"
        ]
    },
    {
        title: "AI-based Network Traffic Classification",
        date: "May 2025 – Jun 2025",
        description: "Developed a lightweight preprocessing and feature extraction pipeline to classify network traffic types (HTTP, DNS, FTP) using packet-level features across multiple protocols.",
        tech: ["Python", "scikit-learn", "Networking"],
        github: "https://github.com/tarun7kumar/network-traffic-classification",
        highlights: [
            "Benchmarked 2 models (Random Forest, CNN) to compare efficiency and accuracy",
            "Achieved optimal classification performance through cross-validated evaluation",
            "Optimized for real-time traffic classification on network packet data"
        ]
    },
    {
        title: "Autocomplete System using Trie Data Structure",
        date: "Feb 2025 – Mar 2025",
        description: "Developed a Trie-based autocomplete engine processing a 37K+ word dictionary, enabling real-time prefix search with sub-millisecond query retrieval.",
        tech: ["C++", "Data Structures", "Algorithms"],
        github: "https://github.com/tarun7kumar/trie-autosuggestion",
        highlights: [
            "Implemented top-K suggestion ranking at each Trie node for relevant completions",
            "Optimized traversal logic to surface results while minimizing redundant visits",
            "Designed efficient data structure pipeline for instant word suggestions"
        ]
    },
    {
        title: "Portfolio Website",
        date: "2024 – Present",
        description: "A modern, high-performance developer portfolio designed to establish a strong personal brand. Built with a focus on clean aesthetics, smooth interactions, and type-safe code.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://tarunk-portfolio.vercel.app/",
        github: "https://github.com/tarun7kumar/portfolio",
        highlights: [
            "Custom design system with Tailwind CSS",
            "Type-safe implementation using TypeScript",
            "Orchestrated animations with Framer Motion"
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
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#F4EBD9] mb-8 font-inter leading-tight tracking-tighter">
                        Things I've <span className="text-[#FF5733]">Built.</span>
                    </h2>
                    <div className="flex justify-start">
                        <div className="w-16 h-1.5 bg-[#FF5733] mb-8" />
                    </div>
                    <p className="text-[#FFFFFF] text-lg font-inter max-w-2xl leading-relaxed">
                        Projects I built while learning how real systems behave.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-[#111111] border border-[#FFFFFF]/15 rounded-2xl p-8 md:p-12 hover:border-[#FFFFFF]/30 hover:bg-[#1A1A1A] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 relative z-10">

                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-3xl font-bold text-[#F4EBD9] font-inter tracking-tight group-hover:text-[#FF5733] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            {(project as any).date && (
                                                <span className="text-sm font-inter font-semibold text-[#FF5733] tracking-wider uppercase">
                                                    {(project as any).date}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[#FFFFFF]/80 text-lg leading-relaxed font-inter max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    {project.highlights && (
                                        <ul className="space-y-2 mb-6">
                                            {project.highlights.map((highlight, hIndex) => (
                                                <li key={hIndex} className="flex items-center text-[#F4EBD9]/60 text-sm font-inter">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] mr-3 shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-inter text-[#F4EBD9]/70 uppercase tracking-wider">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="bg-[#F4EBD9]/5 border border-[#FFFFFF]/15 px-3 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-6 pt-6">
                                        {project.link && (
                                            <Magnetic>
                                                <Link
                                                    href={project.link}
                                                    className="inline-flex items-center justify-center gap-2 bg-[#FF5733] text-white px-6 py-3 rounded-full font-bold font-inter hover:bg-[#E64C2B] hover:-translate-y-0.5 transition-all"
                                                >
                                                    View Project <ArrowUpRight size={18} />
                                                </Link>
                                            </Magnetic>
                                        )}
                                        <Magnetic>
                                            <Link
                                                href={project.github}
                                                className="inline-flex items-center gap-2 text-[#FFFFFF] font-medium font-inter hover:text-[#F4EBD9] transition-colors"
                                            >
                                                <Github size={18} /> Code
                                            </Link>
                                        </Magnetic>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Magnetic>
                        <Link
                            href="https://github.com/tarun7kumar"
                            target="_blank"
                            className="inline-block px-10 py-4 bg-transparent border border-[#FF5733] text-[#FF5733] font-bold font-inter rounded-full hover:bg-[rgba(255,87,51,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View More on GitHub
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}
