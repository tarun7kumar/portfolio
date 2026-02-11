"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Premium curve configurations
    // Starting from right side, flowing towards enter
    const lines = [
        // Group 1: Cyan-Blue spectrum
        { id: 1, d: "M 1600 100 C 1200 200, 800 100, 400 300", width: 1.2, opacity: 0.25, duration: 25, delay: 0, gradient: "grad1" },
        { id: 2, d: "M 1600 200 C 1300 300, 900 150, 500 400", width: 0.8, opacity: 0.15, duration: 30, delay: 2, gradient: "grad1" },
        { id: 3, d: "M 1600 300 C 1100 400, 700 200, 300 500", width: 1.5, opacity: 0.2, duration: 28, delay: 4, gradient: "grad2" },
        { id: 4, d: "M 1600 150 C 1250 100, 850 250, 450 150", width: 0.5, opacity: 0.1, duration: 32, delay: 1, gradient: "grad1" },

        // Group 2: Purple-Violet spectrum
        { id: 5, d: "M 1600 400 C 1150 500, 750 300, 350 600", width: 1.0, opacity: 0.2, duration: 27, delay: 3, gradient: "grad2" },
        { id: 6, d: "M 1600 500 C 1350 550, 950 400, 550 700", width: 0.7, opacity: 0.15, duration: 35, delay: 5, gradient: "grad2" },
        { id: 7, d: "M 1600 250 C 1200 350, 800 150, 400 450", width: 1.3, opacity: 0.22, duration: 29, delay: 1.5, gradient: "grad3" },
        { id: 8, d: "M 1600 600 C 1300 500, 900 650, 500 550", width: 0.6, opacity: 0.12, duration: 33, delay: 6, gradient: "grad3" },

        // Group 3: Accent lines (Lower/Higher)
        { id: 9, d: "M 1600 50 C 1100 150, 700 50, 300 200", width: 0.9, opacity: 0.18, duration: 31, delay: 2.5, gradient: "grad1" },
        { id: 10, d: "M 1600 700 C 1250 600, 850 750, 450 650", width: 1.1, opacity: 0.2, duration: 26, delay: 0.5, gradient: "grad2" },
        { id: 11, d: "M 1600 350 C 1050 250, 650 450, 250 350", width: 0.5, opacity: 0.1, duration: 34, delay: 4.5, gradient: "grad3" },
        { id: 12, d: "M 1600 450 C 1150 350, 750 550, 350 450", width: 1.4, opacity: 0.15, duration: 30, delay: 3.5, gradient: "grad1" }
    ];

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
            {/* Background blur for atmosphere */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-900/0 blur-3xl opacity-20" />

            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1440 800"
                preserveAspectRatio="xMaxYMid slice"
                style={{ filter: "blur(0.5px)" }}
            >
                <defs>
                    <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#00f2ea" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00c6ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#7f00ff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#e100ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#43e97b" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#38f9d7" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {lines.map((line) => (
                    <motion.path
                        key={line.id}
                        d={line.d}
                        stroke={`url(#${line.gradient})`}
                        strokeWidth={line.width}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1],
                            opacity: [0, line.opacity, line.opacity * 0.5],
                            d: [
                                line.d, // Start
                                line.d.replace(/(\d+)/g, (m) => (parseInt(m) + 50).toString()), // Offset 1
                                line.d // Return
                            ]
                        }}
                        transition={{
                            pathLength: { duration: 3, ease: "easeOut", delay: line.delay * 0.2 },
                            opacity: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: line.delay },
                            d: {
                                duration: line.duration,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                            }
                        }}
                    />
                ))}
            </svg>

            {/* Soft vignette to blend edges */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
        </div>
    );
}
