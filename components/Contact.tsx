"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./ui/ios-pointer";
import { FloatingDock } from "./ui/floating-dock";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-transparent">
            
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    {/* Folder Tab */}
                    <div className="w-32 md:w-48 h-6 md:h-8 bg-[#111111] rounded-t-xl relative z-20 translate-y-1"></div>
                    
                    {/* Folder Body */}
                    <div className="w-full bg-[#111111] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative z-10">
                        
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h4 className="text-[#FF5733] font-bold text-sm tracking-widest uppercase mb-4 font-inter">Let's Get Connected</h4>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F4EBD9] font-inter tracking-tighter">
                                Let's Build Something Together
                            </h2>
                        </div>

                        {/* Split Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            
                            {/* Left Side: Contact Info */}
                            <div className="flex flex-col justify-center space-y-12 lg:pr-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#F4EBD9] mb-4 font-inter">Let's Talk</h3>
                                    <p className="text-[#FFFFFF]/80 font-inter mb-6 leading-relaxed">
                                        Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
                                    </p>
                                    <Magnetic>
                                        <a
                                            href="mailto:tkofficial2004@gmail.com"
                                            className="inline-block text-xl md:text-2xl font-bold text-[#FF5733] hover:text-[#E64C2B] transition-colors border-b border-[#FF5733]/30 hover:border-[#E64C2B] pb-1 font-inter"
                                        >
                                            tkofficial2004@gmail.com
                                        </a>
                                    </Magnetic>
                                </div>

                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#FFFFFF]/60 font-semibold mb-6 font-inter">Connect</h3>
                                    <div className="flex justify-start">
                                        <FloatingDock
                                            items={[
                                                { title: "GitHub", icon: <Github className="w-full h-full" />, href: "https://github.com/tarun7kumar" },
                                                { title: "LinkedIn", icon: <Linkedin className="w-full h-full" />, href: "https://www.linkedin.com/in/tarun7kumar/" },
                                            ]}
                                            desktopClassName="bg-transparent border-none px-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="bg-transparent border border-[#FFFFFF]/20 rounded-2xl p-6 md:p-8">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-[#F4EBD9] text-sm font-bold mb-2 font-inter">Your Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Who am I speaking with?" 
                                            className="w-full bg-[#F4EBD9] text-[#000000] placeholder-[#000000]/40 rounded-lg px-4 py-3 font-inter outline-none focus:ring-2 focus:ring-[#FF5733] transition-all"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-[#F4EBD9] text-sm font-bold mb-2 font-inter">Email</label>
                                        <input 
                                            type="email" 
                                            placeholder="Where should I send the magic?" 
                                            className="w-full bg-[#F4EBD9] text-[#000000] placeholder-[#000000]/40 rounded-lg px-4 py-3 font-inter outline-none focus:ring-2 focus:ring-[#FF5733] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#F4EBD9] text-sm font-bold mb-2 font-inter">Company Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Organisation Name" 
                                            className="w-full bg-[#F4EBD9] text-[#000000] placeholder-[#000000]/40 rounded-lg px-4 py-3 font-inter outline-none focus:ring-2 focus:ring-[#FF5733] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#F4EBD9] text-sm font-bold mb-2 font-inter">Your Message</label>
                                        <textarea 
                                            placeholder="Tell me everything. I love context." 
                                            className="w-full bg-[#F4EBD9] text-[#000000] placeholder-[#000000]/40 rounded-lg px-4 py-3 font-inter outline-none focus:ring-2 focus:ring-[#FF5733] transition-all h-32 resize-none"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full bg-[#FF5733] text-white font-bold py-4 rounded-lg hover:bg-[#E64C2B] transition-all font-inter"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                        
                        <footer className="mt-20 pt-8 border-t border-[#FFFFFF]/10 text-center text-[#FFFFFF]/40 text-sm uppercase tracking-[0.2em] font-medium font-inter">
                            <p>© {new Date().getFullYear()} Tarun Kumar. Crafted with Heritage & Tech.</p>
                        </footer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
