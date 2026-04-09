"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
    /** Scroll offset range — [start, end] */
    scrollOffset?: [string, string];
    /** Base opacity for unrevealed words */
    baseOpacity?: number;
}

function Word({ 
    word, 
    index, 
    totalWords, 
    scrollYProgress, 
    baseOpacity 
}: { 
    word: string; 
    index: number; 
    totalWords: number; 
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    baseOpacity: number;
}) {
    const start = index / totalWords;
    const end = (index + 1) / totalWords;
    const opacity = useTransform(scrollYProgress, [start, end], [baseOpacity, 1]);

    return (
        <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
            {word}
        </motion.span>
    );
}

export default function ScrollRevealText({
    text,
    className = "",
    as: Tag = "p",
    scrollOffset = ["start 0.9", "start 0.3"],
    baseOpacity = 0.15,
}: ScrollRevealTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset as any,
    });

    const words = text.split(" ");

    return (
        <Tag ref={ref as any} className={`${className} flex flex-wrap`}>
            {words.map((word, i) => (
                <Word
                    key={i}
                    word={word}
                    index={i}
                    totalWords={words.length}
                    scrollYProgress={scrollYProgress}
                    baseOpacity={baseOpacity}
                />
            ))}
        </Tag>
    );
}
