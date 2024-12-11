"use client"
import React from 'react'
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx';
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx';
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx';
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx';
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx';
import { useState, useContext, useEffect } from 'react';
import { SelectedEditorDeviceViewOrientationContext, SelectedInputTableInputContext, InputViewerInputTypeContext } from '@components/Provider'
import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'

const DeviceAxisSelector = (props) => {
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const { inputViewerInputType, setInputViewerInputType } = useContext(InputViewerInputTypeContext);

    const [activeIndexDeviceAxis, setActiveIndexactiveIndexDeviceAxis] = useState('buttons');

    useEffect(() => {
        setSelectedInputTableInput('buttons');
        sessionStorage.setItem('inputTableFilter', 'buttons');
        // sessionStorage.setItem('inputViewerInputType', "Device_Button_Inputs");
        // setInputViewerInputType('Device_Button_Inputs');


    }, [])

    const getDeviceAxis = (item) => {
        // if (item.name == "Y AXIS") {
        //     return (<RotateYIcon width="24px"></RotateYIcon>);
        // }
        // if (item.name == "X AXIS") {
        //     return (<RotateXIcon width="24px"></RotateXIcon>);
        // }
        if (item.name == "DEVICE MAIN AXIS INPUTS") {
            return (<RotationalAxisIcon height="18px" width="18px" className="flex self-center align-middle" />
            );
        }
        if (item.name == "DEVICE BUTTON INPUTS") {
            return (
                <div className="flex self-center align-middle " >
                    <svg width="14" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.4C0 0.626804 0.637997 0 1.425 0C2.212 0 2.85 0.626804 2.85 1.4C2.85 2.1732 2.212 2.8 1.425 2.8C0.637997 2.8 0 2.1732 0 1.4ZM4.75 1.40057C4.75003 0.885108 5.17538 0.467263 5.70005 0.467292L18.0501 0.467964C18.5747 0.467993 19 0.885883 19 1.40135C19 1.91681 18.5746 2.33466 18.0499 2.33463L5.69995 2.33396C5.17528 2.33393 4.74997 1.91604 4.75 1.40057ZM0 7C0 6.22689 0.637947 5.6 1.425 5.6C2.21205 5.6 2.85 6.22689 2.85 7C2.85 7.77311 2.21205 8.4 1.425 8.4C0.637947 8.4 0 7.77311 0 7ZM4.75 7.0006C4.75003 6.48513 5.17539 6.06729 5.70006 6.06732L18.0501 6.06807C18.5747 6.0681 19 6.48599 19 7.00146C19 7.51692 18.5746 7.93477 18.0499 7.93473L5.69994 7.93399C5.17527 7.93395 4.74997 7.51606 4.75 7.0006ZM0 12.6C0 11.8269 0.637947 11.2 1.425 11.2C2.21205 11.2 2.85 11.8269 2.85 12.6C2.85 13.3731 2.21205 14 1.425 14C0.637947 14 0 13.3731 0 12.6ZM4.75 12.6006C4.75003 12.0851 5.17539 11.6673 5.70006 11.6673L18.0501 11.6681C18.5747 11.6681 19 12.086 19 12.6015C19 13.1169 18.5746 13.5348 18.0499 13.5347L5.69994 13.534C5.17527 13.534 4.74997 13.1161 4.75 12.6006Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.4C0 0.626804 0.637997 0 1.425 0C2.212 0 2.85 0.626804 2.85 1.4C2.85 2.1732 2.212 2.8 1.425 2.8C0.637997 2.8 0 2.1732 0 1.4ZM4.75 1.40057C4.75003 0.885108 5.17538 0.467263 5.70005 0.467292L18.0501 0.467964C18.5747 0.467993 19 0.885883 19 1.40135C19 1.91681 18.5746 2.33466 18.0499 2.33463L5.69995 2.33396C5.17528 2.33393 4.74997 1.91604 4.75 1.40057ZM0 7C0 6.22689 0.637947 5.6 1.425 5.6C2.21205 5.6 2.85 6.22689 2.85 7C2.85 7.77311 2.21205 8.4 1.425 8.4C0.637947 8.4 0 7.77311 0 7ZM4.75 7.0006C4.75003 6.48513 5.17539 6.06729 5.70006 6.06732L18.0501 6.06807C18.5747 6.0681 19 6.48599 19 7.00146C19 7.51692 18.5746 7.93477 18.0499 7.93473L5.69994 7.93399C5.17527 7.93395 4.74997 7.51606 4.75 7.0006ZM0 12.6C0 11.8269 0.637947 11.2 1.425 11.2C2.21205 11.2 2.85 11.8269 2.85 12.6C2.85 13.3731 2.21205 14 1.425 14C0.637947 14 0 13.3731 0 12.6ZM4.75 12.6006C4.75003 12.0851 5.17539 11.6673 5.70006 11.6673L18.0501 11.6681C18.5747 11.6681 19 12.086 19 12.6015C19 13.1169 18.5746 13.5348 18.0499 13.5347L5.69994 13.534C5.17527 13.534 4.74997 13.1161 4.75 12.6006Z" fill="url(#paint0_linear_2519_5271)" fill-opacity="0.3" />
                        <defs>
                            <linearGradient id="paint0_linear_2519_5271" x1="9.5" y1="-3.60606" x2="9.50002" y2="7.21212" gradientUnits="userSpaceOnUse">
                                <stop offset="0.520833" stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="#1E1A1B" stop-opacity="0.74" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

            )
        }
        if (item.name == "Z AXIS") {
            return (<ZAxisIcon width="24px"></ZAxisIcon>);
        }
        if (item.name == "Y AXIS") {
            return (<YAxisIcon width="24px"></YAxisIcon>);
        }
    }
    const itemsDeviceAxis = [
        {
            name: 'DEVICE MAIN AXIS INPUTS',
            inputId: "Axis",
            type: 'Main_Device_Axis',
            template: (item) => deviceAxisRenderer(item, 0)
        },
        {
            name: 'DEVICE BUTTON INPUTS',
            inputId: "buttons",
            type: 'Device_Button_Inputs',
            template: (item) => deviceAxisRenderer(item, 1)
        },
        // {
        //     name: 'Z AXIS',
        //     inputId: "Z_Axis",

        //     template: (item) => deviceAxisRenderer(item, 2)
        // },
        // {
        //     name: 'PUSH/PULL Y',
        //     template: (item) => deviceAxisRenderer(item, 3)
        // },
        // {
        //     name: 'PUSH/PULL Z',
        //     template: (item) => deviceAxisRenderer(item, 4)
        // },
    ];

    const deviceAxisRenderer = (item, itemIndex) => (
        <Button type="device_axis" className='mx-[4px] flex gap-[4px]'
            onClick={() => {
                console.log("SETTING INPUTTABLE INPUT TO:");
                console.log(item.type);
                setSelectedInputTableInput(item.inputId);
                sessionStorage.setItem('inputTableFilter', item.inputId);
                // setSelectedEditorDeviceViewOrientation(item.name)
                setActiveIndexactiveIndexDeviceAxis(itemIndex)
                if (itemIndex == 0) {
                    setInputViewerInputType('Main_Device_Axis');
                    sessionStorage.setItem('inputViewerInputType', 'Main_Device_Axis');

                } else {
                    setInputViewerInputType('Device_Button_Inputs');
                    sessionStorage.setItem('inputViewerInputType', 'Device_Button_Inputs');

                }
            }}


        >
            {getDeviceAxis(item)}


            <span className="small-text flex self-center">{item.type}</span>
        </Button>
    );
    return (
        <TabMenu unstyled
            className='flex flex-row w-full '
            type="device_orientation"
            model={itemsDeviceAxis}
            activeIndex={activeIndexDeviceAxis}
            onTabChange={(e) => setActiveIndexactiveIndexDeviceAxis(e.index)}
        />)
}


export default DeviceAxisSelector