"use client";

import React from 'react'
import Action from './GameAction'
import { clsx } from 'clsx'
import { useContext, useEffect } from 'react';

import { SelectContext } from '@components/Provider';
const ActionList = ({ layers, input_direction, selectable }) => {
  // action_id = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";
  const data = useContext(SelectContext);
  const classNames = clsx({
    "action-list-left": input_direction == "left",
    "action-list-right": input_direction == "right",
    "action-list-inputTable": input_direction == "inputTable",
   "corner-dialogueModLayerButtons": input_direction == "dialogueModLayerButtons",

    "action-list": input_direction !== "left" || "right"
  });
  // console.log("ActionList Layers:");

  // console.log(layers);

  if (selectable) {
    const getSelectedInput = (array) => {

      return (
        array?.map((component, index) => {
          // console.log("INDEX:  " + index + " |   CURRENT COMPONENT: " + component);
          // console.log(component);

          return (
            <Action
              action_id={component.data?.name}
              node={component}
              layer={index}
              input_direction={input_direction}
              selectable={true} />
          )
        }
        )
      )
    }

    return (
      <div className={'action-list-dialogue w-full'}>

        {getSelectedInput(layers)}
      </div>
    )

  } else {

    const getSelectedInput = (array) => {
      return (
        array?.map((component, index) => {
          // console.log("INDEX:  " + index + " |   CURRENT COMPONENT: " + component);
          return (
            <Action action_id={component.data.name} node={component} layer={index} input_direction={input_direction} selectable={false} />
          )

        })
      )

    }


    return (
      <div className={classNames}>
        {/* <Action action_id={action_id} layer={"1"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"2"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"3"} input_direction={input_direction}/> */}
        {getSelectedInput(layers)}
      </div>
    )
  }


}

export default ActionList