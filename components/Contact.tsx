"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./ui/ios-pointer";

export default function Contact() {
    return (
        <section id="contact" className="py-32 border-t border-white/5 relative overflow-hidden bg-[#0A0A0A]">

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display">Let's Build Something Together</h2>
                    <p className="text-gray-500 mb-12 text-xl font-light font-inter max-w-2xl mx-auto">
                        Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <Magnetic>
                        <a
                            href="mailto:tkofficial2004@gmail.com"
                            className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold text-[#FF6A00] transition-all border-b-2 border-[#FF6A00] hover:text-[#E65C00] hover:border-[#E65C00] pb-2 mb-20 font-display"
                        >
                            <Mail className="w-8 h-8 md:w-10 md:h-10" />
                            tkofficial2004@gmail.com
                        </a>
                    </Magnetic>

                    <div className="flex justify-center gap-12 mb-20">
                        {[
                            { icon: Github, href: "https://github.com", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                        ].map((social, index) => (
                            <Magnetic key={social.label}>
                                <Link
                                    href={social.href}
                                    className="text-gray-500 hover:text-[#E65C00] transition-all transform hover:scale-110 hover:-translate-y-1 block"
                                >
                                    <social.icon size={32} strokeWidth={1.5} />
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    <footer className="text-gray-600 text-sm uppercase tracking-[0.2em] font-medium font-display">
                        <p>© {new Date().getFullYear()} Tarun Kumar. Crafted with Heritage & Tech.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
