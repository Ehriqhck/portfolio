"use client"
import React from 'react'
import { motion, useScroll, } from "framer-motion";
import { ComponentProps } from "react";
import { useState, useRef } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import { BentoPreviews } from '@components/fancy/BentoPreviews.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoCard, BentoGrid } from "@/components/fancy/Bento.jsx";
import { useMediaQuery } from 'usehooks-ts'
import PortfolioCard from '@components/fancy/PortfolioCard.jsx'
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'

const page = () => {
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
  return (
    <div className=" w-full   testbg2 h-full mt">

      <AnimatedGroup className="flex flex-col text-CIAAN-dark 
                  "
        variants={
          variants}
      >
        <div key={2} className=" w-full h-full  testbg3	">
          <div
            key={2} className="flex flex-col w-full    h-full  ">
            <div className="   flex flex-col w-fit h-fit  ">

              <div className=" pt-[16vh]  px-8 flex flex-col gap-[64px] bg-CIAAN-header">
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

              </div>

              <span className="homepage-bg-gradient-seam h-32  w-screen mb-[-4rem] ">

              </span>
              <span className=" flex flex-col bg-CIAAN-body gap-[64px] pt-8">


                <section className=" flex flex-row w-full 
                  ">
                  <div className=" flex flex-col w-[fit] overflow-visible top-5  ml-6 mr-5  ">

                    {/* navbar */}
                    <div className="place-self-start	 self-start top-5 uppercase   font-['Exo_2'] tracking-[0]
text-[12px] text-white h-fit flex gap-[4px] flex-col navbg   
  z-[500]     pl-1   whitespace-nowrap  sticky  pb-[16px] pr-[28px] pt-[10px] mt-[5vh]
base ">
                      <span className="flex flex-col gap-2">
                        <div className="px-[5px]  py-[3px]  flex flex-row gap-[2px] items-center  uppercase  h-fit self-start place-items-start">
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
                          <p className=""> <a href="#Home">Overview</a></p>


                        </div>

                        <div className="px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
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
                          <p className=""> <a href="#HowItWorks">Research & Planning</a></p>


                        </div>

                        <span className="pl-[4px] flex flex-col -mt-[4px]">
                          <div className="px-[5px] py-[3px] flex flex-row gap-[2px] items-center mb-[2px]  h-fit self-start place-items-start">

                            <p className="ml-[4px]"><a href="#500Keybinds">Security Staff Flows</a></p>


                          </div>

                          <div className=" ml-[14px]  px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
                            <div className=" -mt-[8px] -ml-[6px] ">
                              <UnderArrow fill="#ffffff25" height='18px' />

                            </div>
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
                            <p className=""><a href="#500Keybinds">Security Assessments</a></p>


                          </div>
                          <div className=" ml-[14px] px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
                            <div className=" -mt-[8px] -ml-[6px] ">
                              <UnderArrow fill="#ffffff25" height='18px' />

                            </div>
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
                            <p className=""><a href="#500Keybinds">Security Engagements</a></p>


                          </div>
                          <div className=" ml-[14px] px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
                            <div className=" -mt-[8px] -ml-[6px] ">
                              <UnderArrow fill="#ffffff25" height='18px' />

                            </div>
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
                            <p className=""><a href="#500Keybinds">Spreadsheet View</a></p>


                          </div>
                        </span>
                        <span className="pl-[4px] flex flex-col -mt-[4px]">
                          <div className="px-[5px] py-[3px] flex flex-row gap-[2px] items-center mb-[2px]  h-fit self-start place-items-start">

                            <p className="ml-[4px]"><a href="#500Keybinds">Security User Flows</a></p>


                          </div>

                          <div className=" ml-[14px]  px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
                            <div className=" -mt-[8px] -ml-[6px] ">
                              <UnderArrow fill="#ffffff25" height='18px' />

                            </div>
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
                            <p className=""><a href="#500Keybinds">Security Assessments</a></p>


                          </div>
                          <div className=" ml-[14px] px-[5px] py-[3px] flex flex-row gap-[2px] items-center   h-fit self-start place-items-start">
                            <div className=" -mt-[8px] -ml-[6px] ">
                              <UnderArrow fill="#ffffff25" height='18px' />

                            </div>
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
                            <p className=""><a href="#500Keybinds">Security Engagements</a></p>


                          </div>

                        </span>

                        <div className="px-[5px] py-[3px]  flex flex-row gap-[2px] h-fit self-start items-center ">
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
                          <p className=""> <a href="#DeviceInputs">Device Inputs</a></p>

                        </div>
                      </span>


                    </div>

                  </div>

                  <section className=" flex flex-col h-full w-full  gap-[64px] mt-[5vh]">


                    <PortfolioCard Title='Security Controls & Automation System (SCAS)' Section='Project Overview'
                      CardContent={sliderItems_CIAAN_Overview} ></PortfolioCard>

                    <PortfolioCard Title='User Research' Section='Research & Planning'
                      CardContent={sliderItems_CIAAN_UserResearch} ></PortfolioCard>

                    <PortfolioCard Section={'Security Staff Screens'}
                      Title={'Security Engagements: Creation & Management'}
                      CardContent={sliderItems_CIAAN_EngagementFlow}
                    />
                    <PortfolioCard Section={'Security Staff Screens'}
                      Title={'Security Assessments: Creation & Management'}
                      CardContent={sliderItems_CIAAN_AssessmentFlow}
                    />


                    <PortfolioCard
                      CardContent={sliderItems_CIAAN_ManagementFlow}
                      Section={"Security Staff Screens"}
                      Title={'Assessment & Engagement Management'}
                    />

                    <PortfolioCard
                      Section={"Security User"}
                      Title={'Assessment Form Delivery'}
                      CardContent={sliderItems_CIAAN_SecurityUserDashboard}
                    />
                    <PortfolioCard
                      Section={"User Testing"}
                      Title={'Cognitive Walkthroughs'}
                      CardContent={sliderItems_CIAAN_UserTesting}
                    />
                  </section>
                </section>
              </span>
            </div>
          </div>
        </div>
      </AnimatedGroup>
    </div>
  )
}

export default page