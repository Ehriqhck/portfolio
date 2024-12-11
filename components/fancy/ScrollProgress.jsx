'use client';

import { motion, SpringOptions, useScroll, useSpring } from "framer-motion";
import { cn } from '@/components/fancy/cn.jsx';
import { RefObject } from 'react';



const DEFAULT_SPRING_OPTIONS = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: containerRef?.current !== null,
  });

  const scaleX = useSpring(scrollYProgress, {
    ...(springOptions ?? DEFAULT_SPRING_OPTIONS),
  });

  return (
    <motion.div
      className={cn('inset-x-0 top-0 min-h-1 min-w-1 origin-top', className)}
      style={{
        scaleX,
      }}
    />
  );
}
