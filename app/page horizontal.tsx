// @ts-nocheck

"use client";
'use client';
import Image from 'next/image';
import { FeatureCarousel } from '@components/fancy/FeatureCarousel.tsx'
import { RainbowButton } from '@components/fancy/RainbowButton';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { throttle } from '@components/fancy/throttle';
import { DirectionAwareTabs } from 'components/fancy/DirectionAwareTabs.jsx'
import { StickyScroll } from "@components/fancy/StickyScroll.jsx";
import {
  animate, scroll, spring, motion,
  MotionProps, useMotionValueEvent,
  useTransform, useScroll, useSpring
} from "motion/react"
import { ReactLenis, useLenis } from 'lenis/react'
import { BentoGrid, BentoGridItem } from "@/components/fancy/BentoGrid.jsx";
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import { cn } from '@/components/fancy/cn.jsx';
import { useWindowSize } from 'components/fancy/hook-use-window-size.tsx'



function useElementViewportPosition(ref) {
  useLayoutEffect(() => {
    spring2.onChange(latest => {
      window.scrollTo(0, latest);
    });
  }, [spring2]);

  function moveTo(to) {
    spring2.set(window.pageYOffset, false);
    setTimeout(() => {
      spring2.set(to);
    }, 50);
  }

  function scrollToTop() {
    const element = document.getElementById("bottom");

    element?.scrollIntoView(true);
  }


  const [position, setPosition] = useState([0, 0]);
  useEffect(() => {
    if (!ref || !ref.current) return;
    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;
    setPosition([start / pageHeight, end / pageHeight]);
  }, []);
  return { position };
}
const Container = ({ children }) => {
  const windowSize = useWindowSize();
  const ref = useRef();
  const { scrollY, scrollYProgress } = useElementScroll(ref);

  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["100vh", "100vh", "100vh", "100vh", "100vh", "100vh"];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v));
    scrollYProgress.onChange((v) => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          fontFamily: "monospace",
          fontWeight: 600,
          zIndex: 50
        }}
      >
        {"height: " +
          calcHeight.get() +
          " | y: " +
          scrollYValue +
          " | percentage: " +
          (scrollYProgressValue * 100).toFixed(0) +
          "% | WindowSize h: " +
          windowSize.height +
          " w: " +
          windowSize.width +
          "   "}
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: 20,
          pointerEvents: "none"
        }}
      ></div>
      <SnapParent
        ref={ref}
        style={{
          position: "absolute"
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};
export default function HorizontalScroll(): JSX.Element {
  const windowSize = useWindowSize();

  const ulRef = useRef<HTMLUListElement | null>();

  useEffect(() => {
    const items = document.querySelectorAll('li');

    if (ulRef.current) {
      const controls = animate(
        ulRef.current,
        {
          transform: ['none', `translateX(-${items.length - 1}00vw)`],
        },
        { easing: spring() }
      );
      scroll(controls, { target: document.querySelector('section') });
    }

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector('h2');

      scroll(animate([header], { x: [800, -800] }), {
        target: document.querySelector('section'),
        offset: [
          [i * segmentLength, 1],
          [(i + 1) * segmentLength, 0],
        ],
      });
    });
  }, []);

  const items = [
    {
      title: "Assessment & Engagement Workflows",
      description: " Creation, Management, & Deployment ",
      src: "",
      header:
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}
          className=' rounded-lg'
          src="https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4"
          autoPlay muted loop
          playsInline
        />
      ,
      className: "md:col-span-2 md:row-span-1",

    },
    {
      title: "System UI & Branding",
      description: "Componentized Design System with Page Templates",
      header: <div
        className='bg-white mt-1 bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp)] h-full mt-1 object-fill bg-cover bg-no-repeat w-full  rounded-lg   overflow-hidden'
        src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp"

      // alt={item.desc}
      />,
      className: "md:col-span-1",
    },
    {
      title: "Security User Dashboard",
      description: "User-facing dashboard for managing assigned assessments.",
      header: <div
        className='bg-white bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)] h-full mt-1 object-fill bg-cover bg-no-repeat w-full  rounded-lg  overflow-hidden'
        src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp"

      // alt={item.desc}
      />,
      className: "md:col-span-1",
    },
    {
      title: "Spreadsheet Management",
      src: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/afa43c86b161718c4dcf69f8ef6240ed/downloads/default.mp4",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <video
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
        className=' rounded-lg mt-1'
        src="https://customer-ct1udu2wic3j3wru.cloudflarestream.com/afa43c86b161718c4dcf69f8ef6240ed/downloads/default.mp4"
        autoPlay muted loop
        playsInline
      />,
      className: "md:col-span-2",
    },
  ];

  const tabs = [
    {
      id: 0,
      label: "About Me",
      content: (
        <>
          {/* <StickyScroll content={stickyContentAboutMe} ></StickyScroll> */}

        </>
        // <div className="border border-border/50 w-full flex flex-col items-center p-4 rounded-lg gap-3">

        //   <span className="flex text-light flex-col  leading-tight  pt-32">

        //     <p className="text-light text-left font-['exo']  text-[32px] text-bold font-bold">
        //       Hi there! I'm Eric Yang.
        //     </p>
        //     <p className="my-4 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
        //       I'm Eric Yang.
        //     </p>
        //     <p className="mt-5 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
        //       I Design & Build Experiences.
        //     </p>
        //   </span>
        // </div>
      ),
      body: <>
        <span className="flex text-light flex-col h-full leading-tight  pt-32">

          <p className="text-light text-left font-['exo']  text-[32px] text-bold font-bold">
            Hi there! I'm Eric Yang.
          </p>
          <p className="my-4 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
            I'm Eric Yang.
          </p>
          <p className="mt-5 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
            I Design & Build Experiences.
          </p>
        </span>
      </>
    },
    {
      id: 1,
      label: "UX Case Studies",
      content: (
        <div className="border border-border/50 w-full flex flex-col items-center p-4 rounded-lg gap-3">
          <span className="flex text-light flex-col h-full leading-tight  pt-32">

            <p className="text-light text-left font-['exo']  text-[32px] text-bold font-bold">
              Hi there! I'm Eric Yang.
            </p>
            <p className="my-4 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
              I'm Eric Yang.
            </p>
            <p className="mt-5 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
              I Design & Build Experiences.
            </p>
          </span>
        </div>
      ),
    },
    {
      id: 2,
      label: "Art & Graphic Design",
      content: (
        <div className="border border-border/50 w-full flex flex-col items-center gap-3 p-4">
          <div animation="spin-fast" gradient="default">
            Button
          </div>
          <div animation="spin" gradient="default">
            Button
          </div>
          <div animation="spin-slow" gradient="default">
            Button
          </div>
        </div>
      ),
    },
    {
      id: 3,
      label: "Coding Projects",
      content: (
        <div className="border border-border/50 w-full flex flex-col items-center p-4 rounded-lg gap-3">
          <div animation="spin-fast" gradient="sunset">
            Button
          </div>
          <div animation="spin" gradient="sunset">
            Button
          </div>
          <div animation="spin-slow" gradient="sunset">
            Button
          </div>
        </div>
      ),
    },
  ]
  const spring2 = useSpring(0, { damping: 300, stiffness: 100 });

  // const skipTo = () => {
  //   window.scrollBy(0, document.getElementById("test").offsetLeft)
  // }
  function skipTo() {
    console.log(document.getElementById("test").offsetLeft - document.getElementById("test3").offsetLeft);
    console.log(document.getElementById("test3").offsetLeft);
    console.log(document.getElementById("test3").offsetLeft);

    window.scrollBy(0, document.getElementById("test")?.offsetHeight)

  }
  return (
    <ReactLenis root>
      <main className=''>
        <header className='text-white relative  w-full   grid place-content-center  h-screen'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <h1 className='text-6xl font-bold text-center tracking-tight' >
            I know You Love to Scroll <br />
            So Scroll
          </h1>
        </header>
        <div className=' fixed top-16 z-[1000] w-screen self-center'>
          <DirectionAwareTabs tabs={tabs} />
          <a href="#test">skip</a>
          <button className='bg-red'
            style={{
              borderRadius: "0.5em",
              marginLeft: "0.5em"
            }}
            // onClick={() => moveTo(document.getElementById("bottom").offsetLeft, document.getElementById("bottom").offsetLeft)}
            onClick={skipTo}

          >
            Go #bottom
          </button>
        </div>

        <section className='h-[500vh] relative  '>

          <ul ref={ulRef} className='flex snap-mandatory  overflow-visible snap-both sticky top-0 h-screen  flex-nowrap '>
            <li className=' snap-start h-screen w-screen min-w-screen bg-CIAAN-body  flex flex-col justify-center overflow-hidden  items-center'>
              <h2 className=' w-[50vw]'>
                <FeatureCarousel
                  gradientOverlay='cardInset-scas'
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"
                  case="scas"
                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconStop="#E3EDFF"
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8 ",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[89.9%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[2%]  mt-4",
                    "  md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1_5x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
              </h2>

              {/* <BentoGrid className="  w-full max-w-[1300px] ml-1">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
              <Image
                src='https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png'
                className='2xl:w-[550px] w-[380px] absolute bottom-0'
                width={500}
                height={500}
                alt='image'
              />
            </li>
            <li className='snap-start h-screen w-screen min-w-screen bg-CIAAN-body  flex flex-col justify-center overflow-hidden  items-center'>
              <h2 className=' w-[50vw]'>
                <FeatureCarousel
                  gradientOverlay='cardInset-scas'
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"
                  case="scas"
                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconStop="#E3EDFF"
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8 ",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[89.9%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[2%]  mt-4",
                    "  md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1_5x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
              </h2>

              {/* <BentoGrid className="  w-full max-w-[1300px] ml-1">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
              <Image
                src='https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png'
                className='2xl:w-[550px] w-[380px] absolute bottom-0'
                width={500}
                height={500}
                alt='image'
              />
            </li>
            <li id="test3" className='snap-start h-screen w-screen min-w-screen bg-CIAAN-body  flex flex-col justify-center overflow-hidden  items-center'>
              <h2 className=' w-[50vw]'>
                <FeatureCarousel
                  gradientOverlay='cardInset-scas'
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"
                  case="scas"
                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconStop="#E3EDFF"
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8 ",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[89.9%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[2%]  mt-4",
                    "  md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1_5x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
              </h2>

              {/* <BentoGrid className="  w-full max-w-[1300px] ml-1">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
              <Image
                src='https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png'
                className='2xl:w-[550px] w-[380px] absolute bottom-0'
                width={500}
                height={500}
                alt='image'
              />
            </li>
            <li id="test" className='snap-start h-screen w-screen min-w-screen bg-CIAAN-body  flex flex-col justify-center overflow-hidden  items-center'>
              <h2 className=' w-[50vw]'>
                <FeatureCarousel
                  gradientOverlay='cardInset-scas'
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"
                  case="scas"
                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconStop="#E3EDFF"
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8 ",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[89.9%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[2%]  mt-4",
                    "  md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1_5x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
              </h2>

              {/* <BentoGrid className="  w-full max-w-[1300px] ml-1">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
              <Image
                src='https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png'
                className='2xl:w-[550px] w-[380px] absolute bottom-0'
                width={500}
                height={500}
                alt='image'
              />
            </li>
            <li className='snap-start h-screen w-screen min-w-screen bg-CIAAN-body  flex flex-col justify-center overflow-hidden  items-center'>
              <h2 className=' w-[50vw]'>
                <FeatureCarousel
                  gradientOverlay='cardInset-scas'
                  cardInsetBg="bg-CIAAN-body"
                  cardBg="animated-cards-header-scas"
                  case="scas"
                  title=<p className="text-CIAAN-light font-['exo']">CIAAN Security Corporation </p>
                  descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                  description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                  iconStop="#E3EDFF"
                  overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                  insetCardBorderClassName="animated-cards-border-bg-scas"
                  // Example classes for responsive layout
                  step1img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img1Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8 ",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step3imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[80%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[3%]  mt-8",
                    "md:group-hover:translate-y-2"
                  )}
                  step4imgClass={cn(
                    " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[89.9%]  transition-all duration-500 dark:border-stone-700/50",
                    "  rounded-[10px]   md:left-[2%]  mt-4",
                    "  md:group-hover:translate-y-2"
                  )}
                  // Example images
                  image={{
                    step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                    step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                    step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                    step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1_5x.webp",
                    step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                    alt: "Feature demonstration",
                  }}
                  // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                  bgClass="bg-CIAAN-body"
                  button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                  }
                />
              </h2>

              {/* <BentoGrid className="  w-full max-w-[1300px] ml-1">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
              <Image
                src='https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png'
                className='2xl:w-[550px] w-[380px] absolute bottom-0'
                width={500}
                height={500}
                alt='image'
              />
            </li>
          </ul>
        </section>
        <footer className='bg-red-600 text-white grid place-content-center h-full'>
          <p>
            Created By{' '}
            <a target='_blank' href='https://twitter.com/mattgperry'>
              Matt Perry
            </a>
          </p>
        </footer>
        <div className='progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0'></div>
      </main>
    </ReactLenis>
  );
}