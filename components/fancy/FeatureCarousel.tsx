/*
 ! Add the following to your .globals.css

       .animated-cards::before {
         @apply pointer-events-none absolute select-none rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100;
         background: radial-gradient(
           1000px circle at var(--x) var(--y),
           #c9ee80 0,
           #eebbe2 10%,
           #adc0ec 25%,
           #c9ee80 35%,
           rgba(255, 255, 255, 0) 50%,
           transparent 80%
         );
         z-index: -1;
         content: "";
         inset: -1px;
       }
*/
"use client"
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
import { HeroHighlight } from '@/components/fancy/HeroHighlight';
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import ProjectIcon from '@components/generic/Icons/ProjectIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import Image, { type StaticImageData } from "next/image"
import EhriqhckWhite from '@components/generic/Icons/Socials/EhriqhckWhite.jsx'
import clsx from "clsx"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "motion/react"
import Balancer from "react-wrap-balancer"

import { cn } from '@/components/fancy/cn.jsx';

// Types
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface CardProps {
  title: string
  description: string
  bgClass?: string
}

interface ImageSet {
  step1dark1?: StaticImageData | string
  step1dark2?: StaticImageData | string
  step1light1: StaticImageData | string
  step1light2: StaticImageData | string
  step2dark1?: StaticImageData | string
  step2dark2?: StaticImageData | string
  step2light1: StaticImageData | string
  step2light2: StaticImageData | string
  step3dark?: StaticImageData | string
  step3light: StaticImageData | string
  step4light: StaticImageData | string
  alt: string
}

interface FeatureCarouselProps extends CardProps {
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
}

interface StepImageProps {
  src: StaticImageData | string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
}

// Constants
const TOTAL_STEPS = 4

const getClasses = (str) => {
  switch (str) {
    case "scas":
      return ("rcs-scas leading-tight font-['EXO']  font-[550]")
      break;
    case "tri":
      return ("rcs-tri leading-tight font-['EXO']  font-[550]")
    default:
      break;
  }
}

const getSteps = (str) => {

  switch (str) {
    case 'scas':
      return (
        [
          {
            id: "1",
            name: "Security Assessments",
            title: "Assessment Creation & Management",
            description: "Scaleable 5-step workflow for Security Staff to adminster assessments ",
          },
          {
            id: "2",
            name: "Security Engagements",
            title: "Engagement Creation & Management",
            description: "Scaleable 5-step workflow for Security Staff to deploy engagements with Security Users",
          },
          {
            id: "3",
            name: "Spreadsheet View",
            title: "Google Sheets but for Assessments & Engagements",
            description: "Consolidated tabular view for Security Staff to manage ongoing assessments & engagements",
          },
          {
            id: "4",
            name: "Security User Dashboard",
            title: "View and complete assessment forms",
            description: "Where Security Users to view their assigned assessment forms",
          },
        ]
      )
      break;
      case 'tri':
        return (
          [
            {
              id: "1",
              name: "Security Assessments",
              title: "Assessment Creation & Management",
              description: "Scaleable 5-step workflow for Security Staff to adminster assessments ",
            },
            {
              id: "2",
              name: "Security Engagements",
              title: "Engagement Creation & Management",
              description: "Scaleable 5-step workflow for Security Staff to deploy engagements with Security Users",
            },
            {
              id: "3",
              name: "Assessment Forms",
              title: "Google Forms but for security assessments ",
              description: "For Security Users to fill out assigned forms",
            },
            {
              id: "4",
              name: "Security User Dashboard",
              title: "Dashboard for Security Users to view their assigned assessments",
              description: "Security User's ",
            },
          ]
        )
        break;
    default:
      return ([])
      break;
  }

}

// const steps = [
//   {
//     id: "1",
//     name: "Security Assessments",
//     title: "Assessment Creation & Management",
//     description: "Scaleable 5-step workflow for Security Staff to adminster assessments ",
//   },
//   {
//     id: "2",
//     name: "Security Engagements",
//     title: "Engagement Creation & Management",
//     description: "Scaleable 5-step workflow for Security Staff to deploy engagements with Security Users",
//   },
//   {
//     id: "3",
//     name: "Assessment Forms",
//     title: "Google Forms but for security assessments ",
//     description: "For Security Users to fill out assigned forms",
//   },
//   {
//     id: "4",
//     name: "Security User Dashboard",
//     title: "Dashboard for assigned assessment forms",
//     description: "Security User's ",
//   },
// ] as const

/**
 * Animation presets for reusable motion configurations.
 * Each preset defines the initial, animate, and exit states,
 * along with spring physics parameters for smooth transitions.
 */
const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300, // Higher value = more rigid spring
      damping: 25, // Higher value = less oscillation
      mass: 0.5, // Lower value = faster movement
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

