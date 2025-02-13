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
import {HeroHome} from'@/components/fancy/HeroHome.jsx';


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
   <><HeroHome></HeroHome></>
  );
}