"use client"
import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { DirectionAwareTabs } from 'components/fancy/DirectionAwareTabs.jsx'
import { RainbowButton } from "./RainbowButton";
import { FeatureCarousel } from "./FeatureCarousel";
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import { cn } from '@/components/fancy/cn.jsx';
import { useWindowSize } from 'components/fancy/hook-use-window-size.tsx'
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/fancy/BentoGrid.jsx";

export const HeroHome = () => {
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

    return (
        <div className="">
            <div className=' fixed top-16 z-[1000] w-screen self-center'>
                <DirectionAwareTabs tabs={tabs} />



            </div>
            <ReactLenis
                root
                options={{
                    // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
                    lerp: 0.05,
                    //   infinite: true,
                    //   syncTouch: true,
                }}
            >
                {/* <Nav /> */}
                <Hero />
                <Schedule />
            </ReactLenis>
        </div>
    );
};

const Nav = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between  text-white">
            <button
                onClick={() => {
                    document.getElementById("launch-schedule")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="flex items-center gap-1 text-xs text-zinc-400"
            >
                LAUNCH SCHEDULE
            </button>
        </nav>
    );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `100vh` }}
            className="relative w-full overflow-hidden"
        >
            <CenterImage />

            <ParallaxImages />

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    // const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT],
        ["100%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className=" top-0 h-screen w-full "
            style={{
                // clipPath,
                backgroundSize,
                opacity,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Orbiting satellite"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        />
    );
};

const Schedule = () => {
    const itemsScas = [
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
            className: "md:col-span-2 md:row-span-2",

        },
        {
            title: "System UI & Branding",
            description: "Componentized Design System with Page Templates",
            header: <div
                className='bg-white mt-1 bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp)] h-full mt-1 object-fill bg-cover bg-no-repeat w-full  rounded-lg   overflow-hidden'
                src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp"

            // alt={item.desc}
            />,
            className: "md:col-span-1 row-span-2",
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
    return (
        <section
            id="launch-schedule"
            className="mx-auto   flex flex-col text-white bg-CIAAN-bodyHero"
        >
            <ScheduleItem title="Starlink" date="Dec 20th" location="Texas"
                sectionContent={
                    <FeatureCarousel
                        items={itemsScas}
                        gradientOverlay='cardInset-scas'
                        cardInsetBg="bg-CIAAN-bodyHero"
                        cardBg="animated-cards-header-scas"
                        case="scas"
                        title=<p className="text-CIAAN-light font-['exo'] ">CIAAN Security Corporation </p>
                        descriptionClassName="bg-animated-cards-description-scas backdrop-blur-[10px]"
                        description=<p className="text-CIAAN-light font-['exo']">Flightsim Keybind Mapping Automation</p>

                        iconStop="#E3EDFF"
                        overview=<p className="text-CIAAN-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                        insetCardBorderClassName="min-w-fit w-full animated-cards-border-bg-scads"
                        // Example classes for responsive layout
                        step1img1Class={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]    md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        step1img2Class={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]   md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        step2img1Class={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]   md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        step2img2Class={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]   md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        step3imgClass={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]   md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        step4imgClass={cn(
                            " drop-shadow-[0_15px_35px_rgb(54,0,40)] pointer-events-none w-[85%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]   md:left-[0%]  mt-8",
                            "md:group-hover:translate-y-2"
                        )}
                        // Example images
                        image={{
                            step1light1: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4",
                            step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                            step2light1: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4",
                            step2light2: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4",
                            step3light: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4",
                            step4light: "https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4",
                            alt: "Feature demonstration",
                        }}
                        // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                        bgClass="bg-CIAsAN-body"
                        button={<RainbowButton type='scas'> <p className='rcs-scas-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                        }
                    />
                }
            />

            <ScheduleItem title="NG-21" date="Dec 9th" location="Florida"
                sectionContent={
                    <FeatureCarousel
                        items={itemsScas}

                        case="tri"
                        cardInsetBg="bg-CIAAN-bodyHero"
                        cardBg="animated-cards-header-scas "

                        cardBg="bg-animated-cards-description-tri    "
                        title=<p className="text-gradient-display  font-['exo'] "> Trichord Digital LLC.</p>
                        descriptionClassName="panel-white bg-panel-white backdrop-blur-[5px] flex flex-col  "
                        description=<p className="text-gradient-display font-['exo']">Flightsim Keybind Mapping Automation</p>
                        overview=<p className="text-tri-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
                        insetCardBorderClassName="animated-cards-borsder-bg-tri"
                        // Example classes for responsive layout
                        step1img1Class={cn(

                        )}
                        step1img2Class={cn(
                            "pointer-events-none w-[100%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]  top-[57%]  md:top-[8%]",
                            "md:group-hover:translate-y-2"
                        )}
                        step2img1Class={cn(
                            "pointer-events-none w-[100%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]  top-[57%]  md:top-[8%]",
                            "md:group-hover:translate-y-2"
                        )}
                        step2img2Class={cn(
                            "pointer-events-none w-[100%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]  top-[57%]  md:top-[8%]",
                            "md:group-hover:translate-y-2"
                        )}
                        step3imgClass={cn(
                            "pointer-events-none w-[100%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]  top-[57%]  md:top-[8%]",
                            "md:group-hover:translate-y-2"
                        )}
                        step4imgClass={cn(
                            "pointer-events-none w-[100%]  transition-all duration-500 dark:border-stone-700/50",
                            "  rounded-[10px]  top-[57%]  md:top-[7%]",
                            "md:group-hover:translate-y-2"
                        )}
                        // Example images
                        image={{
                            step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
                            step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
                            step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
                            step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                            step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_forms/screen_security_user_forms_1x.webp",
                            step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
                            alt: "Feature demonstration",
                        }}
                        // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
                        bgClass="bg-tri-bodys"
                        button={
                            // <button class="flex gap-[6px] w-fit whitespace-nowrap text-[#CEFCFF]  font-['exo_2'] uppercase h-[40px] p-button p-component" type="smooth" data-pc-name="button" data-pc-section="root"><p className='text-tri-light rounded-xl font-[550] text-[15px] self-center leading-none font-["exo_2"] rcs-scas-text uppercase '> READ CASE STUDY </p><svg height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2417_4739)"><g clip-path="url(#clip1_2417_4739)"><path d="M24 1.77178V23.1772C24 23.8907 23.4977 24.4745 22.8837 24.4745H8.34419C7.73023 24.4745 7.25581 23.8907 7.25581 23.1772V17.2421C7.25581 16.5285 7.75814 15.9448 8.37209 15.9448C8.98605 15.9448 9.48837 16.5285 9.48837 17.2421V21.8799H21.7674V3.06908H9.48837V7.70692C9.48837 8.42043 8.98605 9.00422 8.37209 9.00422C7.75814 9.00422 7.25581 8.42043 7.25581 7.70692V1.77178C7.25581 1.05827 7.73023 0.474487 8.34419 0.474487H22.8837C23.4977 0.474487 24 1.05827 24 1.77178ZM12.1395 16.6583C11.693 17.1772 11.7209 17.988 12.1395 18.5069C12.3628 18.7664 12.6419 18.8961 12.9209 18.8961C13.2 18.8961 13.507 18.7664 13.7023 18.5069L18.0837 13.3826C18.5023 12.8637 18.5023 12.0529 18.0837 11.5664L13.7302 6.37719C13.2837 5.85827 12.586 5.85827 12.1395 6.37719C11.693 6.89611 11.693 7.70692 12.1395 8.22584L14.6233 11.1448L1.11628 11.1772C0.502326 11.1772 0 11.761 0 12.4745C0 13.188 0.502326 13.7718 1.11628 13.7718L14.6233 13.7394L12.1395 16.6583Z" fill="#98FDDF"></path></g></g><defs><clipPath id="clip0_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath><clipPath id="clip1_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath></defs></svg></button>
                            <RainbowButton type='tri'> <p className='rcs-tri-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
                        }
                    />
                }
            />
        </section>
    );
};

const ScheduleItem = ({ title, date, location, sectionContent }) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]

    });
    // const { scrollYProgress } = useScroll();

    const filter = useTransform(scrollYProgress, v => `saturate(${v})`);
    // const scrollSatTransform = useTransform(scrollYProgress, [0, 1500], [25, 0]);

    return (
        <motion.div
            ref={ref}
            className=" flex items-center pb-24 flex-row justify-between h-fit min-h-screen w-screen  "
            initial={{
                y: 48,
                opacity: 0,
            }}
            style={{ filter }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                scale: { type: 'spring', stiffness: 500 },
                duration: 0.75
            }}
        // whileHover={{
        //     scale: 1.15,
        //     backgroundColor: '#FFCC4D'
        // }}
        >

            <div className=" flex flex-col min-h-screen  w-screen  ">
                {/* <span
                    style={{
                        objectFit: 'cover',

                    }}
                    className=" flex h-screen  content-end place-content-end absolute w-full  -z-10"
                >
                    <video
                        style={{
                            objectFit: 'cover',

                        }}
                        className='h-screen w-[40vw] flex self-end HeroHomeBg-scas'
                        src="https://customer-ct1udu2wic3j3wru.cloudflarestream.com/0b7c1165f13cedbcdfd43335e9ee8a27/downloads/default.mp4"
                        autoPlay muted loop
                        playsInline
                    />
                </span> */}

                <motion.h1
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className=" text-4xl font-black uppercase text-zinc-50 sticky top-3"
                >
                </motion.h1>
                <span className=" flex flex-col w-screen h-fit  place-items-start ">


                    {sectionContent}
                    {/* <BentoGrid className="  w-full  h-fit">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                                cardBg="featureCard-bg-scas h"
                            />
                        ))}
                    </BentoGrid> */}
                </span>
                <span className="homepage-bg-gradient-seam h-32  w-screen mb-[-4rem] ">

                </span>
            </div>

        </motion.div>
    );
};