"use client";
import { Tooltip } from 'react-tooltip'
import InputPopover from '@components/generic/InputPopover.jsx'

import { OverlayPanel } from 'primereact/overlaypanel';
import { useContext } from 'react';
import { SelectContext, EditorPanelTitleContext,InputViewerInputTypeContext, SelectedEditorDeviceViewOrientationContext, ViewerPanelTitleContext } from '@components/Provider.jsx'
import React from 'react'
import { Button } from 'primereact/button';
import EditIcon from '@components/generic/Icons/EditIcon.svg'
import ViewIcon from '@components/generic/Icons/ViewIcon.svg'
import Spacer from '@components/generic/Spacer.jsx'
const Device_VKB_SpaceEvo = (props) => {
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
  const { viewerPanelTitle, setViewerPanelTitle } = useContext(ViewerPanelTitleContext)
  const { inputViewerInputType, setInputViewerInputType } = useContext(InputViewerInputTypeContext);

  const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);

  switch (selectedEditorDeviceViewOrientation) {
    case "Front":
      return (
        <>

          <InputPopover InputId={"16-20"} InputName={"CHIP STICK"} TargetId={"#input5_Device_VKB_GLADIATOR_NXT_EVO_LEFT"} />
          <InputPopover InputId={"11-15"} InputName={"PILL STICK"} TargetId={"#input1_Device_VKB_GLADIATOR_NXT_EVO_LEFT"} />
          <InputPopover InputId={"8-way POV"} InputName={"HAT STICK"} TargetId={"#input2_Device_VKB_GLADIATOR_NXT_EVO_LEFT"} />
          <InputPopover InputId={"6-10"} InputName={"CIRCLE STICK"} TargetId={"#input3_Device_VKB_GLADIATOR_NXT_EVO_LEFT"} />
          <InputPopover InputId={"3"} InputName={"RED BUTTON"} TargetId={"#input4_Device_VKB_GLADIATOR_NXT_EVO_LEFT"} />

          <div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="Layer_2"
              viewBox="0 0 259.11 545.61"
              {...props}
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1={0}
                  x2={251.2}
                  y1={287.52}
                  y2={287.52}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00d1b2" stopOpacity={0.5} />
                  <stop offset={0.1} stopColor="#00ccae" stopOpacity={0.48} />
                  <stop offset={0.2} stopColor="#00c0a4" stopOpacity={0.42} />
                  <stop offset={0.31} stopColor="#00ac94" stopOpacity={0.32} />
                  <stop offset={0.41} stopColor="#00907d" stopOpacity={0.17} />
                  <stop offset={0.52} stopColor="#006e62" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1={0}
                  x2={225.86}
                  y1={356.32}
                  y2={356.32}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.4} stopColor="#006e62" stopOpacity={0} />
                  <stop offset={0.41} stopColor="#00796a" stopOpacity={0.02} />
                  <stop offset={0.42} stopColor="#00a08a" stopOpacity={0.1} />
                  <stop offset={0.45} stopColor="#00bca1" stopOpacity={0.16} />
                  <stop offset={0.48} stopColor="#00ccae" stopOpacity={0.19} />
                  <stop offset={0.58} stopColor="#00d1b2" stopOpacity={0.2} />
                  <stop offset={0.67} stopColor="#00c0a4" stopOpacity={0.2} />
                  <stop offset={0.73} stopColor="#008b7a" stopOpacity={0.22} />
                  <stop offset={0.75} stopColor="#006e62" stopOpacity={0.22} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1={130.07}
                  x2={130.07}
                  y1={183.49}
                  y2={146.14}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#006e62" stopOpacity={0.5} />
                  <stop offset={0.22} stopColor="#003029" stopOpacity={0.5} />
                  <stop offset={0.44} stopColor="#00423a" stopOpacity={0.35} />
                  <stop offset={0.7} stopColor="#006e62" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1={205.08}
                  x2={92.03}
                  y1={15.79}
                  y2={173.17}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.05} stopColor="#006e62" />
                  <stop offset={0.08} stopColor="#007265" />
                  <stop offset={0.12} stopColor="#008070" />
                  <stop offset={0.16} stopColor="#009783" />
                  <stop offset={0.2} stopColor="#00b89c" />
                  <stop offset={0.23} stopColor="#00d6b4" />
                  <stop offset={0.52} stopColor="#006e62" />
                  <stop offset={0.55} stopColor="#007467" />
                  <stop offset={0.6} stopColor="#008777" />
                  <stop offset={0.65} stopColor="#00a790" />
                  <stop offset={0.71} stopColor="#00d2b3" />
                  <stop offset={0.75} stopColor="#00f0cc" />
                  <stop offset={0.81} stopColor="#00b99f" />
                  <stop offset={0.86} stopColor="#00907d" />
                  <stop offset={0.9} stopColor="#007769" />
                  <stop offset={0.92} stopColor="#006e62" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-5"
                  x1={175.8}
                  x2={251.04}
                  y1={153.41}
                  y2={150.28}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#007d6a" stopOpacity={0} />
                  <stop offset={0} stopColor="#003a31" stopOpacity={0.11} />
                  <stop offset={0.03} stopOpacity={0.2} />
                  <stop offset={0.04} stopColor="#001916" stopOpacity={0.32} />
                  <stop offset={0.06} stopColor="#002b24" stopOpacity={0.4} />
                  <stop offset={0.1} stopColor="#003029" stopOpacity={0.42} />
                  <stop offset={0.15} stopColor="#00594e" stopOpacity={0.34} />
                  <stop offset={0.22} stopColor="#006e62" stopOpacity={0.3} />
                  <stop offset={0.55} stopColor="#00f0cc" stopOpacity={0.5} />
                  <stop offset={0.63} stopColor="#00f0cc" stopOpacity={0.48} />
                  <stop offset={0.71} stopColor="#00f0cc" stopOpacity={0.43} />
                  <stop offset={0.8} stopColor="#00f0cc" stopOpacity={0.35} />
                  <stop offset={0.88} stopColor="#00f0cc" stopOpacity={0.23} />
                  <stop offset={0.96} stopColor="#00f0cc" stopOpacity={0.08} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1={183.52}
                  x2={247.44}
                  y1={165.69}
                  y2={129.96}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#003029" stopOpacity={0} />
                  <stop offset={0.45} stopColor="#003029" stopOpacity={0.6} />
                  <stop offset={1} stopColor="#003029" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-7"
                  x1={158.5}
                  x2={253.26}
                  y1={131.75}
                  y2={131.75}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#003029" stopOpacity={0} />
                  <stop offset={0.07} stopColor="#00362e" stopOpacity={0.02} />
                  <stop offset={0.14} stopColor="#004a3f" stopOpacity={0.08} />
                  <stop offset={0.23} stopColor="#006a5a" stopOpacity={0.18} />
                  <stop offset={0.32} stopColor="#009680" stopOpacity={0.32} />
                  <stop offset={0.41} stopColor="#00cfb0" stopOpacity={0.5} />
                  <stop offset={0.45} stopColor="#00f0cc" stopOpacity={0.6} />
                  <stop offset={1} stopColor="#003029" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-8"
                  x1={89.63}
                  x2={229.26}
                  y1={156.28}
                  y2={16.65}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0} />
                  <stop offset={0.6} stopColor="#00a992" stopOpacity={0} />
                  <stop offset={0.7} stopColor="#005952" stopOpacity={0} />
                  <stop offset={0.85} stopColor="#0b4847" stopOpacity={0.47} />
                  <stop offset={1} stopColor="#18353b" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-9"
                  x1={37.96}
                  x2={259.11}
                  y1={77.21}
                  y2={77.21}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#18353b" />
                  <stop offset={0.04} stopColor="#123d40" />
                  <stop offset={0.19} stopColor="#005952" />
                  <stop offset={0.2} stopColor="#005e56" stopOpacity={0.96} />
                  <stop offset={0.25} stopColor="#008b7b" stopOpacity={0.66} />
                  <stop offset={0.32} stopColor="#00b098" stopOpacity={0.42} />
                  <stop offset={0.4} stopColor="#00cdaf" stopOpacity={0.23} />
                  <stop offset={0.49} stopColor="#00e1c0" stopOpacity={0.1} />
                  <stop offset={0.63} stopColor="#00ecc9" stopOpacity={0.02} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-10"
                  x1={225.7}
                  x2={208.82}
                  y1={157.99}
                  y2={128.75}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#003029" />
                  <stop offset={0.41} stopColor="#00594c" stopOpacity={0.85} />
                  <stop offset={0.9} stopColor="#00d0b1" stopOpacity={0.41} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-11"
                  x1={200.55}
                  x2={232.4}
                  y1={139.8}
                  y2={139.8}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#006e62" />
                  <stop offset={1} stopColor="#003029" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-12"
                  x1={118.63}
                  x2={181.43}
                  y1={31.6}
                  y2={31.6}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#006e62" stopOpacity={0.2} />
                  <stop offset={0.24} stopColor="#007063" stopOpacity={0.21} />
                  <stop offset={0.32} stopColor="#00786a" stopOpacity={0.23} />
                  <stop offset={0.39} stopColor="#008675" stopOpacity={0.27} />
                  <stop offset={0.43} stopColor="#009a86" stopOpacity={0.34} />
                  <stop offset={0.48} stopColor="#00b49b" stopOpacity={0.41} />
                  <stop offset={0.51} stopColor="#00d1b2" stopOpacity={0.5} />
                  <stop offset={0.54} stopColor="#00b79d" stopOpacity={0.42} />
                  <stop offset={0.59} stopColor="#009c87" stopOpacity={0.34} />
                  <stop offset={0.64} stopColor="#008776" stopOpacity={0.28} />
                  <stop offset={0.7} stopColor="#00786a" stopOpacity={0.23} />
                  <stop offset={0.79} stopColor="#007063" stopOpacity={0.21} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-13"
                  x1={150.03}
                  x2={150.03}
                  y1={98.22}
                  y2={21.87}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#006e62" stopOpacity={0.5} />
                  <stop offset={0.05} stopColor="#087" stopOpacity={0.53} />
                  <stop offset={0.16} stopColor="#00cbad" stopOpacity={0.59} />
                  <stop offset={0.17} stopColor="#00d1b2" stopOpacity={0.6} />
                  <stop offset={0.21} stopColor="#00c7aa" stopOpacity={0.59} />
                  <stop offset={0.4} stopColor="#00a08a" stopOpacity={0.55} />
                  <stop offset={0.6} stopColor="#008474" stopOpacity={0.52} />
                  <stop offset={0.8} stopColor="#007366" stopOpacity={0.51} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0.5} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-14"
                  x1={119.87}
                  x2={176.78}
                  y1={14.94}
                  y2={71.85}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00d1b2" stopOpacity={0.7} />
                  <stop offset={0.07} stopColor="#00c1a5" stopOpacity={0.59} />
                  <stop offset={0.2} stopColor="#00a890" stopOpacity={0.41} />
                  <stop offset={0.34} stopColor="#00937f" stopOpacity={0.26} />
                  <stop offset={0.48} stopColor="#008272" stopOpacity={0.15} />
                  <stop offset={0.64} stopColor="#007769" stopOpacity={0.06} />
                  <stop offset={0.8} stopColor="#007063" stopOpacity={0.02} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-15"
                  x1={139.3}
                  x2={144.33}
                  y1={31.13}
                  y2={22.42}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0.5} />
                  <stop offset={0.36} stopColor="#00ecc8" stopOpacity={0.5} />
                  <stop offset={0.48} stopColor="#00debd" stopOpacity={0.5} />
                  <stop offset={0.54} stopColor="#00d1b2" stopOpacity={0.5} />
                  <stop offset={0.64} stopColor="#00d6b6" stopOpacity={0.41} />
                  <stop offset={0.84} stopColor="#00e3c1" stopOpacity={0.19} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-16"
                  x1={158.78}
                  x2={163.12}
                  y1={26.77}
                  y2={26.77}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0.5} />
                  <stop offset={0.44} stopColor="#00ecc8" stopOpacity={0.5} />
                  <stop offset={0.59} stopColor="#00debd" stopOpacity={0.5} />
                  <stop offset={0.67} stopColor="#00d1b2" stopOpacity={0.5} />
                  <stop offset={0.8} stopColor="#00d1b2" stopOpacity={0.49} />
                  <stop offset={0.86} stopColor="#00d3b4" stopOpacity={0.46} />
                  <stop offset={0.9} stopColor="#00d7b7" stopOpacity={0.4} />
                  <stop offset={0.93} stopColor="#00dcbb" stopOpacity={0.31} />
                  <stop offset={0.96} stopColor="#00e3c1" stopOpacity={0.2} />
                  <stop offset={0.99} stopColor="#00ebc8" stopOpacity={0.07} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-17"
                  x1={138.44}
                  x2={166.59}
                  y1={154.33}
                  y2={94.72}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00d1b2" />
                  <stop offset={0.22} stopColor="#00cdaf" />
                  <stop offset={0.41} stopColor="#00c2a6" />
                  <stop offset={0.6} stopColor="#00af97" />
                  <stop offset={0.79} stopColor="#009682" />
                  <stop offset={0.97} stopColor="#007467" />
                  <stop offset={1} stopColor="#006e62" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-18"
                  x1={201.68}
                  x2={212.92}
                  y1={283.36}
                  y2={292.29}
                  gradientTransform="matrix(.57026 1.02162 -.81843 .70858 324.57 -127.22)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0.1} />
                  <stop offset={0.1} stopColor="#00e8c5" stopOpacity={0.26} />
                  <stop offset={0.32} stopColor="#00d6b6" stopOpacity={0.68} />
                  <stop offset={0.39} stopColor="#00d1b2" stopOpacity={0.8} />
                  <stop offset={0.51} stopColor="#00b198" stopOpacity={0.54} />
                  <stop offset={0.75} stopColor="#006e62" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-19"
                  x1={193.96}
                  x2={218.11}
                  y1={284.73}
                  y2={300.45}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0.1} />
                  <stop offset={0.14} stopColor="#00e8c5" stopOpacity={0.26} />
                  <stop offset={0.43} stopColor="#00d6b6" stopOpacity={0.68} />
                  <stop offset={0.52} stopColor="#00d1b2" stopOpacity={0.8} />
                  <stop offset={0.68} stopColor="#00b198" stopOpacity={0.54} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  xlinkHref="#linear-gradient-18"
                  id="linear-gradient-20"
                  x1={201.5}
                  x2={232.27}
                  y1={274.19}
                  y2={294.67}
                  gradientTransform="rotate(57.08 211.229 280.663)"
                />
                <linearGradient
                  id="linear-gradient-21"
                  x1={100.06}
                  x2={100.06}
                  y1={75.23}
                  y2={70.09}
                  gradientTransform="matrix(.94 -.0036 -.0001 1 4.75 .3)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#18203b" />
                  <stop offset={0.14} stopColor="#106778" />
                  <stop offset={0.21} stopColor="#0d8391" />
                  <stop offset={0.25} stopColor="#0a9a9d" />
                  <stop offset={0.3} stopColor="#07b4ab" />
                  <stop offset={0.36} stopColor="#04cab7" />
                  <stop offset={0.43} stopColor="#02dbc0" />
                  <stop offset={0.52} stopColor="#01e7c7" />
                  <stop offset={0.65} stopColor="#00eeca" />
                  <stop offset={1} stopColor="#00f0cc" />
                </linearGradient>
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-22"
                  x1={100.06}
                  x2={100.06}
                  y1={71.1}
                  y2={66.02}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-23"
                  x1={100.06}
                  x2={100.06}
                  y1={67.02}
                  y2={61.99}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-24"
                  x1={100.06}
                  x2={100.06}
                  y1={63}
                  y2={58.02}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-25"
                  x1={100.06}
                  x2={100.06}
                  y1={59.03}
                  y2={54.11}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-26"
                  x1={100.06}
                  x2={100.06}
                  y1={55.11}
                  y2={50.24}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-27"
                  x1={100.06}
                  x2={100.06}
                  y1={51.25}
                  y2={46.43}
                />
                <linearGradient
                  xlinkHref="#linear-gradient-21"
                  id="linear-gradient-28"
                  x1={100.06}
                  x2={100.06}
                  y1={47.43}
                  y2={42.67}
                />
                <linearGradient
                  id="linear-gradient-29"
                  x1={123.24}
                  x2={97.52}
                  y1={29.43}
                  y2={29.43}
                  gradientTransform="matrix(0 1 -.94 .00367 138.35 -50.83)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} />
                  <stop offset={0.06} stopColor="#000403" />
                  <stop offset={0.12} stopColor="#00100d" />
                  <stop offset={0.18} stopColor="#00241f" />
                  <stop offset={0.24} stopColor="#004137" />
                  <stop offset={0.3} stopColor="#006657" />
                  <stop offset={0.36} stopColor="#00937d" />
                  <stop offset={0.42} stopColor="#00c8aa" />
                  <stop offset={0.46} stopColor="#00f0cc" />
                  <stop offset={0.47} stopColor="#00f0cc" />
                  <stop offset={0.58} stopColor="#00f0cc" />
                  <stop offset={0.61} stopColor="#00c3a5" />
                  <stop offset={0.64} stopColor="#00957f" />
                  <stop offset={0.68} stopColor="#006d5d" />
                  <stop offset={0.72} stopColor="#004b40" />
                  <stop offset={0.76} stopColor="#002f28" />
                  <stop offset={0.81} stopColor="#001a16" />
                  <stop offset={0.85} stopColor="#000b09" />
                  <stop offset={0.91} stopColor="#000202" />
                  <stop offset={1} />
                </linearGradient>
                <linearGradient
                  xlinkHref="#linear-gradient-29"
                  id="linear-gradient-30"
                  x1={123.24}
                  x2={97.52}
                  y1={54.38}
                  y2={54.38}
                />
                <radialGradient
                  id="radial-gradient"
                  cx={149.42}
                  cy={84.61}
                  r={111.16}
                  fx={149.42}
                  fy={84.61}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.26} stopColor="#00635c" />
                  <stop offset={0.68} stopColor="#006b62" stopOpacity={0.96} />
                  <stop offset={0.83} stopColor="#008a7b" stopOpacity={0.8} />
                  <stop offset={0.94} stopColor="#00c0a6" stopOpacity={0.54} />
                  <stop offset={1} stopColor="#00f0cc" stopOpacity={0.3} />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-2"
                  cx={216.72}
                  cy={137.55}
                  r={15.21}
                  fx={216.72}
                  fy={137.55}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0} />
                  <stop offset={0.58} stopColor="#00debd" stopOpacity={0.02} />
                  <stop offset={0.79} stopColor="#009f88" stopOpacity={0.1} />
                  <stop offset={0.9} stopColor="#005448" stopOpacity={0.2} />
                  <stop offset={0.95} stopColor="#005448" stopOpacity={0.21} />
                  <stop offset={0.96} stopColor="#00574a" stopOpacity={0.26} />
                  <stop offset={0.97} stopColor="#005b4e" stopOpacity={0.35} />
                  <stop offset={0.98} stopColor="#006253" stopOpacity={0.48} />
                  <stop offset={0.99} stopColor="#006a5a" stopOpacity={0.64} />
                  <stop offset={1} stopColor="#007463" stopOpacity={0.84} />
                  <stop offset={1} stopColor="#007d6a" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-3"
                  cx={151.22}
                  cy={123.47}
                  r={28.11}
                  fx={151.22}
                  fy={123.47}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00ceae" stopOpacity={0} />
                  <stop offset={0.48} stopColor="#00a78f" stopOpacity={0.12} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0.3} />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-4"
                  cx={151.15}
                  cy={120.58}
                  r={7.33}
                  fx={151.15}
                  fy={120.58}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00ceae" stopOpacity={0} />
                  <stop offset={0.56} stopColor="#00c8a9" stopOpacity={0.02} />
                  <stop offset={0.76} stopColor="#00b49a" stopOpacity={0.08} />
                  <stop offset={0.91} stopColor="#00927e" stopOpacity={0.19} />
                  <stop offset={1} stopColor="#006e62" stopOpacity={0.3} />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-5"
                  cx={151.14}
                  cy={121.71}
                  r={28.28}
                  fx={151.14}
                  fy={121.71}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.73} stopColor="#00f0cc" stopOpacity={0} />
                  <stop offset={0.78} stopColor="#00ebc8" stopOpacity={0.03} />
                  <stop offset={0.83} stopColor="#00debd" stopOpacity={0.14} />
                  <stop offset={0.88} stopColor="#00c7ab" stopOpacity={0.31} />
                  <stop offset={0.93} stopColor="#00a791" stopOpacity={0.55} />
                  <stop offset={0.98} stopColor="#007f70" stopOpacity={0.87} />
                  <stop offset={1} stopColor="#006e62" />
                </radialGradient>
                <style>
                  {
                    ".cls-1{opacity:.55;fill:none}.cls-8{fill:#00f0cc}.cls-11{fill:#003029}.cls-12{fill:#00d6b6}.cls-16{fill:#006e62}.cls-18{fill:#007d6a}.cls-22{fill:url(#radial-gradient-5)}.cls-23{fill:url(#radial-gradient-3)}"
                  }
                </style>
              </defs>
              <g id="vkb_gladiator_evo">
                <g id="greebles">
                  <path
                    d="m200.41 268.72-6.32 10.59c-.41.69-.21 1.59.46 2.04l9.78 6.47 13.02 8.98c.69.47.86 1.41.39 2.1l-1.49 2.18c-.46.67-.3 1.58.35 2.07l7.81 5.8c.91.67 1.44 1.73 1.44 2.86v2.07c0 .77-.25 1.51-.71 2.13l-43.36 58.14c-.19.26-.3.58-.3.9v16.47c0 .84.68 1.51 1.51 1.51h2.44c.27 0 .54.07.77.21l.7.41a19.14 19.14 0 0 1 9.3 14.25l1.06 8.9c0 .06.01.12.01.18v65.21c0 1.89-.39 3.77-1.14 5.51l-2.99 6.93a42.92 42.92 0 0 1-7.17 11.34l-4.12 4.7c-.24.28-.38.63-.38 1v19.35c0 .34-.11.67-.32.94l-1.97 2.5a29.32 29.32 0 0 1-23.02 11.17h-50.5a29.29 29.29 0 0 1-22.82-10.93l-2.2-2.74c-.22-.27-.33-.6-.33-.95v-1.35c0-.84-.68-1.51-1.51-1.51-.84 0-1.51-.68-1.51-1.51v-4.83c0-1.01-.69-1.88-1.67-2.11l-25.38-5.96a102.72 102.72 0 0 0-23.5-2.72h-9.43c-.84 0-1.51.68-1.51 1.51v1.01c0 .84-.68 1.51-1.51 1.51H2.71c-1.5 0-2.71-1.21-2.71-2.71V484.7c0-5.84 2.87-11.31 7.67-14.63l4.45-3.08c.62-.43 1.02-1.12 1.09-1.87l.33-3.71c.87-9.8 7.87-17.97 17.42-20.34l7.12-1.76c2.4-.59 4.85-.89 7.32-.89h1.98c.68 0 1.34-.13 1.97-.39l7.42-3.04c3.13-1.28 6.48-1.95 9.87-1.95h9.6c.84 0 1.51-.68 1.51-1.51v-99.37l3.43-116.91 2.22-61.17.08-6.18a9.17 9.17 0 0 0-2.49-6.4l-2.96-3.16-.11-.11-29.74-25.71-1.89-2.35-1.51-9.88c-.02-.15-.02-.3 0-.45l3.31-22.79 2.16-10.89c3.62-18.2 17.9-32.39 36.12-35.89 2.84-.55 5.72-.82 8.61-.82h99.45c2.24 0 4.47.16 6.69.49l4.19.62c23.14 3.7 36.96 19.07 39.55 39.33l.9 7.03 1.15 8.86c1.18 9.04 1.77 18.15 1.77 27.27v40.66c0 .28.23.51.51.51h2.03v1.99c0 12.67-8.82 23.64-21.2 26.36l-13.86 3.04c-.94.21-1.89.38-2.85.51l-17.06 2.34c-2.5.34-5.01.51-7.53.51h-2.78c-6.28 0-11.28 5.25-10.97 11.52l2.13 43.19c.09 1.86.8 3.63 2 5.04l2.49 2.54c.45.46.94.86 1.48 1.22.56.37 1.44.9 1.44.9l14.43 9.35c2 1.3 2.66 3.93 1.5 6.01Z"
                    className="cls-11"
                  />
                  <path
                    d="m200.41 268.72-6.32 10.59c-.41.69-.21 1.59.46 2.04l9.78 6.47 13.02 8.98c.69.47.86 1.41.39 2.1l-1.49 2.18c-.46.67-.3 1.58.35 2.07l7.81 5.8c.91.67 1.44 1.73 1.44 2.86v2.07c0 .77-.25 1.51-.71 2.13l-43.36 58.14c-.19.26-.3.58-.3.9v16.47c0 .84.68 1.51 1.51 1.51h2.44c.27 0 .54.07.77.21l.7.41a19.14 19.14 0 0 1 9.3 14.25l1.06 8.9c0 .06.01.12.01.18v65.21c0 1.89-.39 3.77-1.14 5.51l-2.99 6.93a42.92 42.92 0 0 1-7.17 11.34l-4.12 4.7c-.24.28-.38.63-.38 1v19.35c0 .34-.11.67-.32.94l-1.97 2.5a29.32 29.32 0 0 1-23.02 11.17h-50.5a29.29 29.29 0 0 1-22.82-10.93l-2.2-2.74c-.22-.27-.33-.6-.33-.95v-1.35c0-.84-.68-1.51-1.51-1.51-.84 0-1.51-.68-1.51-1.51v-4.83c0-1.01-.69-1.88-1.67-2.11l-25.38-5.96a102.72 102.72 0 0 0-23.5-2.72h-9.43c-.84 0-1.51.68-1.51 1.51v1.01c0 .84-.68 1.51-1.51 1.51H2.71c-1.5 0-2.71-1.21-2.71-2.71V484.7c0-5.84 2.87-11.31 7.67-14.63l4.45-3.08c.62-.43 1.02-1.12 1.09-1.87l.33-3.71c.87-9.8 7.87-17.97 17.42-20.34l7.12-1.76c2.4-.59 4.85-.89 7.32-.89h1.98c.68 0 1.34-.13 1.97-.39l7.42-3.04c3.13-1.28 6.48-1.95 9.87-1.95h9.6c.84 0 1.51-.68 1.51-1.51v-99.37l3.43-116.91 2.22-61.17.08-6.18a9.17 9.17 0 0 0-2.49-6.4l-2.96-3.16-.11-.11-29.74-25.71-1.89-2.35-1.51-9.88c-.02-.15-.02-.3 0-.45l3.31-22.79 2.16-10.89c3.62-18.2 17.9-32.39 36.12-35.89 2.84-.55 5.72-.82 8.61-.82h99.45c2.24 0 4.47.16 6.69.49l4.19.62c23.14 3.7 36.96 19.07 39.55 39.33l.9 7.03 1.15 8.86c1.18 9.04 1.77 18.15 1.77 27.27v40.66c0 .28.23.51.51.51h2.03v1.99c0 12.67-8.82 23.64-21.2 26.36l-13.86 3.04c-.94.21-1.89.38-2.85.51l-17.06 2.34c-2.5.34-5.01.51-7.53.51h-2.78c-6.28 0-11.28 5.25-10.97 11.52l2.13 43.19c.09 1.86.8 3.63 2 5.04l2.49 2.54c.45.46.94.86 1.48 1.22.56.37 1.44.9 1.44.9l14.43 9.35c2 1.3 2.66 3.93 1.5 6.01Z"
                    style={{
                      fill: "url(#linear-gradient)",
                    }}
                  />
                  <path
                    d="M177.25 172.73c.41 5.85-5.77 10.76-13.55 10.76h-59.46c-6.17 0-12.04-2.01-16.1-5.51-3.52-3.03-5.4-6.94-5.27-10.96l-1.69 48.2-3.43 116.91v99.37c0 .84-.68 1.51-1.51 1.51h-9.6c-3.38 0-6.74.66-9.87 1.95L49.35 438c-.62.26-1.29.39-1.97.39H45.4c-2.47 0-4.93.3-7.32.89l-7.12 1.76a23.065 23.065 0 0 0-17.42 20.34l-.33 3.71c-.07.76-.47 1.44-1.09 1.87l-4.45 3.08C2.87 473.36 0 478.83 0 484.67v27.64c0 1.5 1.21 2.71 2.71 2.71h11.57c.84 0 1.51-.68 1.51-1.51v-1.01c0-.84.68-1.51 1.51-1.51h9.43c7.91 0 15.8.91 23.5 2.72l25.38 5.96a2.17 2.17 0 0 1 1.67 2.11v4.83c0 .84.68 1.51 1.51 1.51.84 0 1.51.68 1.51 1.51v1.35c0 .35.12.68.33.95l2.2 2.74a29.29 29.29 0 0 0 22.82 10.93h50.5c8.98 0 17.46-4.12 23.02-11.17l1.97-2.5c.21-.27.32-.6.32-.94v-19.35c0-.37.13-.72.38-1l4.12-4.7a42.92 42.92 0 0 0 7.17-11.34l2.99-6.93c.75-1.74 1.14-3.61 1.14-5.51v-65.21c0-.06 0-.12-.01-.18l-1.06-8.9a19.177 19.177 0 0 0-9.3-14.25l-.7-.41c-.23-.14-.5-.21-.77-.21h-2.44c-.84 0-1.51-.68-1.51-1.51v-16.47c0-.33.11-.64.3-.9l43.36-58.14c.46-.62.71-1.36.71-2.13v-2.07c0-1.13-.53-2.19-1.44-2.86l-7.81-5.8c-.65-.48-.81-1.4-.35-2.07l1.49-2.18c.47-.69.29-1.63-.39-2.1l-13.02-8.98-9.78-6.47c-.67-.45-.88-1.34-.46-2.04l6.32-10.59c1.16-2.09.51-4.72-1.5-6.01l-14.43-9.35s-.88-.53-1.44-.9-1.03-.76-1.48-1.22l-2.49-2.54a8.37 8.37 0 0 1-2-5.04l-2.13-43.19c-.14-2.85.82-5.49 2.49-7.53l-.19-20.22Z"
                    style={{
                      fill: "url(#linear-gradient-2)",
                    }}
                  />
                  <path
                    d="M177.25 172.73c.41 5.85-5.77 10.76-13.55 10.76h-59.46c-6.17 0-12.04-2.01-16.1-5.51-3.52-3.03-5.4-6.94-5.27-10.96l.61-19.56 92.82-1.32.95 26.59Z"
                    style={{
                      fill: "url(#linear-gradient-3)",
                    }}
                  />
                  <g
                    style={{
                      opacity: 0.15,
                      fill: "none",
                    }}
                  >
                    <path
                      d="M129.05 69.01c1.49 15.68-11.59 29.51-29.34 29.51S68.68 84.69 69.94 69.01c1.16-14.34 14.27-25.1 29.37-25.1s28.37 10.76 29.74 25.1Z"
                      style={{
                        stroke: "#00f0cc",
                        strokeMiterlimit: 10,
                        fill: "#007d6a",
                      }}
                    />
                    <path
                      d="M125.97 71.96c1.34 14.11-10.35 26.57-26.24 26.57S71.96 86.08 73.1 71.96c1.04-12.9 12.77-22.58 26.27-22.58s25.37 9.68 26.6 22.58Z"
                      className="cls-8"
                    />
                  </g>
                  <path
                    d="M166.23 89.59h-33.91c-.85 0-1.64.46-2.06 1.2a32.334 32.334 0 0 1-25.6 16.39s-8.14.05-8.14.05a7.566 7.566 0 0 0-6.15 3.21l-4.69 6.64a6.343 6.343 0 0 1-5.17 2.68h-23.7l-8.15-7.64-1.5-1.8-2.05-9.95h5.58c.57 0 1.11.22 1.52.61l6.21 8.79a9.934 9.934 0 0 0 6.85 2.74H81.2c1.67 0 3.24-.8 4.22-2.15l4.83-6.64a7.964 7.964 0 0 1 6.44-3.28h8.09a34.563 34.563 0 0 0 25-17.83l.29-.54c.47-.88 1.38-1.42 2.37-1.42h35.4c1.75 0 3.17-1.42 3.17-3.17v-.24c0-16.78 14.06-30.38 31.41-30.38s31.41 13.6 31.41 30.38v8.34c0 1.58 1.28 2.85 2.85 2.85h12.22v4.43h-15.75c-1.58 0-2.85-1.28-2.85-2.85v-9.46c0-14.85-12.62-26.88-28.19-26.88s-28.19 12.04-28.19 26.88v4.24c0 2.63-2.13 4.76-4.76 4.76h-2.91Z"
                    style={{
                      fill: "url(#linear-gradient-4)",
                    }}
                  />
                  <path
                    d="M248.75 113.03v38.63c0 1.4 1.1 2.54 2.45 2.54v1.99c0 12.67-8.5 23.64-20.42 26.36l-13.36 3.04c-.91.21-1.82.38-2.74.51l-16.44 2.34c-2.4.34-4.83.51-7.26.51h-2.68c-6.05 0-11.15-2.27-10.85 4l-1.59-41.82 20.24-25.12 17.72-10.82 23.91-3.98 11.02 1.82Z"
                    style={{
                      fill: "url(#linear-gradient-5)",
                    }}
                  />
                  <path
                    d="M248.24 151.52v-39.66h-15.97l-9.59.36c-12.29.21-24.06 5.81-32.51 14.86l-4.43 4.75a30.68 30.68 0 0 1-1.75 7.47c-.27.73-.58 1.45-.91 2.15-.02.05-.04.09-.06.14-.32.68-.68 1.35-1.05 2-.03.05-.06.11-.09.16a25.738 25.738 0 0 1-1.3 2.03c-.42.6-.86 1.19-1.32 1.76l-.12.15c-.47.57-.95 1.12-1.46 1.66l-.12.12c-.51.54-1.05 1.06-1.6 1.56-.03.03-.06.05-.09.08-.25.23-.5.45-.76.67l-.09 36.87c0 .36.46.54.69.26 5.05-5.94 8.84-5.71 8.84-5.71h3.68c2.41 0 4.82-.16 7.2-.49l16.41-2.24c.91-.12 1.82-.28 2.72-.48l13.32-2.91c11.89-2.59 20.36-13.05 20.36-25.14v-.46Z"
                    style={{
                      fill: "url(#linear-gradient-6)",
                    }}
                  />
                  <path
                    d="M253.26 111.09h-18.65c-.65 0-1.3 0-1.95.03-20.75.62-39.79 11.7-51.27 29a27.493 27.493 0 0 1-22.9 12.29"
                    style={{
                      stroke: "#006e62",
                      strokeWidth: 7,
                      strokeMiterlimit: 10,
                      fill: "none",
                    }}
                  />
                  <path
                    d="M253.26 111.09h-18.65c-.65 0-1.3 0-1.95.03-20.75.62-39.79 11.7-51.27 29a27.493 27.493 0 0 1-22.9 12.29"
                    style={{
                      strokeWidth: 7,
                      stroke: "url(#linear-gradient-7)",
                      strokeMiterlimit: 10,
                      fill: "none",
                    }}
                  />
                  <path
                    d="m254.69 67.22-11.31-29.79-15.08-15.84-21.49-6.79H91.42l-27.9 10.56-17.35 23-3.77 37.33v22.62l1.91-2.98.47-2.49c0-.15.99-2.66.99-2.81l3.31-22.79 2.16-10.89c3.62-18.2 17.9-32.39 36.12-35.89 2.84-.55 5.72-.82 8.61-.82h99.45c2.24 0 4.47.16 6.69.49l4.19.62c20.21 3 35.96 19.07 38.55 39.33l.9 7.03 1.15 8.86c1.18 9.04 1.77 18.15 1.77 27.26v39.66c0 .79.61 1.43 1.38 1.5 1.66-.95 3.02-4.73 4.67-4.99 3.92-.63 0-82.2 0-82.2Z"
                    style={{
                      fill: "#005e4b",
                    }}
                  />
                  <path
                    d="m254.69 67.22-11.31-29.79-15.08-15.84-21.49-6.79H91.42l-27.9 10.56-17.35 23-3.77 37.33v22.62l1.91-2.98.47-2.49c0-.15.99-2.66.99-2.81l3.31-22.79 2.16-10.89c3.62-18.2 17.9-32.39 36.12-35.89 2.84-.55 5.72-.82 8.61-.82h99.45c2.24 0 4.47.16 6.69.49l4.19.62c20.21 3 35.96 19.07 38.55 39.33l.9 7.03 1.15 8.86c1.18 9.04 1.77 18.15 1.77 27.26v39.66c0 .79.61 1.43 1.38 1.5 1.66-.95 3.02-4.73 4.67-4.99 3.92-.63 0-82.2 0-82.2Z"
                    style={{
                      fill: "url(#radial-gradient)",
                    }}
                  />
                  <path
                    d="m120.26 1.3-8.51 8.51c-.64.64-1.5 1-2.4 1.01-3.12.03-10.6.08-13.61.03-24.9-.64-47.56 15.59-54.66 39.52-1.86 5.32-2.45 11.21-2.45 16.84-.28 10.67-.46 21.35-.67 32.02v.41l.05.33 3.03 7.54c.2.5.61.87 1.12 1.03l4.98 1.79c-.6-4.14-1.09-7.52-1.75-11.65l.05.74c.35-10.67.73-21.34 1.01-32.01-.01-5.27.62-10.68 2.36-15.68 5.67-18.88 23.31-33.38 43.11-34.84 5.14-.35 18.82-.15 18.82-.15h76.2s10.67-.19 15.82.15c19.8 1.46 37.44 15.96 43.11 34.84 1.74 5 5.4 23.83 5.38 29.11V149.79c0 1.73-.01 3.36-1.24 4.59l2.78.03c3.29 0 5.96-2.67 5.96-5.96v-27.59l.33-39.66c0-8.1-3.6-25.52-5.47-30.84-7.11-23.93-29.77-40.16-54.66-39.52-2.86.05-8.11 0-10.61-.02-.9 0-1.75-.37-2.39-1.01L177.14 1c-.62-.64-1.51-1-2.42-1l-52.04.29c-.9 0-1.77.37-2.41 1.01Z"
                    className="cls-8"
                  />
                  <path
                    d="m120.26 1.3-8.51 8.51c-.64.64-1.5 1-2.4 1.01-3.12.03-10.6.08-13.61.03-24.9-.64-47.56 15.59-54.66 39.52-1.86 5.32-2.45 11.21-2.45 16.84-.28 10.67-.46 21.35-.67 32.02v.41l.05.33 3.03 7.54c.2.5.61.87 1.12 1.03l4.98 1.79c-.6-4.14-1.09-7.52-1.75-11.65l.05.74c.35-10.67.73-21.34 1.01-32.01-.01-5.27.62-10.68 2.36-15.68 5.67-18.88 23.31-33.38 43.11-34.84 5.14-.35 18.82-.15 18.82-.15h76.2s10.67-.19 15.82.15c19.8 1.46 37.44 15.96 43.11 34.84 1.74 5 5.4 23.83 5.38 29.11V149.79c0 1.73-.01 3.36-1.24 4.59l2.78.03c3.29 0 5.96-2.67 5.96-5.96v-27.59l.33-39.66c0-8.1-3.6-25.52-5.47-30.84-7.11-23.93-29.77-40.16-54.66-39.52-2.86.05-8.11 0-10.61-.02-.9 0-1.75-.37-2.39-1.01L177.14 1c-.62-.64-1.51-1-2.42-1l-52.04.29c-.9 0-1.77.37-2.41 1.01Z"
                    style={{
                      fill: "url(#linear-gradient-8)",
                    }}
                  />
                  <path
                    d="m120.26 1.3-8.51 8.51c-.64.64-1.5 1-2.4 1.01-3.12.03-10.6.08-13.61.03-24.9-.64-47.56 15.59-54.66 39.52-1.86 5.32-2.45 11.21-2.45 16.84-.28 10.67-.46 21.35-.67 32.02v.41l.05.33 3.03 7.54c.2.5.61.87 1.12 1.03l4.98 1.79c-.6-4.14-1.09-7.52-1.75-11.65l.05.74c.35-10.67.73-21.34 1.01-32.01-.01-5.27.62-10.68 2.36-15.68 5.67-18.88 23.31-33.38 43.11-34.84 5.14-.35 18.82-.15 18.82-.15h76.2s10.67-.19 15.82.15c19.8 1.46 37.44 15.96 43.11 34.84 1.74 5 5.4 23.83 5.38 29.11V149.79c0 1.73-.01 3.36-1.24 4.59l2.78.03c3.29 0 5.96-2.67 5.96-5.96v-27.59l.33-39.66c0-8.1-3.6-25.52-5.47-30.84-7.11-23.93-29.77-40.16-54.66-39.52-2.86.05-8.11 0-10.61-.02-.9 0-1.75-.37-2.39-1.01L177.14 1c-.62-.64-1.51-1-2.42-1l-52.04.29c-.9 0-1.77.37-2.41 1.01Z"
                    style={{
                      fill: "url(#linear-gradient-9)",
                    }}
                  />
                  <path
                    d="M199.08 146.14c-.02-.69 0-5.42 0-5.41 0-9.92 9.31-12.21 20.71-12.25 10.36-.04 14.14 3.86 14.15 11.67v5.92c0 7.98-9.15 14.37-17.46 14.37-10.58 0-17.28-9.72-17.4-14.3Z"
                    className="cls-11"
                  />
                  <path
                    d="M199.08 146.14c-.02-.69 0-5.42 0-5.41 0-9.92 9.31-12.21 20.71-12.25 10.36-.04 14.14 3.86 14.15 11.67v5.92c0 7.98-9.15 14.37-17.46 14.37-10.58 0-17.28-9.72-17.4-14.3Z"
                    style={{
                      fill: "url(#linear-gradient-10)",
                    }}
                  />
                  <path
                    d="M232.4 140.12c.35-14.64-18.44-21.91-28.04-10.84s.41 28.74 14.89 26.14c7.36-1.32 12.94-7.82 13.14-15.3Z"
                    className="cls-11"
                  />
                  <path
                    d="M232.4 140.12c.35-14.64-18.44-21.91-28.04-10.84s.41 28.74 14.89 26.14c7.36-1.32 12.94-7.82 13.14-15.3Z"
                    style={{
                      fill: "url(#linear-gradient-11)",
                    }}
                  />
                  <path
                    d="M233.94 140.16c-.22 8.2-6.34 15.32-14.41 16.77-15.88 2.86-26.91-16.46-16.33-28.66s31.13-4.17 30.74 11.89Zm-1.54-.45c-.01-7.48-5.43-14.11-12.76-15.62-14.41-2.96-24.91 14.4-15.54 25.76s28.28 4.5 28.3-10.14Z"
                    style={{
                      strokeMiterlimit: 10,
                      stroke: "#000",
                      strokeWidth: ".25px",
                      fill: "#007d6a",
                    }}
                  />
                  <path
                    d="M181.43 19.68v9.69l-3.18 7.33c-.38.88-1.15 1.54-2.08 1.78l-19.54 5.13-13.19-.1-19.54-5.13c-.93-.24-1.7-.9-2.08-1.78l-3.18-7.33v-9.69l62.8.1Z"
                    className="cls-11"
                  />
                  <path
                    d="M181.43 19.68v9.69l-3.18 7.33c-.38.88-1.15 1.54-2.08 1.78l-19.54 5.13-13.19-.1-19.54-5.13c-.93-.24-1.7-.9-2.08-1.78l-3.18-7.33v-9.69l62.8.1Z"
                    style={{
                      fill: "url(#linear-gradient-12)",
                    }}
                  />
                  <path
                    d="m143.96 95.93-.52-27.44V38.82c0-1.29-.87-2.41-2.11-2.74l-16.42-4.29c-.96-.25-1.75-.94-2.12-1.87l-4.15-10.34h62.8l-4.15 10.34c-.37.92-1.16 1.61-2.12 1.87l-16.42 4.29a2.836 2.836 0 0 0-2.11 2.74v29.67l-.52 27.44h-12.15Z"
                    className="cls-18"
                  />
                  <path
                    d="m143.96 95.93-.52-27.44V38.82c0-1.29-.87-2.41-2.11-2.74l-16.42-4.29c-.96-.25-1.75-.94-2.12-1.87l-4.15-10.34h62.8l-4.15 10.34c-.37.92-1.16 1.61-2.12 1.87l-16.42 4.29a2.836 2.836 0 0 0-2.11 2.74v29.67l-.52 27.44h-12.15Z"
                    style={{
                      fill: "url(#linear-gradient-13)",
                    }}
                  />
                  <path
                    d="m143.96 95.93-.52-27.44V38.82c0-1.29-.87-2.41-2.11-2.74l-16.42-4.29c-.96-.25-1.75-.94-2.12-1.87l-4.15-10.34h62.8l-4.15 10.34c-.37.92-1.16 1.61-2.12 1.87l-16.42 4.29a2.836 2.836 0 0 0-2.11 2.74v29.67l-.52 27.44h-12.15Z"
                    style={{
                      fill: "url(#linear-gradient-14)",
                    }}
                  />
                  <g
                    style={{
                      opacity: 0.61,
                      fill: "none",
                    }}
                  >
                    <rect
                      width={16.14}
                      height={3.98}
                      x={133.74}
                      y={24.78}
                      rx={1.99}
                      ry={1.99}
                      style={{
                        fill: "url(#linear-gradient-15)",
                      }}
                    />
                    <circle
                      cx={160.95}
                      cy={26.77}
                      r={2.17}
                      style={{
                        fill: "url(#linear-gradient-16)",
                      }}
                    />
                  </g>
                </g>
                <g id="input4_Device_VKB_GLADIATOR_NXT_EVO_LEFT"
                    className=" selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
           
                      sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Front");
                      sessionStorage.setItem('selectedEditorDeviceButton', 'Red_Button');
  
                      setSelectedViewerInput('Red_Button');
                      setSelectedEditorDeviceViewOrientation('Front');
                      setViewerPanelTitle('Red Button');
  
                      setEditorPanelTitle('Red Button');
                      console.log("Red_Button")
                    }}
                >
                  <path
                    d="M232.14 137.48c-.06-14.62-18.8-19.83-27.32-9.58-9.6 11.55 2.16 26.97 15.01 24.36 6.7-1.37 12.29-7.29 12.31-14.77Z"
                    className="cls-8"
                  />
                  <path
                    d="M232.14 137.48c-.06-14.62-18.8-19.83-27.32-9.58-9.6 11.55 2.16 26.97 15.01 24.36 6.7-1.37 12.29-7.29 12.31-14.77Z"
                    style={{
                      fill: "url(#radial-gradient-2)",
                    }}
                  />
                </g>
                <g id="input3_Device_VKB_GLADIATOR_NXT_EVO_LEFT"
                  className="selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Front");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Circle_Stick');
                    setSelectedEditorDeviceViewOrientation('Front');

                    setSelectedViewerInput('Circle_Stick');
                    setEditorPanelTitle('Circle Stick');
                    setViewerPanelTitle('Circle Stick');

                  }}
                >
                  <path
                    d="M152.13 135.1s-32.01 13.9-35.41-3.35c.29 6.54 2.88 13.21 8.42 19.24 19.04 20.71 57.99 10.49 61-17.75-2.82 13.19-34.01 1.86-34.01 1.86Z"
                    className="cls-16"
                  />
                  <path
                    d="M186.82 126.83c-.03-31.85-42.8-43.52-62.58-21.03-21.92 24.92 4.51 59.24 34.36 53.48 15.5-2.99 28.23-16.27 28.22-32.45Z"
                    style={{
                      fill: "#002923",
                    }}
                  />
                  <ellipse
                    cx={151.51}
                    cy={129.86}
                    className="cls-16"
                    rx={31.12}
                    ry={29.81}
                  />
                  <path
                    d="M151.06 95.14c8.84 0 17.58 3.06 23.96 8.41 4.92 4.12 10.79 11.5 10.8 23.28 0 7.43-2.85 14.71-8.04 20.5-5.04 5.63-11.92 9.53-19.37 10.96-2.14.41-4.32.62-6.49.62-13.59 0-26.48-8.32-32.08-20.69-4.92-10.88-3.04-22.46 5.14-31.77 6.42-7.3 15.68-11.32 26.06-11.32m0-1c-9.88 0-19.79 3.68-26.81 11.66-20.27 23.04.8 54.12 27.68 54.12 2.19 0 4.42-.21 6.68-.64 15.5-2.99 28.23-16.27 28.22-32.45-.02-20.54-17.82-32.69-35.76-32.69Z"
                    style={{
                      fill: "url(#linear-gradient-17)",
                    }}
                  />
                  <path
                    d="M178.79 124.51c-.03 25.52-33.14 37.48-49.22 17.41s2.23-49.8 27.18-44.61c12.74 2.65 21.98 14.23 22.04 27.2Z"
                    className="cls-18"
                  />
                  <path
                    d="M178.87 123.51c.79-25.18-31.02-38.51-48.16-19.83s-.37 51.01 25.38 46.32c12.74-2.32 22.33-13.59 22.78-26.49Z"
                    style={{
                      fill: "#00c4a7",
                    }}
                  />
                  <path
                    d="M178.79 124.51c-.03 25.52-33.14 37.48-49.22 17.41s2.23-49.8 27.18-44.61c12.74 2.65 21.98 14.23 22.04 27.2Z"
                    className="cls-23"
                  />
                  <path
                    d="M178.87 123.51c.79-25.18-31.02-38.51-48.16-19.83s-.37 51.01 25.38 46.32c12.74-2.32 22.33-13.59 22.78-26.49Z"
                    className="cls-23"
                  />
                  <g id="hat">
                    <path
                      d="M161.3 116.33c2.41 3.75 2.53 8.66.27 12.52l.04-1.94c2.26-3.88 2.14-8.8-.27-12.57l-.04 1.98Z"
                      className="cls-18"
                    />
                    <path
                      d="m174.72 108.1-13.42 8.23.04-1.98 13.46-8.26-.08 2.01zM178.81 122.72c0 5.01-1.31 10.01-3.94 14.29l-13.29-8.15c2.25-3.87 2.14-8.77-.27-12.52l13.41-8.23c2.71 4.39 4.08 9.47 4.09 14.62Z"
                      className="cls-18"
                    />
                    <path
                      d="M178.9 121.25c.08-5.33-1.3-10.61-4.1-15.16l-13.46 8.26c2.42 3.77 2.53 8.69.27 12.57l13.34 8.18c2.55-4.15 3.87-8.99 3.95-13.85Z"
                      className="cls-8"
                    />
                    <path
                      d="m140.73 116.68.22-.35-.04-1.98c-2.42 3.77-2.53 8.69-.27 12.57l.04 1.94c-2.18-3.74-2.15-8.46.05-12.17Z"
                      className="cls-18"
                    />
                    <path
                      d="m127.55 108.1 13.41 8.22c-2.41 3.75-2.53 8.66-.27 12.52l-13.29 8.15c-5.33-8.72-5.17-20.25.16-28.9Z"
                      className="cls-18"
                    />
                    <path
                      d="m140.91 114.35-13.45-8.25c-5.35 8.68-5.51 20.25-.16 29l13.34-8.18c-2.26-3.88-2.14-8.8.27-12.57Z"
                      className="cls-8"
                    />
                    <path
                      d="m136.67 99.01 8.31 13.44-.02-1.99-8.34-13.49.05 2.04z"
                      className="cls-18"
                    />
                    <path
                      d="M165.58 99.01c-8.77-5.36-20.12-5.38-28.91 0l-.05-2.04c8.83-5.39 20.21-5.37 29.02 0l-.05 2.04ZM156.93 112.26l.34.19.02-1.99c-3.78-2.22-8.56-2.22-12.34 0l.02 1.99c3.64-2.14 8.24-2.22 11.96-.19Z"
                      className="cls-18"
                    />
                    <path
                      d="m157.28 112.45 8.3-13.44.05-2.04-8.33 13.49-.02 1.99z"
                      className="cls-18"
                    />
                    <path
                      d="m165.58 99.01-8.31 13.44c-3.76-2.21-8.53-2.21-12.3 0l-8.31-13.44c8.8-5.38 20.14-5.35 28.91 0Z"
                      className="cls-18"
                    />
                    <path
                      d="m157.3 110.46 8.34-13.48c-8.8-5.38-20.19-5.4-29.02 0l8.34 13.49c3.78-2.22 8.56-2.22 12.34 0Z"
                      className="cls-8"
                    />
                    <path
                      d="m165.27 146.66.33-.2.05-1.87c-8.83 5.4-20.23 5.38-29.03 0l.05 1.87c8.66 5.3 19.85 5.4 28.61.2Z"
                      className="cls-18"
                    />
                    <path
                      d="m157.55 133.45 8.04 13.01c-8.8 5.38-20.15 5.36-28.93 0l8.04-13.01c3.89 2.44 8.96 2.44 12.85 0Z"
                      className="cls-18"
                    />
                    <path
                      d="m165.65 144.59-8.07-13.06c-3.9 2.44-8.99 2.45-12.89 0l-8.07 13.05c8.81 5.39 20.2 5.41 29.03 0Z"
                      className="cls-8"
                    />
                    <path
                      d="M158.47 122.51c0 6.72-8.73 9.83-13.01 4.65s.53-13.18 7.15-11.82c3.37.69 5.86 3.73 5.86 7.17Z"
                      className="cls-18"
                    />
                    <path
                      d="M158.5 120.74c.16-6.75-8.52-10.09-12.94-4.99s.21 13.23 6.88 12.03c3.39-.61 5.97-3.59 6.06-7.04Z"
                      className="cls-8"
                    />
                    <path
                      d="M158.5 120.74c.16-6.75-8.52-10.09-12.94-4.99s.21 13.23 6.88 12.03c3.39-.61 5.97-3.59 6.06-7.04Z"
                      style={{
                        fill: "url(#radial-gradient-4)",
                      }}
                    />
                    <g
                      style={{
                        opacity: 0.6,
                        fill: "none",
                      }}
                    >
                      <path
                        d="m161.58 128.85 13.29 8.15.08-1.9-13.33-8.19-.04 1.94z"
                        className="cls-22"
                      />
                      <path
                        d="M161.3 116.33c2.41 3.75 2.53 8.66.27 12.52l.04-1.94c2.26-3.88 2.14-8.8-.27-12.57l-.04 1.98Z"
                        className="cls-22"
                      />
                      <path
                        d="m174.72 108.1-13.42 8.23.04-1.98 13.46-8.26-.08 2.01z"
                        className="cls-22"
                      />
                      <path
                        d="M178.8 123.2c.08-5.31-1.3-10.58-4.09-15.1l.08-2.01c5.36 8.7 5.52 20.28.15 29.01l-.08 1.91c2.54-4.14 3.86-8.95 3.93-13.8Z"
                        className="cls-22"
                      />
                      <path
                        d="M178.81 122.72c0 5.01-1.31 10.01-3.94 14.29l-13.29-8.15c2.25-3.87 2.14-8.77-.27-12.52l13.41-8.23c2.71 4.39 4.08 9.47 4.09 14.62Z"
                        className="cls-22"
                      />
                      <path
                        d="M178.9 121.25c.08-5.33-1.3-10.61-4.1-15.16l-13.46 8.26c2.42 3.77 2.53 8.69.27 12.57l13.34 8.18c2.55-4.15 3.87-8.99 3.95-13.85ZM127.39 137l13.29-8.15-.04-1.94-13.34 8.19.09 1.9z"
                        className="cls-22"
                      />
                      <path
                        d="M127.55 108.1c-5.33 8.65-5.49 20.18-.16 28.9l-.08-1.91c-5.35-8.75-5.19-20.32.16-29l.08 2.01ZM140.73 116.68l.22-.35-.04-1.98c-2.42 3.77-2.53 8.69-.27 12.57l.04 1.94c-2.18-3.74-2.15-8.46.05-12.17Z"
                        className="cls-22"
                      />
                      <path
                        d="m140.95 116.33-13.4-8.23-.09-2.01 13.45 8.26.04 1.98z"
                        className="cls-22"
                      />
                      <path
                        d="m127.55 108.1 13.41 8.22c-2.41 3.75-2.53 8.66-.27 12.52l-13.29 8.15c-5.33-8.72-5.17-20.25.16-28.9Z"
                        className="cls-22"
                      />
                      <path
                        d="m140.91 114.35-13.45-8.25c-5.35 8.68-5.51 20.25-.16 29l13.34-8.18c-2.26-3.88-2.14-8.8.27-12.57ZM136.67 99.01l8.31 13.44-.02-1.99-8.34-13.49.05 2.04z"
                        className="cls-22"
                      />
                      <path
                        d="M165.58 99.01c-8.77-5.36-20.12-5.38-28.91 0l-.05-2.04c8.83-5.39 20.21-5.37 29.02 0l-.05 2.04ZM156.93 112.26l.34.19.02-1.99c-3.78-2.22-8.56-2.22-12.34 0l.02 1.99c3.64-2.14 8.24-2.22 11.96-.19Z"
                        className="cls-22"
                      />
                      <path
                        d="m157.28 112.45 8.3-13.44.05-2.04-8.33 13.49-.02 1.99z"
                        className="cls-22"
                      />
                      <path
                        d="m165.58 99.01-8.31 13.44c-3.76-2.21-8.53-2.21-12.3 0l-8.31-13.44c8.8-5.38 20.14-5.35 28.91 0Z"
                        className="cls-22"
                      />
                      <path
                        d="m157.3 110.46 8.34-13.48c-8.8-5.38-20.19-5.4-29.02 0l8.34 13.49c3.78-2.22 8.56-2.22 12.34 0ZM144.7 133.45l-8.04 13.01-.05-1.88 8.07-13.05.02 1.92zM157.55 133.45c-3.89 2.44-8.96 2.44-12.85 0l-.02-1.92c3.9 2.44 8.99 2.45 12.89 0l-.02 1.92Z"
                        className="cls-22"
                      />
                      <path
                        d="m165.27 146.66.33-.2.05-1.87c-8.83 5.4-20.23 5.38-29.03 0l.05 1.87c8.66 5.3 19.85 5.4 28.61.2Z"
                        className="cls-22"
                      />
                      <path
                        d="m165.6 146.46-8.05-13.01.02-1.92 8.08 13.06-.05 1.87z"
                        className="cls-22"
                      />
                      <path
                        d="m157.55 133.45 8.04 13.01c-8.8 5.38-20.15 5.36-28.93 0l8.04-13.01c3.89 2.44 8.96 2.44 12.85 0Z"
                        className="cls-22"
                      />
                      <path
                        d="m165.65 144.59-8.07-13.06c-3.9 2.44-8.99 2.45-12.89 0l-8.07 13.05c8.81 5.39 20.2 5.41 29.03 0ZM158.47 122.51c0 6.72-8.73 9.83-13.01 4.65s.53-13.18 7.15-11.82c3.37.69 5.86 3.73 5.86 7.17Z"
                        className="cls-22"
                      />
                      <path
                        d="M158.5 120.74c.16-6.75-8.52-10.09-12.94-4.99s.21 13.23 6.88 12.03c3.39-.61 5.97-3.59 6.06-7.04Z"
                        className="cls-22"
                      />
                      <path
                        d="M158.5 120.74c.16-6.75-8.52-10.09-12.94-4.99s.21 13.23 6.88 12.03c3.39-.61 5.97-3.59 6.06-7.04Z"
                        className="cls-22"
                      />
                    </g>
                  </g>
                </g>

                <g
                  id="input5_Device_VKB_GLADIATOR_NXT_EVO_LEFT"
                  className="selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Front");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Chip_Stick');

                    setSelectedEditorDeviceViewOrientation('Front');

                    setSelectedViewerInput('Chip_Stick');
                    setEditorPanelTitle('Chip Stick');
                    setViewerPanelTitle('Chip Stick');


                    console.log("setSelectedViewerInput Input 2")
                  }}>
                  <path
                    d="m198.674 290.437 8.161-11.742 7.71 5.359-8.16 11.742z"
                    className="cls-16"
                  />
                  <path
                    d="M199.46 282.53h14.3v9.39h-14.3z"
                    style={{
                      fill: "url(#linear-gradient-18)",
                    }}
                    transform="rotate(-55.2 206.63 287.236)"
                  />
                  <path
                    d="M216.61 303.14c-.65-.48-.81-1.4-.35-2.07l1.49-2.18c.47-.69.29-1.63-.39-2.1l-13.02-8.98-10.78-6.94c-.7-.45-1.63-.26-2.09.44l-1.45 2.2c-.06.09-.12.17-.19.24-.45.45-.45 1.17.08 1.52l26.7 17.86Z"
                    className="cls-11"
                  />
                  <path
                    d="M216.61 303.14c-.65-.48-.81-1.4-.35-2.07l1.49-2.18c.47-.69.29-1.63-.39-2.1l-13.02-8.98-10.78-6.94c-.7-.45-1.63-.26-2.09.44l-1.45 2.2c-.06.09-.12.17-.19.24-.45.45-.45 1.17.08 1.52l26.7 17.86Z"
                    style={{
                      fill: "url(#linear-gradient-19)",
                    }}
                  />
                  <rect
                    width={11.73}
                    height={27.88}
                    x={205.37}
                    y={266.73}
                    className="cls-16"
                    rx={2.21}
                    ry={2.21}
                    transform="rotate(-57.08 211.223 280.667)"
                  />
                  <rect
                    width={11.73}
                    height={27.88}
                    x={205.37}
                    y={266.73}
                    rx={2.21}
                    ry={2.21}
                    style={{
                      fill: "url(#linear-gradient-20)",
                    }}
                    transform="rotate(-57.08 211.223 280.667)"
                  />
                </g>
                <g id="input2_Device_VKB_GLADIATOR_NXT_EVO_LEFT" className="selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                  setSelectedViewerInput('Hat_Stick');
                  setEditorPanelTitle('Hat Stick');
                  setViewerPanelTitle('Hat Stick');

                  console.log("setSelectedViewerInput Input 1")
                }}>
                  <path
                    d="M212.54 45.23h-18.93c-1.43 0-2.83.5-3.96 1.4l-5.37 4.32a6.618 6.618 0 0 0-2.47 4.94l-.66 19.97c-.07 2.06.75 4.02 2.24 5.33l5.43 4.8a6.247 6.247 0 0 0 4.16 1.59h20.19c1.53 0 3-.56 4.16-1.59l5.43-4.8c1.49-1.32 2.31-3.28 2.24-5.33l-.66-19.97a6.618 6.618 0 0 0-2.47-4.94l-5.37-4.32a6.318 6.318 0 0 0-3.96-1.4Z"
                    className="cls-8"
                  />
                  <path
                    d="M211.96 48.09h-17.77c-.78 0-1.54.27-2.15.77l-5.93 4.8c-.81.66-1.3 1.64-1.33 2.69l-.54 19.18c-.03 1.11.42 2.17 1.22 2.87l5.99 5.26c.63.55 1.42.85 2.25.85h18.79c.82 0 1.62-.3 2.25-.85l5.99-5.26c.8-.71 1.25-1.76 1.22-2.87l-.54-19.18a3.622 3.622 0 0 0-1.33-2.69l-5.93-4.8c-.61-.5-1.37-.77-2.15-.77Z"
                    style={{
                      fill: "#00b499",
                      stroke: "#00b499",
                      strokeWidth: ".5px",
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M211.81 50.4h-17.47l-7.05 5.73-.47 19.48 7.09 6.2h18.33l7.09-6.2-.47-19.48-7.05-5.73z"
                    style={{
                      fill: "#007866",
                    }}
                  />
                  <path
                    d="M210.24 53.16h-14.32l-5.76 4.72-.32 15.89 5.79 5.02h14.89l5.79-5.02-.32-15.89-5.75-4.72z"
                    style={{
                      fill: "#005c52",
                    }}
                  />
                  <path
                    d="M207.64 57.04h-9.62l-3.85 3.18-.14 10.61 3.86 3.32h9.88l3.86-3.32-.14-10.61-3.85-3.18z"
                    style={{
                      fill: "#00332c",
                    }}
                  />
                </g>
                <g id="input1_Device_VKB_GLADIATOR_NXT_EVO_LEFT" className="selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                  sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Front");
                  sessionStorage.setItem('selectedEditorDeviceButton', 'Pill_Stick');

                  setSelectedViewerInput('Pill_Stick');
                  setEditorPanelTitle('Pill Switch');
                  setSelectedEditorDeviceViewOrientation('Front');
                  setViewerPanelTitle('Pill Switch');


                  console.log("Pill_Stick")

                }}>
                  <path
                    d="m105.8 81.52-13.74.06c-5.62.02-10.08-5.26-9.9-11.63l.59-21.01c.16-5.8 4.57-10.48 9.8-10.51l12.78-.05c5.23-.02 9.63 4.62 9.8 10.43l.59 21c.18 6.36-4.28 11.68-9.9 11.71Z"
                    className="cls-8 "
                  />
                  <g className="cls-1 ">
                    <path
                      d="M89.83 75.2c-.32 0-.62-.13-.85-.36-.26-.26-.4-.63-.39-1.02l.04-2.39c.01-.75.58-1.36 1.27-1.36l18.07-.08c.69 0 1.26.61 1.27 1.35l.04 2.39c0 .39-.14.76-.39 1.02-.23.24-.53.37-.85.37l-18.19.08Z"
                      className="cls-12 "
                    />
                    <path
                      d="M89.83 75.2c-.32 0-.62-.13-.85-.36-.26-.26-.4-.63-.39-1.02l.04-2.39c.01-.75.58-1.36 1.27-1.36l18.07-.08c.69 0 1.26.61 1.27 1.35l.04 2.39c0 .39-.14.76-.39 1.02-.23.24-.53.37-.85.37l-18.19.08Z"
                      style={{
                        fill: "url(#linear-gradient-21)",
                      }}
                    />
                    <path
                      d="M107.96 70.49c.42 0 .76.39.77.86l.04 2.39c0 .48-.33.88-.75.88l-18.19.08c-.42 0-.75-.39-.75-.87l.04-2.39c0-.48.35-.87.77-.87l18.07-.08m0-1-18.07.08c-.96 0-1.75.84-1.77 1.85l-.04 2.39c0 .52.19 1.02.54 1.38.33.33.75.51 1.21.51l18.2-.08c.45 0 .88-.19 1.21-.52.35-.36.55-.86.54-1.38l-.04-2.39c-.02-1.02-.81-1.85-1.77-1.85Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M89.89 71.06c-.32 0-.62-.13-.85-.36-.25-.26-.4-.62-.39-1.01l.04-2.36c.01-.74.58-1.35 1.26-1.35l17.95-.07c.69 0 1.26.6 1.27 1.34l.04 2.36c0 .38-.14.75-.39 1.01-.23.23-.53.36-.85.37l-18.07.08Z"
                      className="cls-12"
                    />
                    <path
                      d="M89.89 71.06c-.32 0-.62-.13-.85-.36-.25-.26-.4-.62-.39-1.01l.04-2.36c.01-.74.58-1.35 1.26-1.35l17.95-.07c.69 0 1.26.6 1.27 1.34l.04 2.36c0 .38-.14.75-.39 1.01-.23.23-.53.36-.85.37l-18.07.08Z"
                      style={{
                        fill: "url(#linear-gradient-22)",
                      }}
                    />
                    <path
                      d="M107.9 66.41c.41 0 .76.38.76.85l.04 2.36c0 .48-.32.86-.74.87l-18.07.08c-.42 0-.75-.38-.74-.86l.04-2.36c0-.47.35-.86.77-.86l17.95-.07m0-1-17.95.07c-.95 0-1.74.83-1.76 1.84l-.04 2.36c0 .51.19 1.01.53 1.36.32.33.75.51 1.21.51l18.08-.08c.45 0 .88-.19 1.21-.52.35-.35.54-.85.53-1.37l-.04-2.36c-.02-1.01-.81-1.83-1.76-1.83Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M89.95 66.98c-.32 0-.62-.13-.85-.36a1.44 1.44 0 0 1-.39-1l.04-2.33c.01-.73.58-1.33 1.26-1.34l17.83-.07c.69 0 1.25.6 1.26 1.33l.04 2.33c0 .38-.14.74-.39 1-.23.23-.53.36-.85.37l-17.95.07Z"
                      className="cls-12"
                    />
                    <path
                      d="M89.95 66.98c-.32 0-.62-.13-.85-.36a1.44 1.44 0 0 1-.39-1l.04-2.33c.01-.73.58-1.33 1.26-1.34l17.83-.07c.69 0 1.25.6 1.26 1.33l.04 2.33c0 .38-.14.74-.39 1-.23.23-.53.36-.85.37l-17.95.07Z"
                      style={{
                        fill: "url(#linear-gradient-23)",
                      }}
                    />
                    <path
                      d="M107.84 62.39c.41 0 .75.37.76.84l.04 2.33c0 .47-.32.85-.74.85l-17.95.07c-.41 0-.74-.38-.74-.85l.04-2.33c0-.47.35-.84.76-.85l17.83-.07m0-1-17.83.07c-.95 0-1.74.82-1.76 1.83l-.04 2.33c0 .51.18 1 .53 1.35.32.33.75.51 1.2.51l17.95-.07c.45 0 .88-.18 1.2-.52.34-.35.54-.85.53-1.36l-.04-2.33c-.02-1.01-.8-1.82-1.76-1.82Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M90.01 62.96c-.32 0-.62-.13-.85-.36-.25-.25-.39-.61-.38-.98l.04-2.3c.01-.73.57-1.32 1.25-1.33l17.71-.07c.68 0 1.24.59 1.26 1.32l.04 2.3c0 .37-.13.73-.38.99-.23.23-.53.36-.85.36l-17.83.07Z"
                      className="cls-12"
                    />
                    <path
                      d="M90.01 62.96c-.32 0-.62-.13-.85-.36-.25-.25-.39-.61-.38-.98l.04-2.3c.01-.73.57-1.32 1.25-1.33l17.71-.07c.68 0 1.24.59 1.26 1.32l.04 2.3c0 .37-.13.73-.38.99-.23.23-.53.36-.85.36l-17.83.07Z"
                      style={{
                        fill: "url(#linear-gradient-24)",
                      }}
                    />
                    <path
                      d="M107.78 58.42c.41 0 .74.37.75.83l.04 2.3c0 .46-.32.84-.73.84l-17.83.07c-.41 0-.74-.37-.73-.84l.04-2.3c0-.46.35-.83.76-.83l17.71-.07m0-1-17.71.07c-.95 0-1.73.82-1.75 1.82l-.04 2.3c0 .51.18 1 .53 1.34.32.33.75.51 1.2.51l17.83-.07c.45 0 .88-.18 1.2-.51.34-.35.53-.84.53-1.35l-.04-2.3c-.02-1-.8-1.81-1.75-1.81Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M90.07 58.99c-.32 0-.62-.13-.85-.36-.25-.25-.39-.61-.38-.97l.04-2.27c.01-.72.57-1.31 1.25-1.31l17.59-.07c.68 0 1.24.59 1.25 1.31l.04 2.27c0 .37-.13.72-.38.98-.23.23-.53.36-.85.36L90.07 59Z"
                      className="cls-12"
                    />
                    <path
                      d="M90.07 58.99c-.32 0-.62-.13-.85-.36-.25-.25-.39-.61-.38-.97l.04-2.27c.01-.72.57-1.31 1.25-1.31l17.59-.07c.68 0 1.24.59 1.25 1.31l.04 2.27c0 .37-.13.72-.38.98-.23.23-.53.36-.85.36L90.07 59Z"
                      style={{
                        fill: "url(#linear-gradient-25)",
                      }}
                    />
                    <path
                      d="M107.72 54.5c.41 0 .74.36.75.82l.04 2.27c0 .46-.32.83-.73.83l-17.71.07c-.41 0-.73-.37-.73-.83l.04-2.27c0-.45.34-.82.75-.82l17.59-.07m0-1-17.59.07c-.95 0-1.73.81-1.75 1.81l-.04 2.27c0 .5.18.99.52 1.33.32.33.75.51 1.2.51l17.71-.07c.45 0 .88-.18 1.2-.51.34-.35.53-.83.52-1.33l-.04-2.27c-.02-.99-.8-1.8-1.75-1.8Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M90.13 55.07c-.32 0-.62-.13-.84-.36-.25-.25-.38-.6-.38-.96l.04-2.24c.01-.72.57-1.3 1.24-1.3l17.47-.07c.68 0 1.24.58 1.25 1.3l.04 2.24c0 .36-.13.72-.38.97-.23.23-.53.36-.84.36l-17.6.07Z"
                      className="cls-12"
                    />
                    <path
                      d="M90.13 55.07c-.32 0-.62-.13-.84-.36-.25-.25-.38-.6-.38-.96l.04-2.24c.01-.72.57-1.3 1.24-1.3l17.47-.07c.68 0 1.24.58 1.25 1.3l.04 2.24c0 .36-.13.72-.38.97-.23.23-.53.36-.84.36l-17.6.07Z"
                      style={{
                        fill: "url(#linear-gradient-26)",
                      }}
                    />
                    <path
                      d="M107.66 50.64c.4 0 .73.36.74.81l.04 2.24c0 .45-.32.82-.72.82l-17.59.07c-.41 0-.73-.36-.72-.82l.04-2.24c0-.45.34-.81.75-.81l17.47-.07m0-1-17.47.07c-.94 0-1.72.81-1.74 1.8l-.04 2.24c0 .5.18.98.52 1.32.32.33.75.51 1.2.51l17.6-.07c.45 0 .88-.18 1.2-.51.34-.35.53-.83.52-1.32l-.04-2.24c-.02-.99-.8-1.79-1.74-1.79Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M90.19 51.21c-.32 0-.62-.13-.84-.36-.24-.25-.38-.6-.37-.96l.04-2.21c.01-.71.57-1.29 1.24-1.29l17.36-.07c.68 0 1.23.58 1.24 1.29l.04 2.21c0 .36-.13.71-.37.96-.23.23-.53.36-.84.36l-17.48.07Z"
                      className="cls-12"
                    />
                    <path
                      d="M90.19 51.21c-.32 0-.62-.13-.84-.36-.24-.25-.38-.6-.37-.96l.04-2.21c.01-.71.57-1.29 1.24-1.29l17.36-.07c.68 0 1.23.58 1.24 1.29l.04 2.21c0 .36-.13.71-.37.96-.23.23-.53.36-.84.36l-17.48.07Z"
                      style={{
                        fill: "url(#linear-gradient-27)",
                      }}
                    />
                    <path
                      d="M107.61 46.83c.4 0 .73.36.74.8l.04 2.21c0 .45-.31.81-.72.81l-17.47.07c-.4 0-.72-.36-.72-.8l.04-2.21c0-.44.34-.8.74-.8l17.36-.07m0-1-17.36.07c-.94 0-1.72.8-1.74 1.79l-.04 2.21c0 .49.18.97.52 1.31.32.33.75.51 1.2.51l17.48-.07c.45 0 .88-.18 1.2-.51.34-.34.52-.82.52-1.32l-.04-2.21c-.02-.98-.8-1.78-1.74-1.78Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="M90.24 47.4c-.32 0-.61-.13-.84-.36a1.32 1.32 0 0 1-.37-.95l.04-2.18c.01-.71.57-1.28 1.23-1.28l17.25-.07c.67 0 1.23.57 1.24 1.28l.04 2.18c0 .36-.13.7-.37.95-.23.23-.52.36-.84.36l-17.36.07Z"
                      className="cls-12"
                    />
                    <path
                      d="M90.24 47.4c-.32 0-.61-.13-.84-.36a1.32 1.32 0 0 1-.37-.95l.04-2.18c.01-.71.57-1.28 1.23-1.28l17.25-.07c.67 0 1.23.57 1.24 1.28l.04 2.18c0 .36-.13.7-.37.95-.23.23-.52.36-.84.36l-17.36.07Z"
                      style={{
                        fill: "url(#linear-gradient-28)",
                      }}
                    />
                    <path
                      d="M107.55 43.06c.4 0 .73.35.73.79l.04 2.18c0 .44-.31.8-.71.8l-17.36.07c-.4 0-.72-.36-.71-.79l.04-2.18c0-.44.34-.79.74-.79l17.25-.07m0-1-17.25.07c-.94 0-1.72.8-1.73 1.78l-.04 2.18c0 .49.18.96.51 1.3.32.33.75.51 1.2.51l17.37-.07c.45 0 .88-.18 1.2-.51.33-.34.52-.82.51-1.31l-.04-2.18c-.02-.98-.79-1.77-1.73-1.77Z"
                      className="cls-8"
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="m109.59 71.65-.43-24.05c0-.44.31-.8.71-.8h.98c.4 0 .73.35.74.79l.53 24.05c.01.48-.32.87-.74.87h-1.03c-.42 0-.77-.38-.77-.86Z"
                      className="cls-12"
                    />
                    <path
                      d="m109.59 71.65-.43-24.05c0-.44.31-.8.71-.8h.98c.4 0 .73.35.74.79l.53 24.05c.01.48-.32.87-.74.87h-1.03c-.42 0-.77-.38-.77-.86Z"
                      style={{
                        fill: "url(#linear-gradient-29)",
                      }}
                    />
                  </g>
                  <g className="cls-1">
                    <path
                      d="m85.69 71.75.53-24.06c0-.44.34-.8.74-.8h.98c.4 0 .72.35.71.79l-.43 24.06c0 .48-.36.87-.77.87h-1.03c-.42 0-.75-.38-.74-.86Z"
                      className="cls-12"
                    />
                    <path
                      d="m85.69 71.75.53-24.06c0-.44.34-.8.74-.8h.98c.4 0 .72.35.71.79l-.43 24.06c0 .48-.36.87-.77.87h-1.03c-.42 0-.75-.38-.74-.86Z"
                      style={{
                        fill: "url(#linear-gradient-30)",
                      }}
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

        </>
      )
      break;
    case "Back":
      return (
        <>
          <Tooltip
            className=' input-tooltip  '
            id='pinkytarget'
            target={'.pinkytarget'}
            clickable={true}
          >
            <div className='flex flex-col default small-text py-[16px] px-[12px] '>
              <p>PINKY BUTTON</p>

            </div>

          </Tooltip>

          <InputPopover InputId={"21-22"} InputName={"SECONDARY TRIGGER"} TargetId={"#secondaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} />
          <InputPopover InputId={"1-2"} InputName={"PRIMARY TRIGGER"} TargetId={"#primaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} />
          <InputPopover
            InputId={"5"} InputName={"PINKY BUTTON"} TargetId={"#pinkyButton_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} />
          <InputPopover InputId={"4"} InputName={"SIDE INDEX BUTTON"} TargetId={"#sideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"} />

          <div>

            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="Layer_2"
              viewBox="0 0 281.223 545.659"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1={112.609}
                  x2={174.18}
                  y1={6.567}
                  y2={466.777}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.251} stopColor="#002e27" />
                  <stop offset={0.394} stopColor="#00382f" />
                  <stop offset={0.641} stopColor="#005447" />
                  <stop offset={0.959} stopColor="#00806d" />
                  <stop offset={1} stopColor="#008773" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1={52.765}
                  x2={389.096}
                  y1={329.619}
                  y2={9.515}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00a38a" stopOpacity={0.2} />
                  <stop
                    offset={0.317}
                    stopColor="rgba(0,162,137,.215)"
                    stopOpacity={0.215}
                  />
                  <stop
                    offset={0.431}
                    stopColor="rgba(0,160,136,.268)"
                    stopOpacity={0.268}
                  />
                  <stop
                    offset={0.513}
                    stopColor="rgba(0,157,133,.36)"
                    stopOpacity={0.36}
                  />
                  <stop
                    offset={0.579}
                    stopColor="rgba(0,152,129,.492)"
                    stopOpacity={0.492}
                  />
                  <stop
                    offset={0.635}
                    stopColor="rgba(0,146,124,.664)"
                    stopOpacity={0.664}
                  />
                  <stop
                    offset={0.684}
                    stopColor="rgba(0,139,118,.872)"
                    stopOpacity={0.872}
                  />
                  <stop offset={0.709} stopColor="#008773" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1={151.904}
                  x2={132.325}
                  y1={-119.936}
                  y2={123.73}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#008773" stopOpacity={0} />
                  <stop
                    offset={0.105}
                    stopColor="rgba(0,149,126,.216)"
                    stopOpacity={0.216}
                  />
                  <stop
                    offset={0.243}
                    stopColor="rgba(0,166,140,.466)"
                    stopOpacity={0.466}
                  />
                  <stop
                    offset={0.366}
                    stopColor="rgba(0,178,149,.648)"
                    stopOpacity={0.648}
                  />
                  <stop
                    offset={0.466}
                    stopColor="rgba(0,186,155,.76)"
                    stopOpacity={0.76}
                  />
                  <stop offset={0.532} stopColor="#00bd9e" stopOpacity={0.8} />
                  <stop
                    offset={0.726}
                    stopColor="rgba(0,187,156,.79)"
                    stopOpacity={0.79}
                  />
                  <stop
                    offset={0.796}
                    stopColor="rgba(0,180,150,.754)"
                    stopOpacity={0.754}
                  />
                  <stop
                    offset={0.845}
                    stopColor="rgba(0,169,140,.692)"
                    stopOpacity={0.692}
                  />
                  <stop
                    offset={0.886}
                    stopColor="rgba(0,153,125,.602)"
                    stopOpacity={0.602}
                  />
                  <stop
                    offset={0.92}
                    stopColor="rgba(0,132,106,.486)"
                    stopOpacity={0.486}
                  />
                  <stop
                    offset={0.95}
                    stopColor="rgba(0,107,82,.342)"
                    stopOpacity={0.342}
                  />
                  <stop
                    offset={0.977}
                    stopColor="rgba(0,77,54,.176)"
                    stopOpacity={0.176}
                  />
                  <stop offset={1} stopColor="#002e1a" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1={93.393}
                  x2={218.3}
                  y1={263.816}
                  y2={263.816}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.001} stopColor="#003029" />
                  <stop offset={0.152} stopColor="#00352d" />
                  <stop offset={0.338} stopColor="#00443a" />
                  <stop offset={0.541} stopColor="#005d4f" />
                  <stop offset={0.682} stopColor="#007362" />
                  <stop offset={0.738} stopColor="#006d5d" />
                  <stop offset={0.806} stopColor="#005e50" />
                  <stop offset={0.879} stopColor="#00463b" />
                  <stop offset={0.937} stopColor="#002e27" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-5"
                  x1={82.137}
                  x2={217.254}
                  y1={378.947}
                  y2={378.947}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.017} stopColor="#003029" />
                  <stop offset={0.994} stopColor="#004f44" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1={82.242}
                  x2={220.018}
                  y1={376.089}
                  y2={381.164}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#003029" />
                  <stop offset={0.682} stopColor="#00f0cc" stopOpacity={0.2} />
                  <stop
                    offset={0.774}
                    stopColor="rgba(0,225,191,.185)"
                    stopOpacity={0.185}
                  />
                  <stop
                    offset={0.857}
                    stopColor="rgba(0,181,154,.14)"
                    stopOpacity={0.14}
                  />
                  <stop
                    offset={0.935}
                    stopColor="rgba(0,108,92,.064)"
                    stopOpacity={0.064}
                  />
                  <stop offset={0.984} stopColor="#002e27" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-7"
                  x1={101.481}
                  x2={104.807}
                  y1={32.238}
                  y2={53.329}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#244a41" stopOpacity={0} />
                  <stop
                    offset={0.153}
                    stopColor="rgba(15,176,148,.057)"
                    stopOpacity={0.057}
                  />
                  <stop offset={0.317} stopColor="#00ffd4" stopOpacity={0.1} />
                  <stop offset={0.507} stopColor="#003029" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-8"
                  x1={-13.018}
                  x2={207.88}
                  y1={90.236}
                  y2={42.795}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.089} stopColor="#244a41" stopOpacity={0} />
                  <stop
                    offset={0.147}
                    stopColor="rgba(29,104,89,.051)"
                    stopOpacity={0.051}
                  />
                  <stop
                    offset={0.252}
                    stopColor="rgba(13,185,155,.185)"
                    stopOpacity={0.185}
                  />
                  <stop offset={0.331} stopColor="#00ffd4" stopOpacity={0.3} />
                  <stop
                    offset={0.375}
                    stopColor="rgba(0,227,188,.26)"
                    stopOpacity={0.26}
                  />
                  <stop
                    offset={0.45}
                    stopColor="rgba(0,152,127,.151)"
                    stopOpacity={0.151}
                  />
                  <stop offset={0.535} stopColor="#003029" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-9"
                  x1={30.85}
                  x2={87.569}
                  y1={127.486}
                  y2={197.694}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#002e27" stopOpacity={0} />
                  <stop offset={0.687} stopColor="#00241f" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-10"
                  x1={125.932}
                  x2={90.89}
                  y1={48.737}
                  y2={-20.71}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#111113" />
                  <stop offset={0.112} stopColor="#0f2624" />
                  <stop offset={0.344} stopColor="#0b5d50" />
                  <stop offset={0.673} stopColor="#05b497" />
                  <stop offset={0.935} stopColor="#00ffd4" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-11"
                  x1={189.582}
                  x2={137.153}
                  y1={423.793}
                  y2={535.425}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00a187" />
                  <stop offset={0.005} stopColor="#009b82" />
                  <stop offset={0.034} stopColor="#00816c" />
                  <stop offset={0.065} stopColor="#006d5c" />
                  <stop offset={0.101} stopColor="#005e50" />
                  <stop offset={0.144} stopColor="#005649" />
                  <stop offset={0.215} stopColor="#005447" />
                  <stop
                    offset={0.262}
                    stopColor="rgba(0,78,66,.857)"
                    stopOpacity={0.857}
                  />
                  <stop
                    offset={0.405}
                    stopColor="rgba(0,64,54,.485)"
                    stopOpacity={0.485}
                  />
                  <stop
                    offset={0.543}
                    stopColor="rgba(0,54,45,.217)"
                    stopOpacity={0.217}
                  />
                  <stop
                    offset={0.675}
                    stopColor="rgba(0,48,40,.055)"
                    stopOpacity={0.055}
                  />
                  <stop offset={0.792} stopColor="#002e27" stopOpacity={0} />
                  <stop offset={1} stopColor="#00a187" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-12"
                  x1={207.541}
                  x2={187.822}
                  y1={95.499}
                  y2={-0.389}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#176356" />
                  <stop offset={0.161} stopColor="#188b75" />
                  <stop offset={0.346} stopColor="#1ab293" />
                  <stop offset={0.516} stopColor="#1bcea9" />
                  <stop offset={0.664} stopColor="#1bdfb7" />
                  <stop offset={0.773} stopColor="#1ce6bc" />
                  <stop offset={1} stopColor="#065f4f" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-13"
                  x1={191.934}
                  x2={188.815}
                  y1={13.541}
                  y2={-11.987}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.169} stopColor="#176356" stopOpacity={0} />
                  <stop
                    offset={0.257}
                    stopColor="rgba(18,130,108,.204)"
                    stopOpacity={0.204}
                  />
                  <stop
                    offset={0.373}
                    stopColor="rgba(12,168,134,.443)"
                    stopOpacity={0.443}
                  />
                  <stop
                    offset={0.484}
                    stopColor="rgba(8,199,156,.642)"
                    stopOpacity={0.642}
                  />
                  <stop
                    offset={0.588}
                    stopColor="rgba(4,223,173,.797)"
                    stopOpacity={0.797}
                  />
                  <stop
                    offset={0.682}
                    stopColor="rgba(2,240,185,.908)"
                    stopOpacity={0.908}
                  />
                  <stop
                    offset={0.764}
                    stopColor="rgba(0,251,193,.976)"
                    stopOpacity={0.976}
                  />
                  <stop offset={0.825} stopColor="#00ffc4" />
                  <stop
                    offset={0.875}
                    stopColor="rgba(13,211,166,.728)"
                    stopOpacity={0.728}
                  />
                  <stop
                    offset={0.991}
                    stopColor="rgba(46,103,92,.052)"
                    stopOpacity={0.052}
                  />
                  <stop offset={1} stopColor="#315f57" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-14"
                  x1={97.402}
                  x2={83.838}
                  y1={398.395}
                  y2={428.566}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#005950" />
                  <stop offset={0.989} stopColor="#006e62" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-15"
                  x1={100.694}
                  x2={69.796}
                  y1={399.759}
                  y2={415.274}
                  gradientTransform="rotate(73.77 89.334 405.465)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00d4bc" />
                  <stop offset={0.721} stopColor="#006e62" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-16"
                  x1={121.653}
                  x2={70.746}
                  y1={81.401}
                  y2={31.013}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.238} stopColor="#003029" />
                  <stop offset={0.322} stopColor="#00362e" />
                  <stop offset={0.437} stopColor="#00483d" />
                  <stop offset={0.571} stopColor="#006556" />
                  <stop offset={0.72} stopColor="#008f79" />
                  <stop offset={0.879} stopColor="#00c3a5" />
                  <stop offset={1} stopColor="#00f0cc" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-17"
                  x1={99.339}
                  x2={136.459}
                  y1={59.801}
                  y2={82.394}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#006e62" />
                  <stop offset={1} stopColor="#003029" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-18"
                  x1={97.036}
                  x2={96.575}
                  y1={211.049}
                  y2={116.519}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#008773" />
                  <stop offset={0.469} stopColor="#008571" />
                  <stop offset={0.591} stopColor="#00705f" />
                  <stop offset={1} stopColor="#002e27" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-19"
                  x1={46.093}
                  x2={49.607}
                  y1={135.928}
                  y2={81.774}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#008773" stopOpacity={0} />
                  <stop
                    offset={0.079}
                    stopColor="rgba(0,163,127,.276)"
                    stopOpacity={0.276}
                  />
                  <stop
                    offset={0.175}
                    stopColor="rgba(0,196,141,.583)"
                    stopOpacity={0.583}
                  />
                  <stop
                    offset={0.255}
                    stopColor="rgba(0,219,151,.808)"
                    stopOpacity={0.808}
                  />
                  <stop
                    offset={0.314}
                    stopColor="rgba(0,234,157,.948)"
                    stopOpacity={0.948}
                  />
                  <stop offset={0.346} stopColor="#00f0a0" />
                  <stop offset={0.577} stopColor="#00aa74" />
                  <stop offset={1} stopColor="#002e27" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-20"
                  x1={44.938}
                  x2={76.04}
                  y1={150.774}
                  y2={60.637}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.183} stopColor="#00a187" />
                  <stop offset={0.188} stopColor="#009b82" />
                  <stop offset={0.214} stopColor="#00816c" />
                  <stop offset={0.244} stopColor="#006d5c" />
                  <stop offset={0.277} stopColor="#005e50" />
                  <stop offset={0.317} stopColor="#005649" />
                  <stop offset={0.383} stopColor="#005447" />
                  <stop
                    offset={0.395}
                    stopColor="rgba(0,72,61,.703)"
                    stopOpacity={0.703}
                  />
                  <stop
                    offset={0.409}
                    stopColor="rgba(0,62,53,.445)"
                    stopOpacity={0.445}
                  />
                  <stop
                    offset={0.426}
                    stopColor="rgba(0,55,46,.244)"
                    stopOpacity={0.244}
                  />
                  <stop
                    offset={0.446}
                    stopColor="rgba(0,49,42,.103)"
                    stopOpacity={0.103}
                  />
                  <stop
                    offset={0.476}
                    stopColor="rgba(0,46,39,.022)"
                    stopOpacity={0.022}
                  />
                  <stop offset={0.556} stopColor="#002e27" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-21"
                  x1={31.987}
                  x2={70.897}
                  y1={134.437}
                  y2={114.384}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00f0cc" stopOpacity={0} />
                  <stop
                    offset={0.275}
                    stopColor="rgba(0,224,190,.066)"
                    stopOpacity={0.066}
                  />
                  <stop
                    offset={0.484}
                    stopColor="rgba(0,173,147,.275)"
                    stopOpacity={0.275}
                  />
                  <stop
                    offset={0.669}
                    stopColor="rgba(0,88,74,.627)"
                    stopOpacity={0.627}
                  />
                  <stop offset={0.737} stopColor="#002e27" stopOpacity={0.8} />
                  <stop offset={1} />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-22"
                  x1={33.915}
                  x2={26.889}
                  y1={145.73}
                  y2={99.149}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.042} stopColor="#008773" />
                  <stop offset={0.132} stopColor="#009e86" />
                  <stop offset={0.259} stopColor="#00b99d" />
                  <stop offset={0.372} stopColor="#00c9ab" />
                  <stop offset={0.459} stopColor="#00cfb0" />
                  <stop offset={0.568} stopColor="#00b196" />
                  <stop offset={0.737} stopColor="#008974" />
                  <stop offset={0.825} stopColor="#007a67" />
                  <stop offset={0.857} stopColor="#007d6a" />
                  <stop offset={0.89} stopColor="#008974" />
                  <stop offset={0.922} stopColor="#009d85" />
                  <stop offset={0.954} stopColor="#00b99d" />
                  <stop offset={0.985} stopColor="#00dcbb" />
                  <stop offset={1} stopColor="#00f0cc" />
                </linearGradient>
                <radialGradient
                  id="radial-gradient"
                  cx={22.133}
                  cy={70.157}
                  r={73.561}
                  fx={-31.523}
                  fy={118.002}
                  gradientTransform="matrix(.56786 .82313 -.83794 .57808 68.333 11.397)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.325} stopColor="#00ffd4" stopOpacity={0.3} />
                  <stop
                    offset={0.399}
                    stopColor="rgba(1,246,204,.286)"
                    stopOpacity={0.286}
                  />
                  <stop
                    offset={0.467}
                    stopColor="rgba(7,219,183,.242)"
                    stopOpacity={0.242}
                  />
                  <stop
                    offset={0.534}
                    stopColor="rgba(15,175,147,.168)"
                    stopOpacity={0.168}
                  />
                  <stop
                    offset={0.599}
                    stopColor="rgba(28,113,96,.065)"
                    stopOpacity={0.065}
                  />
                  <stop offset={0.632} stopColor="#244a41" stopOpacity={0} />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-2"
                  cx={130.446}
                  cy={310.784}
                  r={425.922}
                  fx={204.353}
                  fy={171.308}
                  gradientTransform="matrix(.77535 -.63153 .78625 .96531 -215.007 93.216)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.198} stopColor="#244a41" stopOpacity={0} />
                  <stop offset={0.484} stopColor="#0d211b" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-3"
                  cx={179.481}
                  cy={48.694}
                  r={101.962}
                  fx={125.547}
                  fy={48.694}
                  gradientTransform="rotate(-128.315 178.013 51.725) scale(1 1.124)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#003029" stopOpacity={0} />
                  <stop offset={0} stopColor="#00b087" />
                  <stop
                    offset={0.114}
                    stopColor="rgba(0,172,132,.954)"
                    stopOpacity={0.954}
                  />
                  <stop
                    offset={0.293}
                    stopColor="rgba(0,162,126,.83)"
                    stopOpacity={0.83}
                  />
                  <stop
                    offset={0.514}
                    stopColor="rgba(0,145,115,.626)"
                    stopOpacity={0.626}
                  />
                  <stop
                    offset={0.767}
                    stopColor="rgba(0,122,100,.346)"
                    stopOpacity={0.346}
                  />
                  <stop offset={1} stopColor="#006355" stopOpacity={0.053} />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-4"
                  cx={114.016}
                  cy={65.918}
                  r={20.13}
                  fx={114.016}
                  fy={65.918}
                  gradientTransform="translate(0 1.759)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.449} stopColor="#00ffda" />
                  <stop offset={0.518} stopColor="#00f6d2" />
                  <stop offset={0.629} stopColor="#00debd" />
                  <stop offset={0.769} stopColor="#00b79b" />
                  <stop offset={0.931} stopColor="#00826c" />
                  <stop offset={1} stopColor="#006957" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-5"
                  cx={90.397}
                  cy={160.255}
                  r={52.801}
                  fx={123.165}
                  fy={201.658}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#00a189" />
                  <stop offset={0.203} stopColor="#009d85" />
                  <stop offset={0.387} stopColor="#00927c" />
                  <stop offset={0.563} stopColor="#007f6c" />
                  <stop offset={0.736} stopColor="#006556" />
                  <stop offset={0.903} stopColor="#00443a" />
                  <stop offset={1} stopColor="#002e27" />
                </radialGradient>
                <clipPath id="clippath">
                  <path
                    id="_Clipping_ZXPath_"
                    d="M242.706 54.699c-.265-1.294-6.715-31.094-25.812-41.55-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.435.558c-13.745-.589-31.695.134-51.938 5.036-36.642 8.874-62.391 26.984-76.491 38.717L13.862 59.735C11.499 61.495 3.588 67.841.956 79.251c-.684 2.963-2.502 11.417 1.889 20.46 5.421 11.167 16.204 14.779 18.257 15.424l28.506 43.284 5.673 5.673c1.489 1.489 5.424 4.318 10.716 5.988 4.971 1.569 10.086 1.261 10.086 1.261s11.331 8.23 16.232 38.295l.315 10.401 12.607 21.117a87.644 87.644 0 0 1 5.96 28.761 87.693 87.693 0 0 1-4.735 31.674l-.277 7.023a102.748 102.748 0 0 1 3.555 22.181c.788 16.059-2.367 29.224-5.243 37.866l-2.33 13.399c-1.669.073-5.02.455-8.447 2.622-5.098 3.223-6.831 8.161-7.282 9.612l-4.306 28.232 98.566 29.963 60.144 5.37 3.606-55.948-2.98-20.417c.228-17.577.116-35.647-.396-54.183a1337.382 1337.382 0 0 0-8.494-117.997 40.819 40.819 0 0 0-7.421-19.131 230.218 230.218 0 0 0-3.681-4.969c-8.888-11.657-11.549-12.767-16.388-19.728-4.78-6.875-12.285-17.671-11.59-31.35.587-11.547 6.769-20.269 11.075-25.108l14.043-2.746 1.824-1.378 6.887-13.552 10.616-1.987 3.819-4.457.94-30.207Z"
                    className="cls-2"
                  />
                </clipPath>
                <clipPath id="clippath-1">
                  <path
                    d="M68.771 133.797a88.787 88.787 0 0 1 4.093 9.551c1.424 3.947 6.614 19.212 5.001 39.754a101.143 101.143 0 0 1-4.541 22.981c.217.627.572 1.43 1.169 2.26a8.91 8.91 0 0 0 3.125 2.691l14.802 2.011 9.771-.744a20.364 20.364 0 0 0 10.597-4.316c.55-10.538.101-25.488-4.594-42.551-3.013-10.952-8.998-32.497-27.245-51.402-2.812-2.913-6.991-6.57-6.991-6.57l-6.119 2.951s-.047 4.65.003 8.668c2.061 3.73 4.718 9.646 6.779 13.376l-5.852 1.339Z"
                    className="cls-2"
                  />
                </clipPath>
                <clipPath id="clippath-2">
                  <path
                    d="M71.201 127.448c-3.477-.44-5.068-.564-8.546-1.004l-16.841 16.765a12.956 12.956 0 0 1-4.488 2.934l-.346.132c-4.947 1.864-10.461 3.002-13.706 3.57a10.325 10.325 0 0 1-5.336-.477l-3.06-1.123s2.517-7.922 3.486-12.598c.896-4.326 2.36-11.528 2.072-20.907a78.973 78.973 0 0 0-.891-9.648 2.444 2.444 0 0 1 1.982-2.774l20.141-3.638a16.01 16.01 0 0 1 6.472 1.206c5.575 6.724 10.101 14.618 15.676 21.341 1.407 2.569 1.978 3.651 3.384 6.22Z"
                    className="cls-2"
                  />
                </clipPath>
                <style>
                  {".cls-2,.cls-22{fill:none;stroke-width:0}.cls-22{fill:#003029}"}
                </style>
              </defs>
              <g id="Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK">
                <g id="Layer_13">
                  <path
                    d="M242.706 54.699c-.265-1.294-6.715-31.094-25.812-41.55-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.435.558c-13.745-.589-31.695.134-51.938 5.036-36.642 8.874-62.391 26.984-76.491 38.717L13.862 59.735C11.499 61.495 3.588 67.841.956 79.251c-.684 2.963-2.502 11.417 1.889 20.46 5.421 11.167 16.204 14.779 18.257 15.424l28.506 43.284 5.673 5.673c1.489 1.489 5.424 4.318 10.716 5.988 4.971 1.569 7.99.933 10.086 1.261 5.059.791 11.331 8.23 16.232 38.295l.315 10.401 12.607 21.117a87.644 87.644 0 0 1 5.96 28.761 87.693 87.693 0 0 1-4.735 31.674l-.277 7.023a102.748 102.748 0 0 1 3.555 22.181c.788 16.059-2.367 29.224-5.243 37.866l-2.33 13.399c-1.669.073-5.02.455-8.447 2.622-5.098 3.223-6.831 8.161-7.282 9.612l-4.306 28.232 98.566 29.963 60.144 5.37 3.606-55.948-2.98-20.417c.228-17.577.116-35.647-.396-54.183a1337.382 1337.382 0 0 0-8.494-117.997 40.819 40.819 0 0 0-7.421-19.131 230.218 230.218 0 0 0-3.681-4.969c-8.888-11.657-11.549-12.767-16.388-19.728-4.78-6.875-12.285-17.671-11.59-31.35.587-11.547 6.769-20.269 11.075-25.108l14.043-2.746 1.824-1.378 6.887-13.552 10.616-1.987 3.819-4.457.94-30.207Z"
                    style={{
                      fill: "url(#linear-gradient)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M242.706 54.699c-.265-1.294-6.715-31.094-25.812-41.55-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.435.558c-13.745-.589-31.695.134-51.938 5.036-36.642 8.874-62.391 26.984-76.491 38.717L13.862 59.735C11.499 61.495 3.588 67.841.956 79.251c-.684 2.963-2.502 11.417 1.889 20.46 5.421 11.167 16.204 14.779 18.257 15.424l28.506 43.284 5.673 5.673c1.489 1.489 5.424 4.318 10.716 5.988 4.971 1.569 7.99.933 10.086 1.261 5.059.791 11.331 8.23 16.232 38.295l.315 10.401 12.607 21.117a87.644 87.644 0 0 1 5.96 28.761 87.693 87.693 0 0 1-4.735 31.674l-.277 7.023a102.748 102.748 0 0 1 3.555 22.181c.788 16.059-2.367 29.224-5.243 37.866l-2.33 13.399c-1.669.073-5.02.455-8.447 2.622-5.098 3.223-6.831 8.161-7.282 9.612l-4.306 28.232 98.566 29.963 60.144 5.37 3.606-55.948-2.98-20.417c.228-17.577.116-35.647-.396-54.183a1337.382 1337.382 0 0 0-8.494-117.997 40.819 40.819 0 0 0-7.421-19.131 230.218 230.218 0 0 0-3.681-4.969c-8.888-11.657-11.549-12.767-16.388-19.728-4.78-6.875-12.285-17.671-11.59-31.35.587-11.547 6.769-20.269 11.075-25.108l14.043-2.746 1.824-1.378 6.887-13.552 10.616-1.987 3.819-4.457.94-30.207Z"
                    style={{
                      fill: "url(#linear-gradient-2)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M242.706 54.699c-.265-1.294-6.715-31.094-25.812-41.55-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.435.558c-13.745-.589-31.695.134-51.938 5.036-36.642 8.874-62.391 26.984-76.491 38.717L13.862 59.735C11.499 61.495 3.588 67.841.956 79.251c-.684 2.963-2.502 11.417 1.889 20.46 5.421 11.167 16.204 14.779 18.257 15.424l28.506 43.284 5.673 5.673c1.489 1.489 5.424 4.318 10.716 5.988 4.971 1.569 7.99.933 10.086 1.261 5.059.791 11.331 8.23 16.232 38.295l.315 10.401 12.607 21.117a87.644 87.644 0 0 1 5.96 28.761 87.693 87.693 0 0 1-4.735 31.674l-.277 7.023a102.748 102.748 0 0 1 3.555 22.181c.788 16.059-2.367 29.224-5.243 37.866l-2.33 13.399c-1.669.073-5.02.455-8.447 2.622-5.098 3.223-6.831 8.161-7.282 9.612l-4.306 28.232 98.566 29.963 60.144 5.37 3.606-55.948-2.98-20.417c.228-17.577.116-35.647-.396-54.183a1337.382 1337.382 0 0 0-8.494-117.997 40.819 40.819 0 0 0-7.421-19.131 230.218 230.218 0 0 0-3.681-4.969c-8.888-11.657-11.549-12.767-16.388-19.728-4.78-6.875-12.285-17.671-11.59-31.35.587-11.547 6.769-20.269 11.075-25.108l14.043-2.746 1.824-1.378 6.887-13.552 10.616-1.987 3.819-4.457.94-30.207Z"
                    style={{
                      fill: "url(#linear-gradient-3)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M117.003 297.021c7.519-1.417 10.651-.21 29.306 1.485 9.095.826 12.1.88 19.112 1.972 2.438.38 4.651.774 6.588 1.148a8.672 8.672 0 0 0 7.563-2.192 8.492 8.492 0 0 0 2.665-5.509l2.231-27.098a22.733 22.733 0 0 0-4.626-15.713l-4.735-6.167a14.83 14.83 0 0 0-2.52-2.568 81.744 81.744 0 0 0-4.836-3.573c-12.104-8.274-23.05-10.716-42.751-15.479-10.107-2.443-17.455-3.448-25.89-3.477a116.67 116.67 0 0 0-4.692.107 1.066 1.066 0 0 0-.872 1.611l11.647 19.508c.032.053.058.106.08.163a87.634 87.634 0 0 1 5.927 28.677 87.695 87.695 0 0 1-4.622 31.344.97.97 0 0 0-.05.238l-.571 6.285.955-7.163c.051-.379.295-.703.65-.845a50.603 50.603 0 0 1 9.441-2.754Z"
                    style={{
                      fill: "url(#linear-gradient-4)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M196.968 327.705a26.008 26.008 0 0 0-8.005-8.704c-4.957-3.376-12.194-8.119-15.309-9.238-2.026-.728-7.294-2.484-28.047-4.156a486.523 486.523 0 0 0-19.982-1.2h-.002a33.024 33.024 0 0 0-9.065.005 33.115 33.115 0 0 0-10.589 3.364.018.018 0 0 0-.009.022 102.7 102.7 0 0 1 3.782 22.996c.788 16.058-2.367 29.223-5.243 37.865v.003l-2.327 13.382c-.002.009-.008.016-.017.016-1.674.075-5.015.46-8.433 2.621-5.096 3.222-7.133 10.145-7.585 11.599v.003l-4 26.226c-.001.01.004.019.014.022l57.992 17.629h.001l57.805 13.637a.02.02 0 0 0 .024-.019l1.467-116.439a19.065 19.065 0 0 0-2.472-9.634Z"
                    style={{
                      fill: "url(#linear-gradient-5)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M196.968 327.705a26.008 26.008 0 0 0-8.005-8.704c-4.957-3.376-12.194-8.119-15.309-9.238-2.026-.728-7.294-2.484-28.047-4.156a486.523 486.523 0 0 0-19.982-1.2h-.002a33.024 33.024 0 0 0-9.065.005 33.115 33.115 0 0 0-10.589 3.364.018.018 0 0 0-.009.022 102.7 102.7 0 0 1 3.782 22.996c.788 16.058-2.367 29.223-5.243 37.865v.003l-2.327 13.382c-.002.009-.008.016-.017.016-1.674.075-5.015.46-8.433 2.621-5.096 3.222-7.133 10.145-7.585 11.599v.003l-4 26.226c-.001.01.004.019.014.022l57.992 17.629h.001l57.805 13.637a.02.02 0 0 0 .024-.019l1.467-116.439a19.065 19.065 0 0 0-2.472-9.634Z"
                    style={{
                      fill: "url(#linear-gradient-6)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <g
                  id="Layer_17_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"
                  style={{
                    clipPath: "url(#clippath)",
                  }}
                >
                  <image
                    xlinkHref="data:image/png;base64,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"
                    width={249}
                    height={77}
                    transform="translate(-5.773 54.497)"
                  />
                  <g
                    style={{
                      opacity: 0.53,
                    }}
                  >
                    <path
                      d="M186.728 18.914c-33.26 8.316-66.506 17.163-99.766 25.48-20.814 3.181-48.036 9.888-68.85 13.068"
                      style={{
                        fill: "url(#linear-gradient-7)",
                        strokeWidth: 0,
                      }}
                    />
                    <image
                      xlinkHref="data:image/png;base64,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"
                      width={171}
                      height={47}
                      transform="translate(17.227 14.497)"
                    />
                  </g>
                  <path
                    d="m-1.813 63.096 2.117 40.952 51.879-8.943A140.379 140.379 0 0 1 75.3 93.067l20.517-.106-2.508-51.659-24.426 6.642-70.696 15.152Z"
                    style={{
                      fill: "url(#linear-gradient-8)",
                      opacity: 0.46,
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="m-1.813 63.096 2.117 40.952 51.879-8.943A140.379 140.379 0 0 1 75.3 93.067l20.517-.106-2.508-51.659-24.426 6.642-70.696 15.152Z"
                    style={{
                      fill: "url(#radial-gradient)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="m61.024 89.722 171.212.505 44.645 441.619-292.869-112.04L.182 101.682l60.842-11.96z"
                    style={{
                      fill: "url(#radial-gradient-2)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="m.304 104.048 64.361-11.087 14.395 17.165 11.501 73.707-66.593 12.169L.304 104.048z"
                    style={{
                      fill: "url(#linear-gradient-9)",
                      strokeWidth: 0,
                    }}
                  />
                  <image
                    xlinkHref="data:image/png;base64,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"
                    width={293}
                    height={477}
                    transform="translate(60.227 71.497)"
                  />
                </g>
                <g id="greebles_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK">
                  <path
                    d="M144.812 2.266s-35.117 13.174-68.668 33.17l77.787-16.585-9.118-16.585Z"
                    style={{
                      fill: "url(#linear-gradient-10)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M82.135 422.525c-3.967-.408-9.368-.338-15.188 1.729-3.176 1.128-6.11 2.168-8.349 4.911-5.251 6.435-2.105 14.865-1.964 15.224a238.477 238.477 0 0 1 26.652 29.71 39.192 39.192 0 0 0 5.424 4.814c2.356 1.723 3.837 2.387 6.465 4.469a42.075 42.075 0 0 1 3.679 3.281l-6.449 22.464c3.799.631 9.071 1.545 15.34 2.757 7.249 1.402 17.831 3.467 31.205 6.974 13.132 3.444 19.856 5.243 27.615 9.003a100.19 100.19 0 0 1 15.751 9.515l5.419 8.282a16.52 16.52 0 0 0 4.271-2.728c1.319-1.153 2.25-2.686 2.715-4.376l2.05-7.452a67.227 67.227 0 0 0 10.104 1.627c10.813.903 19.074-1.081 24.424-2.41 6.275-1.559 15.543-4.577 25.777-10.777a4.61 4.61 0 0 1 2.674-.668l9.527.613c1.306-.299 3.296-.967 4.947-2.629 1.765-1.778 2.252-3.796 2.736-5.689 3.028-11.85 4.315-12.512 4.263-17.835-.035-3.591-.642-5.572-.943-6.442-1.053-3.04-2.746-5.15-3.875-6.352l-56.627-36.123-27.102-13.865c-7.264-2.793-13.481-4.387-18.036-5.34-6.954-1.454-9.659-1.335-11.977.079-2.353 1.436-3.844 3.925-5.747 7.104a40.696 40.696 0 0 0-3.033 6.203l-32.673-10.841a68.411 68.411 0 0 0-14.283-3.095l-15.426-1.648-9.363-.489Z"
                    className="cls-22"
                  />
                  <path
                    d="M82.135 422.525c-3.967-.408-9.368-.338-15.188 1.729-3.176 1.128-6.11 2.168-8.349 4.911-5.251 6.435-2.105 14.865-1.964 15.224a238.477 238.477 0 0 1 26.652 29.71 39.192 39.192 0 0 0 5.424 4.814c2.356 1.723 3.837 2.387 6.465 4.469a42.075 42.075 0 0 1 3.679 3.281l-6.449 22.464c3.799.631 9.071 1.545 15.34 2.757 7.249 1.402 17.831 3.467 31.205 6.974 13.132 3.444 19.856 5.243 27.615 9.003a100.19 100.19 0 0 1 15.751 9.515l5.419 8.282a16.52 16.52 0 0 0 4.271-2.728c1.319-1.153 2.25-2.686 2.715-4.376l2.05-7.452a67.227 67.227 0 0 0 10.104 1.627c10.813.903 19.074-1.081 24.424-2.41 6.275-1.559 15.543-4.577 25.777-10.777a4.61 4.61 0 0 1 2.674-.668l9.527.613c1.306-.299 3.296-.967 4.947-2.629 1.765-1.778 2.252-3.796 2.736-5.689 3.028-11.85 4.315-12.512 4.263-17.835-.035-3.591-.642-5.572-.943-6.442-1.053-3.04-2.746-5.15-3.875-6.352l-56.627-36.123-27.102-13.865c-7.264-2.793-13.481-4.387-18.036-5.34-6.954-1.454-9.659-1.335-11.977.079-2.353 1.436-3.844 3.925-5.747 7.104a40.696 40.696 0 0 0-3.033 6.203l-32.673-10.841a68.411 68.411 0 0 0-14.283-3.095l-15.426-1.648-9.363-.489Z"
                    style={{
                      fill: "url(#linear-gradient-11)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M216.895 13.149c-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.436.558C167.658.053 161.562-.96 144.811 2.267l8.993 15.078 11.979-.624s4.647-.123 7.823.609c.919.212 4.742 1.145 8.875 3.858 1.563 1.026 5.538 3.86 11.488 13.6a104.324 104.324 0 0 1 8.485 17.352l11.696 40.821 23.797-3.598 1.757-2.051 2.062-2.406.94-30.207c-.265-1.294-6.715-31.094-25.812-41.55Z"
                    style={{
                      fill: "url(#linear-gradient-12)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M216.895 13.149c-8.661-4.743-17.313-5.351-17.313-5.351a39.897 39.897 0 0 0-14.165 1.574L179.436.558C167.658.053 161.562-.96 144.811 2.267l8.993 15.078 11.979-.624s4.647-.123 7.823.609c.919.212 4.742 1.145 8.875 3.858 1.563 1.026 5.538 3.86 11.488 13.6a104.324 104.324 0 0 1 8.485 17.352l11.696 40.821 23.797-3.598 1.757-2.051 2.062-2.406.94-30.207c-.265-1.294-6.715-31.094-25.812-41.55Z"
                    style={{
                      fill: "url(#linear-gradient-13)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="m144.812 2.266 1.027 1.642 7.363 11.36a.605.605 0 0 0 .526.275l14.417-.477c2.336.049 5.305.39 8.551 1.495 7.646 2.605 12.247 8.217 15.007 11.701 12.041 15.2 18.691 44.345 19.35 47.309 1.021 5.887 2.076 11.502 3.098 17.389l-6.575 2.161-1.155-1.168c1.799-5.149 2.332-10.591 1.649-15.941a114.298 114.298 0 0 0-.865-5.652c-1.201-6.726-2.97-15.043-9.67-27.204-4.15-7.531-8.6-14.996-11.159-17.641-3.112-3.216-5.403-5.976-9.431-7.466-7.486-2.769-15.87-1.454-16.378-1.454l-7.4.497a75.051 75.051 0 0 1-2.559-4.388c-2.054-3.812-4.624-9.107-5.795-12.44Z"
                    className="cls-22"
                  />
                  <path
                    d="m144.812 2.266 1.027 1.642 7.363 11.36a.605.605 0 0 0 .526.275l14.417-.477c2.336.049 5.305.39 8.551 1.495 7.646 2.605 12.247 8.217 15.007 11.701 12.041 15.2 18.691 44.345 19.35 47.309 1.021 5.887 2.076 11.502 3.098 17.389l-6.575 2.161-1.155-1.168c1.799-5.149 2.332-10.591 1.649-15.941a114.298 114.298 0 0 0-.865-5.652c-1.201-6.726-2.97-15.043-9.67-27.204-4.15-7.531-8.6-14.996-11.159-17.641-3.112-3.216-5.403-5.976-9.431-7.466-7.486-2.769-15.87-1.454-16.378-1.454l-7.4.497a75.051 75.051 0 0 1-2.559-4.388c-2.054-3.812-4.624-9.107-5.795-12.44Z"
                    style={{
                      fill: "url(#radial-gradient-3)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <g id="pinkytarget"

                  className='selected-input pinkytarget'
                  data-tooltip-id="pinkytarget"
                  // data-tooltip-place="top"
                  onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Back");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Pinky_Button');

                    setSelectedEditorDeviceViewOrientation('Back');
                    setSelectedViewerInput('Pinky_Button');
                    setEditorPanelTitle('Pinky Button');
                    setViewerPanelTitle('Pinky Button');

                    console.log("Pinky_Button")
                  }}
                >
                  <path
                    d="m98.031 394.072-5.381-1.953-10.889 19.95s2.551 5.378 3.728 6.608c3.064.425 4.908.714 7.498 1.086 1.326.191 2.681-.253 3.593-1.234a21.793 21.793 0 0 0 3.544-5.11c2.571-5.154 2.401-9.973 2.185-12.147-.13-.545.028-1.483-.51-3.283-.547-1.829-1.973-3.265-3.767-3.916Z"
                    style={{
                      fill: "url(#linear-gradient-14)",
                      strokeWidth: 0,
                    }}
                  />
                  <ellipse
                    cx={89.335}
                    cy={405.463}
                    rx={13.763}
                    ry={6.887}
                    style={{
                      fill: "url(#linear-gradient-15)",
                      strokeWidth: 0,
                    }}
                    transform="rotate(-73.77 89.337 405.465)"
                  />
                </g>
                <g id="sideIndexButton_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"
                  className=" selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Back");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Side_Index_Button');

                    setSelectedEditorDeviceViewOrientation('Back');
                    setSelectedViewerInput('Side_Index_Button');
                    setEditorPanelTitle('Side Index Button');
                    setViewerPanelTitle('Side Index Button');

                    console.log("Side_Index_Button")

                  }}
                >
                  <path
                    d="M120.373 49.67c-1.494-.97-10.599-6.666-21.874-3.631-8.03 2.162-12.634 7.534-14.165 9.5-1.096 2.5-2.583 6.945-1.817 12.25 1.46 10.105 10.371 18.283 20.423 20.074 8.077 1.439 17.743-1.093 23.364-8.33 1.135-1.461 5.196-6.864 4.418-14.411-1.014-9.844-9.39-14.895-10.35-15.452Z"
                    style={{
                      fill: "url(#linear-gradient-16)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M132.215 68.145c0 10.192-9.129 18.454-20.39 18.454-14.507 0-23.079-11.158-23.079-20.681 0-10.68 9.887-18.666 21.148-18.666s22.321 6.469 22.321 20.893Z"
                    style={{
                      fill: "url(#linear-gradient-17)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M111.283 49.835c6.531-.786 11.501 1.832 13.2 2.83.788.547 7.994 5.711 7.724 13.794-.119 3.555-1.634 6.104-2.303 7.204-4.461 7.333-13.066 8.3-14.064 8.396-7.307.702-12.574-3.119-13.85-4.102-1.324-1.019-4.228-3.523-5.546-7.876-2.285-7.548 2.399-13.807 2.629-14.103 3.995-5.155 9.886-5.863 12.211-6.143Z"
                    style={{
                      fill: "url(#radial-gradient-4)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <g
                  id="primaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"
                  style={{
                    clipPath: "url(#clippath-1)",
                  }}
                  className=" selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Back");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Primary_Trigger');
                    setSelectedEditorDeviceViewOrientation('Back');

                    setSelectedViewerInput('Primary_Trigger');
                    setEditorPanelTitle('Primary Trigger');
                    setViewerPanelTitle('Primary Trigger');

                    console.log("Primary_Trigger")

                  }}
                >
                  <path
                    d="M68.771 133.797a88.787 88.787 0 0 1 4.093 9.551c1.424 3.947 6.614 19.212 5.001 39.754a101.143 101.143 0 0 1-4.541 22.981c.217.627.572 1.43 1.169 2.26a8.91 8.91 0 0 0 3.125 2.691l14.802 2.011 9.771-.744a20.364 20.364 0 0 0 10.597-4.316c.55-10.538.101-25.488-4.594-42.551-3.013-10.952-8.998-32.497-27.245-51.402-2.812-2.913-6.991-6.57-6.991-6.57l-6.119 2.951s-.047 4.65.003 8.668c2.061 3.73 4.718 9.646 6.779 13.376l-5.852 1.339Z"
                    className="cls-22"
                  />
                  <path
                    d="M68.771 133.797a88.787 88.787 0 0 1 4.093 9.551c1.424 3.947 6.614 19.212 5.001 39.754a101.143 101.143 0 0 1-4.541 22.981c.217.627.572 1.43 1.169 2.26a8.91 8.91 0 0 0 3.125 2.691l14.802 2.011 9.771-.744a20.364 20.364 0 0 0 10.597-4.316c.55-10.538.101-25.488-4.594-42.551-3.013-10.952-8.998-32.497-27.245-51.402-2.812-2.913-6.991-6.57-6.991-6.57l-6.119 2.951s-.047 4.65.003 8.668c2.061 3.73 4.718 9.646 6.779 13.376l-5.852 1.339Z"
                    style={{
                      fill: "url(#radial-gradient-5)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="m75.837 209.816 16.204-1.805 20.933 1.805-5.688 7.284s-21.802 2.483-22.465 1.734-14.067-6.369-14.067-6.369l5.083-2.65Z"
                    className="cls-22"
                  />
                  <path
                    d="M91.047 209.492a149.127 149.127 0 0 0 4.675-22.969c.966-7.864 2.003-16.307.688-27.35-.802-6.739-2.181-17.413-8.812-29.069a66.885 66.885 0 0 0-9.255-12.57l1.752-9.571 29.543 34.825 5.636 68.509-24.227-1.805Z"
                    className="cls-22"
                  />
                  <path
                    d="M91.047 209.492a149.127 149.127 0 0 0 4.675-22.969c.966-7.864 2.003-16.307.688-27.35-.802-6.739-2.181-17.413-8.812-29.069a66.885 66.885 0 0 0-9.255-12.57l1.752-9.571 29.543 34.825 5.636 68.509-24.227-1.805Z"
                    style={{
                      fill: "url(#linear-gradient-18)",
                      strokeWidth: 0,
                    }}
                  />
                  <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAHCAYAAAB+8d+zAAAACXBIWXMAAAsSAAALEgHS3X78AAABmklEQVQ4jcWSzU8UQRDFfzXV88UoiIsR2axROHKTgwcu3j34X3uUk94gMSRqloVkd4dlPrqnPOyMmgiJhhhfUklXd+q913kl3AdFnqD6DI1SkngL2OxflszLGRCAr4BQ1fV9pOS3myyNEIlwus9GtgXyiNglqDqcPkZEiWREno3u4FREIgQFWXOFUFKulkADLKibK6ACPKGrCGHBopwCUNWfbzc63n1HlowQeUqRbyM4VAtEHCKKiLKRH6C6iSCojnAaE0UpYH0FoAVizAZuAxwgiAitbxE6OlvS+jmCELqSpplhdKxuTn/hM8rVZc8zpW6uhDev35MmY+AhIhC7Qcz/GDJbAdeA4X2FcYlZBdTAtDc5A3Yw69YzdGB7GDEaZTgd8/MPO6gOTQykiAznATWtB1hSN18cRT7B7AK4oPXf8L6jswB2jhEw87T+hNbPCf4Mw2N2xsmncEf0t+PoMAJS4AlZ9hxY77RGL4BdkliAl33QgrBH7NapF/lEOD56y011Cpzz4eP1X4n/a7w6fIAwIcv2/7eVP8Z3XBmdtrLsVjQAAAAASUVORK5CYII="
                    width={42}
                    height={7}
                    transform="translate(72.227 205.497)"
                  />
                </g>
                <g
                  id="secondaryTrigger_Device_VKB_GLADIATOR_NXT_EVO_LEFT_BACK"
                  style={{
                    clipPath: "url(#clippath-2)",
                  }}
                  className=" selected-input corner-test" onClick={() => {
  setInputViewerInputType('Device_Button_Inputs');
  sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');
                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Back");
                    sessionStorage.setItem('selectedEditorDeviceButton', 'Secondary_Trigger');

                    setSelectedViewerInput('Secondary_Trigger');
                    setEditorPanelTitle('Secondary Trigger');
                    setSelectedEditorDeviceViewOrientation('Back');
                    setViewerPanelTitle('Secondary Trigger');

                    console.log("Secondary_Trigger")

                  }}
                >
                  <path
                    d="m73.087 127.765-10.432-1.321-18.71 18.626a63.5 63.5 0 0 1-2.965 1.205c-7.677 2.892-14.867 3.87-20.757 4.056l-1.404-1.914a99.652 99.652 0 0 0 3.546-12.769c.896-4.326 2.36-11.528 2.072-20.907a79.066 79.066 0 0 0-1.289-11.992l22.52-4.068a16.01 16.01 0 0 1 6.472 1.206l16.726 20.171 4.221 7.708Z"
                    style={{
                      fill: "url(#linear-gradient-19)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M35.173 98.166h38.844v49.238H35.173z"
                    style={{
                      fill: "url(#linear-gradient-20)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M35.173 98.166h38.844v49.238H35.173z"
                    style={{
                      fill: "url(#linear-gradient-21)",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M42.843 145.773s-2.383.164-5.186-.493a20.084 20.084 0 0 1-1.84-.545c-1.095-.387-1.844-.77-2.174-.923-2.117-.98-5.942-1.284-13.439 1.85-3.664 1.622-5.436 3.068-5.318 4.338.29 3.114 9.808 6.77 18.389 5.084 5.663-1.112 9.542-4.291 11.418-6.074-.392-2.073-1.851-3.238-1.851-3.238Z"
                    style={{
                      fill: "#005748",
                      strokeWidth: 0,
                    }}
                  />
                  <path
                    d="M51.662 99.367a87.712 87.712 0 0 1-.137 15.522c-.357 3.631-.809 7.968-2.544 13.399-1.678 5.252-3.006 9.234-6.741 12.553-2.805 2.492-5.835 3.603-7.798 4.135-6.693 1.073-14.017 2.955-20.71 4.028-13.133-20.446-6.779-44.665 6.746-52.34 13.25-7.519 30.279 2.169 31.185 2.702Z"
                    style={{
                      fill: "url(#linear-gradient-22)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
              </g>
            </svg>

          </div>

        </>
      )
    default:
      return (
        null
      )
      break;
  }


}

export default Device_VKB_SpaceEvo




