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
const Home = () => {

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


  return (

    <motion.div
      className="flex flex-col w-full text-[#DAF0EA]  overflow-x-hidden page-bg "

    >
      <div className=" flex flex-col w-full ">
        <div className=" uppercase font-['Exo_2'] tracking-[0]
         text-[12px] text-[#cefcff96] h-fit self-end  flex gap-[4px] flex-col justify-items-end py-[4px] px-[2px] fixed 
         top-[8vh] right-[10px]  z-50 w-fit   pr-[4px] pl-[8px] 
         base ">

          <div className="flex flex-row gap-[2px] items-center  uppercase  h-fit self-end place-items-end">
            <p className=""> <a href="#Home">Home</a></p>

            <svg width="20px" height="20px" viewBox="0 0 100 100" className="-rotate-90 opacity-90">
              <circle cx="50" cy="50" r="30" pathLength="1" className="  z-50" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgressNav1 }}
              />        <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicatorBg"

              />
            </svg>
          </div>

          <div className="flex flex-row gap-[2px] items-center   h-fit self-end place-items-start">
            <p className=""> <a href="#HowItWorks">How it Works </a></p>

            <svg width="20px" height="20px" viewBox="0 0 100 100" className="-rotate-90 opacity-90">
              <circle cx="50" cy="50" r="30" pathLength="1" className="  z-50" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgressNav2 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicatorBg"

              />
            </svg>
          </div>
          <div className="flex flex-row gap-[2px] items-center   h-fit self-end place-items-start">
            <p className=""><a href="#500Keybinds">500+ Keybinds</a></p>

            <svg width="20px" height="20px" viewBox="0 0 100 100" className="-rotate-90 opacity-90">
              <circle cx="50" cy="50" r="30" pathLength="1" className="  z-50" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgressNav3 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicatorBg"

              />
            </svg>
          </div>
          <div className="flex flex-row gap-[2px] h-fit self-end items-center ">
            <p className=""> <a href="#DeviceInputs">Device Inputs</a></p>

            <svg width="20px" height="20px" viewBox="0 0 100 100" className="-rotate-90 opacity-90">
              <circle cx="50" cy="50" r="30" pathLength="1" className="  z-50" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgressNav4 }}
              />        <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicatorBg"

              />
            </svg>
          </div>
        </div>
        <div className="w-screen h-screen">
          <FancyTabv2 />
        </div>

        <div className="flex flex-col w-full "
        >
          {/* <video autoPlay loop muted id='hero-bg-video'
          className=" h-[100vh] w-[100vw] object-cover hero-bg"
          src="https://files.vidstack.io/sprite-fight/720p.mp4">
        </video> */}
          {/* <HeroSlider className='' /> */}


          {/* <HeroParallaxLanding/> */}
          <div
            id="Home"
            className="  h-[100vh] w-[100vw] flex  flex-col px-[128px]  content-between">
            <AnimatedGroup className="flex flex-col content-between  h-full
                "
              variants={{
                container: {
                  visible: {
                    // transition: {
                    //   staggerChildren: 1,
                    // },

                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(8px)',
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
                      duration: 1.6,
                    },
                  },
                },
              }}
            >

              <div
                ref={navRef1}

                key={1} className="flex flex-row w-full gap-[36px]  mt-[12vh] h-fit ">


                <div className="flex flex-row gap-[36px] w-full  content-between">
                  <div className="flex pt-[16px]  align-middle self-center  h-[165px]">
                    <EhriqhckBlack height="100%" />
                  </div>
                  <span className="flex whitespace-nowrap flex-col align-middle self-center h-fit ">
                    <p className=" text-black font-inter text-[64px] text-bold font-bold self-start  mb-[-8px]">
                      Hi there! </p>
                    <p className=" text-black font-inter text-[64px] text-bold font-bold self-start mb-[-16px]">
                      I'm Eric Yang. </p>
                  </span>
                </div>

                <div class="  min-w-[300px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                  
                  {/* <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  /> */}
                </div>

              </div>


            </AnimatedGroup>
          </div>

        </div>


        <HeroHighlight>
          <div
            className="homepage-bg-gradient-seam h-[192px]  w-screen mb-[-32px]"></div>

          <motion.div

            className=" w-full flex flex-col  px-[128px] pb-[128px]
       "
          >
            <motion.section
              ref={scrollRef}

              className="flex flex-col w-full  place-items-start ">
              <motion.div
                className='w-full  inline-block flex-center flex-col pt-[0px] '
                // initial={{ opacity: 0 }} 
                // animate={{ opacity: 1, top:'100%'}}
                transition={{ duration: 3 }}
                style={{ marginBottom: scrollYProgressNav1 }}
              >

                <div className=" w-full px-[16px] flex flex-col pb-[36px] ">

                  <AnimatedGroup className="flex flex-col corner-noPadding mt-[16px] mb-[10vh]   mb-[256px]  "
                    variants={groupVariant}

                    classnames='self-center w-full'
                  >
                    <div

                      key={1} className="flex justify-center self-center flex-col w-full font-['varino'] pb-[128px] pt-[64px] px-[64px]">
                      <span className="w-fit self-center">
                        <p className="logo-gradient-white text-[96px] self-center mb-[-8px]"> TRICHORD </p>
                        <div className=" px-[36px] logo-gradient-white text-[27px] self-center flex flex-row  w-full place-content-between">
                          <p>E</p> <p>D</p> <p>I</p> <p>T</p> <p>O</p> <p>R</p>

                        </div>
                      </span>
                      <NoSsr>
                        <div className="flex flex-row gap-[4px] hero-carousel justify-center self-center mt-[64px] max-w-[1000px] w-full ">
                          <p className=" flex flex-col   font-[400]  self-center justify-center align-middle
