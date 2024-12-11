'use client';
import { ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from 'framer-motion';

// interface InViewProps {
//   children: ReactNode;
//   variants?: {
//     hidden: Variant;
//     visible: Variant;
//   };
//   transition?: Transition;
//   viewOptions?: UseInViewOptions;
// }

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions, styling
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      viewport={{ amount: 0.8 }}
className={styling + ''}
    >
      {children}
    </motion.div>
  );
}
