"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import UnderArrow from '@components/generic/Icons/UnderArrow.jsx'
import CaseButton from '@components/fancy/CaseButton.jsx'
import { BentoCard, BentoGrid } from "@/components/fancy/Bento.jsx";
import { useMediaQuery } from 'usehooks-ts'
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@components/fancy/ProgressSlider.jsx';
import clsx from 'clsx';

import React from 'react'


const DisplaySize = ({ width, height }) => (
  <div className="centered">
    <h1>
      {width.toFixed(0)}x{height.toFixed(0)}
    </h1>
  </div>
);

const SizeDemo = React.forwardRef((props, ref) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  console.log("child", ref.current);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
      setHeight(event[0].contentBoxSize[0].blockSize);
    });

    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, [ref]);

  return <DisplaySize width={width} height={height} />;
});
