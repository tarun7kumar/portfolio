"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./ui/ios-pointer";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "Java", icon: "devicon-java-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Python", icon: "devicon-python-plain" },
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "React.js", icon: "devicon-react-original" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express.js", icon: "devicon-express-original" },
        ]
    },
    {
        title: "Databases & Hosting",
        skills: [
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "Vercel", icon: "devicon-vercel-original" },
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitHub", icon: "devicon-github-original" },
            { name: "VS Code", icon: "devicon-vscode-plain" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-[#000000]">
            {/* Background "SKILLS" Text */}
            <div className="absolute top-150 right-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block z-0">
                <h2 className="text-[12rem] font-black text-white/[0.03] tracking-tighter leading-none font-display -rotate-90 whitespace-nowrap">
                    SKILLS
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex justify-start">
                        <div className="text-gray-500 text-xs tracking-[0.3em] font-medium mb-8 border-r border-white/20 pr-4 uppercase text-right">
                            02 // Expertise
                        </div>
                    </div>

                    <div className="text-left">
                        <h2 className="text-4xl md:text-6xl font-inter font-extrabold text-white leading-tight tracking-tighter mb-8">
                            what I <span className="text-[#FF6A00]">work_</span>with.
                        </h2>
                        <div className="flex justify-start">
                            <div className="w-16 h-1.5 bg-[#FF6A00] mb-8" />
                        </div>
                        <p className="flex justify-start text-gray-400 text-lg font-inter max-w-2xl ">
                            A comprehensive toolkit for building scalable, high-performance applications.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-[#FF6A00] pl-4 font-inter">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <Magnetic key={index}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-3 bg-white/5 text-gray-300 px-5 py-3 rounded-full border border-white/5 cursor-pointer transition-colors duration-300 group"
                                        >
                                            <i className={`${skill.icon} text-xl group-hover:text-[#E65C00] transition-colors duration-300`}></i>
                                            <span className="font-medium text-sm font-inter group-hover:text-white transition-colors duration-300">{skill.name}</span>
                                        </motion.div>
                                    </Magnetic>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
