"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from '@/components/fancy/cn.jsx';
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
// import {FeatureCarousel} from '@components/fancy/FeatureCarousel.jsx'
import { FeatureCarousel } from '@components/fancy/FeatureCarousel.tsx'
import { RainbowButton } from './RainbowButton.jsx'
import StripeCard from '@components/fancy/StripeCard.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
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
                {/* {item.title} */}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-light2 font-['exo'] bg-red w-full mt-10">

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
              <div className="w-full h-fit  mx-auto gap-10 flex flex-col">

                <     StripeCard />
                <FeatureCarousel
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"

                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconBar=<span className="flex flex-row gap-8 ml-[10px]"> 
                    <div className="flex flex-row gap-2">
                      <div className=" self-center mt-1">
                        <TimerIcon height='26px' stop='#8FA0BE' />
                      </div>
                      <div className="flex flex-col gap-1.5 self-center">
                        <h3 className="font-[550] text-[12px] leading-none  -ml-[1px] text-CIAAN-light opacity-[90%]">
                          Project Length
                        </h3>
                        <p className="text-CIAAN-light font-['exo'] self-center leading-none text-left w-full">4 Months</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className=" self-center mt-1">
                        <TeamIcon height='26px' stop='#8FA0BE' />
                      </div>
                      <div className="flex flex-col gap-1.5 self-center">
                        <h3 className="font-[550] text-[12px] leading-none  -ml-[1px] text-CIAAN-light opacity-[90%]">
                          Role
                        </h3>
                        <p className="text-CIAAN-light font-['exo'] self-center leading-none text-left w-full">Sole UX/UI Designer</p>
                      </div>
                    </div>
                  </span>
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
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
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
                {/* description=<p className="text-CIAAN-light font-['exo']">Cybersecurity Assessment & Engagement Automation</p> */}

                <FeatureCarousel
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas "

                  cardBg="bg-animated-cards-description-tri    "
                  title=<p className="text-gradient-display  font-['exo'] "> Trichord Digital LLC.</p>
                  descriptionClassName="panel-white bg-panel-white backdrop-blur-[5px] flex flex-col  "
                  description=<p className="text-gradient-display font-['exo']">Flightsim Keybind Mapping Automation</p>
                  overview=<p className="text-tri-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-tri"
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
                  bgClass="bg-tri-body"
                  button={
                    // <button class="flex gap-[6px] w-fit whitespace-nowrap text-[#CEFCFF]  font-['exo_2'] uppercase h-[40px] p-button p-component" type="smooth" data-pc-name="button" data-pc-section="root"><p className='text-tri-light rounded-xl font-[550] text-[15px] self-center leading-none font-["exo_2"] rcs-scas-text uppercase '> READ CASE STUDY </p><svg height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2417_4739)"><g clip-path="url(#clip1_2417_4739)"><path d="M24 1.77178V23.1772C24 23.8907 23.4977 24.4745 22.8837 24.4745H8.34419C7.73023 24.4745 7.25581 23.8907 7.25581 23.1772V17.2421C7.25581 16.5285 7.75814 15.9448 8.37209 15.9448C8.98605 15.9448 9.48837 16.5285 9.48837 17.2421V21.8799H21.7674V3.06908H9.48837V7.70692C9.48837 8.42043 8.98605 9.00422 8.37209 9.00422C7.75814 9.00422 7.25581 8.42043 7.25581 7.70692V1.77178C7.25581 1.05827 7.73023 0.474487 8.34419 0.474487H22.8837C23.4977 0.474487 24 1.05827 24 1.77178ZM12.1395 16.6583C11.693 17.1772 11.7209 17.988 12.1395 18.5069C12.3628 18.7664 12.6419 18.8961 12.9209 18.8961C13.2 18.8961 13.507 18.7664 13.7023 18.5069L18.0837 13.3826C18.5023 12.8637 18.5023 12.0529 18.0837 11.5664L13.7302 6.37719C13.2837 5.85827 12.586 5.85827 12.1395 6.37719C11.693 6.89611 11.693 7.70692 12.1395 8.22584L14.6233 11.1448L1.11628 11.1772C0.502326 11.1772 0 11.761 0 12.4745C0 13.188 0.502326 13.7718 1.11628 13.7718L14.6233 13.7394L12.1395 16.6583Z" fill="#98FDDF"></path></g></g><defs><clipPath id="clip0_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath><clipPath id="clip1_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath></defs></svg></button>
                    <RainbowButton type='tri'> <p className='rcs-tri-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
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