/**
 * Custom hook for managing cyclic transitions with auto-play functionality.
 * Handles both automatic cycling and manual transitions between steps.
 */
function useNumberCycler(
  totalSteps: number = TOTAL_STEPS,
  interval: number = 400000
) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [isManualInteraction, setIsManualInteraction] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  // Setup timer function
  const setupTimer = useCallback(() => {
    console.log("Setting up timer")
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      console.log("Timer triggered, advancing to next step")
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
      setIsManualInteraction(false)
      // Recursively setup next timer
      setupTimer()
    }, interval)
  }, [interval, totalSteps])

  // Handle manual increment
  const increment = useCallback(() => {
    console.log("Manual increment triggered")
    setIsManualInteraction(true)
    setCurrentNumber((prev) => (prev + 1) % totalSteps)

    // Reset timer on manual interaction
    setupTimer()
  }, [totalSteps, setupTimer])

  // Initial timer setup and cleanup
  useEffect(() => {
    console.log("Initial timer setup")
    setupTimer()

    return () => {
      console.log("Cleaning up timer")
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [setupTimer])

  // Debug logging
  useEffect(() => {
    console.log("Current state:", {
      currentNumber,
      isManualInteraction,
      hasTimer: !!timerRef.current,
    })
  }, [currentNumber, isManualInteraction])

  return {
    currentNumber,
    increment,
    isManualInteraction,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    const isMobile = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(
        userAgent
      )
    )

    const isDev = process.env.NODE_ENV !== "production"
    if (isDev) setIsMobile(isSmall || isMobile)

    setIsMobile(isSmall && isMobile)
  }, [])

  return isMobile
}

// Components
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.9,
    opacity: 0.5,
  },
  active: {
    scale: 0.9,
    opacity: 1,
  },
}

const StepImage = forwardRef<
  HTMLImageElement,
  StepImageProps & { [key: string]: any }
>(
  (
    { src, alt, className, style, width = 1200, height = 630, ...props },
    ref
  ) => {
    return (
      <Image
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        width={width}
        height={height}
        style={{
          position: "absolute",
          userSelect: "none",
          maxWidth: "unset",
          ...style,
        }}
        {...props}
      />

    )
  }
)
StepImage.displayName = "StepImage"

const MotionStepImage = motion(StepImage)

/**
 * Wrapper component for StepImage that applies animation presets.
 * Simplifies the application of complex animations through preset configurations.
 */
const AnimatedStepImage = ({
  preset = "fadeInScale",
  delay = 0,
  onAnimationComplete,
  ...props
}: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  )
}

/**
 * Main card component that handles mouse tracking for gradient effect.
 * Uses motion values to create an interactive gradient that follows the cursor.
 */
function FeatureCard({
  bgClass,
  children,
  step,
  ...props
}: CardProps & {
  children: React.ReactNode
  step: number
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const getBorderStoke = (type) => {
    switch (type) {
      case "scas":
        return ("scas")
        break;
      case "tri":
        return ("tri")
        break;

      default:
        break;
    }
  }
  return (
    <motion.div
      className="animated-cards-cursor-scas animated-cards-cursor-scas-fixed relative w-full  rounded-3xl  aspect-[3/2]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          // bg-gradient-to-b from-neutral-900/90 to-stone-800 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90
          "group relative w-full h-full overflow-hidden rounded-3xl ",
          "md:hover:border-transparent ",
          bgClass
        )}
      >
asd
        <div className="max-[844px]:ml-6  my-10  ml-16  w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full flex-col gap-2 max-[844px]:pt-[3.8rem] pt-12 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <motion.h2
                className="text-xl font-bold tracking-tight  text-CIAAN-light md:text-1xl max-[844px]:text-[18px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {getSteps(props.case)[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-[16px]  font-medium font-['exo']  text-CIAAN-light leading-tight max-[844px]:text-[13px] ">
                  <Balancer>{getSteps(props.case)[step].description}</Balancer>
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Progress indicator component that shows current step and completion status.
 * Handles complex state transitions and animations for step indicators.
 */
function Steps({
  steps,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="flex justify-start ml-12 max-[844px]:ml-4 max-[844px]:mt-0 mt-2">
      <ol
        className="flex w-full   items-start justify-start  max-[844px]:justify-start gap-1 flex-wrap md:divide-y-0"
        role="list"
      >
        {steps.map((step, stepIdx) => {
          // Calculate step states for styling and animations
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          const isFuture = !isCompleted && !isCurrent

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative z-50 rounded-full h-fit px-3 py-1 transition-all duration-300 ease-in-out max-[972px]:px-1 ",
                isCompleted ? "bg-neutral-500/20" : "bg-neutral-500/10"
              )}
            >
              <div
                className={cn(
                  "group flex w-full cursor-pointer items-center focus:outline-none focus-visible:ring-2",
                  (isFuture || isCurrent) && "pointer-events-none"
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <motion.span
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1 : 1,
                    }}
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full duration-300",
                      isCompleted &&
                      "bg-brand-400 text-white dark:bg-brand-400",
                      isCurrent &&
                      "bg-brand-300/80 text-neutral-400 dark:bg-neutral-500/50",
                      isFuture && "bg-brand-300/10 dark:bg-neutral-500/20"
                    )}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <IconCheck className="h-3 w-3 stroke-white stroke-[3] text-white dark:stroke-black" />
                      </motion.div>
                    ) : (
                      <span
                        className={cn(
                          "text-xs",
                          !isCurrent && "text-[#C6EA7E]"
                        )}
                      >
                        {stepIdx + 1}
                      </span>
                    )}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={clsx(
                      "text-sm font-medium duration-300 text-light2 text-nowrap tracking-[0.025em]",
                      isCompleted && "text-muted-foreground",
                      isCurrent && "text-lime-300 dark:text-lime-500",
                      isFuture && "text-neutral-500"
                    )}
                  >
                    {step.name}
                  </motion.span>
                </span>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

