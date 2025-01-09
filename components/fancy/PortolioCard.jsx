"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoCard, BentoGrid } from "@/components/fancy/Bento.jsx";
import { useMediaQuery } from 'usehooks-ts'



export function PortolioCard(props) {
  const isMobile = useMediaQuery('(min-width: 640px)');

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
  return (
    <div className=" pt-8 pb-5  h-full pl-10 pr-24  flex flex-col gap-4 font-['exo'] card-bg-white ml-8  rounded-xl w-full bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  ">
      <span className=" flex flex-col">
        <h1 className="font-['inter'] font-[700] text-[20px]">
          {props.subtitle}
        </h1>
        <h1 className="font-['inter'] font-bold  text-[32px]">
          {props.title}
        </h1>

      </span>
      <span className="flex flex-col">
        <section className=" flex flex-row  mb-6 mt-0 gap-0 ml-1 ">
          <div className="spacer-noH-CIAAN h-full w-[1px]  " />

          <span className=" flex flex-col gap-4 ">

            <span className=" flex flex-col pl-[6px] gap-[4px] max-w-[1000px]">

              {/* <h1 className="font-['inter'] font-[700] text-[20px]">
          Engagement Creation & Assigment
        </h1> */}

              <h1 className="font-['inter'] font-medium tracking-[0.005em]  text-[16px]">
               {props.description}
              </h1>
            </span>


          </span>

        </section>
        <ProgressSlider
          vertical={isMobile ? true : false}
          fastDuration={200}
          duration={6200}
          activeSlider='bbridge'
          className=' w-full  rounded-xl overflow-hidden sm:flex  '
        >
          <SliderBtnGroup className='sm:relative rounded-bl-xl min-w-[16rem]  absolute bottom-0 lg:max-w-[40%] lg:w-full sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-full h-fit sm:dark:bg-white sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
            {props.sliderContent.map((item, index) => (
              <SliderBtn
                key={index}
                value={item?.sliderName}
                className='text-left mt-0  pt-0 pb-4 sm:border-b border sm:pl-3 sm:pb-0 align-top   place-content-start sm:flex-1'
                progressBarClass=' left-0 sm:top-0 bottom-0  bg-CIAAN-scas-light sm:w-1 sm:h-full h-4  before:h-full before:w-1 before:'
              >
                <h2 className='relative px-4 rounded w-fit  bg-CIAAN-scas-light text-white mb-2'>
                  {item.title}
                </h2>
                <p className='text-sm font-medium  text-slate-900 line-clamp-2 pr-2'>
                  {item.desc}
                </p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
          <SliderContent className='w-full flex lg:grow-3'>
            {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
              <SliderWrapper
                className='h-[650px] aspect-video flex  '
                key={index}
                value={item?.sliderName}
              >
                <Image
                  className=' h-full  object-cover w-fit min-w-fit rounded-r-xl aspect-video overflow-hidden'
                  src={item.img}
                  width={1920}
                  height={1080}
                  alt={item.desc}
                />
              </SliderWrapper>
            ))}
          </SliderContent>
        </ProgressSlider>

      </span>
    </div>
  );
}
