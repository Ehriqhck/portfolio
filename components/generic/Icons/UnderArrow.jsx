import React from "react";

const UnderArrow = (props) => {
  return (
    <svg fill={props.fill} xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}
      viewBox="0 0 52 56">
    <path
      fill={props.fill}
      d="M51.414 41.71a2 2 0 0 0 0-2.829L38.686 26.153a2 2 0 1 0-2.828 2.829l11.314 11.313L35.858 51.61a2 2 0 1 0 2.828 2.828L51.414 41.71ZM4 2a2 2 0 1 0-4 0h4Zm11 40.295h35v-4H15v4Zm-11-15V2H0v25.295h4Zm11 11c-6.075 0-11-4.925-11-11H0c0 8.285 6.716 15 15 15v-4Z"
    />
    </svg>
  )

}

export default UnderArrow

