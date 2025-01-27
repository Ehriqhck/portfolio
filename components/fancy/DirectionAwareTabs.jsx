"use client"

import { ReactNode, useMemo, useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import useMeasure from "react-use-measure"
import EhriqhckWhite from '@components/generic/Icons/Socials/EhriqhckWhite.jsx'

import { cn } from '@/components/fancy/cn.jsx';



function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  onChange,
  body,
}) {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, bounds] = useMeasure()

  const content = useMemo(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content
    return activeTabContent || null
  }, [activeTab, tabs])

  const handleTabClick = (newTabId) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1
      setDirection(newDirection)
      setActiveTab(newTabId)
      onChange ? onChange() : null
    }
  }

  const variants = {
    initial: (direction) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  }

  return (
    <div className=" flex flex-col items-center  w-full">
      <div
        className={cn(
          "sticky z-[999] top-8 left-8 flex space-x-1   border border-none rounded-full cursor-pointer bg-black px-[3px] py-[3.2px] shadow-inner-shadow",
          className,
          rounded
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-neutral-200  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
              activeTab === tab.id
                ? "text-white"
                : "hover:text-neutral-300/60  text-neutral-200/80",
              rounded
            )}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute  inset-0 z-10 mix-blend-difference bg-white "
                style={rounded ? { borderRadius: 9 } : { borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}

            <p className=" font-['Exo']  leading-tight text-l uppercase font-semibold text-light2"> {tab.label} </p>
          </button>
        ))}
        <div className="w-fit h-fit rounded-full overflow-hidden  self-center  pl-2" >
          <EhriqhckWhite width="30px" />

        </div>
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative -mt-[40px] mx-auto w-full h-full  overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content} 
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  )
}
export { DirectionAwareTabs }
