import React from "react";

const ProjectIcon = (props) => {
  return (
    <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 91 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 39C0 36.7909 1.79086 35 4 35H49C51.2091 35 53 36.7909 53 39V87C53 89.2091 51.2091 91 49 91H4C1.79086 91 0 89.2091 0 87V39Z"
      fill="url(#paint0_linear_2639_5289)"
    />
    <path
      d="M65 39C65 36.7909 66.7909 35 69 35H87C89.2091 35 91 36.7909 91 39V87C91 89.2091 89.2091 91 87 91H69C66.7909 91 65 89.2091 65 87V39Z"
      fill="url(#paint1_linear_2639_5289)"
    />
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H87C89.2091 0 91 1.79086 91 4V23C91 25.2091 89.2091 27 87 27H4C1.79086 27 0 25.2091 0 23V4Z"
      fill="url(#paint2_linear_2639_5289)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2639_5289"
        x1={23.0227}
        y1={-1.83066}
        x2={105.654}
        y2={90.2606}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.93326} stopColor={props.stop} stopOpacity={0.92} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2639_5289"
        x1={23.0227}
        y1={-1.83066}
        x2={105.654}
        y2={90.2606}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.93326} stopColor={props.stop} stopOpacity={0.92} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2639_5289"
        x1={23.0227}
        y1={-1.83066}
        x2={105.654}
        y2={90.2606}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.93326} stopColor={props.stop} stopOpacity={0.92} />
      </linearGradient>
    </defs>
  </svg>
  )

}

export default ProjectIcon

