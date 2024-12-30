import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { useState } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import { BentoPreviews } from '@components/fancy/BentoPreviews.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'

import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
import Image from "@node_modules/next/image";
import { TreeTableDialogueSelectionContext } from "@components/Provider";
function getButtons(step) {

  switch (step) {
    case 1:
      return (
        <div className="flex items-center justify-center">
          <span>About</span>


        </div>
      )
      break;

    default:
      return (
        <div className="flex items-center justify-center">
          <span>{step} asdsad</span>


        </div>
      )
      break;
  }
}
function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "inactive";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          // complete: {
          //   scale: 1.25,
          // },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0  rounded-[8px]  bg-blue-200"
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#fff", // neutral
            borderColor: "#e5e5e5", // neutral-200
            color: "#a3a3a3", // neutral-400
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#3b82f6", // blue-500
            color: "#3b82f6", // blue-500
          },
          // complete: {
          //   backgroundColor: "#3b82f6", // blue-500
          //   borderColor: "#3b82f6", // blue-500
          //   color: "#3b82f6", // blue-500
          // },
        }}
        transition={{ duration: 0.2 }}
        className="relative flex h-10 w-fit items-center justify-center rounded-[8px] border-2 font-semibold"
      >
        {status}
        {/* <div className="flex items-center justify-center">
          {status === "complete" ? (
            // <CheckIcon className="h-6 w-6 text-white" />
            <span>{step} asdsad</span>
          ) : (
            <span>{step} asdsad</span>
          )}
        </div> */}
        {getButtons(step)}
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
function getStepBody(currentStep) {
  const variants = {
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
  }
  const sliderItems = [
    {
      img: 'https://imgur.com/vjgokm8',
      title: 'Bridge',
      desc: 'A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
      sliderName: 'bridge',
    },
    {
      img: 'https://imgur.com/vjgokm8',
      title: 'Mountains View',
      desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
      sliderName: 'mountains',
    },
    {
      img: 'https://imgur.com/vjgokm8',
      title: 'Autumn',
      desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
      sliderName: 'autumn',
    },
    {
      img: 'https://imgur.com/vjgokm8',
      title: 'Foggy',
      sliderName: 'foggy',
      desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
    },
  ];

  const sliderItems_CIAAN_EngagementFlow = [
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_1/create_engagement_step_1_1x.webp',
      title: '1. Set Details',
      desc: 'asdasdasdA breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.',
      sliderName: 'Engagement Settings',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp',
      title: '2. Add Forms',
      desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
      sliderName: 'mountains',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_3/create_engagement_step_3_1_5x.webp',
      title: '3. Assign Users',
      desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
      sliderName: 'autumn',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_4/create_engagement_step_4_1_5x.webp',
      title: '4. Assign Engineers',
      sliderName: 'foggy',
      desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_5/create_engagement_step_5_1_5x.webp',
      title: '5. Status',
      sliderName: 'foggyd',
      desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
    },
  ];
  switch (currentStep) {
    case 2:
      return (
        <AnimatedGroup className="flex flex-col 
                "
          variants={
            variants}
        >
          <div key={1} className="space-y-2 px-8 w-full h-full">
            <div
              key={1} className="flex flex-row w-full gap-[36px]  mt-[12vh] h-fit ">
              <div className="flex flex-row gap-[36px] w-full  content-between">
                <div className="flex pt-[16px]  align-middle self-center  h-[165px]">
                  {/* <EhriqhckBlack height="100%" /> */}
                  <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  />
                </div>
                <span className="flex whitespace-nowrap flex-col align-middle self-center h-fit ">
                  <p className=" text-black font-inter text-[64px] text-bold font-bold self-start  mb-[-8px]">
                    Hi there! </p>
                  <p className=" text-black font-inter text-[64px] text-bold font-bold self-start mb-[-16px]">
                    I'm Eric Yang. </p>
                </span>
              </div>
              <div class="  min-w-[300px] w-full place-items-center overflow-x-scroll rounded-lg  lg:overflow-visible">
                {/* <img
                  class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                  src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                /> */}
                <BentoPreviews />
              </div>
            </div>
            <ProgressSlider vertical={false} activeSlider="bridge">
              <SliderContent>
                {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                  <SliderWrapper key={index} value={item?.sliderName}>
                    <Image
                      className="rounded-xl 2xl:h-[500px] h-[350px] object-cover"
                      src={item.img}
                      width={1900}
                      height={1080}
                      alt={item.desc}
                    />
                  </SliderWrapper>
                ))}
              </SliderContent>

              <SliderBtnGroup className="absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-5  rounded-md">
                {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                  <SliderBtn
                    key={index}
                    value={item?.sliderName}
                    className="text-left  p-3 border-r"
                    progressBarClass="dark:bg-black bg-white h-full">
                    <h2 className="relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium  line-clamp-2">{item.desc}</p>
                  </SliderBtn>
                ))}
              </SliderBtnGroup>
            </ProgressSlider>
          </div>


        </AnimatedGroup>
      )
      break;
    case 1:
      return (
        <AnimatedGroup className="flex flex-col 
                  "
          variants={
            variants}
        >
          <div key={2} className=" w-full h-full 	">
            <div

              key={2} className="flex flex-col w-full gap-[36px]   h-full  ">
              <div className="px-8  flex flex-col gap-[64px] w-full h-full   ">
                {/* <div className="flex pt-[16px]  align-middle self-center  h-[165px]">
                    <EhriqhckBlack height="100%" />
                    <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  />
                  </div> */}
                <span className="flex  flex-col  h-fit leading-tight  pt-32">

                  <p className="text-left text-black font-inter text-[32px] text-bold font-bold">
                    CIAAN Security
                  </p>
                  <p className="text-left text-black font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
                    Cybersecurity Assesment & Engagement Automation Platform </p>
                </span>
                <span className="flex flex-row gap-8">
                  <div class="flex  w-fit flex-row  text-black font-inter text-1 text-bold gap-1.5">
                    <TeamIcon height='24px' />
                    <p className="font-['exo'] Capitalized font-[600] text-[18px]">Sole UX/UI Designer</p>
                  </div>
                  <div class="flex  w-fit flex-row  text-black font-inter text-1 text-bold gap-1.5">
                    <TimerIcon height='24px' />
                    <p className="font-['exo'] Capitalized font-[600] text-[18px]">4 Months</p>
                  </div>
                </span>

                <div className=" flex flex-col text-black font-['exo'] card-bg-white  rounded-xl w-fit bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
                pt-8 pb-14 px-6 h-full">

                  <h3 class="text-xl font-semibold text-neutral-700 ">T-Mobile Stakeholders</h3>
                  <div className="ml-[8px] mt-3 flex flex-row h-full ">

         
                    <span className=" flex flex-col">
                      <div className="ml-[8px] mt-3 flex flex-row h-full ">
                        <span className=" flex mt-1 ml-1 flex-col">
                        <p className=" Capitalized font-[600] text-[18px]">T-Mobile Cybersecurity Administrators & Engineers </p>
                        <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row h-full ">
                        <div>
                          <UnderArrow height='24px' width='38px' />

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">User Goals </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row h-full ">
                        <div>
                          <UnderArrow height='24px' width='38px' />

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">Pain Points </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                    </span>
                    <span className=" flex flex-col">
                      <div className="ml-[8px] mt-3 flex flex-row h-full ">
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">T-Mobile Cybersecurity Users </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row h-full ">
                        <div>
                          <UnderArrow height='24px' width='38px' />

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">User Goals </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row h-full ">
                        <div>
                          <UnderArrow height='24px' width='38px' />

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">Pain Points </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                    </span>

                  </div>
           



                </div>

                <div class="  min-w-[300px] w-full place-items-center overflow-x-scroll rounded-lg h-fit lg:overflow-visible">
                  {/* <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  /> */}
                  <BentoPreviews />
                </div>
              </div>

            </div>

          </div>

          <section className=" flex flex-col px-12  pb-8">
            <h1 className="font-['inter'] font-bold text-black text-[64px]">Hi-fi Mockup Screens</h1>
            <section className=" flex flex-row  mb-4 mt-4 gap-2 ml-4 ">
              <div className="spacer-noH-CIAAN h-full w-[1px] " />

              <span className=" flex flex-col  ">

                <span className=" flex flex-col pl-[6px] gap-[4px] max-w-[1000px]">

                  <h1 className="font-['inter'] font-[700] text-black text-[20px]">
                    Engagement Creation & Assigment
                  </h1>

                  <h1 className="font-['inter'] font-medium tracking-[0.005em] text-black text-[16px]">
                    Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.
                  </h1>
                </span>
                <ProgressSlider
                  vertical={true ? true : false}
                  fastDuration={300}
                  duration={4000}
                  activeSlider='bbridge'
                  className=' rounded-[12px] overflow-hidden sm:flex mt-4 ml-[4px]'
                >
                  <SliderBtnGroup className='sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-full h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
                    {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                      <SliderBtn
                        key={index}
                        value={item?.sliderName}
                        className='text-left  p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1'
                        progressBarClass='left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4  before:h-full before:w-4 before:'
                      >
                        <h2 className='relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2'>
                          {item.title}
                        </h2>
                        <p className='text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2'>
                          {item.desc}
                        </p>
                      </SliderBtn>
                    ))}
                  </SliderBtnGroup>
                  <SliderContent className='w-full h-full'>
                    {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                      <SliderWrapper
                        className='h-fit'
                        key={index}
                        value={item?.sliderName}
                      >
                        <Image
                          className=' h-fit object-cover'
                          src={item.img}
                          width={1900}
                          height={1080}
                          alt={item.desc}
                        />
                      </SliderWrapper>
                    ))}
                  </SliderContent>
                </ProgressSlider>
              </span>

            </section>
            {/* <ProgressSlider vertical={false} activeSlider="bridge" className={'px-8'}>
              <SliderBtnGroup className=" top-0 flex flex-col h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-5  rounded-md">
                {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                  <SliderBtn
                    key={index}
                    value={item?.sliderName}
                    className="text-left  p-3 border-r"
                    progressBarClass="dark:bg-black bg-white h-full">
                    <h2 className="relative px-4 rounded-full py-1 w-fit font-['inter'] dark:bg-white dark:text-black text-white bg-gray-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium  line-clamp-2">{item.desc}</p>
                  </SliderBtn>
                ))}
              </SliderBtnGroup>
              <SliderContent>
                {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                  <SliderWrapper key={index} value={item?.sliderName}>
                    <Image
                      className="rounded-xl 2xl:h-[1000px] h-fit object-cover"
                      src={item.img}
                      width={1900}
                      height={1080}
                      alt={item.desc}
                    />
                  </SliderWrapper>
                ))}
              </SliderContent>


            </ProgressSlider> */}


          </section>

        </AnimatedGroup>
      )
      break;
    default:
      return (
        <div className="space-y-2 px-8 w-full">
          <div className="h-4 w-5/6 rounded bg-red-100" />
          <div className="h-4 rounded bg-neutral-100" />
          <div className="h-4 w-4/6 rounded bg-neutral-100" />
        </div>

      )
      break;
  }
}
// Usage
export default function FancyTabv2() {
  let [step, setStep] = useState(1);

  return (
    <div className=" w-full  rounded-lg testbg h-full overflow-y-scroll">

      <div className="flex  flex-row gap-[32px]  rounded p-8">
        <button onClick={() => setStep(1)} >
          <Step step={1} currentStep={step} />
        </button>

        <button onClick={() => setStep(2)} >
          <Step step={2} currentStep={step} />
        </button>
        <button onClick={() => setStep(3)} >
          <Step step={3} currentStep={step} />
        </button>
        <button onClick={() => setStep(4)} >
          <Step step={4} currentStep={step} />
        </button>
        <button onClick={() => setStep(5)} >
          <Step step={5} currentStep={step} />
        </button>
      </div>

      {/* Dynamic content based on `step` */}

      {getStepBody(step)}


      <div className=" flex justify-between">
        <button
          onClick={() => setStep(step < 2 ? step : step - 1)}
          className={`${step === 1 ? "pointer-events-none opacity-50" : ""
            } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
        >
          Back
        </button>
        <button
          onClick={() => setStep(step > 5 ? step : step + 1)}
          className={`${step > 5 ? "pointer-events-none opacity-50" : ""
            } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
