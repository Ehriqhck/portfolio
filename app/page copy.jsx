"use client";
import { useState, useRef, useEffect } from "react";
import InputEditor from './editor/InputEditor'
import Feed from "@components/Feed";
// import GameVerDropdown from "@components/GameVerDropdown";
// import HatUp from '@components/Device_VKB_SpaceEvo';
// import ActionTable from '@app/editor/ActionTable.jsx'
import NoSsr from "@components/NoSsr";
import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import Image from 'next/image'
import CommunityIcon from 'components/generic/Icons/CommunityIcon.jsx'
import NewsIcon from 'components/generic/Icons/NewsIcon.jsx'
import EnterIcon from 'components/generic/Icons/EnterIcon.jsx'
import DiscordIcon from 'components/generic/Icons/Socials/DiscordIcon.jsx'
import TreeTableDialogue from "./editor/TreeTableDialogue";
import YoutubeIcon from 'components/generic/Icons/Socials/YoutubeIcon.jsx'
import { Utils } from "./editor/utils";
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT_EXAMPLE.jsx'
import { motion, useScroll, useAnimate, useInView } from 'framer-motion';
import SmoothScroll from '@components/generic/SmoothScroll.jsx'
const Home = () => {
  const [products, setProducts] = useState([
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    { name: 'aaaaaaaaaaaaa' }
  ]);
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      // animate(scope.current, { opacity: 1 })
    }
  }, [isInView])

  const productTemplate = (product) => {
    return (
      <div className="flex w-full flex-col ">
        {/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="" /> */}
        <div className=" flex flex-row gap-[4px]">

          <p className="uppercase self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[15px] font-medium  tracking-[0.1em] carousel-active">
            {product.name}

          </p>
        </div>
      </div>
    );
  };
  const newsItemTemplate = (product) => {
    return (
      <div className="flex mx-[16px] ">
        <button type="default" className="flex  flex-col  h-[180px] w-full  ">
          <div className=" flex flex-row gap-[4px]">

            <p className="uppercase self-center ml-[12px] flex  text-[#CEFCFF] font-['Exo_2'] text-[15px] font-medium  tracking-[0.1em] carousel-active">
              Placeholder

            </p>
          </div>
        </button>
      </div>
    );
  };

  const carouselPrevIconTemplate = (product) => {
    return (
      <div className="flex mx-[16px] ">
        asd
      </div>
    );
  };



  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null)
  const variants = {
    active: {
      display: "block"
    },
    inactive: {
      display: "hidden",
      transition: { duration: 2 }
    }
  }
  return (

    <motion.div
      className="flex flex-col w-full text-[#DAF0EA]  "

    >

      <div className="flex flex-col w-full  hero-bg  ">
        <div className="bg-multiply w-full h-full flex flex-col px-[128px]  content-between">
          <div className="flex flex-col w-fit font-['varino'] mt-[12vh] self-start mb-[128px]">
            <p className="logo-gradient-white text-[54px] self-center mb-[-8px]"> TRICHORD </p>
            <div className=" px-[36px] logo-gradient-white text-[27px] self-center flex flex-row  w-full place-content-between">
              <p>E</p> <p>D</p> <p>I</p> <p>T</p> <p>O</p> <p>R</p>
            </div>
          </div>

          <div className="flex flex-col ">

            <section classname="override-uaStyle-section  ">
              <div className=" flex spacer-noH h-[280px] w-[1px] " />
              <div className=" flex flex-col gap-[32px]">
                <div className=" flex flex-col  ml-[32px] ">
                  <div className="flex flex-row  font-['exo_2'] mb-[16px] uppercase gap-[8px] ">
                    <div className="flex  circle wh-[9px] self-center mt-[1px]"></div>
                    <p className="flex">Ready for patch 4.0 </p>
                  </div>

                  <Button type="smooth" className="flex gap-[6px] w-fit whitespace-nowrap text-[#CEFCFF]  font-['exo_2'] uppercase h-[40px]"  >
                    <p> Enter Editor </p>
                    <EnterIcon height='100%'></EnterIcon>
                  </Button>
                </div>

                <div className=" flex flex-col  ml-[32px] ">
                  <div className="flex flex-row  font-['exo_2'] mb-[16px] uppercase gap-[8px] ">
                    <div className="flex  self-center">
                      <CommunityIcon height="32px" />
                    </div>
                    <p className="flex self-center">JOIN THE COMMUNITY </p>
                  </div>
                  <div className=" flex flex-col gap-[16px]">
                    <Button type="smooth" className="flex gap-[6px] w-fit whitespace-nowrap  font-['exo_2'] uppercase h-[40px]"  >
                      <p className="  "> Join the Trichord Discord </p>
                      <DiscordIcon height='90%' />
                    </Button>

                    <Button type="smooth" className="flex gap-[6px] w-fit whitespace-nowrap  font-['exo_2'] uppercase h-[40px]"  >
                      <p className="  "> Follow Our Youtube </p>
                      <YoutubeIcon height='85%' />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <NoSsr>
            <div className="flex flex-row w-full self-end h-full  pb-[128px] ">
              <div className="flex flex-row w-full   justify-self-center">
                <div className="flex flex-col gap-[4px] w-[100%] justify-end ">

                  <div className="ml-[28px] flex flex-row w-fit font-['exo_2'] mb-[16px] uppercase gap-[8px]  ">
                    <div className="flex justify-end w-fit self-center">
                      <NewsIcon height="26px" />
                    </div>
                    <p className="flex self-center">LATEST NEWS & UPDATES </p>
                  </div>
                  <Carousel value={products}
                    circular numVisible={3} numScroll={1}
                    orientation="horizontal" itemTemplate={newsItemTemplate}
                    showIndicators={true} showNavigators={true}
                    contentClassName="w-[100%] flex  "
                    className="w-[100%] max-w-[700px]"
                    containerClassName="w-[100%] "
                    nextIcon={''}
                  />
                </div>

                <div className="flex gap-[20px] mb-[64px] flex-col   justify-start w-fit self-end  ">
                  <p className=" flex flex-col   text-center  self-center justify-center align-middle
font-['exo_2']  text-[#00FFB9] text-[15px] font-bold  tracking-[0.2em]
"> DISCOVER MORE BELOW </p>
                  <div className="flex flex-col self-center">
                    <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_486711)" />
                      <defs>
                        <linearGradient id="paint0_linear_2417_486711" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00FFD1" >
                            <animate attributeName="stop-color"
                              values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                              calcMode="spline"
                              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                              begin='-0.70s'
                            />
                          </stop>
                          <stop offset="1" stop-color="#00876F" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className=" mt-[-18px]">
                      <svg width="136" height="57" viewBox="0 0 136 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.54346 1.7751C2.63335 0.412741 4.60867 0.163294 6.00302 1.21193L66.6828 46.847C67.7574 47.6551 69.2384 47.6496 70.307 46.8334L129.993 1.24451C131.387 0.179974 133.375 0.423594 134.471 1.79305V1.79305C135.589 3.19113 135.356 5.23252 133.95 6.34161L71.6379 55.5114C71.2215 55.8329 70.7268 56.0879 70.1822 56.262C69.6376 56.436 69.0538 56.5256 68.4641 56.5256C67.8745 56.5256 67.2907 56.436 66.746 56.262C66.2014 56.0879 65.7067 55.8329 65.2903 55.5114L2.08187 6.33809C0.661629 5.23321 0.419386 3.1802 1.54346 1.7751V1.7751Z" fill="url(#paint0_linear_2417_4867)" />
                        <defs>
                          <linearGradient id="paint0_linear_2417_4867" x1="68.2755" y1="100%" x2="68.2755" y2="0%" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00FFD1" >
                              <animate attributeName="stop-color"
                                values="#00FFD1;#00876F;#00FFD1" dur="1.7s" repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                begin='1.4s'
                              />
                            </stop>
                            <stop offset="1" stop-color="#00876F" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </NoSsr>


        </div>


      </div>

      <motion.div

        className=" w-full flex flex-col  px-[128px] pb-[128px]
      homepage-bg-gradient bg-multiply   "
      >
        <motion.section 
        ref={scrollRef}
        className="flex flex-col  place-items-start h-[100vh]  overflow-hidden">
          <motion.div

              className='w-full  inline-block flex-center flex-col pt-[64px] '
              
            // initial={{ opacity: 0 }} 
            // animate={{ opacity: 1, top:'100%'}}
            transition={{duration: 3}}
            style={{marginBottom: scrollYProgress}}
          >
            {asd}
            <div className="flex w-full pt-[36px] flex-col  ">

              <div className=" w-full px-[16px] flex flex-col pb-[36px] ">

                <h1 className='h1 w-full  flex flex-col justify-center self-center '>
                  <span className="justify-center  text-start flex flex-col">
                    <h1 className="font-[800] text-gradient-display  self-center w-full tracking-[0.035em] ">
                      Three Step Process
                    </h1>
                  </span>

                  <div className="h2 self-start w-full  whitespace-nowrap justify-start flex flex-wrap gap-[12px] mt-[8px] font-[500] text-left 
      text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px]">
                    <span className='font-["inter"] text-gradient-display font-[400] '> Save hours of setup time </span>
                    <div className="spacer " />
                    <span className='font-["inter"] text-gradient-display font-[400] '> For New & Veteran Pilots </span>

                  </div>
                </h1>



                <section className="flex flex-col ">
                  <div className="flex flex-row  mt-[36px] gap-[24px]">
                    <div className="flex ">
                      <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                        <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                          1
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col w-full mt-[15px] mr-[64px]">
                      <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                        Upload Your Mappings.XML File
                      </span>
                      <div className="bg-panel-white flex flex-col w-full p-[16px] ">
                        <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                          <div className="flex flex-row ">
                            <h3 className="font-[200] text-[14px] opacity-[70%] ">
                              The MAPPINGS.XML file is located in 'StarCitizen\LIVE\USER\Client\0\Controls\Mappings'
                            </h3>
                          </div>
                        </span>
                        <div className="flex flex-row mt-[8px] ml-[8px]">

                          <div className="flex spacer-noH h-[100px] w-[1px]  " />
                          <div className="flex flex-col py-[8px] text-[#CEFCFF]">
                            <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                              <div className="flex flex-col ml-[8px] gap-[4px] font-[300]">
                                {/* <div className="spacer " /> */}
                                <h3 className=" ">
                                  The editor will automatically recognize & load Any supported flightsticks, control panels, rudders, and other hardware peripherals':
                                </h3>
                                <span className="ml-[8px]">
                                  <h3 className="] ">
                                    &#8226;  Mapped Keybinds
                                  </h3>

                                  <h3 className=" ">
                                    &#8226;  Joystick Instance Order
                                  </h3>
                                </span>


                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row  mt-[36px] gap-[24px]">
                    <div className="flex ">
                      <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                        <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                          2
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col w-full mt-[15px] mr-[64px]">
                      <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                        Start Editing!
                      </span>
        
                    </div>
                  </div>
                  <div className="flex flex-row  mt-[36px] gap-[24px]">
                    <div className="flex ">
                      <div className="p-[16px] w-[70px] h-[70px] stepper-step flex  ">
                        <p className=" font-['exo_2'] self-center justify-center
     text-center w-full flex text-[36px]  font-[700] text-[#cefff4] text-gradient-display shadow-display">
                          3
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col w-full mt-[15px] mr-[64px]">
                      <span className="font-[600] text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] h-fit self-start  mb-[30px] ">
                        Download & Replace Customized Mappings.xml
                      </span>
                      <div className="bg-panel-white flex flex-col w-full p-[16px] ">
                        <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                          <div className="flex flex-row ">
                            <h3 className="font-[200] text-[14px] opacity-[70%] ">
                              The MAPPINGS.XML file is located in 'StarCitizen\LIVE\USER\Client\0\Controls\Mappings'
                            </h3>
                          </div>
                        </span>
                        <div className="flex flex-row mt-[8px] ml-[8px]">

                          <div className="flex spacer-noH h-[100px] w-[1px]  " />
                          <div className="flex flex-col py-[8px] text-[#CEFCFF]">
                            <span className=" font-['Exo_2'] tracking-[0.035em]  capitalize text-[16px] h-fit self-start">
                              <div className="flex flex-col ml-[8px] gap-[4px] font-[300]">
                                <h3 className=" ">
                                  The editor will automatically recognize & load Any supported flightsticks, control panels, rudders, and other hardware peripherals':
                                </h3>
                                <span className="ml-[8px]">
                                  <h3 className="] ">
                                    &#8226;  Mapped Keybinds
                                  </h3>

                                  <h3 className=" ">
                                    &#8226;  Joystick Instance Order
                                  </h3>
                                </span>


                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            </div>

          </motion.div>
          <section className='w-full flex-center flex-col pt-[64px]' >
            {/* <NoSsr>
            <div className="flex flex-row gap-[4px] hero-carousel">
              <p className=" flex flex-col    self-center justify-center align-middle
          font-['exo_2']  text-[#CEFCFF] text-[15px] font-medium  tracking-[0.1em]
          ">STOP</p>
              <div className="spacer-noH h-[36px]" />
              <Carousel value={products}
                circular autoplayInterval={5000} numVisible={3} numScroll={1}
                verticalViewPortHeight="80px" orientation="vertical" itemTemplate={productTemplate}
                showIndicators={false} showNavigators={false}
              />
            </div>
          </NoSsr> */}

            <div className="flex w-full pt-[128px] flex-col corner-noPadding ">

              <div className=" w-full px-[16px] flex flex-col pb-[36px]  ">

                <h1 className=' w-full  flex flex-col justify-center self-center gap-[0px] mt-[32px]'>
                  <div className="flex flex-col">
                    <span className="font-[400]  h1 text-gradient-display  self-center w-full  justify-center text-center">Device-Input Selection.</span>

                    {/* <p className="font-[500] h1 text-gradient-display">Now </p> */}
                    <span className="font-[800] h1 tracking-[0.035em] text-gradient-display  self-center w-full  justify-center text-center"> Now Visually Interactive.</span>

                  </div>

                  <div className=" self-center w-full  whitespace-nowrap justify-center flex flex-wrap gap-[12px] mt-[32px] font-[500]
                text-left text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px] ">
                    <span className=' text-gradient-display'> Semantic Labelling </span>
                    <div className="spacer " />
                    <span className=' text-gradient-display'> Input Search </span>
                    <div className="spacer " />
                    <span className=' text-gradient-display'> Axis vs. Button Filters </span>

                  </div>

                </h1>
                <div className="p-[16px] w-full h-full self-center content-center justify-items-center align-middle  justify-center device_svg_z z-99999999 flex flex-row gap-[42px]">
                  <Device_VKB_GLADIATOR_NXT_EVO_RIGHT
                    className='min-w-[300px] w-[180px] device-shadow self-start align-middle flex justify-center'
                    view='Front'
                  />
                  <NoSsr>
                    <InputEditor isExample={true} />

                  </NoSsr>

                </div>
              </div>

            </div>




          </section>

          <section className='w-full flex-center flex-col pt-[64px]' >
            <NoSsr>
              <div className="flex flex-row gap-[4px] hero-carousel">
                <p className=" flex flex-col    self-center justify-center align-middle
          font-['exo_2']  text-[#CEFCFF] text-[15px] font-medium  tracking-[0.1em]
          ">STOP</p>
                <div className="spacer-noH h-[36px]" />
                <Carousel value={products}
                  circular autoplayInterval={5000} numVisible={3} numScroll={1}
                  verticalViewPortHeight="80px" orientation="vertical" itemTemplate={productTemplate}
                  showIndicators={false} showNavigators={false}
                />
              </div>
            </NoSsr>

            <div className="flex w-full pt-[128px] flex-col corner-noPadding ">

              <div className=" w-full px-[16px] flex flex-col pb-[36px] ">

                <h1 className='h1 w-full  flex flex-col justify-center self-center gap-[16px] mt-[32px]'>
                  <span className="font-[800] text-gradient-display  self-center w-full tracking-[0.035em] justify-center text-center">500+ Keybinds Supported</span>

                  <div className="h2 self-center w-full  whitespace-nowrap justify-center flex flex-wrap gap-[12px] mt-[8px] font-[500] text-left 
                text-gradient-display font-['Exo_2'] tracking-[0.075em] uppercase text-[24px] mb-[24px]">
                    <span className=' text-gradient-display'> Bespoke Iconography </span>
                    <div className="spacer " />
                    <span className=' text-gradient-display'> Updated Per-Patch </span>
                    <div className="spacer " />
                    <span className=' text-gradient-display'> Semantic Search </span>
                    <div className="spacer " />
                    <span className=' text-gradient-display'>  Modifier Layers </span>
                  </div>

                </h1>
                <div className="p-[16px] w-full h-full">
                  <TreeTableDialogue noDialogueOverlay={true} />
                </div>
              </div>

            </div>




          </section>
        </motion.section>
      </motion.div>

    </motion.div>

  );
}

export default Home
