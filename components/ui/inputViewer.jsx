"use client";

import React from 'react'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx';
import Up from '@components/inputs/Up';
import Press from '@components/inputs/Press';
import Down from '@components/inputs/Down';
import Left from '@components/inputs/Left';
import Right from '@components/inputs/Right';
import { useContext, useState, useEffect } from 'react';
import { Context, SelectContext, SelectedEditorActionContext, ActionUpdateContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, InputViewerInputTypeContext } from '@components/Provider.jsx'
import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx';

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import PillSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/PillSwitch.jsx'
import RedButton from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/RedButton.jsx'
import ChipSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/ChipSwitch.jsx'
import { Utils } from '@app/editor/utils.js'

import PanelSwitchButtonMobile from '@app/editor/PanelSwitchButtonMobile';
const InputViewer = ({ selectedButton }) => {
    const { data: session } = useSession();
    const userId = { id: session?.user.id };
    console.log("USER ID: " + userId.id);
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
    const { actionUpdate, setActionUpdate } = useContext(ActionUpdateContext)
    const { profileContext, setprofileContext } = useContext(Context);
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { inputViewerInputType, setInputViewerInputType } = useContext(InputViewerInputTypeContext);

    const [top, setTop] = useState();
    const [bottom, setbottom] = useState();
    const [left, setLeft] = useState();
    const [right, setRight] = useState();
    const [press, setPress] = useState();

    const [first, setfirst] = useState('uninitialized')
    console.log("Selected BUTTON: " + selectedButton);
    // const sessionProfiles = JSON.parse(sessionStorage.getItem('selectedProfile'))

    useEffect(() => {
        // console.log("VIEWER PANEL REFRESHING");
        // console.log("/EDITOR :" + profileContext);
        // console.log(profileContext);
        // getDeviceButtonProfiles()

        if (sessionStorage.getItem("inputViewerInputType") === 'Main_Device_Axis') {
            console.log("VIEWER LAYOUT: MAIN DEVICE AXIS");
            getDeviceAxisProfiles()
            sessionStorage.removeItem('inputViewerInputType')
        } else if (sessionStorage.getItem("inputViewerInputType") === 'Device_Button_Inputs') {
            console.log("VIEWER LAYOUT: BUTTON");

            getDeviceButtonProfiles()

        } else {
            console.log("VIEWER LAYOUT: BUTTON");

            getDeviceButtonProfiles()

        }

    }, [inputViewerInputType, selectedViewerInput, selectedEditorInput, profileContext, selectedEditorDevice, selectedEditorDeviceViewOrientation])
    useEffect(() => {
        console.log('REFRESHING inputViewerInputType', inputViewerInputType);
        setfirst(inputViewerInputType)


    }, [inputViewerInputType])

    const getDeviceAxisProfiles = () => {

        // console.log("FETCHED DEVICEPROFILES BEFORE: ");
        // console.log(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]);

        // console.log(JSON.parse(sessionStorage.getItem('loadedProfile')), sessionStorage.getItem('selectedEditorDevice'), sessionStorage.getItem("selectedEditorDeviceViewOrientation"), sessionStorage.getItem("selectedEditorDeviceButton"));
        if (sessionStorage.getItem("selectedEditorDeviceButton") == undefined) {
            console.log("UNDEFINED UNDEFINED UNDEFINEDUNDEFINEDUNDEFINEDUNDEFINEDUNDEFINEDUNDEFINED");
            return (undefined)
        }

        else {
            try {
                setTop(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.axis[selectedViewerInput]);
                setbottom(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.axis[selectedViewerInput]?.["bottom"]);
                setRight(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.axis[selectedViewerInput]?.["right"]);
                setPress(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.axis[selectedViewerInput]?.["press"]);
                setLeft(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.axis[selectedViewerInput]?.["left"]);
            } catch (error) {
                console.log(error);
            }


        }


    };

    const getDeviceButtonProfiles = () => {

        console.log("FETCHED DEVICEPROFILES BEFORE: ");
        console.log(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]);

        console.log(JSON.parse(sessionStorage.getItem('loadedProfile')), sessionStorage.getItem('selectedEditorDevice'), sessionStorage.getItem("selectedEditorDeviceViewOrientation"), sessionStorage.getItem("selectedEditorDeviceButton"));
        if (sessionStorage.getItem("selectedEditorDeviceButton") == undefined) {
            console.log("UNDEFINED UNDEFINED UNDEFINEDUNDEFINEDUNDEFINEDUNDEFINEDUNDEFINEDUNDEFINED");
            return (undefined)
        }

        else {
            try {
                setTop(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.buttons[sessionStorage.getItem("selectedEditorDeviceViewOrientation")][selectedViewerInput]?.["top"]);
                setbottom(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.buttons[sessionStorage.getItem("selectedEditorDeviceViewOrientation")][selectedViewerInput]?.["bottom"]);
                setRight(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.buttons[sessionStorage.getItem("selectedEditorDeviceViewOrientation")][selectedViewerInput]?.["right"]);
                setPress(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.buttons[sessionStorage.getItem("selectedEditorDeviceViewOrientation")][selectedViewerInput]?.["press"]);
                setLeft(JSON.parse(sessionStorage.getItem('loadedProfile'))?.deviceList[sessionStorage.getItem('selectedEditorDevice')]?.buttons[sessionStorage.getItem("selectedEditorDeviceViewOrientation")][selectedViewerInput]?.["left"]);
            } catch (error) {
                console.log();
            }



        }


    };

    const getAxisInputRowsX = (input) => {
        //check if slot is undefined 
        // console.log("getInputTop !!!!!!!!!!!" + JSON.stringify(input));
        // console.log(" !!!!!!!!!!!" + input);

        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Up layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("TOP SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputTop = (input) => {
        //check if slot is undefined 
        // console.log("getInputTop !!!!!!!!!!!" + JSON.stringify(input));
        // console.log(" !!!!!!!!!!!" + input);

        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Up layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("TOP SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputLeft = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Left layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("LEFT SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputRight = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Right layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            // console.log("RIGHT SLOT: UNDEFINED");
            return (<></>)
        }
    }

    const getInputPress = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Press layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");

            return (<></>)
        }
    }

    const getInputBottom = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("BOTTOM SLOT: " + input.layers['base']);
            return (<Down layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");

            return (<></>)
        }
    }
    const renderViewerLayout = () => {
        switch (inputViewerInputType) {
            case "Main_Device_Axis":
                return (

                        <div className="test2">
                            {Utils.getInputViewerPanelAxisLayout("Main_Device_Axis", profileContext, selectedViewerInput)}

                        </div>
                )
                break;
            case "Device_Button_Inputs":
                return (

                        <div className="test2">
                            {getInputTop(top)
                            }

                            <div className='input-down-press'>
                                {getInputPress(press)}
                                {getInputBottom(bottom)}

                            </div>
                            <div className=' left-center-right'>
                                {getInputLeft(left)}

                                <div className=' mt-[4px]'>{Utils.getInputIcon(selectedViewerInput, '54px', '54px', true)} </div>

                                {getInputRight(right)}

                            </div>
                        </div>
                )

                break;
            default:
                return (<>inputViewerInputType</>)
                break;
        }
    }
    return (
        <div className='panel-viewer'>
            {/* {inputViewerInputType} */}
            {/* <PanelSwitchButtonMobile whatPanel='viewer' /> */}
            <div className="test2">
                {/* {Utils.getInputViewerPanelAxisLayout("Main_Device_Axis", profileContext, selectedViewerInput)} */}
                {renderViewerLayout()}
            </div>

        </div>

    )

}

export default InputViewer