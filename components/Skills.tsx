"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./ui/ios-pointer";
import ScrollRevealText from "./ScrollRevealText";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "C", icon: "devicon-c-plain" },
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Java", icon: "devicon-java-plain" },
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "scikit-learn", icon: "devicon-python-plain" },
            { name: "Pandas", icon: "devicon-pandas-plain" },
            { name: "NumPy", icon: "devicon-numpy-plain" },
            { name: "Matplotlib", icon: "devicon-python-plain" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "React.js", icon: "devicon-react-original" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        ]
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Classification", icon: "devicon-python-plain" },
            { name: "Feature Scaling", icon: "devicon-code-plain" },
            { name: "EDA", icon: "devicon-pandas-plain" },
            { name: "Outlier Analysis", icon: "devicon-python-plain" },
        ]
    },
    {
        title: "Core Concepts",
        skills: [
            { name: "DSA", icon: "devicon-cplusplus-plain" },
            { name: "Computer Networks", icon: "devicon-linux-plain" },
            { name: "Probability", icon: "devicon-code-plain" },
        ]
    },
    {
        title: "Engineering Tools",
        skills: [
            { name: "Multisim", icon: "devicon-linux-plain" },
            { name: "Proteus", icon: "devicon-arduino-plain" },
            { name: "ModelSim", icon: "devicon-code-plain" },
            { name: "Quartus", icon: "devicon-code-plain" },
            { name: "Verilog", icon: "devicon-code-plain" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-transparent">
            {/* Background "SKILLS" Text */}
            <div className="absolute top-150 right-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block z-0">
                <h2 className="text-[12rem] font-black text-[#FFFFFF]/15 tracking-tighter leading-none font-display -rotate-90 whitespace-nowrap">
                    SKILLS
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="text-left">
                        <h2 className="text-4xl md:text-6xl font-inter font-extrabold text-[#000000] leading-tight tracking-tighter mb-8">
                            Skills<span className="text-[#FF5733]">.</span>
                        </h2>
                        <div className="flex justify-start">
                            <div className="w-16 h-1.5 bg-[#FF5733] mb-8" />
                        </div>
                        <ScrollRevealText
                            text="A comprehensive toolkit for building scalable, high-performance applications."
                            className="text-[#000000]/60 text-lg font-inter max-w-2xl"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-white p-5 sm:p-8 rounded-2xl border border-[#FFFFFF]/30 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-5 sm:mb-8 border-l-4 border-[#FF5733] pl-4 font-inter">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2.5 sm:gap-4">
                                {category.skills.map((skill, index) => (
                                    <Magnetic key={index}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 sm:gap-3 bg-[#F4EBD9] text-[#000000] px-3.5 sm:px-5 py-2 sm:py-3 rounded-full border border-transparent hover:border-[#FF5733]/30 hover:bg-white hover:shadow-sm cursor-pointer transition-all duration-300 group"
                                        >
                                            <i className={`${skill.icon} text-xl group-hover:text-[#FF5733] transition-colors duration-300`}></i>
                                            <span className="font-medium text-sm font-inter group-hover:text-[#000000] transition-colors duration-300">{skill.name}</span>
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
