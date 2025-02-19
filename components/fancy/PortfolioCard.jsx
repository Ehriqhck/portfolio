"use client";
import { motion } from "framer-motion";
import { cn } from '@/components/fancy/cn.jsx';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { MobileCarousel } from './MobileCarousel';

import { useMediaQuery } from 'usehooks-ts'
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
import clsx from 'clsx';

import React from 'react'
const DisplaySize = ({ width, height }) => (
  <div className="centered">
    <h1>
      {width.toFixed(0)}x{height.toFixed(0)}
    </h1>
  </div>
);
const PortfolioCard = ({type, CardContent, Section, Title, Slidercontent, Content: ContentTest, Figma, ...props }) => {

  const isMobile = useMediaQuery('(min-width: 1250px)');
  const sliderData = Slidercontent;
  const sliderItems_CIAAN_EngagementFlow = [
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_1/create_engagement_step_1_1x.webp',
      title: '1. Set Details',
      desc: 'Engagement name, targeted project/app, due dates, etc. ',
      sliderName: 'Engagement Settings',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp',
      title: '2. Add Forms',
      desc: 'Forms determining engagement tasks & requirements.',
      sliderName: 'mountains',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_3/create_engagement_step_3_1_5x.webp',
      title: '3. Assign Users',
      desc: 'Security Users whose projects are the target of the engagement.',
      sliderName: 'autumn',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_4/create_engagement_step_4_1_5x.webp',
      title: '4. Assign Engineers',
      sliderName: 'foggy',
      desc: 'Assign Engineer(s) to engage with previously assigned Security Users',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_5/create_engagement_step_5_1_5x.webp',
      title: '5. Deploy Status',
      sliderName: 'foggyd',
      desc: 'Deploy and monitor engagement status. ',
    },
  ];

  const getSliderData = () => {
    try {
      if (Slidercontent === (undefined || null)) {
        return (sliderItems_CIAAN_EngagementFlow);

      }
      return (Slidercontent)
    } catch (error) {
      return (sliderItems_CIAAN_EngagementFlow);

    }


  }
  const getHeading = (heading, index) => {
    const padding = clsx('Capitalized font-[600] text-[20px] ', { 'mt-5': index > 0 });
    return (
      <p class={padding} >
        {heading}
      </p>
    )
  }
  const getBody = (dataArray) => {



    if (dataArray) {

      return (

        dataArray.map((item, index) => (

          <span className="flex flex-col w-full ">
            {item?.video ?
              <div className="flex mb-4 w-full"  >
                <iframe
                  src={item.video}
                  loading="lazy"
                  className="  rounded-2xl w-full aspect-video  overflow-hidden"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowfullscreen="true"
                ></iframe>
              </div>
              : <></>}

            <span class=" flex  ml-[2px] flex-col ">
              {item.heading ?
                getHeading(item.heading, index)
                : <></>
              }
              {item.description ?
                <p>
                  {item.description}
                </p>
                : <>
                </>
              }

            </span>

            {
              item.note ?
                <section className="note-scas flex flex-row  mb-2 mt-1.5 gap-0 ml-1  h-  bg-slate-200 ">
                  {/* <div className="spacer-noH-CIAAN h-full w-[2px] flex  " /> */}
                  <span className=" flex flex-col gap-4 mt-[7px] mb-2 ">
                    <span className=" flex flex-col pl-[6px] gap-[4px] max-w-[1000px]">
                      <h1 className="font-['inter'] font-medium tracking-[0.005em]  text-[16px]">
                        {item.note}
                      </h1>
                    </span>
                  </span>
                </section>
                : <></>
            }

            <div className="flex  flex-col">
              {getVisuals(item.visuals, item?.visuals?.length)}
              {item?.figma ?
                <iframe
                  className="mt-3.5 ml-0.5"
                  src="https://embed.figma.com/proto/5yh2ZI7ywU6dsPP9m8wd1r/402-SCAS?page-id=136%3A9531&node-id=452-86817&viewport=2763%2C-1433%2C0.26&scaling=contain&content-scaling=fixed&starting-point-node-id=452%3A86817&show-proto-sidebar=1&embed-host=share" allowfullscreen>

                </iframe>
                : <></>}

            </div>

          </span>
        ))

      )

    } else {
      return (
        <></>
      )
    }
  }
  const imgVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
  };
  const getVisuals = (data, length, ...props) => {

    try {
      if (length > 1) {
        return (
          <>
            {
              !isMobile
                ?
                
                <MobileCarousel
                 autoplayInterval={5000}
                  activeColor="#ff329ddb" 
                 footerClass="MobileCarousel-bg-footer-gradient-scas" 
                 tipGradient='MobileCarousel-bg-gradient-scas' 
                 textShadow='MobileCarousel-text-scas'
                 showNavigation={true} tips={data} backgroundTips={true}
                  backgroundGradient></MobileCarousel>
                :
                <ProgressSlider
                  vertical={isMobile ? true : false}
                  fastDuration={200}
                  duration={6200}
                  activeSlider='bbridge'
                  className=' w-full   rounded-xl overflow-hidden sm:flex mt-2 '
                >
                  <SliderBtnGroup
                    className=' rounded-bl-xl  
               bottom-0   w-fit z-10 flex max-w-[19rem]
               sm:flex sm:flex-col    sm:dark:bg-white
             dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
                    {data.map((item, index) => (
                      <SliderBtn
                        key={index}
                        value={item?.sliderName}
                        className={'text-left flex  flex-col h-full  pt-2 pl-2 pb-4 sm:border-b border sm:pl-3 sm:pb-0 align-top   place-content-start sm:flex-1 bg-contain '}
                        progressBarClass=' left-0 sm:top-0 bottom-0  bg-CIAAN-scas-light sm:w-1 sm:h-full h-4  before:h-full before:w-1 before:'
                      >
                        <h2 className='relative px-4 rounded w-fit  bg-CIAAN-scas-light text-white my-2'>
                          {item.title}
                        </h2>
                        <p className='text-sm font-medium  text-slate-900 line-clamp-2 pr-2 mb-2'>
                          {item.desc}
                        </p>
                      </SliderBtn>
                    ))}
                  </SliderBtnGroup>

                  <SliderContent className='   '>
                    {data.map((item, index) => (
                      <SliderWrapper
                        className=' h-full flex w-full bg-slate-200    '
                        key={index}
                        value={item?.sliderName}
                      >
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={imgVariants}
                          className={"h-full flex self-center "}

                        >
                          <Image

                            className={'rounded-r-xl h-[32vh]   w-min place-self-center self-center '}

                            src={item?.img}

                            width={'1440'}
                            height={'1025'}
                          // onLoad={event => {
                          //   const target = event.target;

                          //   if (target.src.indexOf('data:image/gif;base64') < 0) {
                          //       setImageIsLoaded(true)
                          //   }}}
                          />
                        </motion.div>
                      </SliderWrapper>
                    ))}
                  </SliderContent>
                </ProgressSlider >
            }
          </>

        )
      } else {
        return (

          data.map((item, index) => (

            <Image
              className=' h-full mt-2 object-cover w-fit  rounded-xl   overflow-hidden'
              src={item?.img}
              width={1920}
              height={1080}
            // alt={item.desc}
            />
          ))
        )

      }
    } catch (error) {
      return (<> {JSON.stringify(error)} {data?.visuals}</>)
    }



  }

  return (
    <div className={cn(props.cardBg, " pt-0 pb-14  h-full pl-10 pr-10  flex flex-col gap-4 font-['exo']    rounded-xl w-full [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  ")}>

      <span className=" flex  flex-col">

        {ContentTest ? <>{ContentTest}</> :
          <>
            <div className="panel-title ">
              <div class="flex flex-row px-4 pb-2 ">
                <h1 className="font-['exo'] capitalize text-CIAAN-light font-[600] pt-2.5 text-xl">
                  {Section}
                </h1>

              </div>
            </div>


            <h1 className="font-['inter'] font-bold  text-[2em] mt-14">
              {Title}
            </h1>

          </>}


      </span>
      <span className="flex flex-col ">

        <section className=" flex flex-col">
          {getBody(CardContent)}


        </section>

      </span>
      { }
    </div>
  );
}

export default PortfolioCard

