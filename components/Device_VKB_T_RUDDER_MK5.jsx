"use client";
import { Tooltip } from 'react-tooltip'
import InputPopover from '@components/generic/InputPopover.jsx'
//Device_VKB_SpaceEvo_RIGHT
import { OverlayPanel } from 'primereact/overlaypanel';
import { useContext } from 'react';
import { SelectContext, EditorPanelTitleContext, ViewerPanelTitleContext } from '@components/Provider.jsx'
import React from 'react'
import { Button } from 'primereact/button';
import EditIcon from '@components/generic/Icons/EditIcon.svg'
import ViewIcon from '@components/generic/Icons/ViewIcon.svg'
import Spacer from '@components/generic/Spacer.jsx'
const Device_VKB_T_RUDDER_MK5 = (props) => {
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
  const { viewerPanelTitle, setViewerPanelTitle } = useContext(ViewerPanelTitleContext)



  return (
    <>

      <InputPopover InputId={"rudderPedals_Device_VKB_T_RUDDER"} InputName={"RUDDER PEDALS"} TargetId={"#rudderPedals_Device_VKB_T_RUDDER"} />
      {/* <InputPopover InputId={"primaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} InputName={"PRIMARY TRIGGER"} TargetId={"#primaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} />
      <InputPopover InputId={"pinkyButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} InputName={"PINKY BUTTON"} TargetId={"#pinkyButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />
      <InputPopover InputId={"sideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} InputName={"SIDE INDEX BUTTON"} TargetId={"#sideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} /> */}

      <div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="Device_VKB_T_RUDDER_MK5Layer_2"
          data-name="Device_VKB_T_RUDDER_MK5Layer 2"
          viewBox="0 0 588.77 348.71"
          {...props}
        >
          <defs>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient"
              x1={202.19}
              x2={202.19}
              y1={240.65}
              y2={275.47}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" />
              <stop offset={0.08} stopColor="#005a4b" />
              <stop offset={0.2} stopColor="#00725a" />
              <stop offset={0.21} stopColor="#00735b" />
              <stop offset={0.23} stopColor="#007059" />
              <stop offset={0.42} stopColor="#006250" />
              <stop offset={0.64} stopColor="#00594a" />
              <stop offset={1} stopColor="#005749" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-2"
              x1={218.65}
              x2={218.65}
              y1={273.57}
              y2={268.37}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005245" />
              <stop offset={0.07} stopColor="#005547" stopOpacity={0.74} />
              <stop offset={0.18} stopColor="#00594a" stopOpacity={0.34} />
              <stop offset={0.28} stopColor="#005c4d" stopOpacity={0.09} />
              <stop offset={0.34} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.56} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.67} stopColor="#006252" stopOpacity={0.26} />
              <stop offset={0.88} stopColor="#00493d" stopOpacity={0.65} />
              <stop offset={1} stopColor="#004036" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-3"
              x1={221.01}
              x2={221.01}
              y1={252.37}
              y2={247.17}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005245" stopOpacity={0.7} />
              <stop offset={0.02} stopColor="#005346" stopOpacity={0.62} />
              <stop offset={0.1} stopColor="#005849" stopOpacity={0.35} />
              <stop offset={0.19} stopColor="#005b4c" stopOpacity={0.15} />
              <stop offset={0.28} stopColor="#005d4d" stopOpacity={0.04} />
              <stop offset={0.42} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.79} stopColor="#00493d" stopOpacity={0.56} />
              <stop offset={1} stopColor="#004036" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-3"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-4"
              x1={221.7}
              x2={221.7}
              y1={274.49}
              y2={270.27}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-5"
              x1={218.65}
              x2={218.65}
              y1={275.47}
              y2={270.25}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004036" stopOpacity={0.4} />
              <stop offset={0.21} stopColor="#005245" stopOpacity={0.25} />
              <stop offset={0.44} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.66} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.82} stopColor="#005f50" stopOpacity={0.3} />
              <stop offset={1} stopColor="#006152" stopOpacity={0.6} />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_5"
              x1={111}
              x2={111}
              y1={348.71}
              y2={227.36}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" />
              <stop offset={0.06} stopColor="#005549" />
              <stop offset={0.12} stopColor="#006152" />
              <stop offset={0.18} stopColor="#007561" />
              <stop offset={0.21} stopColor="#00826c" />
              <stop offset={0.65} stopColor="#006b5a" />
              <stop offset={1} stopColor="#005749" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-6"
              x1={110.99}
              x2={110.99}
              y1={247.38}
              y2={244.18}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" />
              <stop offset={0.09} stopColor="#005548" stopOpacity={0.89} />
              <stop offset={0.23} stopColor="#005f50" stopOpacity={0.58} />
              <stop offset={0.42} stopColor="#00705d" stopOpacity={0.08} />
              <stop offset={0.44} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.66} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.87} stopColor="#005648" stopOpacity={0.64} />
              <stop offset={1} stopColor="#005246" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-7"
              x1={111.96}
              x2={111.96}
              y1={252.37}
              y2={249.17}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-8"
              x1={110.51}
              x2={110.51}
              y1={257.8}
              y2={254.6}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-9"
              x1={111.48}
              x2={111.48}
              y1={262.79}
              y2={259.59}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-10"
              y1={267.47}
              y2={264.27}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-11"
              x1={111.96}
              x2={111.96}
              y1={272.45}
              y2={269.25}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-12"
              x1={110.51}
              x2={110.51}
              y1={277.89}
              y2={274.69}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-13"
              x1={111.48}
              x2={111.48}
              y1={282.87}
              y2={279.67}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-14"
              y1={287.69}
              y2={284.49}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-15"
              x1={111.96}
              x2={111.96}
              y1={292.68}
              y2={289.48}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-16"
              x1={110.51}
              x2={110.51}
              y1={298.11}
              y2={294.91}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-17"
              x1={111.48}
              x2={111.48}
              y1={303.1}
              y2={299.9}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-18"
              x1={111.48}
              x2={111.48}
              y1={309.34}
              y2={304.81}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" stopOpacity={0.2} />
              <stop offset={0.29} stopColor="#006454" stopOpacity={0.09} />
              <stop offset={0.44} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.66} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.87} stopColor="#005648" stopOpacity={0.64} />
              <stop offset={1} stopColor="#005246" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-19"
              x1={111.96}
              x2={111.96}
              y1={348.71}
              y2={345.51}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004036" />
              <stop offset={0.11} stopColor="#00473c" stopOpacity={0.85} />
              <stop offset={0.28} stopColor="#005b4c" stopOpacity={0.46} />
              <stop offset={0.44} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.66} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.82} stopColor="#004c3f" stopOpacity={0.51} />
              <stop offset={1} stopColor="#003b32" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-19"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-20"
              x1={110.61}
              x2={110.61}
              y1={347.37}
              y2={344.16}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-19"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-21"
              x1={110.61}
              x2={110.61}
              y1={342.74}
              y2={339.54}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-22"
              x1={113.98}
              x2={113.98}
              y1={338.96}
              y2={333.77}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004036" stopOpacity={0} />
              <stop offset={0.44} stopColor="#007360" stopOpacity={0} />
              <stop offset={0.66} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.87} stopColor="#005648" stopOpacity={0.64} />
              <stop offset={1} stopColor="#005245" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-22"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-23"
              x1={113.41}
              x2={113.41}
              y1={341.7}
              y2={336.51}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-5"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-24"
              x1={110.03}
              x2={110.03}
              y1={331.76}
              y2={326.55}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-25"
              x1={129.91}
              x2={129.91}
              y1={35.87}
              y2={0}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00453a" />
              <stop offset={0.2} stopColor="#00584b" />
              <stop offset={0.48} stopColor="#007a68" />
              <stop offset={1} stopColor="#00826e" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-2"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-26"
              x1={135.21}
              x2={135.21}
              y1={32.94}
              y2={24.11}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-27"
              x1={139.94}
              x2={139.94}
              y1={7.98}
              y2={1.97}
              gradientTransform="matrix(1 0 0 -.89 0 15.11)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004f43" stopOpacity={0.7} />
              <stop offset={0.3} stopColor="#005849" stopOpacity={0.28} />
              <stop offset={0.54} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.93} stopColor="#005849" stopOpacity={0} />
              <stop offset={1} stopColor="#005245" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-28"
              x1={140.19}
              x2={140.19}
              y1={20.48}
              y2={12.88}
              gradientTransform="matrix(1 0 0 .83 0 -8.94)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005245" stopOpacity={0.7} />
              <stop offset={0.05} stopColor="#005648" stopOpacity={0.45} />
              <stop offset={0.11} stopColor="#00594a" stopOpacity={0.25} />
              <stop offset={0.19} stopColor="#005c4c" stopOpacity={0.11} />
              <stop offset={0.3} stopColor="#005d4d" stopOpacity={0.02} />
              <stop offset={0.6} stopColor="#005e4e" stopOpacity={0} />
              <stop offset={0.86} stopColor="#005c4c" stopOpacity={0.02} />
              <stop offset={0.95} stopColor="#005547" stopOpacity={0.11} />
              <stop offset={1} stopColor="#004f43" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-5"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-29"
              x1={133.98}
              x2={133.98}
              y1={28.85}
              y2={23.64}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-30"
              x1={294.53}
              x2={294.37}
              y1={280.75}
              y2={259.57}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.01} stopColor="#008a73" />
              <stop offset={0.07} stopColor="#00735f" />
              <stop offset={0.15} stopColor="#005d4d" />
              <stop offset={0.25} stopColor="#004c3f" />
              <stop offset={0.37} stopColor="#004035" />
              <stop offset={0.53} stopColor="#00392f" />
              <stop offset={0.99} stopColor="#00382e" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-31"
              x1={292.99}
              x2={292.95}
              y1={2.84}
              y2={30.43}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#065" />
              <stop offset={0.59} stopColor="#005145" />
              <stop offset={1} stopColor="#004a40" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-32"
              x1={239.97}
              x2={236.95}
              y1={-3.59}
              y2={19.14}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#065" />
              <stop offset={0.59} stopColor="#005145" />
              <stop offset={1} stopColor="#004a40" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-33"
              x1={294.39}
              x2={294.39}
              y1={259.22}
              y2={15.95}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00453a" />
              <stop offset={0.17} stopColor="#00584a" />
              <stop offset={0.48} stopColor="#008570" />
              <stop offset={0.99} stopColor="#00a68c" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-34"
              x1={238.78}
              x2={237.02}
              y1={283}
              y2={261.8}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.01} stopColor="#008a73" />
              <stop offset={0.38} stopColor="#006a58" />
              <stop offset={0.77} stopColor="#004f41" />
              <stop offset={1} stopColor="#004539" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-35"
              x1={293.51}
              x2={293.51}
              y1={280.49}
              y2={258.09}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00453a" />
              <stop offset={0.17} stopColor="#00584a" />
              <stop offset={0.48} stopColor="#008570" />
              <stop offset={0.97} stopColor="#00463a" />
              <stop offset={1} stopColor="#004237" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-36"
              x1={238.08}
              x2={235.21}
              y1={-3.66}
              y2={17.96}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005e51" />
              <stop offset={0.18} stopColor="#006657" />
              <stop offset={0.45} stopColor="#007c68" />
              <stop offset={0.49} stopColor="#00806b" />
              <stop offset={0.56} stopColor="#008771" />
              <stop offset={0.69} stopColor="#008e78" />
              <stop offset={1} stopColor="#00917a" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-37"
              x1={256.58}
              x2={261.31}
              y1={87.59}
              y2={72.46}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.21} stopColor="#00ab8e" />
              <stop offset={0.33} stopColor="#009b80" />
              <stop offset={0.57} stopColor="#00725e" />
              <stop offset={0.89} stopColor="#003027" />
              <stop offset={0.93} stopColor="#002921" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-38"
              x1={209.54}
              x2={209.54}
              y1={254.36}
              y2={1.88}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005447" />
              <stop offset={0.22} stopColor="#005749" />
              <stop offset={1} stopColor="#008a74" />
              <stop offset={1} stopColor="#00fcd4" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-39"
              x1={205.6}
              x2={205.6}
              y1={254.61}
              y2={1.7}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004f41" />
              <stop offset={0.05} stopColor="#005142" />
              <stop offset={0.07} stopColor="#005849" />
              <stop offset={0.09} stopColor="#006654" />
              <stop offset={0.1} stopColor="#007964" />
              <stop offset={0.12} stopColor="#009178" />
              <stop offset={0.13} stopColor="#00af91" />
              <stop offset={0.13} stopColor="#00b395" />
              <stop offset={0.43} stopColor="#00b193" />
              <stop offset={0.54} stopColor="#00aa8d" />
              <stop offset={0.62} stopColor="#009e84" />
              <stop offset={0.68} stopColor="#008d76" />
              <stop offset={0.69} stopColor="#008a73" />
              <stop offset={0.7} stopColor="#00836d" />
              <stop offset={0.72} stopColor="#007a65" />
              <stop offset={0.74} stopColor="#008871" />
              <stop offset={0.8} stopColor="#00ab90" />
              <stop offset={0.85} stopColor="#00c5a6" />
              <stop offset={0.9} stopColor="#00d5b4" />
              <stop offset={0.93} stopColor="#00dbb9" />
              <stop offset={1} stopColor="#007a63" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-40"
              x1={99.85}
              x2={99.85}
              y1={19.84}
              y2={13.43}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" />
              <stop offset={0.03} stopColor="#006052" />
              <stop offset={0.16} stopColor="#00957f" />
              <stop offset={0.26} stopColor="#00bba0" />
              <stop offset={0.35} stopColor="#00d2b4" />
              <stop offset={0.41} stopColor="#00dbbc" />
              <stop offset={0.46} stopColor="#00d6b8" />
              <stop offset={0.52} stopColor="#00caac" />
              <stop offset={0.57} stopColor="#00b599" />
              <stop offset={0.63} stopColor="#00997f" />
              <stop offset={0.64} stopColor="#00947b" />
              <stop offset={0.64} stopColor="#00947b" />
              <stop offset={0.8} stopColor="#00ba9e" />
              <stop offset={0.92} stopColor="#00d2b4" />
              <stop offset={1} stopColor="#00dbbc" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-41"
              y1={72.89}
              y2={66.49}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-42"
              y1={32.99}
              y2={26.59}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-43"
              y1={39.79}
              y2={33.38}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-44"
              x1={100.2}
              x2={100.2}
              y1={26.29}
              y2={19.89}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005246" />
              <stop offset={0.03} stopColor="#006052" />
              <stop offset={0.16} stopColor="#00957f" />
              <stop offset={0.26} stopColor="#00bba0" />
              <stop offset={0.35} stopColor="#00d2b4" />
              <stop offset={0.41} stopColor="#00dbbc" />
              <stop offset={0.49} stopColor="#00d8b9" />
              <stop offset={0.54} stopColor="#00d0b2" />
              <stop offset={0.58} stopColor="#00c2a5" />
              <stop offset={0.61} stopColor="#00af93" />
              <stop offset={0.64} stopColor="#00997f" />
              <stop offset={0.68} stopColor="#00b095" />
              <stop offset={0.73} stopColor="#00c3a6" />
              <stop offset={0.79} stopColor="#00d1b2" />
              <stop offset={0.86} stopColor="#00d8b9" />
              <stop offset={1} stopColor="#00dbbc" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-45"
              y1={46.15}
              y2={39.75}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-46"
              x1={101.07}
              x2={101.07}
              y1={52.93}
              y2={46.52}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-47"
              y1={59.31}
              y2={52.91}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-48"
              y1={66.1}
              y2={59.7}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-49"
              x1={101.07}
              x2={101.07}
              y1={80.66}
              y2={1.7}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.03} stopColor="#006153" />
              <stop offset={0.03} stopColor="#007363" />
              <stop offset={0.04} stopColor="#00917c" />
              <stop offset={0.05} stopColor="#00a991" />
              <stop offset={0.06} stopColor="#00bca1" />
              <stop offset={0.08} stopColor="#00c9ad" />
              <stop offset={0.09} stopColor="#00d1b4" />
              <stop offset={0.13} stopColor="#00d4b6" />
              <stop offset={0.21} stopColor="#00d4b6" />
              <stop offset={0.34} stopColor="#009a83" />
              <stop offset={0.53} stopColor="#004237" />
              <stop offset={0.58} stopColor="#00453a" />
              <stop offset={0.63} stopColor="#005043" />
              <stop offset={0.68} stopColor="#006253" />
              <stop offset={0.73} stopColor="#007c69" />
              <stop offset={0.78} stopColor="#009e85" />
              <stop offset={0.82} stopColor="#00c6a7" />
              <stop offset={0.84} stopColor="#00dbb9" />
              <stop offset={0.84} stopColor="#00ceae" />
              <stop offset={0.85} stopColor="#00ac92" />
              <stop offset={0.85} stopColor="#007765" />
              <stop offset={0.85} stopColor="#005246" />
              <stop offset={0.85} stopColor="#006052" />
              <stop offset={0.86} stopColor="#008c78" />
              <stop offset={0.87} stopColor="#00ae95" />
              <stop offset={0.87} stopColor="#00c7aa" />
              <stop offset={0.88} stopColor="#00d5b7" />
              <stop offset={0.88} stopColor="#00dbbc" />
              <stop offset={0.91} stopColor="#00d7b9" />
              <stop offset={0.93} stopColor="#00ceb0" />
              <stop offset={0.95} stopColor="#00bea1" />
              <stop offset={0.96} stopColor="#00a78c" />
              <stop offset={0.97} stopColor="#00967d" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-50"
              y1={72.89}
              y2={66.49}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-51"
              y1={32.99}
              y2={26.59}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-52"
              y1={39.79}
              y2={33.38}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-53"
              y1={46.15}
              y2={39.75}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-54"
              x1={101.07}
              x2={101.07}
              y1={52.93}
              y2={46.52}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-55"
              y1={59.31}
              y2={52.91}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-56"
              y1={66.1}
              y2={59.7}
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-35"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-57"
              x1={218.65}
              x2={218.65}
              y1={252.37}
              y2={228.94}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-58"
              x1={225.64}
              x2={225.64}
              y1={257.62}
              y2={226.13}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#004d40" />
              <stop offset={0.08} stopColor="#005144" />
              <stop offset={0.17} stopColor="#006050" />
              <stop offset={0.27} stopColor="#007864" />
              <stop offset={0.38} stopColor="#009980" />
              <stop offset={0.49} stopColor="#00c3a4" />
              <stop offset={0.54} stopColor="#00d9b6" />
              <stop offset={0.61} stopColor="#00d2b0" />
              <stop offset={0.66} stopColor="#00be9f" />
              <stop offset={0.78} stopColor="#009078" />
              <stop offset={0.88} stopColor="#007360" />
              <stop offset={0.93} stopColor="#006958" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-59"
              x1={224.84}
              x2={237.54}
              y1={171.11}
              y2={174.74}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.14} stopColor="#008c76" />
              <stop offset={0.22} stopColor="#009f86" />
              <stop offset={0.39} stopColor="#00d2b0" />
              <stop offset={0.46} stopColor="#00d9b6" />
              <stop offset={1} stopColor="#004034" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-60"
              x1={231.55}
              x2={231.55}
              y1={279.17}
              y2={202.24}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#003b33" />
              <stop offset={0.05} stopColor="#004339" />
              <stop offset={0.13} stopColor="#00594c" />
              <stop offset={0.24} stopColor="#007d6a" />
              <stop offset={0.27} stopColor="#008c76" />
              <stop offset={0.27} stopColor="#008d76" />
              <stop offset={0.32} stopColor="#009981" />
              <stop offset={0.38} stopColor="#00a087" />
              <stop offset={0.52} stopColor="#00a389" />
              <stop offset={0.75} stopColor="#00d9b6" />
              <stop offset={0.89} stopColor="#00b396" />
              <stop offset={1} stopColor="#00917a" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-61"
              x1={240.61}
              x2={249.73}
              y1={118.8}
              y2={118.8}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.17} stopColor="#00876e" />
              <stop offset={0.19} stopColor="#009076" />
              <stop offset={0.27} stopColor="#00ac8e" />
              <stop offset={0.35} stopColor="#00c0a0" />
              <stop offset={0.43} stopColor="#0ca" />
              <stop offset={0.51} stopColor="#00d1ae" />
              <stop offset={0.61} stopColor="#00caa8" />
              <stop offset={0.74} stopColor="#00b999" />
              <stop offset={0.9} stopColor="#009d81" />
              <stop offset={1} stopColor="#00876e" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2"
              x1={242.13}
              x2={256.29}
              y1={109.54}
              y2={113.69}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 2"
              gradientTransform="rotate(3.07 247.024 111.201)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.14} stopColor="#00dbb9" />
              <stop offset={0.37} stopColor="#00d9b6" />
              <stop offset={0.47} stopColor="#009d84" />
              <stop offset={0.55} stopColor="#00705e" />
              <stop offset={0.62} stopColor="#007d69" />
              <stop offset={0.63} stopColor="#00806c" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-62"
              x1={267.38}
              x2={256.84}
              y1={85.98}
              y2={105.87}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#009b83" />
              <stop offset={0.29} stopColor="#009d85" />
              <stop offset={0.5} stopColor="#00a78c" />
              <stop offset={0.68} stopColor="#00b799" />
              <stop offset={0.75} stopColor="#00bfa0" />
              <stop offset={0.88} stopColor="#00a48a" />
              <stop offset={1} stopColor="#00917b" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-63"
              x1={228.95}
              x2={268.59}
              y1={101.58}
              y2={88.34}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00ffd5" />
              <stop offset={0.33} stopColor="#00fdd3" />
              <stop offset={0.45} stopColor="#00f6cc" />
              <stop offset={0.53} stopColor="#00ebc0" />
              <stop offset={0.6} stopColor="#00daaf" />
              <stop offset={0.61} stopColor="#00d6ab" />
              <stop offset={0.66} stopColor="#00caa5" />
              <stop offset={0.74} stopColor="#00be9f" />
              <stop offset={0.81} stopColor="#00ba9d" />
              <stop offset={0.85} stopColor="#00b397" />
              <stop offset={0.91} stopColor="#009f86" />
              <stop offset={0.94} stopColor="#00947d" />
              <stop offset={0.95} stopColor="#00947d" stopOpacity={0.98} />
              <stop offset={0.96} stopColor="#00947d" stopOpacity={0.91} />
              <stop offset={0.97} stopColor="#00957e" stopOpacity={0.79} />
              <stop offset={0.98} stopColor="#00967f" stopOpacity={0.62} />
              <stop offset={0.99} stopColor="#009880" stopOpacity={0.41} />
              <stop offset={1} stopColor="#009982" stopOpacity={0.15} />
              <stop offset={1} stopColor="#009b83" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-64"
              x1={240.62}
              x2={252.49}
              y1={114.04}
              y2={117.34}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.14} stopColor="#00dbb9" />
              <stop offset={0.37} stopColor="#00d9b6" />
              <stop offset={0.47} stopColor="#009d84" />
              <stop offset={0.55} stopColor="#00705e" />
              <stop offset={0.62} stopColor="#007d69" />
              <stop offset={0.63} stopColor="#00806c" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-61"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-65"
              x1={223.15}
              x2={253.53}
              y1={141.78}
              y2={151.23}
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-66"
              x1={223.27}
              x2={240.07}
              y1={138.92}
              y2={151.45}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 312.77 -364.01)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00c9ab" />
              <stop offset={0.22} stopColor="#00ac9d" />
              <stop offset={0.48} stopColor="#008f8f" />
              <stop offset={0.61} stopColor="#009391" />
              <stop offset={0.74} stopColor="#009f97" />
              <stop offset={0.88} stopColor="#00b4a1" />
              <stop offset={1} stopColor="#00ccad" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-67"
              x1={224.4}
              x2={241.2}
              y1={139.37}
              y2={151.89}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 315.12 -365.59)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-68"
              x1={225.39}
              x2={242.19}
              y1={139.65}
              y2={152.17}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 317.04 -367.04)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-69"
              x1={226.43}
              x2={243.23}
              y1={140.1}
              y2={152.63}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 319.26 -368.47)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-70"
              x1={227.42}
              x2={244.22}
              y1={140.38}
              y2={152.91}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 321.17 -369.91)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-71"
              x1={228.46}
              x2={245.26}
              y1={140.84}
              y2={153.37}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 323.39 -371.33)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-72"
              x1={229.45}
              x2={246.25}
              y1={141.12}
              y2={153.65}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 325.3 -372.78)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-73"
              x1={230.62}
              x2={247.42}
              y1={141.62}
              y2={154.15}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 327.78 -374.39)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-74"
              x1={231.61}
              x2={248.41}
              y1={141.9}
              y2={154.43}
              gradientTransform="matrix(.28859 1.85772 -1.03243 .51987 329.7 -375.84)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-2"
              x1={220.26}
              x2={234.06}
              y1={183.16}
              y2={187.09}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 2"
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-75"
              x1={228.64}
              x2={246.53}
              y1={178.83}
              y2={184.46}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00c2a4" />
              <stop offset={0} stopColor="#00bfa1" />
              <stop offset={0.03} stopColor="#00947d" />
              <stop offset={0.06} stopColor="#007966" />
              <stop offset={0.07} stopColor="#00705e" />
              <stop offset={0.18} stopColor="#008c76" />
              <stop offset={0.23} stopColor="#00917a" />
              <stop offset={0.28} stopColor="#00a288" />
              <stop offset={0.35} stopColor="#00bc9e" />
              <stop offset={0.39} stopColor="#00d2b0" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-76"
              x1={211.82}
              x2={217.56}
              y1={205.15}
              y2={206.01}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.14} stopColor="#008c76" />
              <stop offset={0.22} stopColor="#009f86" />
              <stop offset={0.39} stopColor="#00d2b0" />
              <stop offset={0.46} stopColor="#00d9b6" />
              <stop offset={0.53} stopColor="#00b89b" />
              <stop offset={0.64} stopColor="#008e77" />
              <stop offset={0.74} stopColor="#006d5b" />
              <stop offset={0.83} stopColor="#005547" />
              <stop offset={0.92} stopColor="#00463b" />
              <stop offset={1} stopColor="#004237" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_4"
              x1={209.98}
              x2={225.81}
              y1={201.3}
              y2={205.88}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 4"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.41} stopColor="#006353" />
              <stop offset={0.43} stopColor="#007663" />
              <stop offset={0.47} stopColor="#009f85" />
              <stop offset={0.5} stopColor="#00bc9d" />
              <stop offset={0.53} stopColor="#00ceac" />
              <stop offset={0.56} stopColor="#00d5b2" />
              <stop offset={0.61} stopColor="#00d2b0" />
              <stop offset={0.75} stopColor="#009f86" />
              <stop offset={0.82} stopColor="#008c76" />
              <stop offset={0.85} stopColor="#008872" />
              <stop offset={0.88} stopColor="#007d69" />
              <stop offset={0.91} stopColor="#006b59" />
              <stop offset={0.93} stopColor="#00594a" />
              <stop offset={0.96} stopColor="#006252" />
              <stop offset={1} stopColor="#007360" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-77"
              x1={212.11}
              x2={212.11}
              y1={201.29}
              y2={212}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.26} stopColor="#008c76" />
              <stop offset={0.29} stopColor="#008c76" />
              <stop offset={0.32} stopColor="#009f86" />
              <stop offset={0.39} stopColor="#00d2b0" />
              <stop offset={0.46} stopColor="#00d9b6" />
              <stop offset={0.68} stopColor="#009d83" />
              <stop offset={1} stopColor="#004237" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_6"
              x1={210.53}
              x2={210.53}
              y1={199.81}
              y2={214.84}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 6"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.14} stopColor="#008c76" />
              <stop offset={0.22} stopColor="#009f86" />
              <stop offset={0.39} stopColor="#00d2b0" />
              <stop offset={0.46} stopColor="#00d9b6" />
              <stop offset={0.53} stopColor="#00b89b" />
              <stop offset={0.64} stopColor="#008e77" />
              <stop offset={0.74} stopColor="#006d5b" />
              <stop offset={0.83} stopColor="#005547" />
              <stop offset={0.92} stopColor="#00463b" />
              <stop offset={1} stopColor="#004237" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-78"
              x1={229.46}
              x2={229.46}
              y1={211.71}
              y2={200.17}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#009e83" />
              <stop offset={0.14} stopColor="#00967d" />
              <stop offset={0.25} stopColor="#008c76" />
              <stop offset={0.32} stopColor="#009980" />
              <stop offset={0.44} stopColor="#00bb9d" />
              <stop offset={0.5} stopColor="#00d2b0" />
              <stop offset={0.58} stopColor="#00d9b6" />
              <stop offset={0.64} stopColor="#00b497" />
              <stop offset={0.72} stopColor="#008c76" />
              <stop offset={0.79} stopColor="#007e6a" />
              <stop offset={0.91} stopColor="#005c4d" />
              <stop offset={1} stopColor="#004237" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-79"
              x1={193.72}
              x2={193.72}
              y1={240.65}
              y2={275.47}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-2"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-80"
              x1={210.18}
              x2={210.18}
              y1={273.57}
              y2={268.37}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-3"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-81"
              x1={212.54}
              x2={212.54}
              y1={252.37}
              y2={247.17}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-3"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-82"
              x1={213.23}
              x2={213.23}
              y1={274.49}
              y2={270.27}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-5"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-83"
              x1={210.18}
              x2={210.18}
              y1={275.47}
              y2={270.25}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_5"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_5-2"
              x1={102.53}
              x2={102.53}
              y1={348.71}
              y2={227.36}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 5"
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-84"
              x1={102.53}
              x2={102.53}
              y1={247.38}
              y2={244.18}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-85"
              x1={103.49}
              x2={103.49}
              y1={252.37}
              y2={249.17}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-86"
              x1={102.04}
              x2={102.04}
              y1={257.8}
              y2={254.6}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-87"
              x1={103.01}
              x2={103.01}
              y1={262.79}
              y2={259.59}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-88"
              x1={102.53}
              x2={102.53}
              y1={267.47}
              y2={264.27}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-89"
              x1={103.49}
              x2={103.49}
              y1={272.45}
              y2={269.25}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-90"
              x1={102.04}
              x2={102.04}
              y1={277.89}
              y2={274.69}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-91"
              x1={103.01}
              x2={103.01}
              y1={282.87}
              y2={279.67}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-92"
              x1={102.53}
              x2={102.53}
              y1={287.69}
              y2={284.49}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-93"
              x1={103.49}
              x2={103.49}
              y1={292.68}
              y2={289.48}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-94"
              x1={102.04}
              x2={102.04}
              y1={298.11}
              y2={294.91}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-6"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-95"
              x1={103.01}
              x2={103.01}
              y1={303.1}
              y2={299.9}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-18"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-96"
              x1={103.01}
              x2={103.01}
              y1={309.34}
              y2={304.81}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-19"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-97"
              x1={103.49}
              x2={103.49}
              y1={348.71}
              y2={345.51}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-19"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-98"
              x1={102.14}
              x2={102.14}
              y1={347.37}
              y2={344.16}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-19"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-99"
              x1={102.14}
              x2={102.14}
              y1={342.74}
              y2={339.54}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-22"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-100"
              x1={105.51}
              x2={105.51}
              y1={338.96}
              y2={333.77}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-22"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-101"
              x1={104.94}
              x2={104.94}
              y1={341.7}
              y2={336.51}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-5"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-102"
              x1={101.56}
              x2={101.56}
              y1={331.76}
              y2={326.55}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-25"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-103"
              x1={121.44}
              x2={121.44}
              y1={35.87}
              y2={0}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-2"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-104"
              x1={126.74}
              x2={126.74}
              y1={32.94}
              y2={24.11}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-27"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-105"
              x1={131.47}
              x2={131.47}
              gradientTransform="matrix(-1 0 0 -.89 580.3 15.11)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-28"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-106"
              x1={131.72}
              x2={131.72}
              y1={20.48}
              y2={12.88}
              gradientTransform="matrix(-1 0 0 .83 580.3 -8.94)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-5"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-107"
              x1={125.51}
              x2={125.51}
              y1={28.85}
              y2={23.64}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-31"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-108"
              x1={254.84}
              x2={254.79}
              y1={2.89}
              y2={30.48}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-32"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-109"
              x1={231.5}
              x2={228.48}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-33"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-110"
              x1={253.4}
              x2={253.4}
              y1={259.22}
              y2={15.95}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-34"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-111"
              x1={230.31}
              x2={228.55}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-35"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-112"
              x1={253.45}
              x2={253.45}
              y1={280.49}
              y2={258.09}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-36"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-113"
              x1={229.62}
              x2={226.74}
              y1={-3.66}
              y2={17.96}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-37"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-114"
              x1={248.11}
              x2={252.84}
              y1={87.59}
              y2={72.46}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-38"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-115"
              x1={201.08}
              x2={201.08}
              y1={254.36}
              y2={1.88}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-39"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-116"
              x1={197.13}
              x2={197.13}
              y1={254.61}
              y2={1.7}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-117"
              x1={91.38}
              x2={91.38}
              y1={19.84}
              y2={13.43}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-118"
              x1={91.38}
              x2={91.38}
              y1={72.89}
              y2={66.49}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-119"
              x1={91.38}
              x2={91.38}
              y1={32.99}
              y2={26.59}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-120"
              x1={91.38}
              x2={91.38}
              y1={39.79}
              y2={33.38}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-44"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-121"
              x1={91.73}
              x2={91.73}
              y1={26.29}
              y2={19.89}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-122"
              x1={91.38}
              x2={91.38}
              y1={46.15}
              y2={39.75}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-123"
              x1={92.6}
              x2={92.6}
              y1={52.93}
              y2={46.52}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-124"
              x1={91.38}
              x2={91.38}
              y1={59.31}
              y2={52.91}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-125"
              x1={91.38}
              x2={91.38}
              y1={66.1}
              y2={59.7}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-49"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-126"
              x1={92.6}
              x2={92.6}
              y1={80.66}
              y2={1.7}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-127"
              x1={91.38}
              x2={91.38}
              y1={19.84}
              y2={13.43}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-128"
              x1={91.38}
              x2={91.38}
              y1={72.89}
              y2={66.49}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-129"
              x1={91.38}
              x2={91.38}
              y1={32.99}
              y2={26.59}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-130"
              x1={91.38}
              x2={91.38}
              y1={39.79}
              y2={33.38}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-44"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-131"
              x1={91.73}
              x2={91.73}
              y1={26.29}
              y2={19.89}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-132"
              x1={91.38}
              x2={91.38}
              y1={46.15}
              y2={39.75}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-133"
              x1={92.6}
              x2={92.6}
              y1={52.93}
              y2={46.52}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-134"
              x1={91.38}
              x2={91.38}
              y1={59.31}
              y2={52.91}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-40"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-135"
              x1={91.38}
              x2={91.38}
              y1={66.1}
              y2={59.7}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-35"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-136"
              x1={210.18}
              x2={210.18}
              y1={252.37}
              y2={228.94}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-58"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-137"
              x1={217.17}
              x2={217.17}
              y1={257.62}
              y2={226.13}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-59"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-138"
              x1={216.37}
              x2={229.07}
              y2={174.74}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-60"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-139"
              x1={223.08}
              x2={223.08}
              y1={279.17}
              y2={202.24}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-61"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-140"
              x1={232.14}
              x2={241.26}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-3"
              x1={233.67}
              x2={247.84}
              y1={110}
              y2={114.14}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 2"
              gradientTransform="scale(-1 1) rotate(3.07 -43.126 -10716.416)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-62"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-141"
              x1={258.91}
              x2={248.37}
              y1={85.98}
              y2={105.87}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-142"
              x1={220.48}
              x2={276.74}
              y1={101.58}
              y2={82.79}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#009b83" stopOpacity={0} />
              <stop offset={0} stopColor="#009982" stopOpacity={0.15} />
              <stop offset={0.01} stopColor="#009880" stopOpacity={0.41} />
              <stop offset={0.02} stopColor="#00967f" stopOpacity={0.62} />
              <stop offset={0.03} stopColor="#00957e" stopOpacity={0.79} />
              <stop offset={0.04} stopColor="#00947d" stopOpacity={0.91} />
              <stop offset={0.05} stopColor="#00947d" stopOpacity={0.98} />
              <stop offset={0.06} stopColor="#00947d" />
              <stop offset={0.09} stopColor="#009f86" />
              <stop offset={0.15} stopColor="#00b397" />
              <stop offset={0.19} stopColor="#00ba9d" />
              <stop offset={0.26} stopColor="#00be9f" />
              <stop offset={0.34} stopColor="#00caa5" />
              <stop offset={0.39} stopColor="#00d6ab" />
              <stop offset={0.4} stopColor="#00daaf" />
              <stop offset={0.47} stopColor="#00ebc0" />
              <stop offset={0.55} stopColor="#00f6cc" />
              <stop offset={0.67} stopColor="#00fdd3" />
              <stop offset={1} stopColor="#00ffd5" />
            </linearGradient>
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-143"
              x1={232.15}
              x2={244.02}
              y1={114.04}
              y2={117.34}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.37} stopColor="#00806c" />
              <stop offset={0.38} stopColor="#007d69" />
              <stop offset={0.45} stopColor="#00705e" />
              <stop offset={0.53} stopColor="#009d84" />
              <stop offset={0.63} stopColor="#00d9b6" />
              <stop offset={0.86} stopColor="#00dbb9" />
            </linearGradient>
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-61"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-144"
              x1={214.68}
              x2={245.06}
              y1={141.78}
              y2={151.23}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-145"
              x1={218.63}
              x2={235.43}
              y1={139.83}
              y2={152.36}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.34 57.24)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-146"
              x1={219.76}
              x2={236.56}
              y1={140.28}
              y2={152.81}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.46 57.87)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-147"
              x1={220.75}
              x2={237.55}
              y1={140.56}
              y2={153.09}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.54 58.4)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-148"
              x1={221.79}
              x2={238.59}
              y1={141.01}
              y2={153.54}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.66 58.98)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-149"
              x1={222.78}
              x2={239.58}
              y1={141.29}
              y2={153.82}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.74 59.52)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-150"
              x1={223.82}
              x2={240.62}
              y1={141.75}
              y2={154.28}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.86 60.09)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-151"
              x1={224.81}
              x2={241.61}
              y1={142.03}
              y2={154.56}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 857.94 60.63)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-152"
              x1={225.98}
              x2={242.78}
              y1={142.53}
              y2={155.06}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 858.08 61.28)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-66"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-153"
              x1={226.97}
              x2={243.77}
              y1={142.81}
              y2={155.34}
              gradientTransform="matrix(-1.85772 -.28859 -.51987 1.03243 858.15 61.82)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-4"
              x1={211.79}
              x2={225.59}
              y1={183.16}
              y2={187.09}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 2"
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-75"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-154"
              x1={220.17}
              x2={238.06}
              y1={178.83}
              y2={184.46}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-76"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-155"
              x1={203.35}
              x2={209.09}
              y1={205.15}
              y2={206.01}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_4"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_4-2"
              x1={201.51}
              x2={217.34}
              y2={205.88}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 4"
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-77"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-156"
              x1={203.64}
              x2={203.64}
              y1={201.29}
              y2={212}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_6"
              id="Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_6-2"
              x1={202.06}
              x2={202.06}
              y1={199.81}
              y2={214.84}
              data-name="Device_VKB_T_RUDDER_MK5New Gradient Swatch copy 6"
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5linear-gradient-78"
              id="Device_VKB_T_RUDDER_MK5linear-gradient-157"
              x1={220.99}
              x2={220.99}
              y1={211.71}
              y2={200.17}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <linearGradient
              id="Device_VKB_T_RUDDER_MK5linear-gradient-158"
              x1={340.43}
              x2={342.16}
              y1={179.08}
              y2={187.18}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#005c4d" />
              <stop offset={0.19} stopColor="#006050" />
              <stop offset={0.39} stopColor="#006e5c" />
              <stop offset={0.61} stopColor="#00846f" />
              <stop offset={0.84} stopColor="#00a389" />
              <stop offset={1} stopColor="#00bfa0" />
            </linearGradient>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath">
              <path
                d="M167.27 240.65h71.38v34.82h-72.92v-34.82h1.54z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-1">
              <path
                d="M59.94 348.71h105.88a2.3 2.3 0 0 0 2.3-2.3v-32.66l-.94-80.07a6.396 6.396 0 0 0-6.4-6.32H59.94l-4.05 2.03-2.03 3.29 1.52 95.26.51 8.11 1.01 8.36 3.04 4.31Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-2">
              <path
                d="M236.24 0H26.89l-3.31 3.8 176.16 32.07h35.53L236.24 0z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-3">
              <ellipse
                cx={255.86}
                cy={79.03}
                className="cls-43"
                rx={8.94}
                ry={8.95}
                transform="rotate(-12.95 255.78 79.007)"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-4">
              <path
                d="M202.14 80.66H11.43l-2.22-2.83-6.38-38.14L0 11.38V1.7h199.1l-.96 2.35.1 7.13 3.9 64.21v5.27z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-5">
              <path
                d="M202.14 80.66H11.43l-2.22-2.83-6.38-38.14L0 11.38V1.7h199.1l-.96 2.35.1 7.13 3.9 64.21v5.27z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-6">
              <path
                d="m243.75 107.83-3.61-10.09c-.51-1.43-.77-2.94-.77-4.46v-.58c0-5.28 3.07-10.2 7.98-12.14a13.02 13.02 0 0 1 7.62-.59c5.59 1.24 9.54 5.89 10.15 11.27.24 2.08-.17 4.18-.99 6.11l-.03.07c-.95 2.23-2.51 4.15-4.48 5.54l-9.3 6.53-6.57-1.67Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-7">
              <path
                d="M237.06 118.82c3.09.09 11.65.67 15.96 4.48.43.38.62.97.46 1.53l-13.7 49.11a1.47 1.47 0 0 1-1.89 1c-3.19-1.07-10.79-3.56-14.96-4.29a1.474 1.474 0 0 1-1.16-1.85l13.83-48.9c.18-.65.78-1.09 1.45-1.08Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-8">
              <path
                d="M421.5 240.65h-71.38v34.82h72.92v-34.82h-1.54z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-9">
              <path
                d="M528.83 348.71H422.95a2.3 2.3 0 0 1-2.3-2.3v-32.66l.94-80.07c.04-3.5 2.89-6.32 6.4-6.32h100.84l4.05 2.03 2.03 3.29-1.52 95.26-.51 8.11-1.01 8.36-3.04 4.31Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-10">
              <path
                d="M352.53 0h209.35l3.31 3.8-176.16 32.07H353.5L352.53 0z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-11">
              <ellipse
                cx={332.92}
                cy={79.03}
                className="cls-43"
                rx={8.95}
                ry={8.94}
                transform="rotate(-77.05 332.928 79.018)"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-12">
              <path
                d="M386.63 80.66h190.71l2.22-2.83 6.38-38.14 2.83-28.31V1.7H389.68l.95 2.35-.09 7.13-3.91 64.21v5.27z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-13">
              <path
                d="M386.63 80.66h190.71l2.22-2.83 6.38-38.14 2.83-28.31V1.7H389.68l.95 2.35-.09 7.13-3.91 64.21v5.27z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-14">
              <path
                d="m345.02 107.83 3.61-10.09c.51-1.43.77-2.94.77-4.46v-.58c0-5.28-3.07-10.2-7.98-12.14a13.02 13.02 0 0 0-7.62-.59c-5.59 1.24-9.54 5.89-10.15 11.27-.24 2.08.17 4.18.99 6.11l.03.07c.95 2.23 2.51 4.15 4.48 5.54l9.3 6.53 6.57-1.67Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-15">
              <path
                d="M351.71 118.82c-3.09.09-11.65.67-15.96 4.48-.43.38-.62.97-.46 1.53l13.7 49.11a1.47 1.47 0 0 0 1.89 1c3.19-1.07 10.79-3.56 14.96-4.29.86-.15 1.39-1.01 1.16-1.85l-13.83-48.9a1.48 1.48 0 0 0-1.45-1.08Z"
                className="cls-43"
              />
            </clipPath>
            <clipPath id="Device_VKB_T_RUDDER_MK5clippath-16">
              <circle cx={340.56} cy={179.66} r={4.14} className="cls-43" />
            </clipPath>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient"
              cx={256.16}
              cy={78.9}
              r={9.34}
              fx={256.16}
              fy={78.9}
              gradientTransform="matrix(-.37052 -.95033 .801 -.31306 286.84 346.12)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#003329" />
              <stop offset={0.5} stopColor="#003127" />
              <stop offset={0.68} stopColor="#002a21" />
              <stop offset={0.81} stopColor="#001f17" />
              <stop offset={0.83} stopColor="#001f18" />
              <stop offset={1} stopColor="#00211b" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-2"
              cx={101.07}
              cy={41.18}
              r={76.73}
              fx={101.07}
              fy={93.37}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.03} stopColor="#00ffda" />
              <stop offset={0.17} stopColor="#00edca" />
              <stop offset={0.73} stopColor="#00ae92" />
              <stop offset={1} stopColor="#00967d" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-3"
              cx={245.65}
              cy={117.75}
              r={4.23}
              fx={245.65}
              fy={117.75}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.17} stopColor="#00876e" />
              <stop offset={0.2} stopColor="#008e74" />
              <stop offset={0.3} stopColor="#00a286" />
              <stop offset={0.41} stopColor="#00ae91" />
              <stop offset={0.51} stopColor="#00b395" />
              <stop offset={0.65} stopColor="#00ac8f" />
              <stop offset={0.83} stopColor="#009b80" />
              <stop offset={1} stopColor="#00876e" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-4"
              cx={252.07}
              cy={91.97}
              r={9.93}
              fx={252.07}
              fy={91.97}
              gradientTransform="rotate(15.28 252.035 91.943)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00b89c" />
              <stop offset={0.43} stopColor="#00b99d" />
              <stop offset={0.59} stopColor="#00c0a3" />
              <stop offset={0.7} stopColor="#00ccad" />
              <stop offset={0.77} stopColor="#00d9b8" />
              <stop offset={0.88} stopColor="#00d7b6" />
              <stop offset={0.92} stopColor="#00d0b3" />
              <stop offset={0.95} stopColor="#00c4ac" />
              <stop offset={0.97} stopColor="#00b3a3" />
              <stop offset={0.99} stopColor="#009d98" />
              <stop offset={1} stopColor="#009191" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-5"
              cx={252}
              cy={92.16}
              r={4.93}
              fx={252}
              fy={92.16}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00ffd5" stopOpacity={0.9} />
              <stop offset={0.45} stopColor="#00fbd1" stopOpacity={0.91} />
              <stop offset={0.61} stopColor="#00edc3" stopOpacity={0.94} />
              <stop offset={0.72} stopColor="#00d6ab" />
              <stop offset={0.72} stopColor="#00d6ab" />
              <stop offset={0.74} stopColor="#00caa5" />
              <stop offset={0.78} stopColor="#00be9f" />
              <stop offset={0.81} stopColor="#00ba9d" />
              <stop offset={0.85} stopColor="#00b397" />
              <stop offset={0.91} stopColor="#009f86" />
              <stop offset={0.94} stopColor="#00947d" />
              <stop offset={0.95} stopColor="#00947d" stopOpacity={0.98} />
              <stop offset={0.96} stopColor="#00947d" stopOpacity={0.91} />
              <stop offset={0.97} stopColor="#00957e" stopOpacity={0.79} />
              <stop offset={0.98} stopColor="#00967f" stopOpacity={0.62} />
              <stop offset={0.99} stopColor="#009880" stopOpacity={0.41} />
              <stop offset={1} stopColor="#009982" stopOpacity={0.15} />
              <stop offset={1} stopColor="#009b83" stopOpacity={0} />
            </radialGradient>
            <radialGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5radial-gradient"
              id="Device_VKB_T_RUDDER_MK5radial-gradient-6"
              cx={248.03}
              cy={77.02}
              r={9.34}
              fx={248.03}
              fy={77.02}
              gradientTransform="matrix(.95033 .37052 .31306 -.801 74.11 49.53)"
            />
            <radialGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5radial-gradient-2"
              id="Device_VKB_T_RUDDER_MK5radial-gradient-7"
              cx={92.6}
              fx={92.6}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <radialGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5radial-gradient-3"
              id="Device_VKB_T_RUDDER_MK5radial-gradient-8"
              cx={237.18}
              fx={237.18}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <radialGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5radial-gradient-4"
              id="Device_VKB_T_RUDDER_MK5radial-gradient-9"
              cx={243.6}
              fx={243.6}
              gradientTransform="scale(-1 1) rotate(-74.72 -46.536 472.014)"
            />
            <radialGradient
              xlinkHref="#Device_VKB_T_RUDDER_MK5radial-gradient-5"
              id="Device_VKB_T_RUDDER_MK5radial-gradient-10"
              cx={243.53}
              fx={243.53}
              gradientTransform="matrix(-1 0 0 1 580.3 0)"
            />
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-11"
              cx={285.91}
              cy={93.48}
              r={10.34}
              fx={285.91}
              fy={93.48}
              gradientTransform="matrix(-.26724 -.96363 -.96377 .26673 460.81 343.71)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00cfba" />
              <stop offset={0.28} stopColor="#00dfbf" />
              <stop offset={0.37} stopColor="#00e6c1" />
              <stop offset={0.45} stopColor="#00b59a" />
              <stop offset={0.53} stopColor="#00bfa4" />
              <stop offset={0.58} stopColor="#00a58c" />
              <stop offset={0.6} stopColor="#009c84" />
              <stop offset={0.64} stopColor="#009f88" />
              <stop offset={0.65} stopColor="#00a18a" />
              <stop offset={0.76} stopColor="#00c3a6" />
              <stop offset={0.85} stopColor="#00d9b8" />
              <stop offset={0.85} stopColor="#00d6b5" />
              <stop offset={0.95} stopColor="#00ac8e" />
              <stop offset={1} stopColor="#009c7f" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-12"
              cx={252.83}
              cy={180.54}
              r={7.06}
              fx={252.83}
              fy={180.54}
              gradientTransform="matrix(-.26724 -.96363 -.96377 .26673 568.88 375.69)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.2} stopColor="#00ebbf" />
              <stop offset={0.27} stopColor="#00e5bb" />
              <stop offset={0.34} stopColor="#00d7b2" />
              <stop offset={0.41} stopColor="#00c4a6" />
              <stop offset={0.45} stopColor="#00ccae" />
              <stop offset={0.51} stopColor="#00cfb1" />
              <stop offset={0.56} stopColor="#00b59a" />
              <stop offset={0.6} stopColor="#009c84" />
              <stop offset={0.65} stopColor="#009780" />
              <stop offset={0.69} stopColor="#008f7a" />
              <stop offset={0.77} stopColor="#00a990" />
              <stop offset={0.85} stopColor="#00bfa3" />
              <stop offset={0.88} stopColor="#00bb9e" />
              <stop offset={1} stopColor="#00b08e" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-13"
              cx={285.89}
              cy={161.61}
              r={7.21}
              fx={285.89}
              fy={161.61}
              gradientTransform="matrix(-.26724 -.96363 -.96377 .26673 526.46 393.64)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.51} stopColor="#00b59a" />
              <stop offset={0.61} stopColor="#00aa90" />
              <stop offset={0.7} stopColor="#009c84" />
              <stop offset={0.74} stopColor="#009f88" />
              <stop offset={0.75} stopColor="#00a18a" />
              <stop offset={0.8} stopColor="#00c3a6" />
              <stop offset={0.85} stopColor="#00d9b8" />
              <stop offset={0.85} stopColor="#00d6b5" />
              <stop offset={0.95} stopColor="#00ac8e" />
              <stop offset={1} stopColor="#009c7f" />
            </radialGradient>
            <radialGradient
              id="Device_VKB_T_RUDDER_MK5radial-gradient-14"
              cx={294.39}
              cy={161.61}
              r={2.77}
              fx={294.39}
              fy={161.61}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00cca6" />
              <stop offset={0.26} stopColor="#00c6a2" />
              <stop offset={0.59} stopColor="#00b697" />
              <stop offset={0.9} stopColor="#00a188" />
              <stop offset={0.95} stopColor="#009d85" />
              <stop offset={0.96} stopColor="#009c84" />
            </radialGradient>
            <style>
              {
                ".cls-130,.cls-43,.cls-57,.cls-80,.cls-88,.cls-91{stroke-width:0}.cls-43{fill:none}.cls-57{fill:url(#Device_VKB_T_RUDDER_MK5linear-gradient-40)}.cls-80{fill:#004236}.cls-88{fill:#00705b}.cls-91{fill:#00ad8d}.cls-130{fill:url(#Device_VKB_T_RUDDER_MK5linear-gradient-44)}.cls-204{opacity:.79}"
              }
            </style>
          </defs>
          <g id="Device_VKB_T_RUDDER_MK5VKBTRUDDER">
            <path
              d="M233.7 205.64c-.29.25.94.35.94.35l.68 65.8h-1.94l-.83-.96v-64.95l1.15-.25Z"
              className="cls-80"
            />
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath)",
              }}
            >
              <path
                d="M167.27 240.65h71.38v34.82h-72.92v-34.82h1.54z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M160.56 268.37h116.19v5.19H160.56z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M162.92 247.17h116.19v5.19H162.92z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-3)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M163.6 270.27h116.19v4.21H163.6z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-4)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M160.56 270.25h116.19v5.22H160.56z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-5)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-1)",
              }}
            >
              <path
                d="M59.94 348.71h105.88a2.3 2.3 0 0 0 2.3-2.3v-32.66l-.94-80.07a6.396 6.396 0 0 0-6.4-6.32H59.94l-4.05 2.03-2.03 3.29 1.52 95.26.51 8.11 1.01 8.36 3.04 4.31Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_5)",
                  strokeWidth: 0,
                }}
              />
              <g className="cls-204">
                <path
                  d="M52.9 244.18h116.19v3.2H52.9z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-6)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.86 249.17h116.19v3.2H53.86z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-7)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.42 254.6h116.19v3.2H52.42z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-8)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.38 259.59h116.19v3.2H53.38z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-9)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.9 264.27h116.19v3.2H52.9z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-10)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.86 269.25h116.19v3.2H53.86z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-11)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.42 274.69h116.19v3.2H52.42z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-12)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.38 279.67h116.19v3.2H53.38z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-13)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.9 284.49h116.19v3.2H52.9z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-14)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.86 289.48h116.19v3.2H53.86z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-15)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.42 294.91h116.19v3.2H52.42z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-16)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.38 299.9h116.19v3.2H53.38z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-17)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.38 304.81h116.19v4.53H53.38z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-18)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M53.86 345.51h116.19v3.2H53.86z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-19)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.51 344.16H168.7v3.2H52.51z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-20)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M52.51 339.54H168.7v3.2H52.51z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-21)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M171.79 338.96H55.6l.58-5.19h116.19l-.58 5.19z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-22)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M55.31 336.51H171.5v5.19H55.31z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-23)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M51.93 326.55h116.19v5.22H51.93z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-24)",
                    strokeWidth: 0,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-2)",
              }}
            >
              <path
                d="M236.24 0H26.89l-3.31 3.8 176.16 32.07h35.53L236.24 0z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-25)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M245.9 32.94H23.51l1.01-8.83h222.39l-1.01 8.83z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-26)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M250.89 7.98H28.5l.5 5.37h222.38l-.49-5.37z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-27)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M29 1.7h222.39v6.28H29z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-28)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M22.78 23.64h222.39v5.22H22.78z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-29)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M240.1 277.17h110.02v-17.95H238.74v16.08l1.36 1.87z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-30)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M239.22 1.07H349.4v17.81l-112.87-1.86.72-15.95h1.97z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-31)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M239.37 0v17.56l-3.33-.64.49-11.28 1.17-5 1.67-.64z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-32)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M233.7 15.95h121.38v243.27H233.7z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-33)",
                strokeWidth: 0,
              }}
            />
            <path
              d="m238.72 279.93 1.37-2.75-.69-17.95s-2.62 1.18-3.96.59.52 20.68.52 20.68l2.75-.56Z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-34)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M235.58 280.49h2.25c.31 0 .55-.26.52-.56l-1.56-19.15c-.03-.34.24-.64.59-.64h115.94v-2.06H234.76c-.62 0-1.11.52-1.07 1.13l1.36 20.78c.02.27.25.49.52.49Z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-35)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M237.26 15.95 239.37 0h-3.13l-2.54 15.95h3.56z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-36)",
                strokeWidth: 0,
              }}
            />
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-3)",
              }}
            >
              <ellipse
                cx={255.86}
                cy={79.03}
                rx={8.94}
                ry={8.95}
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient)",
                  strokeWidth: 0,
                }}
                transform="rotate(-12.95 255.78 79.007)"
              />
              <path
                d="m252.28 79.66 3.93-6.21c.46-.72 1.31-1.08 2.15-.91 1.86.38 4.99 1.45 6.2 4.46 1.78 4.41-1.56 10.86-1.56 10.86l-10.73-8.2Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-37)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g
              id="rudderPedals_Device_VKB_T_RUDDER"
              className="selected-input-pedals corner-test" onClick={() => {
                sessionStorage.setItem('selectedEditorDeviceButton', 'Pedals');

                //  setSelectedEditorDeviceViewOrientation('Front');

                setSelectedViewerInput('Pedals');
                setEditorPanelTitle('Pedals');
                setViewerPanelTitle('Pedals');


                console.log("pedals")
              }}
            >
              <path
                d="m214.52 254.36.91-.45v-1.56l-.14-9v-5.37l.14-6.14s.44-1.95.49-2.25-3.22-15.24-3.22-15.24-1.47-15.15-1.47-14.9 1.56-93.42 1.56-93.42V78.57l-.93-14.32-2.25-44.27-.59-16.91-.49-1.17H206l-2.85 41.44 2.85 86.53 1.9 115.99 6.61 8.52Z"
                style={{
                  strokeWidth: 0,
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-38)",
                }}
              />
              <path
                d="M198.35 1.7h8.99c.59 0 .99.59.78 1.14l-.57 1.49c-.04.1-.06.2-.06.3V15.49l3.31 53.45v9.16l-1.98 145.01c0 .05 0 .11.01.16l5.5 30.35c.09.51-.3.99-.82.99h-6.21c-.4 0-.74-.28-.82-.67l-6.1-30.48a.875.875 0 0 1-.02-.16v-42.82l1.15-98.87c0-.46-.36-.83-.81-.85l-3.04-.08a.826.826 0 0 1-.81-.84l.66-77.31c0-.46.38-.83.84-.83Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-39)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-4)",
                }}
              >
                <path d="M-2.49 13.43h204.68v6.4H-2.49z" className="cls-57" />
                <path
                  d="M-2.49 66.49h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-41)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M-2.49 26.59h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-42)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M-2.49 33.38h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-43)",
                    strokeWidth: 0,
                  }}
                />
                <path d="M-2.15 19.89h204.68v6.4H-2.15z" className="cls-130" />
                <path
                  d="M-2.49 39.75h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-45)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M-1.27 46.52h204.68v6.4H-1.27z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-46)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M-2.49 52.91h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-47)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M-2.49 59.7h204.68v6.4H-2.49z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-48)",
                    strokeWidth: 0,
                  }}
                />
                <g
                  style={{
                    clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-5)",
                  }}
                >
                  <path
                    d="M202.14 80.66H11.43l-2.22-2.83-2.64-15.8A683.975 683.975 0 0 1 .58 17.14L0 11.37V1.7h199.1l-.95 2.35.09 7.13 3.91 64.21v5.27Z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-49)",
                      strokeWidth: 0,
                    }}
                  />
                  <path d="M-2.49 13.43h204.68v6.4H-2.49z" className="cls-57" />
                  <path
                    d="M-2.49 66.49h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-50)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M-2.49 26.59h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-51)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M-2.49 33.38h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-52)",
                      strokeWidth: 0,
                    }}
                  />
                  <path d="M-2.15 19.89h204.68v6.4H-2.15z" className="cls-130" />
                  <path
                    d="M-2.49 39.75h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-53)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M-1.27 46.52h204.68v6.4H-1.27z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-54)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M-2.49 52.91h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-55)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M-2.49 59.7h204.68v6.4H-2.49z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-56)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <path
                  d="M200.64 80.66H12.16c-.46 0-.9-.21-1.19-.58l-1.53-1.95c-.16-.2-.26-.43-.3-.68L6.57 62.08a693.887 693.887 0 0 1-6-44.99L0 11.45V3.2c0-.83.67-1.51 1.51-1.51h195.35c1.07 0 1.8 1.08 1.4 2.07-.08.19-.11.38-.11.58l.09 6.83 3.9 64.16v3.81c0 .83-.67 1.51-1.51 1.51Z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-2)",
                    opacity: 0.43,
                    strokeWidth: 0,
                  }}
                />
              </g>
              <path
                d="M221.15 252.37h-5.47l-.29-1.97c-.07-.46-.12-.92-.16-1.39l-.42-5.15c-.05-.58-.07-1.16-.07-1.75v-4.36c0-.62.03-1.24.08-1.86l.16-1.83c.15-1.75.52-3.47 1.09-5.13s6.48 0 6.48 0v23.43h-1.41Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-57)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M228.04 221.09h-3.71c-.54 0-1.02.36-1.17.89l-.6 2.19c-.46 1.68-.7 3.42-.71 5.16l-.15 22.25c0 1.1.08 2.2.25 3.29l.45 2.81c.09.59.6 1.02 1.19 1.02h5.99v-37.61h-1.54Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-58)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m224.03 170.86.36 4.92 9.74 2.45 2.76-3.63-1.15-5.17s-9.32-.43-9.49-.6-2.56.53-2.56.53l.34 1.5Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-59)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M233.72 205.5s-5.26-1.18-5.26.16v57.11l1.12 8.84v1.96h5.05l-.14-2.1-1.12-8.7v-52.62l.35-4.65Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-60)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m249.73 119.63-.53 2.29-8.59-1.62.53-2.64 5.05-1.98 3.54 3.95z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-61)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m251.38 110.11-1.23 4.56-4.22 1.47-2.78-2.55 1.73-5.75 5.7-1.2.8 3.47z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M265.21 91.45v6.64l-.98 2.43a7.384 7.384 0 0 1-2.26 3.03l-8.52 6.79c-.13.11-.31.14-.47.08l-2.65-.92 14.88-18.05Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-62)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m251.26 119.83-2.12-.09-2.77-1.34c-.18-.09-.37-.14-.57-.16l-5.52-.49-.24-1.08 6.73-1 4.41 2.48.09 1.68Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-3)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-6)",
                }}
              >
                <path
                  d="m243.43 106.92-3.29-9.17c-.51-1.43-.77-2.94-.77-4.46v-.58c0-5.28 3.07-10.2 7.98-12.14a13.02 13.02 0 0 1 7.62-.59c5.59 1.24 9.54 5.89 10.15 11.28.24 2.08-.17 4.18-.99 6.1l-.03.07c-.95 2.23-2.51 4.15-4.48 5.54l-8.61 6.05c-.44.31-.98.41-1.5.28l-4.81-1.22c-.59-.15-1.06-.58-1.27-1.15Z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-63)",
                    strokeWidth: 0,
                  }}
                />
                <ellipse
                  cx={252.07}
                  cy={91.97}
                  rx={10.02}
                  ry={9.83}
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-4)",
                    strokeWidth: 0,
                  }}
                  transform="rotate(-15.28 252.033 91.94)"
                />
                <circle
                  cx={252}
                  cy={92.16}
                  r={4.93}
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-5)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <path
                d="m241.12 112.44 4.99.24c.44.02.87.12 1.27.3l4.86 2.14c.08.04.13.13.11.22l-1.09 4.5-4.27-2.19a3.62 3.62 0 0 0-1.4-.39l-5.38-.35c-.12 0-.2-.12-.17-.23l.89-4.08c.02-.09.1-.15.2-.15Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-64)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-7)",
                }}
              >
                <path
                  d="M237.06 118.82c3.09.09 11.65.67 15.96 4.48.43.38.62.97.46 1.53l-13.7 49.11a1.47 1.47 0 0 1-1.89 1c-3.19-1.07-10.79-3.56-14.96-4.29a1.474 1.474 0 0 1-1.16-1.85l13.83-48.9c.18-.65.78-1.09 1.45-1.08Z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-65)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M199.66 141.95h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-66)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 229.786 142.506)"
                />
                <path
                  d="M201.87 142.71h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-67)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 232.004 143.264)"
                />
                <path
                  d="M203.78 143.25h60.27v1.11h-60.27z"
                  style={{
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-68)",
                  }}
                  transform="rotate(-74.37 233.914 143.8)"
                />
                <path
                  d="M205.84 143.99h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-69)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 235.96 144.552)"
                />
                <path
                  d="M207.75 144.53h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-70)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 237.876 145.092)"
                />
                <path
                  d="M209.79 145.28h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-71)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 239.915 145.84)"
                />
                <path
                  d="M211.7 145.82h60.27v1.11H211.7z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-72)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 241.825 146.374)"
                />
                <path
                  d="M214.01 146.65h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-73)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 244.13 147.21)"
                />
                <path
                  d="M215.92 147.19h60.27v1.11h-60.27z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-74)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-74.37 246.04 147.744)"
                />
              </g>
              <path
                d="M228.49 212.83v6.48h-7.8l.94-7.31 6.14-1.79.72 2.62z"
                className="cls-91"
              />
              <path
                d="m225.42 179.79-2.73 9 4.9 3.66 3.89-11.52-4.4-3.02-1.66 1.88z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m223.74 175.79-.92 3.47c-.05.19.07.39.27.43l5.51 1.11h.04l5.32 1.71c.19.06.39-.05.44-.24l.98-3.47a.357.357 0 0 0-.22-.43l-5.12-1.73s-.03 0-.05-.01l-5.85-1.12c-.18-.03-.36.08-.4.25Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-75)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m226.8 201.29.97 2.89-.69 7.14-6.07 4.91 4.58-16.95 1.21 2.01z"
                className="cls-88"
              />
              <path
                d="M217.82 199.28s-1.45 2-4.14 2l-1.25 1.24v9.47h5.8l-.41-12.72Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-76)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M220.72 219.86c-1.67.17-5.61.23-7.63-2.71-.3-.44-.39-1-.23-1.51l8.07-26.55a.93.93 0 0 1 1.1-.64c1.41.32 4.79 1.61 6.48 2.28.57.22.88.84.71 1.44l-7.51 26.88c-.13.45-.51.77-.98.82Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_4)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M211.57 201.29h2.11V212h-3.15v-10.71h1.04z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-77)",
                  strokeWidth: 0,
                }}
              />
              <rect
                width={2.08}
                height={15.03}
                x={209.5}
                y={199.81}
                rx={0.51}
                ry={0.51}
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_6)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M227.37 201.85c-.18 1.3-.53 4.38-.57 4.75V212.16c0 .37.3.66.66.66h3.67c.37 0 .66-.3.66-.66v-5.55l.33-4.63a.665.665 0 0 0-.66-.71h-3.43c-.33 0-.61.24-.66.57Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-78)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M355.07 205.64c.29.25-.94.35-.94.35l-.68 65.8h1.94l.83-.96v-64.95l-1.15-.25Z"
              className="cls-80"
            />
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-8)",
              }}
            >
              <path
                d="M421.5 240.65h-71.38v34.82h72.92v-34.82h-1.54z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-79)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M312.02 268.37h116.19v5.19H312.02z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-80)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M309.66 247.17h116.19v5.19H309.66z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-81)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M308.98 270.27h116.19v4.21H308.98z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-82)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M312.02 270.25h116.19v5.22H312.02z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-83)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-9)",
              }}
            >
              <path
                d="M528.83 348.71H422.95a2.3 2.3 0 0 1-2.3-2.3v-32.66l.94-80.07c.04-3.5 2.89-6.32 6.4-6.32h100.84l4.05 2.03 2.03 3.29-1.52 95.26-.51 8.11-1.01 8.36-3.04 4.31Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_5-2)",
                  strokeWidth: 0,
                }}
              />
              <g className="cls-204">
                <path
                  d="M419.68 244.18h116.19v3.2H419.68z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-84)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M418.71 249.17H534.9v3.2H418.71z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-85)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.16 254.6h116.19v3.2H420.16z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-86)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.2 259.59h116.19v3.2H419.2z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-87)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.68 264.27h116.19v3.2H419.68z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-88)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M418.71 269.25H534.9v3.2H418.71z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-89)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.16 274.69h116.19v3.2H420.16z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-90)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.2 279.67h116.19v3.2H419.2z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-91)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.68 284.49h116.19v3.2H419.68z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-92)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M418.71 289.48H534.9v3.2H418.71z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-93)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.16 294.91h116.19v3.2H420.16z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-94)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.2 299.9h116.19v3.2H419.2z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-95)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M419.2 304.81h116.19v4.53H419.2z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-96)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M418.71 345.51H534.9v3.2H418.71z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-97)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.06 344.16h116.19v3.2H420.06z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-98)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.06 339.54h116.19v3.2H420.06z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-99)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M416.98 338.96h116.19l-.58-5.19H416.4l.58 5.19z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-100)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M417.27 336.51h116.19v5.19H417.27z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-101)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M420.64 326.55h116.19v5.22H420.64z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-102)",
                    strokeWidth: 0,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-10)",
              }}
            >
              <path
                d="M352.53 0h209.35l3.31 3.8-176.16 32.07H353.5L352.53 0z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-103)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M342.87 32.94h222.39l-1.01-8.83H341.86l1.01 8.83z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-104)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M337.88 7.98h222.39l-.5 5.37H337.39l.49-5.37z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-105)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M337.39 1.7h222.39v6.28H337.39z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-106)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M343.6 23.64h222.39v5.22H343.6z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-107)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <path
              d="M349.55 1.07h-50.82v17.81l53.51-1.86-.72-15.95h-1.97z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-108)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M349.4 0v17.56l3.33-.64-.49-11.28-1.17-5L349.4 0z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-109)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M298.73 15.95h56.34v243.27h-56.34z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-110)",
                strokeWidth: 0,
              }}
            />
            <path
              d="m350.05 279.93-1.37-2.75.69-17.95s2.62 1.18 3.96.59-.52 20.68-.52 20.68l-2.75-.56Z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-111)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M353.19 280.49h-2.25c-.31 0-.55-.26-.52-.56l1.56-19.15a.591.591 0 0 0-.59-.64h-52.77v-2.06H354c.62 0 1.11.52 1.07 1.13l-1.36 20.78c-.02.27-.25.49-.52.49Z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-112)",
                strokeWidth: 0,
              }}
            />
            <path
              d="M351.51 15.95 349.4 0h3.13l2.54 15.95h-3.56z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-113)",
                strokeWidth: 0,
              }}
            />
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-11)",
              }}
            >
              <ellipse
                cx={332.92}
                cy={79.03}
                rx={8.95}
                ry={8.94}
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-6)",
                  strokeWidth: 0,
                }}
                transform="rotate(-77.05 332.928 79.018)"
              />
              <path
                d="m336.49 79.66-3.93-6.21a2.059 2.059 0 0 0-2.15-.91c-1.86.38-4.99 1.45-6.2 4.46-1.78 4.41 1.56 10.86 1.56 10.86l10.73-8.2Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-114)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g data-name="Device_VKB_T_RUDDER_MK5input0"
              id="rudderPedals_Device_VKB_T_RUDDER"
              className="selected-input-pedals corner-test" onClick={() => {
                sessionStorage.setItem('selectedEditorDeviceButton', 'Pedals');
                sessionStorage.setItem('selectedEditorDeviceSelectedButtonAxisOnly', 'true');

                setSelectedViewerInput('Pedals');
                setEditorPanelTitle('Pedals');

                console.log("Pedals")
              }}

            >
              <path
                d="m374.25 254.36-.91-.45v-1.56l.14-9v-5.37l-.14-6.14s-.44-1.95-.49-2.25 3.22-15.24 3.22-15.24 1.47-15.15 1.47-14.9-1.56-93.42-1.56-93.42V78.57l.93-14.32 2.25-44.27.59-16.91.49-1.17h2.53l2.85 41.44-2.85 86.53-1.9 115.99-6.61 8.52Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-115)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M390.43 1.7h-8.99c-.59 0-.99.59-.78 1.14l.57 1.49c.04.1.06.2.06.3V15.49l-3.31 53.45v9.16l1.98 145.01c0 .05 0 .11-.01.16l-5.5 30.35c-.09.51.3.99.82.99h6.21c.4 0 .74-.28.82-.67l6.1-30.48c.01-.05.02-.11.02-.16v-42.82l-1.15-98.87c0-.46.36-.83.81-.85l3.04-.08c.46-.01.82-.39.81-.84l-.66-77.31c0-.46-.38-.83-.84-.83Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-116)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-12)",
                }}
              >
                <path
                  d="M386.58 13.43h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-117)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 66.49h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-118)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 26.59h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-119)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 33.38h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-120)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.23 19.89h204.68v6.4H386.23z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-121)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 39.75h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-122)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M385.36 46.52h204.68v6.4H385.36z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-123)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 52.91h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-124)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M386.58 59.7h204.68v6.4H386.58z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-125)",
                    strokeWidth: 0,
                  }}
                />
                <g
                  style={{
                    clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-13)",
                  }}
                >
                  <path
                    d="M386.63 80.66h190.71l2.22-2.83 2.64-15.8a684.88 684.88 0 0 0 5.99-44.89l.58-5.77V1.7h-199.1l.95 2.35-.09 7.13-3.91 64.21v5.27Z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-126)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 13.43h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-127)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 66.49h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-128)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 26.59h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-129)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 33.38h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-130)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.23 19.89h204.68v6.4H386.23z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-131)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 39.75h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-132)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M385.36 46.52h204.68v6.4H385.36z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-133)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 52.91h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-134)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M386.58 59.7h204.68v6.4H386.58z"
                    style={{
                      fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-135)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <path
                  d="M388.13 80.66H576.6c.46 0 .9-.21 1.19-.58l1.53-1.95c.16-.2.26-.43.3-.68l2.57-15.37c2.5-14.93 4.5-29.93 6.01-44.99l.56-5.64V3.2c0-.83-.67-1.51-1.51-1.51H391.9c-1.07 0-1.8 1.08-1.4 2.07.08.19.11.38.11.58l-.09 6.83-3.9 64.16v3.81c0 .83.67 1.51 1.51 1.51Z"
                  style={{
                    opacity: 0.43,
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-7)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <path
                d="M367.62 252.37h5.47l.29-1.97c.07-.46.12-.92.16-1.39l.42-5.15c.05-.58.07-1.16.07-1.75v-4.36c0-.62-.03-1.24-.08-1.86l-.16-1.83c-.15-1.75-.52-3.47-1.09-5.13s-6.48 0-6.48 0v23.43h1.41Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-136)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M360.73 221.09h3.71c.54 0 1.02.36 1.17.89l.6 2.19c.46 1.68.7 3.42.71 5.16l.15 22.25c0 1.1-.08 2.2-.25 3.29l-.45 2.81c-.09.59-.6 1.02-1.19 1.02h-5.99v-37.61h1.54Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-137)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m364.74 170.86-.36 4.92-9.74 2.45-2.76-3.63 1.15-5.17s9.32-.43 9.49-.6 2.56.53 2.56.53l-.34 1.5Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-138)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M355.05 205.5s5.26-1.18 5.26.16v57.11l-1.12 8.84v1.96h-5.05l.14-2.1 1.12-8.7v-52.62l-.35-4.65Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-139)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m339.04 119.63.53 2.29 8.59-1.62-.53-2.64-5.05-1.98-3.54 3.95z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-140)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m337.39 110.11 1.23 4.56 4.22 1.47 2.78-2.55-1.73-5.75-5.7-1.2-.8 3.47z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-3)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M323.56 91.45v6.64l.98 2.43a7.384 7.384 0 0 0 2.26 3.03l8.52 6.79c.13.11.31.14.47.08l2.65-.92-14.88-18.05Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-141)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m337.51 119.83 2.12-.09 2.77-1.34c.18-.09.37-.14.57-.16l5.52-.49.24-1.08-6.73-1-4.41 2.48-.09 1.68Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-8)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-14)",
                }}
              >
                <path
                  d="m345.34 106.92 3.29-9.17c.51-1.43.77-2.94.77-4.46v-.58c0-5.28-3.07-10.2-7.98-12.14a13.02 13.02 0 0 0-7.62-.59c-5.59 1.24-9.54 5.89-10.15 11.28-.24 2.08.17 4.18.99 6.1l.03.07c.95 2.23 2.51 4.15 4.48 5.54l8.61 6.05c.44.31.98.41 1.5.28l4.81-1.22c.59-.15 1.06-.58 1.27-1.15Z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-142)",
                    strokeWidth: 0,
                  }}
                />
                <ellipse
                  cx={336.7}
                  cy={91.97}
                  rx={9.83}
                  ry={10.02}
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-9)",
                    strokeWidth: 0,
                  }}
                  transform="rotate(-74.72 336.706 91.962)"
                />
                <circle
                  cx={336.77}
                  cy={92.16}
                  r={4.93}
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-10)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <path
                d="m347.65 112.44-4.99.24c-.44.02-.87.12-1.27.3l-4.86 2.14c-.08.04-.13.13-.11.22l1.09 4.5 4.27-2.19c.44-.22.91-.36 1.4-.39l5.38-.35c.12 0 .2-.12.17-.23l-.89-4.08c-.02-.09-.1-.15-.2-.15Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-143)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-15)",
                }}
              >
                <path
                  d="M351.71 118.82c-3.09.09-11.65.67-15.96 4.48-.43.38-.62.97-.46 1.53l13.7 49.11a1.47 1.47 0 0 0 1.89 1c3.19-1.07 10.79-3.56 14.96-4.29.86-.15 1.39-1.01 1.16-1.85l-13.83-48.9a1.48 1.48 0 0 0-1.45-1.08Z"
                  style={{
                    fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-144)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M358.42 112.37h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-145)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 359.026 142.512)"
                />
                <path
                  d="M356.21 113.13h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-146)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 356.804 143.284)"
                />
                <path
                  d="M354.3 113.67h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-147)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 354.914 143.804)"
                />
                <path
                  d="M352.24 114.42h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-148)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 352.843 144.559)"
                />
                <path
                  d="M350.33 114.95h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-149)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 350.948 145.115)"
                />
                <path
                  d="M348.29 115.71h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-150)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 348.882 145.834)"
                />
                <path
                  d="M346.38 116.24h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-151)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 346.987 146.39)"
                />
                <path
                  d="M344.08 117.07h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-152)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 344.683 147.224)"
                />
                <path
                  d="M342.17 117.61h1.11v60.27h-1.11z"
                  style={{
                    stroke: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-153)",
                    strokeMiterlimit: 10,
                    strokeWidth: ".15px",
                    fill: "none",
                  }}
                  transform="rotate(-15.63 342.756 147.74)"
                />
              </g>
              <path
                d="M360.28 212.83v6.48h7.8l-.94-7.31-6.14-1.79-.72 2.62z"
                className="cls-91"
              />
              <path
                d="m363.35 179.79 2.73 9-4.9 3.66-3.89-11.52 4.4-3.02 1.66 1.88z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_2-4)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m365.03 175.79.92 3.47a.35.35 0 0 1-.27.43l-5.51 1.11h-.04l-5.32 1.71a.346.346 0 0 1-.44-.24l-.98-3.47c-.05-.18.05-.37.22-.43l5.12-1.73s.03 0 .05-.01l5.85-1.12c.18-.03.36.08.4.25Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-154)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m361.98 201.29-.98 2.89.69 7.14 6.07 4.91-4.58-16.95-1.2 2.01z"
                className="cls-88"
              />
              <path
                d="M370.95 199.28s1.45 2 4.14 2l1.25 1.24v9.47h-5.8l.41-12.72Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-155)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M368.05 219.86c1.67.17 5.61.23 7.63-2.71.3-.44.39-1 .23-1.51l-8.07-26.55a.93.93 0 0 0-1.1-.64c-1.41.32-4.79 1.61-6.48 2.28-.57.22-.88.84-.71 1.44l7.51 26.88c.13.45.51.77.98.82Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_4-2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M377.2 201.29h-2.11V212h3.15v-10.71h-1.04z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-156)",
                  strokeWidth: 0,
                }}
              />
              <rect
                width={2.08}
                height={15.03}
                x={377.2}
                y={199.81}
                rx={0.51}
                ry={0.51}
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5New_Gradient_Swatch_copy_6-2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M361.4 201.85c.18 1.3.53 4.38.57 4.75V212.16c0 .37-.3.66-.66.66h-3.67a.66.66 0 0 1-.66-.66v-5.55l-.33-4.63c-.03-.38.28-.71.66-.71h3.43c.33 0 .61.24.66.57Z"
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-157)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <ellipse
              cx={294.39}
              cy={93.48}
              rx={10.24}
              ry={10.42}
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-11)",
                strokeWidth: 0,
              }}
              transform="rotate(-74.51 294.388 93.481)"
            />
            <ellipse
              cx={327.4}
              cy={180.52}
              rx={6.99}
              ry={7.11}
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-12)",
                strokeWidth: 0,
              }}
              transform="rotate(-74.51 327.397 180.516)"
            />
            <g
              style={{
                clipPath: "url(#Device_VKB_T_RUDDER_MK5clippath-16)",
              }}
            >
              <circle
                cx={340.56}
                cy={179.66}
                r={4.14}
                style={{
                  fill: "url(#Device_VKB_T_RUDDER_MK5linear-gradient-158)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M342.03 178.05c-.11.63-.45 1.19-.96 1.57-.79.59-1.73.91-2.72.94-1.33.03-3.06.05-3.12-.04-.1-.14 0-6.59 0-7s5.53-1.01 5.53-1.01a7.41 7.41 0 0 1 1.27 5.55Z"
                className="cls-80"
              />
            </g>
            <ellipse
              cx={294.39}
              cy={161.61}
              rx={7.14}
              ry={7.26}
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-13)",
                strokeWidth: 0,
              }}
              transform="rotate(-74.51 294.388 161.605)"
            />
            <path
              d="M296.21 158.18h-3.66a.26.26 0 0 0-.22.13l-1.83 3.17c-.05.08-.05.18 0 .25l1.83 3.17c.05.08.13.13.22.13h3.66c.09 0 .17-.05.22-.13l1.83-3.17c.05-.08.05-.18 0-.25l-1.83-3.17a.26.26 0 0 0-.22-.13Z"
              style={{
                fill: "#008c72",
                strokeWidth: 0,
              }}
            />
            <path
              d="M295.64 159.01h-2.52c-.15 0-.29.08-.36.21l-1.26 2.18c-.07.13-.07.29 0 .42l1.26 2.18c.07.13.21.21.36.21h2.52c.15 0 .29-.08.36-.21l1.26-2.18c.07-.13.07-.29 0-.42l-1.26-2.18a.408.408 0 0 0-.36-.21Z"
              style={{
                fill: "url(#Device_VKB_T_RUDDER_MK5radial-gradient-14)",
                strokeWidth: 0,
              }}
            />
          </g>
        </svg>

      </div>

    </>
  )
}

export default Device_VKB_T_RUDDER_MK5




