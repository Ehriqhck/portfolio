"use client";
import { useState, useRef, useEffect } from "react";
import InputEditor from './editor/InputEditor'
import Feed from "@components/Feed";
// import GameVerDropdown from "@components/GameVerDropdown";
// import HatUp from '@components/Device_VKB_SpaceEvo';
// import ActionTable from '@app/editor/ActionTable.jsx'
import NoSsr from "@components/NoSsr";
import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import Image from 'next/image'
import CommunityIcon from 'components/generic/Icons/CommunityIcon.jsx'
import NewsIcon from 'components/generic/Icons/NewsIcon.jsx'
import EnterIcon from 'components/generic/Icons/EnterIcon.jsx'
import DiscordIcon from 'components/generic/Icons/Socials/DiscordIcon.jsx'
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'

import TreeTableDialogue from "./editor/TreeTableDialogue";
import YoutubeIcon from 'components/generic/Icons/Socials/YoutubeIcon.jsx'
import { Utils } from "./editor/utils";
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT_EXAMPLE.jsx'
import { motion, useScroll, useAnimate, useInView } from 'framer-motion';
import SmoothScroll from '@components/generic/SmoothScroll.jsx'
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import { InView } from '@/components/fancy/InView.jsx';
import { HeroHighlight, Highlight } from '@/components/fancy/HeroHighlight';
import { HeroParallaxLanding } from '@/components/fancy/HeroParallaxLanding.jsx';
import { AnimatedNumberInView } from '@components/fancy/AnimatedNumberInView.jsx';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import ScrollProgressBasic1 from '@components/fancy/ScrollProgressBasic1.jsx'
import { ScrollProgress } from '@components/fancy/ScrollProgress.jsx';
import { HeroSlider } from '@components/fancy/HeroSlider.jsx';
import { StickyScroll } from '@components/fancy/StickyScroll.jsx';
import { useTransform, useElementScroll } from "framer-motion";
import { useWindowSize } from "@components/fancy/hook-use-window-size";
import { Box, ContentBox } from "@components/fancy/SnapScrollBox";
import { FancyTab } from "@components/fancy/FancyTab";
import FancyTabv2 from "@components/fancy/FancyTabv2";
import BentoPreviews from '@components/fancy/BentoPreviews'
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
const Page = () => {

  const groupVariant = {
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(2px)',
        y: -60,
        rotateX: 90,
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        rotateX: 0,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 2,
        },
      },
    },
  };
  const chevronVariant = {
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(0px)',
        y: -60,
        rotateX: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 2,
        },
      },
    },
  };

  const productTemplate = (product) => {
    return (
      <div className="flex w-full flex-col ">
        {/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="" /> */}
        <div className=" flex flex-row gap-[4px]">

          <p className="uppercase whitespace-nowrap self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[18px] font-[400]  tracking-[0.1em] carousel-active">
            {product.name}

          </p>
        </div>
      </div>
    );
  };
  const newsItemTemplate = (product) => {
    return (
      <div className="flex mx-[16px] ">
        <button type="default" className="flex  flex-col  h-[180px] w-full  ">
          <div className=" flex flex-row gap-[4px]">

            <p className="uppercase self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[15px] font-medium  tracking-[0.1em] carousel-active">
              Placeholder

            </p>
          </div>
        </button>
      </div>
    );
  };



  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);
  const navRef4 = useRef(null);
  const navRef5 = useRef(null);

  // const { scrollYProgressCircle } = useScroll({ container: navRef1 });

  const { scrollYProgress: scrollYProgressNav1 } = useScroll({
    target: navRef1,
    offset: ["start start", "120vh"],
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: scrollYProgressNav2 } = useScroll({
    target: navRef2,
    offset: ["start start", "end 0.5"],
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: scrollYProgressNav3 } = useScroll({
    target: navRef3,
    offset: ["0 1", "end 0.5"],
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { scrollYProgress: scrollYProgressNav4 } = useScroll({
    target: navRef4,
    // offset: ["start start", "end end"]
    offset: ["0 1", "start start",],
    stiffness: 100,
    damping: 30,
    restDelta: 0.001

  });

  const { scrollYProgress: scrollYProgressNav5 } = useScroll({
    target: navRef5,
    offset: ["end end", "start end"],
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollRef = useRef(null)
  const variants = {
    active: {
      display: "block"
    },
    inactive: {
      display: "hidden",
      transition: { duration: 2 }
    }
  }
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "EldoraUI's components make building UIs effortless great work!",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "EldoraUI simplifies complex designs with ready-to-use components.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];
  const blackBox = {
    initial: {
      height: "150vh",
      bottom: 0,
    },
    animate: {
      height: 0,
    },
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  };

  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
      </div>
    );
  };

  return (

    <motion.div
      className="flex flex-col  text-[#DAF0EA]   page-bg "

    >
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
      </div> */}

      {/* <video autoPlay loop muted 
          className=" h-[100vh] w-[100vw]  "
          src="https://www.youtube.com/watch?v=_cMxraX_5RE">
        </video> */}
                  <FancyTabv2 />

      <div className=" flex flex-col w-full ">


        <div className="flex flex-col w-full "
        >

          {/* <HeroSlider className='' /> */}


          {/* <HeroParallaxLanding/> */}
          <div
            id="Home"
            className="  h-fit w-[100vw] flex  flex-col px-[128px]  ">
            <div className="flex flex-col   h-fit
                "
              // variants={{
              //   container: {
              //     visible: {
               
              //     },
              //   },
              //   item: {
              //     hidden: {
              //       opacity: 0,
              //       filter: 'blur(8px)',
              //       y: -60,
              //       rotateX: 90,

              //     },
              //     visible: {
              //       opacity: 1,

              //       filter: 'blur(0px)',
              //       y: 0,
              //       rotateX: 0,
              //       transition: {
              //         type: 'spring',
              //         bounce: 0.3,
              //         duration: 1.6,
              //       },
              //     },
              //   },
              // }}
            >

              <div
                // ref={navRef1}

                // key={1}
                 className="flex flex-row w-full gap-[36px]  mt-[12vh] h-fit ">



                <div class="  min-w-[300px] w-full place-items-center  rounded-lg p-6 lg:overflow-visible">

                  {/* <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  /> */}
                </div>

              </div>


            </div>
          </div>

        </div>



      </div>
    </motion.div>

  );
}

export default Page
