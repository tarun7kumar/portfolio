"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 h-20 px-8 md:px-16 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-[#0B1120]/70 backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]" : "bg-transparent border-b border-transparent"
            }`}>
            {/* Logo */}
            <Link
                href="/"
                className="group flex items-center"
                onClick={(e) => {
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}
            >
                <span className="text-3xl font-poppins font-extrabold tracking-tight text-[#F8FAFC]">
                    tK<span className="text-[#22D3EE] transition-transform duration-300 group-hover:scale-[1.15] inline-block">.</span>
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-12">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-dm-sans font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
