"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const blobRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
        };

        const updatePosition = () => {
            if (blobRef.current) {
                // Smooth interpolation (lerp)
                pos.current.x += (target.current.x - pos.current.x) * 0.1;
                pos.current.y += (target.current.y - pos.current.y) * 0.1;

                blobRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(updatePosition);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        const rafId = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={blobRef}
            className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan-400 blur-[80px] rounded-full pointer-events-none opacity-20 transition-opacity duration-500 z-0 will-change-transform"
            style={{
                background: "radial-gradient(circle, rgba(232, 74, 51, 0.4) 0%, rgba(255, 120, 0, 0.1) 50%, transparent 70%)",
                top: 0,
                left: 0,
            }}
        />
    );
}
