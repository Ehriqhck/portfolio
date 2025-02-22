"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from '@/components/fancy/cn.jsx';
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
// import {FeatureCarousel} from '@components/fancy/FeatureCarousel.jsx'
import { FeatureCarousel } from '@components/fancy/FeatureCarousel.tsx'

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--red-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const backgroundImg = [
    "linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgb(48 0 31 / 25%) 70%, rgb(174 12 164 / 0%)),linear-gradient(180deg, rgba(0, 34, 41, 0), #122634 90%), linear-gradient(180deg, hsla(0, 0%, 100%, 0), rgb(48 0 37 / 21%) 70%, rgb(21 12 174 / 0%)), radial-gradient(circle at 50% 100%, #3ad2bb17, #00427969), linear-gradient(30deg, #000e1ff2, #00091173 52%)')",
    " linear-gradient(180deg, rgba(0, 34, 41, 0), #670947 90%), linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgb(48 0 31 / 25%) 70%, rgb(174 12 164 / 0%)), linear-gradient(180deg, hsla(0, 0%, 100%, 0), rgb(48 0 37 / 21%) 70%, rgb(21 12 174 / 0%))')",
    "linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgb(48 0 31 / 25%) 70%, rgb(174 12 164 / 0%)),linear-gradient(180deg, rgba(0, 34, 41, 0), #122634 90%), linear-gradient(180deg, hsla(0, 0%, 100%, 0), rgb(48 0 37 / 21%) 70%, rgb(21 12 174 / 0%)), radial-gradient(circle at 50% 100%, #3ad2bb17, #00427969), linear-gradient(30deg, #000e1ff2, #00091173 52%), url('https://cdn.prod.website-files.com/60ed4aeb79e554d52f0d9608/6514ee3d4f98a9deb8cda352_bg%20compressed.jpg')",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    (<motion.div
      animate={{
        // backgroundImage: backgroundImg[activeCard % backgroundImg.length],
        // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen overflow-y-auto flex justify-center relative  h-full space-x-10 rounded-md p-10"
      ref={ref}>
      <div className="div relative flex items-start px-4 w-full h-full">
        <motion.div className="min-w-2xl w-full h-full"

        >

          {content.map((item, index) => (<>
            <div key={item.title + index} className={"my-20 h-full w-full" + ' '}
              animate={{
                backgroundImage: backgroundImg[activeCard % backgroundImg.length],
              }}
            >

              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-light2">
                {item.title}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-light2 font-['exo'] bg-red w-full mt-10">
                <p> {item.description} </p>
                {/* <div className="flex  w-full h-full text-nowrap  flex-col text-left ux-card-ciaan  rounded-xl overflow-hidden">
                  <span className=" flex flex-col mr-24 ml-[27px] h-full space-between  ">
                    <p className="text-[22px] font-inter  text-light2 font-[700] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
                    <p className="font-[500] font-inter  text-[14px] text-light2">Cybersecurity Automation Platform</p>
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
                </div> */}
              </motion.p>
              <div className="w-full h-full  mx-auto">


                <FeatureCarousel
                  title="CIAAN Security SCAS"
                  description="Cybersecurity Assessment & Engagement Automation"
                  overview="SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff. Here, I designed SCAS's workflow for automating assessment & engagement creation & management.  "
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
                    " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[7%]",
                    "md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_forms/screen_security_user_forms_1x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                />

              </div>
            </div>
            <span class="homepage-bg-gradient-seam h-32  w-screen mb-[-4rem] "></span>
          </>
          ))}
          <div className="h-40" />
        </motion.div>
      </div>
      {/* <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-home-header bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div> */}
    </motion.div>)
  );
};