font-['exo_2']  text-[#CEFCFF] text-[22px]  tracking-[0.1em]
">STOP</p>
                          <div className="spacer-noH h-[36px]" />

                        </div>
                      </NoSsr>
                      <div className="flex gap-[20px] mb-[0px] flex-col   justify-start w-fit self-center mt-[48px]  ">
                        <p className=" flex flex-col   text-center  self-center justify-center align-middle
font-['exo_2']  text-[#00FFB9] text-[15px] font-bold  tracking-[0.2em]
"> DISCOVER MORE BELOW </p>
                        <div className="flex flex-col self-center">
                          <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_486711)" />
                            <defs>
                              <linearGradient id="paint0_linear_2417_486711" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00FFD1" >
                                  <animate attributeName="stop-color"
                                    values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                    begin='-0.70s'
                                  />
                                </stop>
                                <stop offset="1" stop-color="#00876F" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className=" mt-[-18px]">
                            <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_4867)" />
                              <defs>
                                <linearGradient id="paint0_linear_2417_4867" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#00FFD1" >
                                    <animate attributeName="stop-color"
                                      values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                      calcMode="spline"
                                      keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                      begin='1.4s'
                                    />
                                  </stop>
                                  <stop offset="1" stop-color="#00876F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedGroup>

                  {/* vvvv 3 STEP PROCESS vvvv */}
                  <div className="corner-noPadding flex flex-col h-fit "
                    ref={navRef2} id='HowItWorks'  >
                    <AnimatedGroup className="flex flex-col   pt-[64px]  "
                      variants={groupVariant}
                      classnames='self-center '
                    >
                      <div key={1} className='h1 w-full  flex flex-col justify-center self-center '>
                        <span className="justify-center  text-start flex flex-col self-center'">
                          <h1 className="font-[700] text-[82px] text-gradient-display  self-center w-full  tracking-[0.035em] ">
                            How it Works
                          </h1>
                        </span>

                        <div className="h2 self-start w-full self-center' whitespace-nowrap justify-start flex flex-wrap gap-[12px] mt-[8px] font-[500] text-left 
      text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px]">
                          <span className='font-["inter"] text-gradient-display font-[400] '> Save hours of setup time </span>
                          <div className="spacer " />
                          <span className='font-["inter"] text-gradient-display font-[400] '> For New & Veteran Pilots </span>

                        </div>

                      </div>
                    </AnimatedGroup>
                    <AnimatedGroup className="flex flex-col  pt-[64px]  "
                      variants={groupVariant}
                      classnames='self-center '
                    >
                      <div className="flex flex-row  mt-[36px] gap-[24px] self-center">
                        <div className="flex ">
                          <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                            <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                              1
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-col w-full mt-[15px] mr-[64px] ">
                          <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                            Upload Your Mappings.XML File
                          </span>
                          <div className="bg-panel-white flex flex-col  p-[16px] w-fit max-w-[775px] ">

                            <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                              <div className="flex flex-row ">
                                <h3 className="font-[200] text-[14px] opacity-[70%] ">
                                  The MAPPINGS.XML file is located in 'StarCitizen\LIVE\USER\Client\0\Controls\Mappings'
                                </h3>
                              </div>
                            </span>
                            <MediaPlayer autoPlay muted={true} className="mt-[16px] w-full" hideControlsOnMouseLeave controls={false} title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
                              <MediaProvider />
                              <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                            </MediaPlayer>
                            <div className="flex flex-row mt-[8px] ml-[8px]">

                              <div className="flex spacer-noH h-[100px] w-[1px]  " />
                              <div className="flex flex-col py-[8px] text-[#CEFCFF]  self-start justify-start text-left">
                                <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start place-items-start">
                                  <div className="flex flex-col ml-[8px] gap-[4px] font-[300] ">
                                    {/* <div className="spacer " /> */}
                                    <h3 className=" whitespace-normal self-start justify-start text-left ">
                                      The editor will automatically recognize & load Any supported flightsticks, control panels, rudders, and other hardware peripherals':
                                    </h3>
                                    <span className="ml-[8px] flex flex-col">
                                      <h3 className=" ">
                                        &#8226;  Mapped Keybinds
                                      </h3>

                                      <h3 className=" ">
                                        &#8226;  Joystick Instance Order
                                      </h3>
                                    </span>


                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>



                        </div>
                      </div>
                    </AnimatedGroup>
                    <AnimatedGroup className="flex flex-col  "
                      variants={groupVariant}
                    >
                      <div key={1} className="flex flex-row  mt-[36px] gap-[24px] self-center">
                        <div className="flex ">
                          <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                            <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                              2
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-col w-full mt-[15px] mr-[64px]">
                          <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                            Start Editing!
                          </span>
                          <div className="bg-panel-white flex flex-col  p-[16px] w-fit max-w-[775px] ">

                            <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                              <div className="flex flex-row ">
                                <h3 className="font-[200] text-[14px] opacity-[70%] ">
                                  The MAPPINGS.XML file is located in 'StarCitizen\LIVE\USER\Client\0\Controls\Mappings'
                                </h3>
                              </div>
                            </span>
                            <MediaPlayer autoPlay muted={true} className="mt-[16px] w-full" hideControlsOnMouseLeave controls={false} title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
                              <MediaProvider />
                              <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                            </MediaPlayer>
                            <div className="flex flex-row mt-[8px] ml-[8px]">

                              <div className="flex spacer-noH h-[100px] w-[1px]  " />
                              <div className="flex flex-col py-[8px] text-[#CEFCFF]">
                                <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start place-items-start">
                                  <div className="flex flex-col ml-[8px] gap-[4px] font-[300] ">
                                    {/* <div className="spacer " /> */}
                                    <h3 className=" whitespace-normal self-start justify-start text-left ">
                                      The editor will automatically recognize & load Any supported flightsticks, control panels, rudders, and other hardware peripherals':
                                    </h3>
                                    <span className="ml-[8px] flex flex-col">
                                      <h3 className=" flex">
                                        &#8226;  Mapped Keybinds
                                      </h3>

                                      <h3 className=" flex">
                                        &#8226;  Joystick Instance Order
                                      </h3>
                                    </span>


                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedGroup>
                    <AnimatedGroup className="flex flex-col mb-[96px] "
                      variants={groupVariant}
                    >
                      <div key={1} className="flex flex-row  mt-[36px] gap-[24px] self-center ">
                        <div className="flex ">
                          <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                            <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                              3
                            </p>
                          </div>
                        </div>
                        <div className=" flex flex-col w-full mt-[15px] mr-[64px]">
                          <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                            Download & Replace Customized Mappings.xml
                          </span>
                          <div className="bg-panel-white flex flex-col w-full max-w-[775px] p-[16px] ">
                            <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                              <div className="flex flex-row ">
                                <h3 className="font-[200] text-[14px] opacity-[70%] ">
                                  The MAPPINGS.XML file is located in 'StarCitizen\LIVE\USER\Client\0\Controls\Mappings'
                                </h3>
                              </div>
                            </span>
                            <div className="flex flex-row mt-[8px] ml-[8px]">

                              <div className="flex spacer-noH h-[100px] w-[1px]  " />
                              <div className="flex flex-col py-[8px] text-[#CEFCFF]">
                                <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                                  <div className="flex flex-col ml-[8px] gap-[4px] font-[300]">
                                    <h3 className=" self-start justify-start text-left flex ">
                                      The editor will automatically recognize & load Any supported flightsticks, control panels, rudders, and other hardware peripherals':
                                    </h3>
                                    <span className="ml-[8px]">
                                      <h3 className="flex ">
                                        &#8226;  Mapped Keybinds
                                      </h3>

                                      <h3 className="flex ">
                                        &#8226;  Joystick Instance Order
                                      </h3>
                                    </span>


                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedGroup>
                  </div>
                  {/*vvvv  chevron vvvv*/}
                  <AnimatedGroup className="flex flex-col  "
                    variants={chevronVariant}
                    classnames='self-center w-full'
                  >
                    <div className="flex flex-col self-center mt-[8vh] mb-[96px]"
                    >
                      <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_486711)" />
                        <defs>
                          <linearGradient id="paint0_linear_2417_486711" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00FFD1" >
                              <animate attributeName="stop-color"
                                values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                begin='-0.70s'
                              />
                            </stop>
                            <stop offset="1" stop-color="#00876F" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className=" mt-[-18px]">
                        <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_4867)" />
                          <defs>
                            <linearGradient id="paint0_linear_2417_4867" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#00FFD1" >
                                <animate attributeName="stop-color"
                                  values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                  calcMode="spline"
                                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                  begin='1.4s'
                                />
                              </stop>
                              <stop offset="1" stop-color="#00876F" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </AnimatedGroup>
                  {/* vvvv interactive Keybinds demo vvvv */}
                  <AnimatedGroup className="flex flex-col  "
                    variants={chevronVariant}
                    classnames='self-center w-full'
                  >
                    <section id='500Keybinds' ref={navRef3} className='w-full flex-center flex-col ' >


                      <div className="flex w-full pt-[128px] flex-col corner-noPadding ">

                        <div className=" w-full px-[16px] flex flex-col pb-[36px] ">

                          <h1 className='h1 w-full  flex flex-col justify-center self-center gap-[16px] mt-[32px]'>
                            <AnimatedNumberInView />


                            <div className="h2 self-center w-full  whitespace-nowrap justify-center flex flex-wrap gap-[12px] mt-[8px] font-[500] text-left 
    text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px]">
                              <span className=' text-gradient-display'> Bespoke Iconography </span>
                              <div className="spacer " />
                              <span className=' text-gradient-display'> Updated Per-Patch </span>
                              <div className="spacer " />
                              <span className=' text-gradient-display'> Semantic Search </span>
                              <div className="spacer " />
                              <span className=' text-gradient-display'>  Modifier Layers </span>
                            </div>

                          </h1>
                          <div className="p-[16px] w-full h-full">
                            <TreeTableDialogue noDialogueOverlay={true} />
                          </div>
                        </div>

                      </div>




                    </section>
                  </AnimatedGroup>

                  {/* vvvv chevron vvvv*/}
                  <AnimatedGroup className="flex flex-col  "
                    variants={chevronVariant}
                    classnames='self-center w-full'
                  >
                    <div className="flex flex-col self-center mt-[8vh] mb-[5vh]">
                      <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_486711)" />
                        <defs>
                          <linearGradient id="paint0_linear_2417_486711" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00FFD1" >
                              <animate attributeName="stop-color"
                                values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                begin='-0.70s'
                              />
                            </stop>
                            <stop offset="1" stop-color="#00876F" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className=" mt-[-18px]">
                        <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_4867)" />
                          <defs>
                            <linearGradient id="paint0_linear_2417_4867" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#00FFD1" >
                                <animate attributeName="stop-color"
                                  values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                  calcMode="spline"
                                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                  begin='1.4s'
                                />
                              </stop>
                              <stop offset="1" stop-color="#00876F" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </AnimatedGroup>

                  {/* vvvv interactive SVG demo vvvv */}
                  <AnimatedGroup className="flex flex-col  "
                    variants={chevronVariant}
                    classnames='self-center w-full'
                  >
                    <section className='w-full flex-center flex-col pt-[64px] mb-[96px]' >

                      <div ref={navRef4} id='DeviceInputs' className="flex w-full pt-[128px] flex-col corner-noPadding   ">

                        <div className=" w-full px-[16px] flex flex-col pb-[96px]  ">

                          <h1 className=' w-full  flex flex-col justify-center self-center gap-[0px] mt-[32px]'>
                            <div className="flex flex-col">
                              <span className="font-[400]  h1 text-gradient-display  self-center w-full  justify-center text-center">Device-Input Selection.</span>

                              {/* <p className="font-[500] h1 text-gradient-display">Now </p> */}
                              <span className="font-[800] h1 tracking-[0.035em] text-gradient-display  self-center w-full  justify-center text-center"> Now Visually Interactive.</span>

                            </div>

                            <div className=" self-center w-full  whitespace-nowrap justify-center flex flex-wrap gap-[12px] mt-[32px] font-[500]
    text-left text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px] ">
                              <span className=' text-gradient-display'> Semantic Labelling </span>
                              <div className="spacer " />
                              <span className=' text-gradient-display'> Input Search </span>
                              <div className="spacer " />
                              <span className=' text-gradient-display'> Axis vs. Button Filters </span>

                            </div>

                          </h1>
                          <div className="p-[16px] w-full h-full self-center content-center justify-items-center align-middle  justify-center device_svg_z z-19 flex flex-row gap-[42px]">
                            <Device_VKB_GLADIATOR_NXT_EVO_RIGHT
                              className='min-w-[300px] w-[180px] device-shadow self-start align-middle flex justify-center'
                              view='Front'
                            />
                            <NoSsr>
                              <InputEditor isExample={true} />

                            </NoSsr>

                          </div>
                        </div>

                      </div>

                    </section>
                  </AnimatedGroup>




                </div>

              </motion.div>

            </motion.section>
          </motion.div>
        </HeroHighlight>
      </div>
    </motion.div>

  );
}

export default Home
