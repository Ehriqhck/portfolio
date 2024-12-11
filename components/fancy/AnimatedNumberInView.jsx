'use client';
import { AnimatedNumber } from 'components/fancy/AnimatedNumber.jsx';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function AnimatedNumberInView() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(500);
  }

  return (
    <div className='flex w-full items-center justify-center ' ref={ref}>
      
      <AnimatedNumber
        className="font-[800] text-gradient-display text-[60px]  self-center  inline-flex tracking-[0.035em] justify-center text-center"
        springOptions={{
          bounce: 0,
          duration: 10000,
        }}
        value={value}
      />
      <p         className="font-[800] whitespace-pre	 text-gradient-display  self-center  inline-flex tracking-[0.035em] justify-center text-center"
      >+ Supported Keybinds  </p>
     
    </div>
  );
}