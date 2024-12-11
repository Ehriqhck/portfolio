import * as React from "react"
const SaveIcon = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#SaveIcona)">
      <path
        fill="url(#SaveIconb)"
        d="M2.75 0A2.753 2.753 0 0 0 0 2.75v12.5A2.753 2.753 0 0 0 2.75 18H3v-7.25C3 9.785 3.785 9 4.75 9h8.5c.965 0 1.75.785 1.75 1.75V18h.25A2.753 2.753 0 0 0 18 15.25V4.75a.751.751 0 0 0-.252-.56l-4.5-4A.74.74 0 0 0 13 .045V4.25C13 5.215 12.215 6 11.25 6h-6C4.285 6 3.5 5.215 3.5 4.25V0h-.75Z"
      />
      <path
        fill="url(#SaveIconc)"
        d="M4.75 10.5a.25.25 0 0 0-.25.25V18h9v-7.25a.25.25 0 0 0-.25-.25h-8.5Z"
      />
      <path
        fill="#0AFFB5"
        d="M6 0a1 1 0 0 0-1 1v3.25c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V1a1 1 0 0 0-1-1H6Z"
      />
    </g>
    <defs>
      <linearGradient
        id="SaveIconb"
        x1={9}
        x2={9}
        y1={9}
        y2={22}
        gradientUnits="userSpaceOnUse"
        
      >
        <stop stopColor="#0AFFB5" />
        <stop offset={0.455} stopColor="#00A087" />
        <stop offset={1} stopColor="#002B35" />
      </linearGradient>
      <linearGradient
        id="SaveIconc"
        x1={9}
        x2={9}
        y1={10}
        y2={25}
        gradientUnits="userSpaceOnUse"
gradientTransform="rotate(-15)"
      >
        <stop stopColor="#FF9D00" />
        <stop offset={1} stopColor="#663300" />
      </linearGradient>
      <clipPath id="SaveIcona">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>

)
export default SaveIcon