const defaultClasses = {
  step1img1:
    "pointer-events-none w-[50%] border border-border-100/10 transition-all duration-500 dark:border-border-700/50 rounded-2xl",
  step1img2:
    "pointer-events-none w-[60%] border border-border-100/10 dark:border-border-700/50 transition-all duration-500 overflow-hidden rounded-2xl",
  step2img1:
    "pointer-events-none w-[50%] border border-border-100/10 transition-all duration-500 dark:border-border-700 rounded-2xl overflow-hidden",
  step2img2:
    "pointer-events-none w-[40%] border border-border-100/10 dark:border-border-700 transition-all duration-500 rounded-2xl overflow-hidden",
  step3img:
    "pointer-events-none w-[90%] border border-border-100/10 dark:border-border-700 rounded-2xl transition-all duration-500 overflow-hidden",
  step4img:
    "pointer-events-none w-[90%] border border-border-100/10 dark:border-border-700 rounded-2xl transition-all duration-500 overflow-hidden",
} as const

/**
 * Main component that orchestrates the multi-step animation sequence.
 * Manages state transitions, handles animation timing, and prevents
 * animation conflicts through the isAnimating flag.
 */
export function FeatureCarousel({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: FeatureCarouselProps) {
  const { currentNumber: step, increment } = useNumberCycler()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    if (isAnimating) return
    // setIsAnimating(true)
    increment()
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const renderStepContent = () => {
    const content = () => {
      switch (step) {
        case 0:
          /**
           * Layout: Two images side by side
           * - Left image (step1img1): 50% width, positioned left
           * - Right image (step1img2): 60% width, positioned right
           * Animation:
           * - Left image slides in from left
           * - Right image slides in from right with 0.1s delay
           * - Both use spring animation for smooth motion
           */
          return (
            <motion.div
              className="relative w-full h-full"
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step1img1Class)}
                src={image.step1light1}
                preset="slideInLeft"
              />
              {/* <AnimatedStepImage
                alt={image.alt}
                className={clsx(step1img2Class)}
                src={image.step1light2}
                preset="slideInRight"
                delay={0.1}
              /> */}
            </motion.div>
          )
        case 1:
          /**
           * Layout: Two images with overlapping composition
           * - First image (step2img1): 50% width, positioned left
           * - Second image (step2img2): 40% width, overlaps first image
           * Animation:
           * - Both images fade in and scale up from 95%
           * - Second image has 0.1s delay for staggered effect
           * - Uses spring physics for natural motion
           */
          return (
            <motion.div
              className="relative w-full h-full"
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step2img1Class, "rounded-2xl")}
                src={image.step2light1}
                preset="fadeInScale"
              />
              {/* <AnimatedStepImage
                alt={image.alt}
                className={clsx(step2img2Class, "rounded-2xl")}
                src={image.step2light2}
                preset="fadeInScale"
                delay={0.1}
              /> */}
            </motion.div>
          )
        case 2:
          /**
           * Layout: Single centered image
           * - Full width image (step3img): 90% width, centered
           * Animation:
           * - Fades in and scales up from 95%
           * - Uses spring animation for smooth scaling
           * - Triggers animation complete callback
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, "rounded-2xl")}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 3:
          /**
           * Layout: Final showcase layout
           * - Container: Centered, 60% width on desktop
           * - Image (EhriqhckWhite): 90% width, positioned slightly up
           * Animation:
           * - Container fades in and scales up
           * - Image follows with 0.1s delay
           * - Both use spring physics for natural motion
           */
          return (
            <motion.div
              className={clsx(
                "absolute flex w-full flex-col ", step4imgClass
              )}
              {...ANIMATION_PRESETS.fadeInScale}
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step4imgClass, "rounded-2xl", "pointer-events-none  overflow-hidden  ")}
                src={image.step4light}
                preset="fadeInScale"
                delay={0.1}
              />
            </motion.div>
          )
        default:
          return null
      }
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          {...ANIMATION_PRESETS.fadeInScale}
          className="w-full h-full absolute"
        >
          {content()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (

    <div className={cn(props.cardBg, "flex  w-full  max-w-[84vh] self-center  h-fit  flex-col text-left   pb-0 rounded-b-3xl rounded-3xl overflow-hidden")}>
      <HeroHighlight>
        <span className=" flex flex-col pb-4 h-full space-between w-full px-[27px]  ">
          <p className="text-3xl font-inter   font-[700] mb-[5px] mt-8 leading-tight">{props.title}</p>
          <p className="font-[500] font-inter  text-[16px]  leading-tight">{props.description}</p>
          {props.button}

          <div className={cn(props.descriptionClassName, " flex flex-col mt-5  pb-[16px] pt-3 px-2.5 w-full max-w-[1000px]",)} >

            <span className=" ml-1 mt-0.5 mb-1 font-['Exo_2'] tracking-[0.045em] w-full capitalize text-[16px] h-fit self-start">
              <div className="flex flex-col gap-3 w-full ">
                <h3 className="font-[550] text-[14px] leading-tight   ml-[8px] text-CIAAN-light opacity-[85%]">
                  Last Updated 2/3/2024
                </h3>
                <h3 className="font-[550] text-[14px] leading-tight w-full  text-CIAAN-light opacity-[85%]">
                  <span className="flex flex-row  w-full  justify-between max-w-[650px] space-between ml-[10px]">
                    <div className="flex flex-row gap-2">
                      <div className=" self-center mt-1">
                        <TimerIcon height='26px' stop={"" + props.iconStop} />
                      </div>
                      <div className="flex flex-col gap-1.5 self-center">
                        <h3 className="font-[550] text-[12px] leading-none  -ml-[1px] text-CIAAN-light opacity-[90%]">
                          Project Length
                        </h3>
                        <p className="text-CIAAN-light font-['exo'] self-center leading-none text-left w-full">4 Months</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className=" self-center mt-1">
                        <TeamIcon height='26px' stop={props.iconStop} />
                      </div>
                      <div className="flex flex-col gap-1.5 self-center">
                        <h3 className="font-[550] text-[12px] leading-none  -ml-[1px] text-CIAAN-light opacity-[90%]">
                          Role
                        </h3>
                        <p className="text-CIAAN-light font-['exo'] self-center leading-none text-left w-full">Sole UX/UI Designer</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className=" self-center mt-1">
                        <ProjectIcon height='26px' stop={props.iconStop} />
                      </div>
                      <div className="flex flex-col gap-1.5 self-center">
                        <h3 className="font-[550] text-[12px] leading-tight   -ml-[1px] text-CIAAN-light opacity-[90%]">
                          Project Type
                        </h3>
                        <p className="text-CIAAN-light font-['exo'] self-center leading-none  -mt-[2px] text-left w-full">
                          Interactive Workflow Mockups
                        </p>
                      </div>
                    </div>
                  </span>
                </h3>
              </div>
            </span>
            <div className="flex flex-row w-full  ">



            </div>

          </div>

        </span>
        {/* <div class="nav-menu-swatch   w-full h-[22px] flex flex-row">
      <div class="w-full h-full bg-[#4b0035]">
      </div>
      <div class="w-[70%] h-full bg-[#5d60eb] "></div>
      <div class="w-[30%] h-full bg-[#f1f0ee] "></div>
    </div> */}
linear-gradient(348deg, #aa0067 0%, #ffcb3cbf 50%, #7c3c72b5 100%)
        <div className={cn("relative z-10 h-full grid w-full gap-8 rounded-3xl px-1 pt-0 pb-5", props.insetCardBorderClassName)}>

          <FeatureCard {...props} step={step}>
            {renderStepContent()}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={cn("absolute left-[12rem]  max-[844px]:left-0  top-6 z-50 h-full w-full cursor-pointer cardInset md:left-0",
                props.gradientOverlay
              )}
            >
              <Steps current={step} onChange={() => { }} steps={getSteps(props.case)} />
            </motion.div>
            <motion.div
              className="absolute right-0 top-0 h-[100vh] z-50  w-full cursor-pointer md:left-0"
              onClick={handleIncrement}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
          </FeatureCard>

        </div>
      </HeroHighlight>

    </div>
  )
}

