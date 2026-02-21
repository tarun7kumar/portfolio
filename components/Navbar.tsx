"use client";

import Link from "next/link";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 h-20 px-8 flex items-center justify-between bg-transparent">
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
                <span className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">
                    tK<span className="text-[#14adff] transition-transform duration-300 group-hover:scale-[1.15] inline-block">.</span>
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-12">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
