'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const RevealOverlay = () => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 2000) // Duration slightly longer than animation to ensure it's removed
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none flex overflow-hidden">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    transition={{
                        duration: 0.9,
                        ease: [0.645, 0.045, 0.355, 1], // easeInOut approximation
                        delay: i * 0.06,
                    }}
                    className="h-full bg-[#0F172A]"
                    style={{ width: '12.5%' }}
                />
            ))}
        </div>
    )
}

export default RevealOverlay
