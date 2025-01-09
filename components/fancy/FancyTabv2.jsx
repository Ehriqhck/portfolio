import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { useState } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import { BentoPreviews } from '@components/fancy/BentoPreviews.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoCard, BentoGrid } from "@/components/fancy/Bento.jsx";
import { useMediaQuery } from 'usehooks-ts'

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
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
  const CIAAN_Assess = [
    {
      Icon: FileTextIcon,
      name: "Security Assessment Creation & Management Userflow",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: InputIcon,
      name: "Security Engagement Creation & Management",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1",
    },

  ];
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
  const sliderItems_CIAAN_AssessmentFlow = [
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_1/assessment_step_1_1x.webp',
      title: '1. Set Details',
      desc: 'Assessment name, targeted project/app, due dates, etc. ',
      sliderName: 'Engagement Settings',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1x.webp',
      title: '2. Add Forms',
      desc: 'Add pre-made cybersecurity assessment forms.',
      sliderName: 'mountains',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_3/assessment_step_3_1x.webp',
      title: '3. Assign Users',
      desc: 'Security Users who will fill out added forms.',
      sliderName: 'autumn',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_5/assessment_step_5_1x.webp',
      title: '4. Assessment Reports',
      sliderName: 'foggy',
      desc: 'Assign Engineer(s) to engage with previously assigned Security Users',
    },

  ];
  const sliderItems_CIAAN_ManagementFlow = [
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessments_management/assessments_management_1x.webp',
      title: 'Assessments',
      desc: 'Spreadsheet layout of all assessments ',
      sliderName: 'Engagement Settings',
    },
    {
      img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1x.webp',
      title: 'Engagements',
      desc: 'Spreadsheet layout of all engagements',
      sliderName: 'mountains',
    },


  ];
  const isMobile = useMediaQuery('(min-width: 640px)');

  switch (currentStep) {
    case 2:
      return (
        <AnimatedGroup className="flex flex-col 
                "
          variants={
            variants}
        >
          <div key={1} className=" px-8 w-full h-fit">
            <div
              key={1} className="flex flex-row w-full gap-[36px]  mt-[12vh] h-fit ">
              <div className="flex flex-row gap-[36px] w-full  ">
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
                <BentoPreviews content={CIAAN_Assess} />
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
        <AnimatedGroup className="flex flex-col text-CIAAN-dark 
                  "
          variants={
            variants}
        >
          <div key={2} className=" w-full h-full 	">
            <div
              key={2} className="flex flex-col w-full gap-[36px]   h-full  ">
              <div className="px-8  flex flex-col gap-[64px] w-fit h-full   ">
                {/* <div className="flex pt-[16px]  align-middle self-center  h-[165px]">
                    <EhriqhckBlack height="100%" />
                    <img
                    class="object-cover object-center w-full rounded-lg  aspect-[48/53]"
                    src="https://d3e0o4zthiks52.cloudfront.net/headshot.jpg"
                  />
                  </div> */}
                <span className="flex text-CIAAN-light flex-col  h-fit leading-tight  pt-32">

                  <p className="text-CIAAN-light text-left  font-inter text-[32px] text-bold font-bold">
                    CIAAN Security
                  </p>
                  <p className="my-4 text-left text-CIAAN-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
                    Security Assesment & Engagement
                  </p>
                  <p className="mt-4 text-left text-CIAAN-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
                    Automation Platform
                  </p>
                </span>
                <span className="flex flex-row gap-8">
                  <div class="flex  w-fit flex-row  text-CIAAN-light font-inter text-1 text-bold gap-1.5">
                    <TeamIcon height='24px' />
                    <p className="font-['exo'] Capitalized font-[600] text-[18px]">Sole UX/UI Designer</p>
                  </div>
                  <div class="flex  w-fit flex-row  text-CIAAN-light font-inter text-1 text-bold gap-1.5">
                    <TimerIcon height='24px' />
                    <p className="font-['exo'] Capitalized font-[600] text-[18px]">4 Months</p>
                  </div>
                </span>

                <div className=" flex flex-col gap-4 font-['exo'] card-bg-white  rounded-xl w-fit bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
                pt-12 pb-14 px-6 h-full pl-12 pr-16 ">
                  <span className=" flex flex-col">
                    <h1 className="font-['inter'] font-[700] text-[20px]">
                      Security Staff Userflow #1
                    </h1>
                    <h1 className="font-['inter'] font-bold  text-[32px]">Security Engagements: Creation & Management</h1>

                  </span>
                  <div className="ml-[8px] mt-3 flex flex-col h-full gap-8 ">


                    <span className=" flex flex-col w-full card-bg-white-inset pl-6 pr-16 pb-12 pt-6">
                      <div className="ml-[8px] mt-3 flex flex-row ">
                        <span className=" flex  ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[20px] mb-1">T-Mobile Cybersecurity Administrators & Engineers </p>
                          <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row  ">
                        <div>
                          <UnderArrow height='24px' width='38px' />

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col">
                          <p className=" Capitalized font-[600] text-[18px]">User Goals </p>
                          <p>Security Staff need to be able to create and manage a multitude of ongoing engagements & assessments. Each engagement & assessment needs to have at least one or more Security Engineers assigned to lead it, as well as one or more Security Users who has product ownership/expertise over the project that is target of the engagement or assesment. Security staff is able to pick and choose from pre-made engagement/assessment forms and surveys provided by a backend database.  </p>
                        </span>

                      </div>
                      <div className="ml-4 mt-4 flex flex-row h-full w-full ">
                        <div>
                          {/* <UnderArrow height='24px' width='38px' /> */}

                        </div>
                        <span className=" flex mt-1 ml-1 flex-col pl-[38px] w-full">
                          <p className=" Capitalized font-[600] text-[18px]">Delivered Userflows </p>
                          {/* <p>Security Users are non-security staff who are administered security engagements and assessments for the projects they work on or have ownership/authority over. </p> */}
                          <div class="mt-2   w-full place-items-center overflow-x-scroll rounded-lg h-fit lg:overflow-visible">

                            <BentoPreviews bentoContent='CIAAN-Assess' />
                          </div>
                        </span>

                      </div>

                    </span>
          

                  </div>




                </div>


              </div>


              {/* <div className=" flex flex-col gap-4 font-['exo'] card-bg-white ml-8  rounded-xl w-full bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  pt-12 pb-10  h-full pl-12 pr-4 ">
                <span className=" flex flex-col">
                  <h1 className="font-['inter'] font-[700] text-[20px]">
                    Security Staff Userflow #1
                  </h1>
                  <h1 className="font-['inter'] font-bold  text-[32px]">Security Engagement Creation & Management</h1>

                </span>
                <span className="flex flex-col">
                  <section className=" flex flex-row  mb-4 mt-4 gap-0 ml-2 ">
                    <div className="spacer-noH-CIAAN h-full w-[1px]  " />

                    <span className=" flex flex-col gap-4 ">

                      <span className=" flex flex-col pl-[6px] gap-[4px] max-w-[1000px]">

                        <h1 className="font-['inter'] font-medium tracking-[0.005em]  text-[16px]">
                          Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.
                        </h1>

                      </span>


                    </span>

                  </section>
                  <ProgressSlider
                    vertical={isMobile ? true : false}
                    fastDuration={200}
                    duration={6200}
                    activeSlider='bbridge'
                    className='  rounded-xl overflow-hidden sm:flex ml-3 '
                  >
                    <SliderBtnGroup className='sm:relative rounded-l-xl  absolute bottom-0 lg:w-[22rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-full h-fit sm:dark:bg-white sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
                      {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                        <SliderBtn
                          key={index}
                          value={item?.sliderName}
                          className='text-left   pt-0 pb-4 sm:border-b border sm:pl-3 sm:pb-0  sm:flex-1'
                          progressBarClass='left-0 sm:top-0 bottom-0  bg-black sm:w-1 sm:h-full h-4  before:h-full before:w-1 before:'
                        >
                          <h2 className='relative px-4 rounded w-fit  bg-black text-white mb-2'>
                            {item.title}
                          </h2>
                          <p className='text-sm font-medium  text-slate-900 line-clamp-2 pr-2'>
                            {item.desc}
                          </p>
                        </SliderBtn>
                      ))}
                    </SliderBtnGroup>
                    <SliderContent className='w-full '>
                      {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
                        <SliderWrapper
                          className='h-full '
                          key={index}
                          value={item?.sliderName}
                        >
                          <Image
                            className=' h-[550px]  object-cover w-fit min-w-fit rounded-r-xl overflow-hidden'
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
              </div> */}

              <div className=" pt-8 pb-5  h-full pl-10 pr-10  flex flex-col gap-4 font-['exo'] card-bg-white ml-8  rounded-xl w-full bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  ">
                <span className=" flex flex-col">
                  <h1 className="font-['inter'] font-[700] text-[20px]">
                    Security Staff Userflow #1
                  </h1>
                  <h1 className="font-['inter'] font-bold  text-[32px]">Security Engagements: Creation & Management</h1>

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
                          Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.
                        </h1>
                      </span>


                    </span>

                  </section>
                  <ProgressSlider
                    vertical={isMobile ? true : false}
                    fastDuration={200}
                    duration={6200}
                    activeSlider='bbridge'
                    className=' w-full  rounded-xl overflow-hidden sm:flex ml-4  '
                  >
                    <SliderBtnGroup className='sm:relative rounded-bl-xl min-w-[16rem]  absolute bottom-0 lg:max-w-[40%] lg:w-full sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-full h-fit sm:dark:bg-white sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
                      {sliderItems_CIAAN_EngagementFlow.map((item, index) => (
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

              <div className=" pt-8 pb-5  h-full pl-10 pr-10  flex flex-col gap-4 font-['exo'] card-bg-white ml-8  rounded-xl w-full bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  ">
                <span className=" flex flex-col">
                  <h1 className="font-['inter'] font-[700] text-[20px]">
                    Security Staff Userflow #2
                  </h1>
                  <h1 className="font-['inter'] font-bold  text-[32px]">Security Assessments: Creation & Management</h1>

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
                          Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.
                        </h1>
                      </span>


                    </span>

                  </section>
                  <ProgressSlider
                    vertical={isMobile ? true : false}
                    fastDuration={200}
                    duration={6200}
                    activeSlider='bbridge'
                    className=' w-full  rounded-xl overflow-hidden sm:flex ml-4  '
                  >
                    <SliderBtnGroup className='sm:relative rounded-bl-xl min-w-[16rem]  absolute bottom-0 lg:max-w-[40%] lg:w-full sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-full h-fit sm:dark:bg-white sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
                      {sliderItems_CIAAN_AssessmentFlow.map((item, index) => (
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
                      {sliderItems_CIAAN_AssessmentFlow.map((item, index) => (
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
    <div className=" w-full  rounded-lg testbg2 h-full overflow-y-scroll">

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
