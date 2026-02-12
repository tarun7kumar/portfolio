"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./ui/ios-pointer";


const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "glass border-white/5 bg-background-dark/80"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Magnetic>
                        <Link
                            href="/"
                            className="flex-shrink-0 group relative z-50 block"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            <span
                                className="text-3xl font-montserrat font-black tracking-[-1px] text-white"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                tK<span className="text-vibrant-orange transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
                            </span>
                        </Link>
                    </Magnetic>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <Magnetic key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors relative group font-dm-sans block"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-orange transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-dm-sans"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
