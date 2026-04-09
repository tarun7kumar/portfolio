"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./ui/ios-pointer";
import ScrollRevealText from "./ScrollRevealText";

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
        <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background "SKILLS" Text */}
            <div className="absolute top-150 right-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block z-0">
                <h2 className="text-[12rem] font-black text-gray-100 tracking-tighter leading-none font-display -rotate-90 whitespace-nowrap">
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
                    <div className="text-left">
                        <h2 className="text-4xl md:text-6xl font-inter font-extrabold text-[#1A1A1A] leading-tight tracking-tighter mb-8">
                            Skills<span className="text-[#FF6A00]">.</span>
                        </h2>
                        <div className="flex justify-start">
                            <div className="w-16 h-1.5 bg-[#FF6A00] mb-8" />
                        </div>
                        <ScrollRevealText
                            text="A comprehensive toolkit for building scalable, high-performance applications."
                            className="text-gray-500 text-lg font-inter max-w-2xl"
                        />
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
                            className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 border-l-4 border-[#FF6A00] pl-4 font-inter">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <Magnetic key={index}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-3 bg-[#F5F5F5] text-gray-700 px-5 py-3 rounded-full border border-transparent hover:border-[#FF6A00]/30 hover:bg-white hover:shadow-sm cursor-pointer transition-all duration-300 group"
                                        >
                                            <i className={`${skill.icon} text-xl group-hover:text-[#FF6A00] transition-colors duration-300`}></i>
                                            <span className="font-medium text-sm font-inter group-hover:text-[#1A1A1A] transition-colors duration-300">{skill.name}</span>
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
