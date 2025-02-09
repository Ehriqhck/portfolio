import { motion, useScroll, } from "framer-motion";
import { ComponentProps } from "react";
import { useState, useRef } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoCard, BentoGrid } from "@/components/fancy/BentoGrid.jsx";
import { useMediaQuery } from 'usehooks-ts'
import PortfolioCard from '@components/fancy/PortfolioCard.jsx'
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
import WorkflowIcon from '@components/generic/Icons/WorkflowIcon.jsx'
import { Header } from '@components/fancy/Header.jsx'
import { usePathname } from "next/navigation";
import { DirectionAwareTabs } from 'components/fancy/DirectionAwareTabs.jsx'
import { StickyScroll } from "@components/fancy/StickyScroll.jsx";

import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
import Image from "@node_modules/next/image";
import { TreeTableDialogueSelectionContext } from "@components/Provider";
import {
  BlurVignette,
  BlurVignetteArticle,
} from 'components/fancy/blur-vignette.jsx';
function getButtons(step) {

  switch (step) {

    case 1:
      return (
        <div className="flex h-fit w-full text-nowrap  flex-col text-left  ">
          <span className=" flex flex-col mr-24 ml-[27px]  ">
            <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
            <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
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
        </div>
      )
      break;

    case 2:
      return (
        <div className="flex h-fit w-full text-nowrap  flex-col text-left ">
          <span className=" flex flex-col mr-24 ml-[27px]  ">
            <p className="text-[22px] font-inter text-white font-[500] mb-[5px] mt-[15px] leading-none">CIAAN Security SCAS</p>
            <p className="font-[400] font-inter text-[14px] text-white">Cybersecurity Automation Platform</p>
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
        </div>
      )
      break;

    default:
      return (
        <div className="flex items-center justify-center">
          <span> </span>


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
    <motion.div animate={status} className="relative flex w-full  rounded-[3px]  ">
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
        className="absolute inset-0  rounded-[8px] "
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#ffffff25", // neutral
            borderColor: "#e5e5e5", // neutral-200
            color: "#a3a3a3", // neutral-400
          },
          active: {
            backgroundColor: "#ffffff25",
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
        className="button-scas  relative flex  w-full items-center justify-center  border-2 font-semibold"
      >
        {/* {status} */}
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
  const stickyContentAboutMe = [
    {
      sectionBg: 'bg-home-header',
      bottomSeam: <span class="homepage-bg-gradient-seam h-32  w-screen mb-[-4rem] "></span>,
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full  w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    // {
    //   title: "Real time changes",
    //   description:
    //     "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    //   content: (
    //     <div className="h-full w-full  flex items-center justify-center text-white">
    //       <Image
    //         src="/linear.webp"
    //         width={300}
    //         height={300}
    //         className="h-full w-full object-cover"
    //         alt="linear board demo"
    //       />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Version control",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Version control
    //     </div>
    //   ),
    // },
    // {
    //   title: "Running out of content",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Running out of content
    //     </div>
    //   ),
    // },
  ];
  const tabs = [
    {
      id: 0,
      label: "About Me",
      content: (
        <>             <StickyScroll content={stickyContentAboutMe} ></StickyScroll>

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

  // const CIAAN_Assess = [
  //   {
  //     Icon: <WorkflowIcon height='24px' />,
  //     name: "Security Assessment Creation & Management Userflow",
  //     description: "We automatically save your files as you type.",
  //     href: "/",
  //     cta: "Learn more",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //     className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  //   },
  //   {
  //     Icon: <WorkflowIcon height='24px' />,
  //     name: "Security Engagement Creation & Management",
  //     description: "Search through all your files in one place.",
  //     href: "/",
  //     cta: "Learn more",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp" />,
  //     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1",
  //   },

  // ];
  const sliderItems_CIAAN_Overview = [
    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'What is SCAS, and what is the project scope?',
      note: <p className="">
        The work shown below was prior to CIAAN winning the development contract from T-Mobile. See the 'impact' section for further details </p>,
      description:
        <p>SCAS (Security Controls & Automation System) is a cybersecurity platform featuring a suite of security automation tools tailored for T-Mobile as bid to win a development contract against other competing software vendors.The work covered below focuses on the part of SCAS responsible for automating security assessments and engagements for T-Mobile's usecase.
        </p>,
      visuals: [

      ]
    },
    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'What are Security Assessments?',
      note: <p className="">Within SCAS, those on the receiving end of these assessments forms are considered under the umbrella term 'Security Users'.</p>,
      description:
        <p>Imagine you are a developer or product owner working on some kind of product/app/service within a large organization: you have some baseline intuition/experience/knowledge on writing safe and secure code, but apart from common regulatory policies like GDPR, you don't spend your time studying the specifics of cybersecurity polcies and best practices - it's not something you have specialized in.
          <br />  <br /> However, from a liability and regulatory standpoint the organization needs to make sure their software meets the bar, which is where the cybersecurity team comes in to (essentially) give you a Google Forms survey asking questions assessing the compliance of your code against the exact requirements.
          These assessment forms are compartively much more practical and convenient than spending the resources to train every developer to be cybersecurity policy experts, or have them do their own research which carries its own risks.
        </p>,
      visuals: [

      ]
    },

    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'What are Security Engagements?',
      // note: <p className="">Within SCAS, those on the receiving end of these assessments forms are considered under the umbrella term 'Security Users'.</p>,
      description:
        <p>Consider security engagements akin to the other end of the equation: engagements are when Security Staff engage with Security Users to make sure their projects are compliant. For example, say the Security Team recieves an assessment form for project X indicating that X is not compliant against some esoteric policy that the product owner/developers are not familiar with. Here, some security engineer(s) are then assigned to give direct assistence to its respective stakeholders to meet compliance.
        </p>,
      visuals: [

      ]
    },



  ];
  const sliderItems_CIAAN_EngagementFlow = [

    {
      video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'Engagement Creation/Management',
      description: <p>
        Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.        </p>,
      visuals: [
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
          title: '5. Deployment',
          sliderName: 'foggyd',
          desc: 'Deploy and monitor engagement status. ',
        },
      ]
    },


  ];
  const sliderItems_CIAAN_AssessmentFlow =
    [
      {
        video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F0b7c1165f13cedbcdfd43335e9ee8a27%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
        heading: 'Assessment Creation/Management',
        description: <p>
          Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.        </p>,
        visuals: [
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
        ]
      },


    ];
  const sliderItems_CIAAN_ManagementFlow = [
    {
      video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/afa43c86b161718c4dcf69f8ef6240ed/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2Fafa43c86b161718c4dcf69f8ef6240ed%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',

      heading: 'Managing Assessments & Engagements',
      description: <p>
        To enable T-Mobile security staff to better manage multiple ongoing engagements & assessments, both have a spreadsheet-style management page featuring various filtering and sorting functionality.
      </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessments_management/assessments_management_1_5x.webp',
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
      ]
    }

  ];

  const sliderItems_CIAAN_SecurityUserDashboard = [
    {
      heading: 'User Dashboard',
      description: <p>
        This dashboard allows Security Users to view and fill out any assigned security assessment forms.  Each form card shows detailed information about the respective assessment driven by feedback that Security Staff were often asked trivial questions such as about who was managing the assessment or how far along it has progressed.
      </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp',
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },

      ]
    },
    {
      heading: 'Assessment Forms',
      description: <p>
        Imagine Google Forms but for cybersecurity assessments. Since these forms often cannot be quickly filled due to certain questions that require extra work for Security Users, and combined with the high-stakes impact these forms can have, there was extra emphasis for form-safety controls & exposing assessment details to reduce user error.

      </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp',
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
      ]
    },

  ];
  const sliderItems_CIAAN_UserResearch = [
    {
      heading: 'Expert Interviews',
      description: <p>User research was conducted concurrently alongside design tasks throughout the project. At the outset, I leaned heavily on expert interviews with CIAAN directors (as they knew how much I didn't know) to establish actionable user insights to serve as a starting point for planning my design sprints.
        This was later combined with insights from semi-structured interviews with some of T-Mobile's security staff -- the culmination of which is shown in the graphic below.</p>,
      note:
        <p> There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.  </p>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]


    },
    {
      heading: 'Competitive Analysis',
      description: <p>Due to the proprietary nature of cybersecurity platforms there was little opportunity to make a direct comparisons, but the issues affecting Security Staff are effectively analogous to many everyday problems such as having to many meetings, managing multiple projects and people, and other common friction points. For this reason, against the prior user research insights, the analysis aimed to explore design patterns employed by other products which could serve SCAS's assessment & engagement worklflows.   </p>,
      note:
        <p> For example, one pattern listed from the which made it into the mockups were Slack & Discord's systemic handling of user profile information with ID tags.   </p>
      ,
      visuals: [
        // {
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
        //   title: 'Assessments',
        //   desc: 'Spreadsheet layout of all assessments ',
        //   sliderName: 'Engagement Settings',
        // },
      ]


    },

  ];
  const sliderItems_CIAAN_UserTesting = [

    {
      // figma:"https://embed.figma.com/proto/5yh2ZI7ywU6dsPP9m8wd1r/402-SCAS?page-id=136%3A9531&node-id=452-86817&viewport=2763%2C-1433%2C0.26&scaling=contain&content-scaling=fixed&starting-point-node-id=452%3A86817&show-proto-sidebar=1&embed-host=share",
      heading: 'Methodology',
      description: <p>
        Using the mockups above, three cognitive walkthroughs were conducted remotely through Zoom screensharing with three cybersecurity experts familiar with assessment/engagement processes. Each participant was asked to perform four common worflow tasks and were encouraged to verbalize their thought-process in-situ. Additional time was allocated afterwards to enquire further about usability feedback & discussion.         </p>,
      visuals: ''
    },
    {
      heading: 'Testing Results',
      description: <p>
        Research insights are summarized in the table below. Overall, feedback was generally very positive both in terms of both ease-of-use and aesthetics, though there were questions about the specific definitions of the terminology used such as 'assigning' a Security Engineer -- no operational definition was provided by the mockups so it was left to the users to presume.    </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/testing_feedback/testing_feedback_1_5x.webp',
          title: '1. Set Details',
          desc: 'Engagement name, targeted project/app, due dates, etc. ',
          sliderName: 'Engagement Settings',
        },

      ]
    }

  ];
  const isMobile = useMediaQuery('(min-width: 640px)');
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
  const variants2 = {
    active: {
      display: "block"
    },
    inactive: {
      display: "hidden",
      transition: { duration: 2 }
    }
  }
  switch (currentStep) {
    case 'ux-scas':
      return (
        <div className="flex flex-col 
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
                    class="object-cover object-center w-full  aspect-[48/53]"
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


        </div>
      )
      break;
    case '/':
      return (
        <div className="flex flex-col text-light
                  "
          variants={
            variants}
        >

          <div key={2} className=" w-full h-full  	">
            <div
              key={2} className="flex flex-col w-full    h-full  ">

              <div className=" h-screen     flex flex-col  HomeBg pb-16">
                <DirectionAwareTabs tabs={tabs} />

                <div className="flex flex-row gap-16  w-full justify-self-center content-center">
                  {/* <div class="aboutMePic  min-w-[255px]  rounded-xl overflow-hidden">

                    </div> */}

                  {/* <span className="flex text-light flex-col h-full leading-tight  pt-32">

                      <p className="text-light text-left font-['exo']  text-[32px] text-bold font-bold">
                        Hi there! I'm Eric Yang.
                      </p>
                      <p className="my-4 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
                        I'm Eric Yang.
                      </p>
                      <p className="mt-5 text-left text-light font-['exo'] text-[56px] text-bold font-bold self-start mb-[-16px]">
                        I Design & Build Experiences.
                      </p>
                    </span> */}
                </div>

                {/* <span className="flex flex-row  aboutMe">

                    <div className="flex flex-col aboutMe1 w-[600px]">

                      <div className="flex flex-col aboutMe2 w-full">

                      </div>
                    </div>


                    <div class="aboutMePic">
                      <img src="https://cdn.prod.website-files.com/60ed4aeb79e554d52f0d9608/64f640c054e53ad5310a13b6_headshot.jpg" loading="lazy" sizes="(max-width: 479px) 0px, (max-width: 767px) 100vw, 314.09375px" srcset="https://cdn.prod.website-files.com/60ed4aeb79e554d52f0d9608/64f640c054e53ad5310a13b6_headshot-p-500.jpg 500w, https://cdn.prod.website-files.com/60ed4aeb79e554d52f0d9608/64f640c054e53ad5310a13b6_headshot-p-800.jpg 800w, https://cdn.prod.website-files.com/60ed4aeb79e554d52f0d9608/64f640c054e53ad5310a13b6_headshot.jpg 1080w" alt="" class="headshot" />
                    </div>

                  </span> */}

              </div>


            </div>
          </div>
        </div>
      )
      break;
    default:
      return (
        <div className="space-y-2 px-8 w-full">
          {currentStep}
        </div>

      )
      break;
  }
}
// Usage
export default function FancyTabv2() {
  let [step, setStep] = useState(1);
  const pathname = usePathname()

  return (
    <>

      <div className=" w-full   testbg2 h-full mt">


        {/* Dynamic content based on `step` */}

        {getStepBody(pathname)}



      </div></>
  );
}
