"use client";
import React from "react";
import { cn } from '@/components/fancy/cn.jsx';
import clsx from "clsx";

export const RainbowButton = React.forwardRef(({ type, children, className, ...props }, ref) => {



  const getClasses = (type) => {
    switch (type) {
      case "scas":
        return ("rcs-scas leading-tight font-['EXO']  font-[550]")
        break;
      case "tri":
        return ("rcs-tri leading-tight font-['EXO']  font-[550]")
      case'flik':
        return ("rcs-flik leading-tight font-['EXO']  font-[550]")
      default:
        break;

        return ('')
    }
  }

  return (
    <button
      ref={ref}
      className={cn(
        "group w-fit mt-3 mb-1 relative inline-flex h-fit animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-3 py-1.5 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        // before styles
        "before:absolute  before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-4/5 before:-translate-x-1/2 ",
        // light mode colors
        // "rcs-scas",
        // dark mode colors
        className + " " +
        // "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        getClasses(type),
      )}
      {...props}
    >
      {children}
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";

// background-image: linear-gradient(90deg, hsl(315.18deg 100% 63%), hsl(40.84deg 100% 63%), hsl(303deg 100% 63%));
// }