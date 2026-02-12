"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Context
interface PointerContextType {
    isHovering: boolean;
    setIsHovering: (hovering: boolean) => void;
    hoveredElementBounds: DOMRect | null;
    setHoveredElementBounds: (bounds: DOMRect | null) => void;
}

const PointerContext = createContext<PointerContextType>({
    isHovering: false,
    setIsHovering: () => { },
    hoveredElementBounds: null,
    setHoveredElementBounds: () => { },
});

export const usePointer = () => useContext(PointerContext);

// Provider
export const PointerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredElementBounds, setHoveredElementBounds] = useState<DOMRect | null>(null);

    return (
        <PointerContext.Provider value={{ isHovering, setIsHovering, hoveredElementBounds, setHoveredElementBounds }}>
            <IOSCursor />
            {children}
        </PointerContext.Provider>
    );
};

// Cursor Component
const IOSCursor = () => {
    const { isHovering, hoveredElementBounds } = usePointer();
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring for movement
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Default cursor styling
    const [cursorConfig, setCursorConfig] = useState({
        width: 16,
        height: 16,
        radius: "50%",
        opacity: 1, // Start visible to debug
        backgroundColor: "rgba(255, 255, 255, 0.8)" // Default white dot
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update physical mouse position
            if (!isHovering) {
                mouseX.set(e.clientX - 8);
                mouseY.set(e.clientY - 8);
                setCursorConfig(prev => ({ ...prev, opacity: 1 }));
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isHovering, mouseX, mouseY]);


    useEffect(() => {
        if (isHovering && hoveredElementBounds) {
            // Snap to element with padding
            const paddingX = 24;
            const paddingY = 12;
            mouseX.set(hoveredElementBounds.left - paddingX / 2);
            mouseY.set(hoveredElementBounds.top - paddingY / 2);

            setCursorConfig({
                width: hoveredElementBounds.width + paddingX,
                height: hoveredElementBounds.height + paddingY,
                radius: "16px", // Softer radius
                opacity: 1, // Keep container visible
                backgroundColor: "white" // White for difference blend
            });
        } else {
            // Reset to dot
            setCursorConfig({
                width: 16, // Dot size
                height: 16,
                radius: "50%",
                opacity: 1,
                backgroundColor: "white" // White for difference blend
            });
        }
    }, [isHovering, hoveredElementBounds, mouseX, mouseY]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[100]" // Elevated z-index for visibility
            style={{
                x,
                y,
                mixBlendMode: "difference" // Invert colors underlying
            }}
            animate={{
                width: cursorConfig.width,
                height: cursorConfig.height,
                borderRadius: cursorConfig.radius,
                opacity: cursorConfig.opacity,
                backgroundColor: "white" // Always white for difference blending
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 28,
                borderRadius: { duration: 0.2 } // Cleaner morph
            }}
        />
    );
};


// Magnetic Wrapper
export const Magnetic = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setIsHovering, setHoveredElementBounds } = usePointer();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Magnetic pull spring
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (ref.current) {
            // Capture bounds immediately
            const rect = ref.current.getBoundingClientRect();
            setHoveredElementBounds(rect);
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setHoveredElementBounds(null);
        x.set(0);
        y.set(0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (ref.current) {
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Calculate pull intensity
            const intensity = 0.4;
            const pullX = (e.clientX - centerX) * intensity;
            const pullY = (e.clientY - centerY) * intensity;

            x.set(pullX);
            y.set(pullY);

            // Optional: Update bounds if the element itself moves, but keeping it simple prevents jitter
            // setHoveredElementBounds(ref.current.getBoundingClientRect());
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ x: springX, y: springY }}
            className={cn("relative inline-block z-50", className)} // z-50 ensures it stays ABOVE the cursor (z-40)
        >
            {children}
        </motion.div>
    );
};
