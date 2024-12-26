import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { useState } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import { BentoPreviews } from '@components/fancy/BentoPreviews.jsx'
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
import Image from "@node_modules/next/image";
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
  switch (currentStep) {
    case 1:
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
                {sliderItems.map((item, index) => (
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

              <SliderBtnGroup className="absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md">
                {sliderItems.map((item, index) => (
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
    case 2:
      return (
        <AnimatedGroup className="flex flex-col 
                  "
          variants={
            variants}
        >
          <div key={2} className=" px-8 w-full h-full">
            <div

              key={2} className="flex flex-col w-full gap-[36px]   h-full ">


              <div className="flex flex-row gap-[36px] w-full  content-between ">
                {/* <div className="flex pt-[16px]  align-middle self-center  h-[165px]">
                    <EhriqhckBlack height="100%" />
                    <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  />
                  </div> */}
                <span className="flex  flex-col  self-center h-fit leading-tight ">
                  {/* <p className=" text-black font-inter text-[64px] text-bold font-bold self-start  mb-[-8px]">
                      Hi there! </p> */}
                  <p className=" text-black font-inter text-[64px] text-bold font-bold self-start mb-[-16px]">
                    CIAAN Security Assesment & Engagement Automation Platform</p>
                </span>
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
    <div className=" w-full  rounded-lg testbg h-full">

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
          onClick={() => setStep(step > 4 ? step : step + 1)}
          className={`${step > 4 ? "pointer-events-none opacity-50" : ""
            } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
