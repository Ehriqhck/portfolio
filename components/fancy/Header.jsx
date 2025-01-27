"use client";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
import {MenuNav} from '@components/fancy/MenuNav.jsx'
function useBoundedScroll(threshold) {
    let { scrollY } = useScroll();
    let scrollYBounded = useMotionValue(0);
    let scrollYBoundedProgress = useTransform(
        scrollYBounded,
        [0, threshold],
        [0, 1]
    );

    useEffect(() => {
        return scrollY.on("change", (current) => {
            let previous = scrollY.getPrevious();
            let diff = current - previous;
            let newScrollYBounded = scrollYBounded.get() + diff;

            scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
        });
    }, [threshold, scrollY, scrollYBounded]);

    return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
    let { scrollYBoundedProgress } = useBoundedScroll(200);
    let scrollYBoundedProgressDelayed = useTransform(
        scrollYBoundedProgress,
        [0, 0.75, 1],
        [0, 0, 1]
    );
    let [step, setStep] = useState(1);

    return (
        <>
        <div className="mx-auto z-[100] flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">


            <div className=" flex-1 overflow-y-scroll">
                <motion.header
                    style={{
                        height: useTransform(
                            scrollYBoundedProgressDelayed,
                            [0, 1],
                            [125, 50]
                        ),
                        // backgroundColor: useMotionTemplate`rgb(255 255 255 / ${useTransform(
                        //     scrollYBoundedProgressDelayed,
                        //     [0, 1],
                        //     [1, 0.1]
                        // )})`,
                    }}
                    className="fixed inset-x-0 flex "
                >

                    <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">

                        <motion.div 
                         style={{
                            opacity: useTransform(
                                scrollYBoundedProgressDelayed,
                                [0, 1],
                                [1, 0]
                            ),
                        }}
                        className="button-scas  relative flex  w-full items-center justify-center  border-2 font-semibold">
                            <div className="flex h-fit w-full text-nowrap  flex-col text-left  ">
                                <span className=" flex flex-col mr-24 ml-[27px]  ">
                                    <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
                                    <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
                                    <div className=" flex w-full my-[7px] ">
                                        {/* <FigmaIcon height='25px' /> */}
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


                        <motion.p
                            style={{
                                scale: useTransform(
                                    scrollYBoundedProgressDelayed,
                                    [0, 1],
                                    [1, 0.9]
                                ),
                            }}
                            className="flex origin-left items-center text-xl font-semibold uppercase"
                        >
                            <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">
                                The
                            </span>
                            <span className="-ml-1 text-2xl tracking-[-.075em]">
                                Daily Bugle
                            </span>
                        </motion.p>
                        <motion.nav
                            style={{
                                opacity: useTransform(
                                    scrollYBoundedProgressDelayed,
                                    [0, 1],
                                    [1, 0]
                                ),
                            }}
                            className="flex space-x-4 text-sm font-medium text-slate-400"
                        >
                            <a href="#">News</a>
                            <a href="#">Sports</a>
                            <a href="#">Culture</a>
                        </motion.nav>
                    </div>
                </motion.header>

       
            </div>
        </div>        </>

    );
}

let clamp = (number, min, max) =>
    Math.min(Math.max(number, min), max);
