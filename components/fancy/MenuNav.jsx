"use client"
import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(2em at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const MenuNav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const staggerVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };
    
const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 10, velocity: -100 }
      }
    },
    closed: {
      y: 500,
      opacity: 0,
      transition: {
        y: { stiffness: 10 }
      }
    }
  };
    return (
        <motion.nav
            className="z-[100]"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >

            <motion.div className="fixed top-0 left-0 bottom-0 w-screen    menuNavBg" variants={sidebar} >

                <div className="  w-full h-full blur-background mix-blend-multiply flex flex-col ">

                    <motion.div
                        key={0}
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-scas  relative flex  w-full   items-center justify-center  border-2 font-semibold">

                        <div className="flex h-fit w-full text-nowrap  flex-col text-left  ">
                            <span className=" flex flex-col mr-24 ml-[27px]  ">
                                <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
                                <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
                                <div className=" flex w-full my-[7px] ">
                                    <FigmaIcon height='25px' />
                                </div>
                            </span>


                            <div class="nav-menu-swatch   w-full h-[22px] flex flex-row">
                                <div class="w-full h-full bg-[#4b0035]">
                                </div>
                                <div class="w-[70%] h-full bg-[#5d60eb] "></div>
                                <div class="w-[30%] h-full bg-[#f1f0ee] "></div>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div
                        key={1}
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-scas  relative flex   w-full   items-center justify-center  border-2 font-semibold">

                        <div className="flex h-fit w-full text-nowrap  flex-col text-left  ">
                            <span className=" flex flex-col mr-24 ml-[27px]  ">
                                <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
                                <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
                                <div className=" flex w-full my-[7px] ">
                                    <FigmaIcon height='25px' />
                                </div>
                            </span>


                            <div class="nav-menu-swatch   w-full h-[22px] flex flex-row">
                                <div class="w-full h-full bg-[#4b0035]">
                                </div>
                                <div class="w-[70%] h-full bg-[#5d60eb] "></div>
                                <div class="w-[30%] h-full bg-[#f1f0ee] "></div>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div
                        key={2}
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-scas  relative flex  w-full   items-center justify-center  border-2 font-semibold">

                        <div className="flex h-fit w-full text-nowrap  flex-col text-left  ">
                            <span className=" flex flex-col mr-24 ml-[27px]  ">
                                <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
                                <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
                                <div className=" flex w-full my-[7px] ">
                                    <FigmaIcon height='25px' />
                                </div>
                            </span>


                            <div class="nav-menu-swatch   w-full h-[22px] flex flex-row">
                                <div class="w-full h-full bg-[#4b0035]">
                                </div>
                                <div class="w-[70%] h-full bg-[#5d60eb] "></div>
                                <div class="w-[30%] h-full bg-[#f1f0ee] "></div>
                            </div>
                        </div>

                    </motion.div>
                    {/* <motion.ul variants={variants}>
                        {[0, 1, 2, 3, 4].map((i) => (
                            <MenuItem i={i} key={i} />
                        ))}
                    </motion.ul> */}
                    {/* <Navigation /> */}

                </div>
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
