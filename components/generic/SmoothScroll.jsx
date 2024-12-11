import React from 'react'
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const SmoothScroll = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.05 })
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    const y = useTransform(smoothProgress, value => {
        return value * -(contentHeight - window.innerHeight);
    });

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight)
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef, children]);

    return <>
        <div style={{ height: contentHeight }}

        />

        <motion.div
            className="scrollBody  w-full" style={{ y }}

            ref={contentRef}
        >
            {children}
        </motion.div>
    </>
}

export default SmoothScroll