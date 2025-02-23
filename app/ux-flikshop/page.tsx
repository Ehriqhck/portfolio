"use client"
import React from 'react'
import { motion, useScroll, } from "framer-motion";
import { ComponentProps } from "react";
import { useState, useRef } from "react";
import { AnimatedGroup } from '@/components/fancy/AnimatedGroup.jsx';
import EhriqhckBlack from 'components/generic/Icons/Socials/EhriqhckBlack.jsx'
import TeamIcon from '@components/generic/Icons/TeamIcon.jsx'
import TimerIcon from '@components/generic/Icons/TimerIcon.jsx'
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoGrid, BentoGridItem } from "@/components/fancy/BentoGrid.jsx";
import { useMediaQuery } from 'usehooks-ts'
import PortfolioCard from '@components/fancy/PortfolioCard.jsx'
import FigmaIcon from '@components/generic/Icons/Socials/FigmaIcon.jsx'
import { Stream } from "@cloudflare/stream-react";
import IframeResizer from "@iframe-resizer/react"
import { ReactLenis } from "lenis/dist/lenis-react";
// import { NyxTOCItems } from '@components/fancy/NyxTOCItems';
import { cn } from '@/components/fancy/cn.jsx';

import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  RefObject,
} from "react"
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,

} from "react"
const page = () => {

  // #region Components
  const ScrollArea = (({ className, children, ...props }) => (
    <>   {children} </>


  ))




  // #region Contexts
  const ActiveAnchorContext = createContext<string[]>([])
  const ScrollContext = createContext<RefObject<HTMLElement | null>>({
    current: null,
  })
  const StylesContext = createContext<PageStyles>({
    tocNav: "xl:hidden",
    toc: "max-xl:hidden",
  })

  // #region Hooks
  function useActiveAnchor(): string | undefined {
    return useContext(ActiveAnchorContext).at(-1)
  }

  function useActiveAnchors(): string[] {
    return useContext(ActiveAnchorContext)
  }

  function usePageStyles() {
    return useContext(StylesContext)
  }

  // #region Utility Functions
  function isDifferent(a: unknown, b: unknown): boolean {
    if (Array.isArray(a) && Array.isArray(b))
      return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]))
    return a !== b
  }

  function mergeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") ref(value)
        else if (ref !== null && typeof ref === "object")
          (ref as React.MutableRefObject<T | null>).current = value
      })
    }
  }

  function getItemOffset(depth: number): number {
    if (depth <= 2) return 14
    if (depth === 3) return 26
    return 36
  }

  function getLineOffset(depth: number): number {
    return depth >= 3 ? 12 : 0
  }

  // #region Components
  function ScrollProvider({
    containerRef,
    children,
  }: {
    containerRef: RefObject<HTMLElement | null>
    children?: ReactNode
  }): React.ReactElement {
    return (
      <ScrollContext.Provider value={containerRef}>
        {children}
      </ScrollContext.Provider>
    )
  }

  function AnchorProvider({
    toc,
    single = true,
    children,
  }: {
    toc: TableOfContents
    single?: boolean
    children?: ReactNode
  }): React.ReactElement {
    const headings = useMemo(() => {
      return toc.map((item) => item.url.split("#")[1])
    }, [toc])

    return (
      <ActiveAnchorContext.Provider value={useAnchorObserver(headings, single)}>
        {children}
      </ActiveAnchorContext.Provider>
    )
  }

  const TOCItem = forwardRef<HTMLAnchorElement, TOCItemProps>(
    ({ onActiveChange, ...props }, ref) => {
      const containerRef = useContext(ScrollContext)
      const anchors = useActiveAnchors()
      const anchorRef = useRef<HTMLAnchorElement>(null)
      const mergedRef = mergeRefs(anchorRef, ref)

      const isActive = anchors.includes(props.href.slice(1))



      return (
        <a ref={mergedRef} data-active={isActive} {...props}>
          {props.children}
        </a>
      )
    },
  )

  TOCItem.displayName = "TOCItem"

  function TocThumb({
    containerRef,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    containerRef: RefObject<HTMLElement | null>
  }): ReactNode {
    const active = useActiveAnchors()
    const thumbRef = useRef<HTMLDivElement>(null)
    const activeRef = useRef(active)
    activeRef.current = active

    function calc(container: HTMLElement, active: string[]): TOCThumb {
      if (active.length === 0 || container.clientHeight === 0) return [0, 0]

      let upper = Number.MAX_VALUE
      let lower = 0

      for (const item of active) {
        const element = container.querySelector<HTMLElement>(
          `a[href="#${item}"]`,
        )
        if (!element) continue

        const styles = getComputedStyle(element)
        upper = Math.min(
          upper,
          element.offsetTop + Number.parseFloat(styles.paddingTop),
        )
        lower = Math.max(
          lower,
          element.offsetTop +
          element.clientHeight -
          Number.parseFloat(styles.paddingBottom),
        )
      }

      return [upper, lower - upper]
    }

    function update(element: HTMLElement, info: TOCThumb): void {
      element.style.setProperty("--nyx-top", `${info[0]}px`)
      element.style.setProperty("--nyx-height", `${info[1]}px`)
    }

    useEffect(() => {
      if (!containerRef.current) return
      const container = containerRef.current

      const onResize = (): void => {
        if (!thumbRef.current) return
        update(thumbRef.current, calc(container, activeRef.current))
      }

      onResize()
      const observer = new ResizeObserver(onResize)
      observer.observe(container)

      return () => {
        observer.disconnect()
      }
    }, [containerRef])



    return <div ref={thumbRef} role="none" {...props} />
  }

  function TocItemsEmpty() {
    return (
      <div className="bg-card text-muted-foreground rounded-lg border p-3 text-xs">
        No headings found
      </div>
    )
  }

  function Toc(props: HTMLAttributes<HTMLDivElement>) {
    const { toc } = usePageStyles()

    return (
      <div
        id="nyx-toc"
        {...props}
        className={cn(
          "top-nyx-layout-top sticky h-[var(--nyx-toc-height)] pb-2 pt-12",
          toc,
          props.className,
        )}
        style={
          {
            ...props.style,
            "--nyx-toc-height":
              "calc(100dvh - var(--nyx-banner-height) - var(--nyx-nav-height))",
          } as any
        }
      >
        <div className="flex h-full w-[var(--nyx-width)] max-w-full flex-col gap-3 pe-4">
          {props.children}
        </div>
      </div>
    )
  }

  // Main Component
  function NyxTOCItems({
    items,
    isMenu = false,
    label,

    ...props
  }: {
    items: TOCItemType[]
    isMenu?: boolean
    label?: ReactNode
    labelCn?: string
  }) {
    const viewRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const [svg, setSvg] = useState<{
      path: string
      width: number
      height: number
    }>()

    useEffect(() => {
      if (!containerRef.current) return
      const container = containerRef.current

      function onResize(): void {
        if (container.clientHeight === 0) return
        let w = 0
        let h = 0
        const d: string[] = []
        for (let i = 0; i < items.length; i++) {
          const element: HTMLElement | null = container.querySelector(
            `a[href="#${items[i].url.slice(1)}"]`,
          )
          if (!element) continue

          const styles = getComputedStyle(element)
          const offset = getLineOffset(items[i].depth) + 1
          const top = element.offsetTop + Number.parseFloat(styles.paddingTop)
          const bottom =
            element.offsetTop +
            element.clientHeight -
            Number.parseFloat(styles.paddingBottom)

          w = Math.max(offset, w)
          h = Math.max(h, bottom)

          d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`)
          d.push(`L${offset} ${bottom}`)
        }

        setSvg({
          path: d.join(" "),
          width: w + 1,
          height: h,
        })
      }

      const observer = new ResizeObserver(onResize)
      onResize()
      observer.observe(container)
      return () => observer.disconnect()
    }, [items])

    if (items.length === 0) return <TocItemsEmpty />

    return (
      <>
        {label && (
          <h3 className={cn(props.labelCn, "  inline-flex items-center gap-1.5 mb-4")}
          >
            <AlignLeft className="size-4 opacity-100 " />
            {label}
          </h3>
        )}
        <ScrollArea className={cn("flex pl-1/2 flex-col ", isMenu && "-ms-3")}>
          {svg ? (
            <div
              className={cn(props.tocLine, "absolute start-0 top-0 rtl:-scale-x-100  z-20 ")}
              style={{
                width: svg.width,
                height: svg.height,
                maskImage: `url("data:image/svg+xml,${
                  // Inline SVG
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
                  )
                  }")`,
              }}
            >
              <TocThumb
                containerRef={containerRef}
                className="bg-primary mt-[var(--nyx-top)] h-[var(--nyx-height)] transition-all"
              />
            </div>
          ) : null}
          <ScrollProvider containerRef={viewRef}>
            <div className="flex flex-col" ref={containerRef}>
              {items.map((item, i) => (
                <LocalTOCItem
                  key={item.url}
                  item={item}
                  upper={items[i - 1]?.depth}
                  lower={items[i + 1]?.depth}
                  textCn={props.textCn}
                  progress={props.progress}
                />
              ))}
            </div>
          </ScrollProvider>
        </ScrollArea>
      </>
    )
  }



  function LocalTOCItem({
    item,
    upper = item.depth,
    lower = item.depth,
    ...props
  }: {
    item: TOCItemType
    upper?: number
    lower?: number
  }) {
    const offset = getLineOffset(item.depth)
    const upperOffset = getLineOffset(upper)
    const lowerOffset = getLineOffset(lower)

    return (
      <TOCItem
        href={item.url}
        style={{
          paddingInlineStart: getItemOffset(item.depth),
        }}
        className="prose  data-[active=true]:text-primary  relative py-1.5 text-sm transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0"
      >
        {offset !== upperOffset ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100"
          >
            <line
              x1={upperOffset}
              y1="0"
              x2={offset}
              y2="12"
              className="stroke-foreground/10"
              strokeWidth="1"
            />
          </svg>
        ) : null}
        <div
          className={cn(
            "bg-foreground/10 absolute inset-y-0 w-px",
            offset !== upperOffset && "top-1.5",
            offset !== lowerOffset && "bottom-1.5",
          )}
          style={{
            insetInlineStart: offset,
          }}
        />
        <div className="flex flex-row">
          {item.depth == 3 ? <>
            <div className=" self-center  -ml-[6px]  pr-1 pt-[1px]">
              <UnderArrow fill="#ffffff45" height='14px' />

            </div>
            <div className={cn(props.textCn, "pt-[5px] flex")}>

              {
                item.circle ?
                  <>
                    <div className=' flex self-center'>
                      {item.circle}
                      <p className=' self-center pl-[2px] '>    {item.title} </p>
                    </div>
                  </> : <></>
              }


            </div>

          </> : <>
          </>}

          <p className={cn(props.textCn, " flex")}>
            {item.depth == 1 ? <>
              <div className={cn(props.textCn, "self-center pt-[0px] flex flex-row")}>
                {item.circle ?
                  <>
                    {item.circle}
                    <p className=' self-center  pl-[2px]  '>    {item.title} </p>
                  </>
                  : <></>
                }
              </div>

            </> : <>
            </>}


          </p>

        </div>
      </TOCItem>
    )
  }
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
  const sliderItems_FLIK_Overview = [
    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'What is Flikshop?',
      // note: <p className="">
      //   Flikshop is a D.C. based B2B and B2C company whose mission is to give support to incarcerated individuals by reconnecting them with their families through the Flikshop mail platform, providing rehabilitative and vocational training services through the 'Flikshop Me' prison learning management system and 'Flikshop School of Business', as well as connecting previously incarcerated individuals post-release with personalized benefits and opportunities through the 'Flikshop Neighbourhood datahub.  </p>,
      description:
        <p>        Flikshop is a D.C. based B2B and B2C company whose mission is to give support to incarcerated individuals by reconnecting them with their families through the Flikshop mail platform, providing rehabilitative and vocational training services through the Flikshop Me prison learning management system and Flikshop School of Business, as well as connecting previously incarcerated individuals post-release with personalized benefits and opportunities through the Flikshop Neighbourhood datahub.  </p>,

      visuals: [

      ]
    },
    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'Project Background',
      note: <p className="">Within SCAS, those on the receiving end of these assessments forms are considered under the umbrella term 'Security Users'.</p>,
      description:
        <p> As part of their transition into a mid-sized company, Flikshop brought us on to research and ideate new market opportunities and to increase exposure to its current product verticals (Flikshop Me prison LMS, School of Business, Flikshop Neighbourhood datahub, & Flikshop Mail).

        </p>,
      visuals: [

      ]
    },
    {
      // video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'Project Scope',
      note: <p className="">Within SCAS, those on the receiving end of these assessments forms are considered under the umbrella term 'Security Users'.</p>,
      description:
        <p> As part of their transition into a mid-sized company, Flikshop brought us on to research and ideate new market opportunities and to increase exposure to its current product verticals (Flikshop Me prison LMS, School of Business, Flikshop Neighbourhood datahub, & Flikshop Mail).
          <br />  <br /> During the Fall, the first focus was to conduct background research regarding Fliskhop's verticals and to interview company stakeholders to see where there was potential for market growth. The second goal was to use the collected research insights to ideate and create tangible product concepts.
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
  const sliderItems_FLIK_EngagementFlow = [

    {
      video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/846ef93c705e9d63ef0d0b7c5296da12/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2F846ef93c705e9d63ef0d0b7c5296da12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
      heading: 'Engagement Creation/Management',
      description: <p>
        Security Engagements are created and managed by Security Administrators, and then conducted by assigned Security Engineers who work with assigned Security Users to complete the assigned engagement forms & surveys.        </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_1/create_engagement_step_1_1x.webp',
          title: '1. Set Details',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          desc: 'Engagement name, targeted project/app, due dates, etc. ',
          sliderName: 'Engagement Settings',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp',
          title: '2. Add Forms',
          desc: 'Forms determining engagement tasks & requirements.',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          sliderName: 'mountains',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_3/create_engagement_step_3_1_5x.webp',
          title: '3. Assign Users',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          desc: 'Security Users whose projects are the target of the engagement.',
          sliderName: 'autumn',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_4/create_engagement_step_4_1_5x.webp',
          title: '4. Assign Engineers',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          sliderName: 'foggy',
          desc: 'Assign Engineer(s) to engage with previously assigned Security Users',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_5/create_engagement_step_5_1_5x.webp',
          title: '5. Deployment',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          sliderName: 'foggyd',
          desc: 'Deploy and monitor engagement status. ',
        },
      ]
    },


  ];
  const sliderItems_FLIK_AssessmentFlow =
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
            imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
            desc: 'Assessment name, targeted project/app, due dates, etc. ',
            sliderName: 'Engagement Settings',
          },
          {
            img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1x.webp',
            title: '2. Add Forms',
            imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
            desc: 'Add pre-made cybersecurity assessment forms.',
            sliderName: 'mountains',
          },
          {
            img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_3/assessment_step_3_1x.webp',
            imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
            title: '3. Assign Users',
            desc: 'Security Users who will fill out added forms.',
            sliderName: 'autumn',
          },
          {
            img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_5/assessment_step_5_1x.webp',
            imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
            title: '4. Assessment Reports',
            sliderName: 'foggy',
            desc: 'Assign Engineer(s) to engage with previously assigned Security Users',
          },
        ]
      },


    ];
  const sliderItems_FLIK_ManagementFlow = [
    {
      video: 'https://customer-ct1udu2wic3j3wru.cloudflarestream.com/afa43c86b161718c4dcf69f8ef6240ed/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ct1udu2wic3j3wru.cloudflarestream.com%2Fafa43c86b161718c4dcf69f8ef6240ed%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',

      heading: 'Managing Assessments & Engagements',
      description: <p>
        To enable T-Mobile security staff to better manage multiple ongoing engagements & assessments, both have a spreadsheet-style management page featuring various filtering and sorting functionality.
      </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessments_management/assessments_management_1_5x.webp',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1x.webp',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          title: 'Engagements',
          desc: 'Spreadsheet layout of all engagements',
          sliderName: 'mountains',
        },
      ]
    }

  ];

  const sliderItems_FLIK_SecurityUserDashboard = [
    {
      heading: 'User Dashboard',
      description: <p>
        This dashboard allows Security Users to view and fill out any assigned security assessment forms.  Each form card shows detailed information about the respective assessment driven by feedback that Security Staff were often asked trivial questions such as about who was managing the assessment or how far along it has progressed.
      </p>,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
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
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",

          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/engagements_management/engagements_management_1x.webp',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          title: 'Engagements',
          desc: 'Spreadsheet layout of all engagements',
          sliderName: 'mountains',
        },
      ]
    },

  ];
  const sliderItems_FLIK_Sprint1_overview = [
    {
      heading: 'Team & Project Organization',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left flex ">
              Prior to the first client kickoff meeting, the team squared away basic organizational and workspace tasks:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Set up a&nbsp;
                <strong className='flik'>shared team email&nbsp;</strong>

                for stakeholder communication and the below workspace accounts
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Set up a <strong className='flik'>&nbsp;Figma Team&nbsp;</strong> for future design work

              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Created a <strong className='flik'>&nbsp;Trellow Workspace&nbsp;</strong> for task management

              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Set up a shared team<strong className='flik'>&nbsp;Google Drive&nbsp;</strong> with folder structures for future sprint deliverables

              </h3>
            </span>

          </div>
        </div>,
      note:
        <p>
          There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.
        </p>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
          imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]


    },
    {
      heading: 'Client Kickoff Meeting',
      description:
        <div class="flex flex-col gap-2 ">
          <p>In the kickoff meeting the team engaged with the client to discuss and lock in the following goals & tasks for the first design sprint.  </p>


          <span class="ml-1 mt-1.5">
            <h3 class="flex flex-col  ">
              <strong className='flik text-nowrap'>
                Sprint 1:&nbsp;
              </strong>
              Research potential market opportunities for Flikshop Mail to expand its userbase beyond incarcerated individuals with a focus towards elderly and military demographics (as suggested by the client).
            </h3>
          </span>
          <span class="ml-6">
            <h3 class="flex flex-row ">
              <strong>
                •&nbsp;
              </strong>
              <p>
                Conduct <strong className='flik'>competitive analysis&nbsp;</strong>against other similar companies offering prison communications & mailing services to understand Flikshop's current market positioning and potential opportunities for expansion.
              </p>

            </h3>
          </span>
          <span class="ml-6">
            <h3 class="flex flex-row ">
              <strong>
                •&nbsp;
              </strong>
              <p>
                Create and conduct <strong className='flik'>market research surveys for elderly and military demographics&nbsp;</strong>to guage their respective growth potential
              </p>

            </h3>
          </span>
          <span class="ml-6">
            <h3 class="flex flex-row ">
              <strong>
                •&nbsp;
              </strong>
              <p>
                Conduct further <strong className='flik'>interviews with internal Flikshop stakeholders&nbsp;</strong>(past & present) to better understand the Flikshop brand and mission </p>

            </h3>
          </span>
        </div>
      ,

      note:
        <p> Additionally, because we used a default Google Slide template for this first client presentation, I decided to create some bespokely <strong className='flik'>tailored slide designs&nbsp;</strong> for future meetings which will appear below. </p>
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
  const sliderItems_FLIK_Sprint1_CAM = [
    {
      heading: 'Identifying Potential Competitors',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              The team identified multiple companies that are <strong className='flik'>serving the prison-industrial complex&nbsp;</strong>as well as those that market <strong className='flik'> mailing & communication services/products&nbsp;</strong> to understand how the various Flikshop product verticals are currently positioned:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Edovo
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Ameelio
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Orijin
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                ConnectNetwork
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Pigeononly
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Pelipost
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Shutterfly
              </h3>
            </span>
          </div>

          <div class="flex flex-col gap-[4px]  mt-4 ">
            <h3 class=" self-start justify-start text-left  ">

              The analysis targeted the following <strong className='flik'>8 dimensions against Flikshop&nbsp;</strong>respectively:

            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  1.&nbsp;
                </strong>
                Value proposition of products & pervices
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  2.&nbsp;
                </strong>
                How long they have been operating
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  3.&nbsp;
                </strong>
                How they present their brand
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  4.&nbsp;
                </strong>
                How they market their products and services
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  5.&nbsp;
                </strong>
                Revenue Streams
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  6.&nbsp;
                </strong>
                Monthly traffic and amount of users
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  7.&nbsp;
                </strong>
                What social media platforms they are active on and its content
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  8.&nbsp;
                </strong>
                Any potential community or UGC (user-generated-content) features
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  9.&nbsp;
                </strong>
                Any potential intrinsic competitive advantages or key features that set them apart
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  10.&nbsp;
                </strong>
                Visual design and usability of their website and apps
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  11.&nbsp;
                </strong>
                What geographic regions they serve
              </h3>
            </span>
          </div>

        </div>,
      note:
        <p>
          Analysis data was consolidated in a shared Google Sheet document.        </p>
      ,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/CAMraw.jpg',
          title: 'Flikshop Mail App',
          desc: 'Relative market cap & how similar their product/service offerings are ',
          sliderName: 'CAM1',
        },
      ]


    },

    {
      heading: 'Creating the analysis matrix',
      description:
        <div class=" flex-col gap-2">
          The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        </div>
      ,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/cam1/cam1_1_5x.webp',
          title: 'Flikshop Mail App',
          desc: 'Relative market cap & how similar their product/service offerings are ',
          sliderName: 'CAM1',
        },
        {
          imgHeight: "h-[25vh]",

          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/cam2/cam2_1_5x.webp',
          title: 'Flikshop School of Business',
          desc: 'Amount of industry partners & comparative size of course catalogue',
          sliderName: 'CAM2',
        },
        {
          imgHeight: "h-[25vh]",

          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/cam3/cam3_1_5x.webp',
          title: 'Flikshop as a company',
          desc: 'Public brand perception & amount of positive leadership publicity',
          sliderName: 'CAM3',
        },
      ]
    },
    {
      note:
        <p>
          These were fun to make :)
        </p>,
      visuals: []
    },
    {
      heading: 'Main Takeaways',
      description:
        <div class=" flex-col gap-2">
          What the team took away was that <strong className='flik'>Flikshop as a brand is a unicorn in terms of leadership reputation and publicity&nbsp;</strong> due to Marcus' (The CEO) lived experience of being previously incarcerated and his story of how the postcards sent by his mother was a source of hope and motivation that led to his success after his release. His story is widely publicized <strong className='flik'>(he even did TED talk about it!)&nbsp;</strong>and very well received which is virtually unheard of across the competitors analyized where key leadership lack such lived experience and are generally not in the limelight of their respective brands at all.
        </div>
      ,
      visuals: [

      ]
    },
  ];
  const sliderItems_FLIK_Sprint1_Surveys = [
    {
      heading: 'Military Demographics',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              The hypothesis presented by the client was that Flikshop's Mail service could potentially fill the gap experienced by active duty personel whom may have a hard time getting in touch with their family and loved ones.
              <br /> <br />To this end, we <strong className='flik'>created a survey targeted towards present and past service members&nbsp;</strong>to test the client's hypothesis that asked question such as:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How often do/did you have access to technology when stationed away from home?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'When you did have access to technology, did you have access to communication type platforms and apps?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Do/Did you face challenges when you communicated with friends and family when stationed away from home?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'If there were an app that could send text or pictures in a physical format to your loved one, would you be interested in using it?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'What do current communication offerings that you use to contact your loved one lack? And what could be improved?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Are there any specific barriers that make it extra difficult to reach or stay in contact with someone who is deployed/in basic training?'
              </h3>
            </span>

          </div>


        </div>,
      note:
        <p>
          As a Chinese-Canadian immigrant I had no cultural awareness on this matter so I mainly relied on my team members who had personal connections and better understanding of how to approach designing this survey.
        </p>
      ,
      visuals: [
        // {
        //   imgHeight: "h-[25vh]",
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/CAMraw.jpg',
        //   title: 'Flikshop Mail App',
        //   desc: 'Relative market cap & how similar their product/service offerings are ',
        //   sliderName: 'CAM1',
        // },
      ]


    },

    {
      heading: <p className='mb-[-1rem]'>  Survey Results  - Military Demographics: Tech Accessibility</p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_military1/survey_military1_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      heading: <p className='mb-[-1rem]'>  Survey Results  - Military Demographics: Communication Preferences</p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_military2/survey_military2_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      heading: <p className='mb-[-1rem]'> Survey Results - Military Demographics: Communication Difficulties</p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_military3/survey_military3_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      // note:
      //   <p>
      //    We only had five respondents
      //   </p>,
      visuals: []
    },

    //eldery
    {
      heading: 'Elderly Demographics',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              The other hypothesis presented by the client was that Flikshop's Mail service could potentially serve <strong className='flik'>elderly demographics that may appreciate physical communication (e.x. postcards) or otherwise have difficulty using digital communcation methods&nbsp;</strong>such as social media to get in touch with their family and loved ones.
              <br /> <br /> To test the above hypothesis the team designed another survery asking question such as:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Do you live alone, with a partner, or in a shared living community?'              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How often do you use technology (such as a phone, computer, tablet, library kiosks) in your daily life?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Do/Did you face challenges when you communicated with friends and family when stationed away from home?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How comfortable do you generally feel using technology (smartphones, computers, library kiosks, the internet)?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Do you prefer face-to-face communication (e.g. phone or video calls, texting) or physical communication (e.g. letters, print media) over using technology?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How comfortable are you using technology to share or view photos?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Do you prefer to share or view photos in person or digitally?'
              </h3>
            </span>
          </div>
        </div>,
      // note:
      //   <p>
      //     As a Chinese-Canadian immigrant I had no cultural awareness on this matter so I mainly relied on my team members who had personal connections and better understanding of how to approach designing this survey.
      //   </p> ,
      visuals: [
        // {
        //   imgHeight: "h-[25vh]",
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/CAMraw.jpg',
        //   title: 'Flikshop Mail App',
        //   desc: 'Relative market cap & how similar their product/service offerings are ',
        //   sliderName: 'CAM1',
        // },
      ]


    },

    {
      heading: <p className='mb-[-1rem]'>  Survey Results  - Elderly Demographics: Photosharing Preferences</p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_military1/survey_military1_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      heading: <p className='mb-[-1rem]'>  Survey Results  - Elderly Demographics: Consumption Modality</p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_elderly2/survey_elderly2_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      heading: <p className='mb-[-1rem]'> Survey Results - Elderly Demographics: Techonology Familiarity </p>,
      description:
        // <div class=" flex-col gap-2">
        //   The team generated a plethora of detailed research data, but as the design lead I head to find a way to concisely display our results for the next client meeting. Ultimately, because the competitive analysis were all relative to flikshop's market posture, my approach was to present the results in a graph where — with flikshop being in the center — <strong className='flik'>the other target companies are plotted around Flikshop based on where the respective company is relative to two of the targeted dimensions of analysis&nbsp;</strong>described above.
        // </div>
        <></>,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Surveys/survey_elderly3/survey_elderly3_1_5x.webp',
          title: 'Technology Accessability by Branch',
          desc: 'Do service members have a hard time accessing communication methods?',
          sliderName: 'Survey1',
        },

      ]
    },
    {
      // note:
      //   <p>
      //    We only had five respondents
      //   </p>,
      visuals: []
    },




    {
      heading: 'Main Takeaways',
      description:
        <div class=" flex-col gap-2">
          Based on the results of both surveys, the team all agreed that there is no appetite within elderly and military demographics for Flikshop's mail services.
          <br /> <br />
          <strong className='flik'>Military personel already tend to have little trouble getting in touch with their family and loved ones&nbsp;</strong>, and the barriers experience by those who do cannot be serviced by Flikshop anyways (i.e. they are in a nuclear submarine at the bottom of the ocean).
          <br /> <br />
          On the other hand, <strong className='flik'>survey results from our elderly demographic did not indicate a significant desire for physical photosharing nor significant difficulties in communincating with family members and loved ones.&nbsp;</strong> There are also a plethora of photosharing services tailored for elderly demographics of whose brands are likely to be better percieved for this purpose than Flikshop's (i.e. feelings such as: 'Wait isn't Flikshop for incarcerated people? Why are we using this instead of X?').
        </div>
      ,
      visuals: [

      ]
    },
  ];
  const sliderItems_FLIK_Sprint1_Interviews = [
    {
      heading: 'Current & Past Flikshop Employees',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              The team interviewed various current and past Flikshop employees ranging from developers to designers across their current product verticals <strong className='flik'>to help the team better understand their values, mission, and vision for the future so we can design around it in future sprints.</strong>
              <br /><br />
              We asked general questions such as:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'Can you describe your job role in depth?''
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'What do you think are the core values of Flikshop?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How did you find out or get introduced into Flikshop?''
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'What about the company makes it special in your eyes?''
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'What are the company’s current priorities, and how does your team contribute to those goals?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How well does the company communicate its product vision internally? How about externally?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'How has the company evolved since you joined?'
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                'In what areas or ways do you feel that Flikshop could make itself stronger as a competitor in this market?'
              </h3>
            </span>
          </div>


        </div>,
      note:
        <p>
          Since I have web development experience I took up interviewing a developer to see what their tech stack looks like and if could help prototype our future mockups on the front end.
        </p>,
      visuals: [

      ]


    },

    {
      heading: '',
      description:
        <div class=" flex-col gap-2">
          Interview data was consolidated in a Google Sheets document:
        </div>
      ,
      visuals: [
        {
          imgHeight: "h-[25vh]",
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/research/Interviews/interviewsData.jpg',
          title: 'Flikshop Mail App',
          desc: 'Relative market cap & how similar their product/service offerings are ',
          sliderName: 'CAM1',
        },

      ]
    },
    {
      note:
        <p>
          These interviews were mainly for the team; I decided not to spend the time to design presentation slides for them.
        </p>,
      visuals: []
    },
    {
      heading: 'Main Takeaways',
      description:
        <div class=" flex-col gap-2">
          Across all the employees we interviewed — both past and present — <strong className='flik'>everyone was enthusastic about Flikshop's mission&nbsp;</strong>of reconnecting incarcerated individuals with their loved ones and their efforts in reducing recidivism.
          Many expressed how <strong className='flik'>uniquely suited Marcus is to be the Flikshop's CEO due to his lived experience and his advocacy for his customers/users that sets Flikshop apart from all their competitors.&nbsp;</strong>
        </div>
      ,
      visuals: [
      ]
    },
  ];

  const sliderItems_FLIK_Sprint2_kickoff = [
    {
      heading: 'Focusing on Flikshop Mail App',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              After conveying the Sprint 1 research findings to the client, both the team and our client agreed that<strong className='flik'> Flikshop's mail service should not expand to elderly nor military demographics.&nbsp;</strong>
              Rather, Flikshop should instead further invest in saturating its current user demographic of currently and previously incarcerated individuals by improving the current Flikshop app and leaning into brand storytelling centered around Marcus' unique live experience.
              <br /><br />
              To this end, we met with the client to collaboratively ideate on this sprints goals with this new focus.
            </h3>


          </div>
        </div>,
      // note:
      //   <p>
      //     There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.
      //   </p>
      // ,
      visuals: [
        // {
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
        //   imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
        //   title: 'Assessments',
        //   desc: 'Spreadsheet layout of all assessments ',
        //   sliderName: 'Engagement Settings',
        // },
      ]
    },
    {
      heading: 'Ideation with Client',
      description:
        <div class="flex flex-col gap-2 ">
          <p>
            We brought Marcus (the CEO) into a team meeting where — inspired by Google's design sprint methodology — we had one team member ask questions based around the above sprint goals while everyone else simultaneously generates actionable 'how might we' (HMW) tasks to achieve them as represented the purple sticky notes. Afterwards, each team member is given two votes (the purple 'thumbs up' icon) to decide which HMW tasks to prioritize for this sprint. The client's votes (represented by the 'thumbs up' icons with a star) ultimately supercede that of the teams' but it nonetheless gave us a good idea of what to prioritize.
          </p>
        </div>
      ,

      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/map_expert_q_a_40mins_/map_expert_q_a_40mins__1x.webp',
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]


    },
    {
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/hmw_how_might_we_diagram_10mins_/hmw_how_might_we_diagram_10mins__1x.webp',
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ],
      note:
        <p> Above are the questions discussed with the client while the team was generating the 'How Might We' notes shown below</p>
      ,
    },
    {
      visuals: [

      ],
      note:
        <p> The two teal HMWs at the near the right were suggestions the client especially wanted us to prioritize.</p>
      ,
    },
    {
      heading: 'Sprint 2 Goals',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">

              In the end, the team and our client agreed that this print should pursue these three themes:
            </h3>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                <strong className='flik'> Connect the various verticals in a repeatable and seamless flow&nbsp;</strong>within the Flikshop mobile app.
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                <strong className='flik'>Modernize&nbsp;</strong>the current Flikshop app experience & aesthetics.
              </h3>
            </span>
            <span class="ml-[8px]">
              <h3 class="flex ">
                <strong>
                  •&nbsp;
                </strong>
                Inject elements of <strong className='flik'>&nbsp;brand storytelling&nbsp;</strong>within app userflows.
              </h3>
            </span>

          </div>
        </div>,
      // note:
      //   <p>
      //     There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.
      //   </p>
      // ,
      visuals: [
        // {
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
        //   imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
        //   title: 'Assessments',
        //   desc: 'Spreadsheet layout of all assessments ',
        //   sliderName: 'Engagement Settings',
        // },
      ]
    },
  ];

  const sliderItems_FLIK_Sprint2_sketch = [
    {
      heading: 'Storymapping',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              After the ideation session with the client, the team got together to <strong className='flik'>storyboard what we envision the Flikshop app's seamless experience&nbsp;</strong>to look like. It starts off with a user learning about Flikshop from word-of-mouth, to downloading and using the app to send a Flikshop postcard, and then learning about the other Flikshop verticals.
              {/* <br /><br />
              To this end, we met with the client to collaboratively ideate on this sprints goals with this new focus. */}
            </h3>

          </div>
        </div>,
      note:
        <p>
          The empty storyboard sections were those that were out of the scope of work for this sprint, such as the Flikshop postcard customization flow
        </p>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/storyboard_sprint2/storyboard_sprint2_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]
    },
    {
      heading: 'Low-fi Solution Sketches',
      description:
        <div class="flex flex-col gap-2 ">
          <p>
            After storyboarding, <strong className='flik'>each team member sketched some low-fidelity solutions&nbsp;</strong>towards creating the seamless flow from a user arriving at the Flikshop website homepage to downloading the app and being exposed to the various product verticals.
          </p>
        </div>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/solution_sketch_sprint2/solution_sketch_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]
    },
    {
      heading: 'Deciding',
      description:
        <div class="flex flex-col gap-2 ">
          <p>
            With the solution sketches in hand, the team ran it by the client to see which parts of our designs we should prioritize in the following prototyping phase.
          </p>
        </div>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/deciding_sprint2/deciding_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ],
    },
    {
      note: "The blue dotes represent which specific design elements the team liked, while the larger red dots were for those that the client wanted us to prioritize.",
      visuals: [

      ],
    },
    {
      heading: 'Main Takeaways',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">

              The client really liked the aspects of brand storytelling where we <strong className='flik'>highlight the social good of Flikshop's mission</strong>, as well as a <strong className='flik'>'product hub' type widget&nbsp;</strong>that allows users to easily explore and navigate to Flikshop's other product verticals. These remarks would guide the team in the following protoyping phase where we created Figma mockups based on these client remarks and the distribution of votes from the 'decide' meeting.            </h3>
      
          </div>
        </div>,
      // note:
      //   <p>
      //     There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.
      //   </p>
      // ,
      visuals: [
        // {
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
        //   imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
        //   title: 'Assessments',
        //   desc: 'Spreadsheet layout of all assessments ',
        //   sliderName: 'Engagement Settings',
        // },
      ]
    },
  ];
  const sliderItems_FLIK_Sprint2_prototype = [
    {
      heading: 'Storymapping',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">
              After the ideation session with the client, the team got together to <strong className='flik'>storyboard what we envision the Flikshop app's seamless experience&nbsp;</strong>to look like. It starts off with a user learning about Flikshop from word-of-mouth, to downloading and using the app to send a Flikshop postcard, and then learning about the other Flikshop verticals.
              {/* <br /><br />
              To this end, we met with the client to collaboratively ideate on this sprints goals with this new focus. */}
            </h3>

          </div>
        </div>,
      note:
        <p>
          The empty storyboard sections were those that were out of the scope of work for this sprint, such as the Flikshop postcard customization flow
        </p>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/storyboard_sprint2/storyboard_sprint2_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]
    },
    {
      heading: 'Low-fi Solution Sketches',
      description:
        <div class="flex flex-col gap-2 ">
          <p>
            After storyboarding, <strong className='flik'>each team member sketched some low-fidelity solutions&nbsp;</strong>towards creating the seamless flow from a user arriving at the Flikshop website homepage to downloading the app and being exposed to the various product verticals.
          </p>
        </div>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/solution_sketch_sprint2/solution_sketch_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ]
    },
    {
      heading: 'Deciding',
      description:
        <div class="flex flex-col gap-2 ">
          <p>
            With the solution sketches in hand, the team ran it by the client to see which parts of our designs we should prioritize in the following prototyping phase.
          </p>
        </div>
      ,
      visuals: [
        {
          img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/Flik/deciding_sprint2/deciding_1x.webp',
          imgClass: "",
          title: 'Assessments',
          desc: 'Spreadsheet layout of all assessments ',
          sliderName: 'Engagement Settings',
        },
      ],
    },
    {
      note: "The blue dotes represent which specific design elements the team liked, while the larger red dots were for those that the client wanted us to prioritize.",
      visuals: [

      ],
    },
    {
      heading: 'Main Takeaways',
      description:
        <div>
          {/* <p>We first created</p> */}
          <div class="flex flex-col gap-[4px] ">
            <h3 class=" self-start justify-start text-left  ">

              The client really liked the aspects of brand storytelling where we <strong className='flik'>highlight the social good of Flikshop's mission</strong>, as well as a <strong className='flik'>'product hub' type widget&nbsp;</strong>that allows users to easily explore and navigate to Flikshop's other product verticals. These remarks would guide the team in the following protoyping phase where we created Figma mockups based on these client remarks and the distribution of votes from the 'decide' meeting.            </h3>
      
          </div>
        </div>,
      // note:
      //   <p>
      //     There was great overlap between the security engineers & adminstrators; eventually we recognized that the practical/organizational differences were trivial enough between them to consolidate both as the 'Security Staff/Team' for this part of the SCAS platform.
      //   </p>
      // ,
      visuals: [
        // {
        //   img: 'https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/researchtesting/user_research/user_research_1_5x.webp',
        //   imgClass: "bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)]",
        //   title: 'Assessments',
        //   desc: 'Spreadsheet layout of all assessments ',
        //   sliderName: 'Engagement Settings',
        // },
      ]
    },
  ];
  const isMobile = useMediaQuery('(min-width: 640px)');


  // const { scrollYProgressCircle } = useScroll({ container: navRef1 });
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);
  const navRef4 = useRef(null);
  const navRef5 = useRef(null);
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

  const tocItems = [
    {
      title: <></>,
      url: "#introdu111ction",
      depth: 1,
      circle: <></>
    },
    {
      title: "Project Overview",
      url: "#intro234234duction",
      depth: 1,
      circle:
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
    },
    {
      title: "Sprint 1 [Fall]",
      url: "#getting-started",
      depth: 1,
      circle:
        <></>
    },
    {
      title: "Sprint Kickoff & Goals",
      url: "#install44ation",
      depth: 3,
      circle:
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
    },
    {
      title: "Competitive Analysis",
      url: "#basic-098-09usage",
      depth: 3,
      circle:
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
    },
    {
      title: "Market Research Surveys",
      url: "#advanced-f777eatures",
      depth: 3,
      circle:
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
    },
    {
      title: "Internal Stakeholder Interviews",
      url: "#api-refere54345345nce",
      depth: 3,
      circle:
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
    },
    {
      title: "Sprint 2 [Spring]",
      url: "#introdudoipction",
      depth: 1,
      circle:
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
    },
    {
      title: "Sprint Kickoff & Goals",
      url: "#introdughjjdction",
      depth: 3,
      circle:
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
    },
    {
      title: "Sketching & Storyboarding",
      url: "#introdugddhjjdction",
      depth: 3,
      circle:
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
    },
    {
      title: "Design Prototyping",
      url: "#introdugddhdddddjjdction",
      depth: 3,
      circle:
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
    },
    {
      title: "Sprint 3 [Spring]",
      url: "#introdudcasdddtion",
      depth: 1,
      circle:
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
    },
    {
      title: "Assessment Delivery",
      url: "#gettingd-started",
      depth: 3,
      circle:
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
    },
    {
      title: "Sprint 4 [Spring]",
      url: "#gettingd-sdtarted",
      depth: 1,
      circle:
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
    },
    {
      title: "",
      url: "#gettindgd-sddtarted",
      depth: 1,

    },
    {
      title: "",
      url: "#gettindgd-sddtarted",
      depth: 1,
    }, {
      title: "",
      url: "#gettindgd-sddtarted",
      depth: 1,
    },
    {
      title: "",
      url: "#gettindgd-asdsddtarted",
      depth: 1,
    },

  ]

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const items = [
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
      className: "md:col-span-2 md:row-span-1",

    },
    {
      title: "System UI & Branding",
      description: "Componentized Design System with Page Templates",
      header: <div
        className='bg-white mt-1 bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp)] h-full mt-1 object-fill bg-cover bg-no-repeat w-full  rounded-lg   overflow-hidden'
        src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp"

      // alt={item.desc}
      />,
      className: "md:col-span-1",
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
    <ReactLenis root>
      <div className=" w-full   testbg2 h-full mt">

        <AnimatedGroup className={"flex flex-col text-flik-dark     "}
          variants={
            variants}
        >
          <div key={2} className=" w-full h-full  testbg3	">
            <div
              key={2} className="flex flex-col w-full    h-full  ">
              <div className="   flex flex-col w-fit h-fit  ">

                <div className=" pt-[20vh]  px-14 flex flex-col  bg-CIAAN-header">
                  <span className="flex text-CIAAN-light  mb-8 flex-col  h-fit leading-tight  pt-32">

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
                  <span className="flex flex-row gap-8 mb-16">
                    <div class="flex  w-fit flex-row  text-CIAAN-light font-inter text-1 text-bold gap-1.5">
                      <TeamIcon height='24px' stop='#8FA0BE' />
                      <p className="font-['exo'] Capitalized font-[600] text-[18px]">Sole UX/UI Designer</p>
                    </div>
                    <div class="flex  w-fit flex-row  text-CIAAN-light font-inter text-1 text-bold gap-1.5">
                      <TimerIcon height='24px' stop='#8FA0BE' />
                      <p className="font-['exo'] Capitalized font-[600] text-[18px]">4 Months</p>
                    </div>
                  </span>
                  <BentoGrid className="  w-full max-w-[1300px]  ml-1">
                    {items.map((item, i) => (
                      <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                        cardBg="featureCard-bg-scas  "
                      />
                    ))}
                  </BentoGrid>
                </div>

                <span className="flik-bg-gradient-seam h-32  w-screen mb-[-4rem] ">

                </span>
                <span className=" flex flex-col bg-flik-body gap-[64px] pt-8">

                  {/* <BentoGrid className="  w-full max-w-[1300px] mx-12">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                      cardBg="featureCard-bg-scas"
                    />
                  ))}
                </BentoGrid> */}
                  <section className=" flex flex-row w-full  h-full
                  ">
                    <div className=" flex h-full sticky  flex-col w-[fit] overflow-visible top-5  pl-14 mr-8 pt-24  ">

                      {/* navbar */}
                      <div className="place-self-start	  top-5 featureCard-bg-flik bg-animated-cards-description-flik  rounded-xl backdrop-blur-[10px] group/bento hover:shadow-xl transition duration-200 shadow-input pb-8  pl-4 pr-10 justify-between">
                        <div className={cn("cardInset-flik  absolute top-0  left-0 rounded-xl tocBg-scas w-full h-full  pointer-events-none  ")}>
                        </div>
                        <div class={cn("panel-title-scasHero ")}>
                          <div class="flex flex-row px-2.5 pt-1.5 pb-[5px]">
                            {/* <AlignLeft className="size-4 opacity-100 self-center pt-[-1px] mr-1.5" /> */}
                            <h1 class="font-[550] text-nowrap text-[14px] leading-tight self-center    text-CIAAN-light opacity-[90%] ">
                              Table of Contents

                            </h1>
                          </div>
                        </div>

                        <div className="flex gap-10  text-nowrap pt-8 pl-1">
                          <NyxTOCItems
                            items={tocItems}
                            progress={true}
                            tocLine={"toc-line-scas max-h-screen ml-4"}
                            textCn="font-[550] self-center text-[12px] text-nowrap   -ml-[2px] text-CIAAN-light opacity-[95%]"
                            labelCn="font-[550] text-[14px] leading-tight  mb-2 text-CIAAN-light opacity-[90%]" />
                        </div>
                        {/* <div class="bg-white bg-[url(https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_1x.webp)] h-full mt-1 object-fill bg-cover bg-no-repeat w-full  rounded-lg  overflow-hidden" src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/designSystem_feature/designSystem_feature_1_5x.webp">
              </div> */}
                        {/* <div class=" flex flex-col h-fit w-fit">
                <div class="group-hover/bento:translate-x-2 transition duration-200">
                  <span class=" flex flex-col h-fit">
                    <div class="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2  mt-2">Security User Dashboard</div>
                    <div class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">User-facing dashboard for managing assigned assessments.</div>
                  </span>
                </div>
              </div> */}

                      </div>

                    </div>

                    <section className=" flex flex-col h-full w-full max-w-[950px] self-center  gap-[64px] mt-[5vh]">


                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        // Title='Flikshop'
                        Section='Project Overview'
                        CardContent={sliderItems_FLIK_Overview} >
                      </PortfolioCard>

                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Summarized Tasks & Goals'
                        Section='Sprint 1'
                        CardContent={sliderItems_FLIK_Sprint1_overview} >
                      </PortfolioCard>

                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Competitive Analysis Matrices'
                        Section='Sprint 1'
                        CardContent={sliderItems_FLIK_Sprint1_CAM} >
                      </PortfolioCard>
                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Market Research Surveys'
                        Section='Sprint 1'
                        CardContent={sliderItems_FLIK_Sprint1_Surveys} >
                      </PortfolioCard>

                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Internal Stakeholder Interviews'
                        Section='Sprint 1'
                        CardContent={sliderItems_FLIK_Sprint1_Interviews} >
                      </PortfolioCard>

                      {/* Sprint 2 */}

                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Sprint 2 Kickoff & Goals'
                        Section='Sprint 2'
                        CardContent={sliderItems_FLIK_Sprint2_kickoff} >
                      </PortfolioCard>
                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Sketching & Storyboarding'
                        Section='Sprint 2'
                        CardContent={sliderItems_FLIK_Sprint2_sketch} >
                      </PortfolioCard>
                      <PortfolioCard
                        cardBg=" bg-[#00000026] portfolioCard-bg-flik  backdrop-blur-[7px]"
                        sliderProgressBarCn="progressSliderColor-flik"
                        noteBg="note-flik "
                        cardText='text-flik-dark  '
                        Title='Prototyping'
                        Section='Sprint 2'
                        CardContent={sliderItems_FLIK_Sprint2_prototype} >
                      </PortfolioCard>
                      
                    </section>
                  </section>
                </span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </ReactLenis>
  )
}

export default page