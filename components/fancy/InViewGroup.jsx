'use client';
import { ReactNode, useEffect, useState } from 'react';
import {
  motion, Variants, Transition,
  useInView, UseInViewOptions,


} from 'framer-motion';
import { useRef } from 'react';
import React from 'react';

// type PresetType =
//   | 'fade'
//   | 'slide'
//   | 'scale'
//   | 'blur'
//   | 'blur-slide'
//   | 'zoom'
//   | 'flip'
//   | 'bounce'
//   | 'rotate'
//   | 'swing';

// type AnimatedGroupProps = {
//   children: ReactNode;
//   className?: string;
//   variants?: {
//     container?: Variants;
//     item?: Variants;
//   };
//   preset?: PresetType;
// };


const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 300, damping: 8 },
      },
    },
  },
};

const AnimatedGroup = () => ({
  children,
  className,
  variants,
  preset,
  transition,
  viewOptions,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const [expand, setexpand] = useState(false);
  const [layoutId, setlayoutId] = useState(null);
  const expander = (id) => {
    if (expand !== true) {
      setlayoutId(id);
      setexpand(true);
    }
  };

  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (

    <motion.div>

      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}

        >
          {expand && child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AnimatedGroup;
