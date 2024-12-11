'use client'
import NoSSR from '@components/NoSsr.jsx'
import { Button } from 'primereact/button'
import { TabMenu } from 'primereact/tabmenu'
import { FileUpload } from 'primereact/fileupload';

import CubeFrontIcon from '@public/assets/icons/actions/gameCategory/CubeFrontIcon.jsx'
import CubeBackIcon from '@public/assets/icons/actions/gameCategory/CubeBackIcon.jsx'
import EyeIcon from '@public/assets/icons/actions/gameCategory/EyeIcon.jsx'
import XAxisIcon from '@public/assets/icons/actions/gameCategory/XAxisIcon.jsx'
import YAxisIcon from '@public/assets/icons/actions/gameCategory/YAxisIcon.jsx'
import ZAxisIcon from '@public/assets/icons/actions/gameCategory/ZAxisIcon.jsx'
import RotateYIcon from '@public/assets/icons/actions/gameCategory/RotateYIcon.jsx'
import RotateXIcon from '@public/assets/icons/actions/gameCategory/RotateXIcon.jsx'
import ChevronsRight from '@public/assets/icons/actions/gameCategory/ChevronsRight.jsx'
import { getCookie, getCookies, setCookie } from 'cookies-next'
import React from 'react'
import Device_VKB_GLADIATOR_NXT_EVO_LEFT from '@components/Device_VKB_GLADIATOR_NXT_EVO_LEFT.jsx'
import Device_VKB_GLADIATOR_NXT_EVO_RIGHT from '@components/Device_VKB_GLADIATOR_NXT_EVO_RIGHT.jsx'
import Device_VKB_T_RUDDER_MK5 from '@components/Device_VKB_T_RUDDER_MK5.jsx'
import InputEditor from './InputEditor'
import InputViewer from './InputViewer'

import { useState, useContext, useEffect } from 'react'
import {
  ShowEditorPanelContext,
  ShowViewerPanelContext,
  SelectedEditorDeviceContext,
  SelectedEditorDeviceViewOrientationContext,
  SelectContext,
  SelectedInputTableInputContext,
  InputViewerInputTypeContext
} from '@components/Provider'
import clsx from 'clsx'
import { Utils } from './utils';

const page = () => {
  const { inputViewerInputType, setInputViewerInputType } = useContext(
    InputViewerInputTypeContext
  )

  const [name, setName] = useState('')
  const [rawXml, setRawXml] = useState()

  const [parsedXml, setParsedXml] = useState()

  const [selectedFile, setSelectedFile] = useState(null)

  const { showViewerPanel, setshowViewerPanel } = useContext(
    ShowViewerPanelContext
  )
  const { showEditorPanel, setshowEditorPanel } = useContext(
    ShowEditorPanelContext
  )
  const { selectedEditorDevice, setSelectedEditorDevice } = useContext(
    SelectedEditorDeviceContext
  )
  const {
    selectedEditorDeviceViewOrientation,
    setSelectedEditorDeviceViewOrientation
  } = useContext(SelectedEditorDeviceViewOrientationContext)
  const { selectedViewerInput, setSelectedViewerInput } =
    useContext(SelectContext)
  const { selectedInputTableInput, setSelectedInputTableInput } = useContext(
    SelectedInputTableInputContext
  )

  const [isLoading, setIsLoading] = useState(false)

  const [showInputEditor, setInputEditor] = useState(true)
  const [currentSelectedEditorDevice, setCurrentSelectedEditorDevice] =
    useState(<></>)

  const editorPanelVisibility = clsx({
    hidden: !showEditorPanel,
    show: showEditorPanel
  })
  const viewerPanelVisibility = clsx({
    hidden: !showViewerPanel,
    show: showViewerPanel
  })
  const [test, setTest] = useState('no type')
  const [activeIndexDeviceView, setActiveIndexactiveIndexDeviceView] =
    useState(0)

  // useEffect(() => {
  //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', 'Front')
  //   // sessionStorage.setItem('selectedEditorDeviceButton', '');
  //   sessionStorage.setItem('selectedEditorInputTableInput', item.inputId)
  //   setSelectedEditorDeviceViewOrientation('Front')
  // }, [])

  useEffect(() => {
    try {
      setIsLoading(true)
      setTest(inputViewerInputType)
      setCurrentSelectedEditorDevice(
        getSelectedEditorDevice(sessionStorage.getItem('selectedEditorDevice'))
      )
    } catch (error) {
      console.log(error)
    } finally {
      console.log('selectedEditorDevice VVV')
      // console.log(sessionStorage.getItem('selectedEditorDevice'))
      // console.log(sessionStorage.getItem('deviceViewOrientation'))

      setIsLoading(false)
    }
  }, [
    selectedEditorDevice,
    selectedEditorDeviceViewOrientation,
    SelectedEditorDeviceViewOrientationContext,
    selectedViewerInput,
    inputViewerInputType
  ])

  const deviceViewRenderer = (item, itemIndex) => (
    <Button
      type='device_orientation'
      className='p-menuitem-link flex align-items-center flex-col justify-center align-middle gap-2 mx-[6px] w-[50px] h-[50px] '
      onClick={() => {
        // if (item.name == "Main Stick") {
        //   console.log("Changing view orientation to:" + item.name);
        //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name);
        //   setSelectedEditorDeviceViewOrientation(item.name);

        //   setActiveIndexactiveIndexDeviceView(itemIndex)
        // } else {
        //   sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name);
        //   sessionStorage.setItem('selectedEditorDeviceButton', '');
        //   setSelectedViewerInput(null);
        //   setSelectedEditorDeviceViewOrientation(item.name);
        //   setSelectedInputTableInput(item.inputId);

        //   console.log("Changing view orientation to:" + item.name);
        //   setActiveIndexactiveIndexDeviceView(itemIndex)
        // }
        sessionStorage.setItem('selectedEditorDeviceViewOrientation', item.name)
        // sessionStorage.setItem('selectedEditorDeviceButton', '');
        sessionStorage.setItem('selectedEditorInputTableInput', item.inputId)
        setSelectedViewerInput(null)
        setSelectedEditorDeviceViewOrientation(item.name)
        setSelectedInputTableInput(item.inputId)

        console.log('Changing view orientation to:' + item.name)
        setActiveIndexactiveIndexDeviceView(itemIndex)
      }}
    >
      {getDeviceOrientations(item)}
      <span className='small-text flex self-center'>{item.name}</span>
    </Button>
  )
  const deviceAxisRenderer = (item, itemIndex) => (
    <Button
      type='device_axis'
      className='mx-[4px]'
      onClick={() => setActiveIndexactiveIndexDeviceAxis(itemIndex)}
    >
      {getDeviceAxis(item)}
      <span className='small-text flex self-center'>{item.name}</span>
    </Button>
  )

  const getDeviceOrientations = item => {
    if (item.name == 'Front') {
      return <CubeFrontIcon width='24px'></CubeFrontIcon>
    }
    if (item.name == 'Back') {
      return <CubeBackIcon width='24px'></CubeBackIcon>
    }
    if (item.name == 'Main Axis') {
      return <CubeBackIcon width='24px'></CubeBackIcon>
    }
  }
  const getDeviceAxis = item => {
    if (item.name == 'TWIST Y') {
      return <RotateYIcon width='24px'></RotateYIcon>
    }
    if (item.name == 'TWIST X') {
      return <RotateXIcon width='24px'></RotateXIcon>
    }
    if (item.name == 'PUSH/PULL X') {
      return <XAxisIcon width='24px'></XAxisIcon>
    }
    if (item.name == 'PUSH/PULL Z') {
      return <ZAxisIcon width='24px'></ZAxisIcon>
    }
    if (item.name == 'PUSH/PULL Y') {
      return <YAxisIcon width='24px'></YAxisIcon>
    }
  }

  const itemsDeviceView = [
    {
      name: 'Front',
      inputId: 'Front',
      template: item => deviceViewRenderer(item, 0)
    },
    {
      name: 'Back',
      inputId: 'Back',

      template: item => deviceViewRenderer(item, 1)
    }
    // {
    //   name: 'Main Stick',
    //   template: (item) => deviceViewRenderer(item, 1)
    // },
  ]

  const getSelectedEditorDevice = selectedDevice => {
    const getView = () => {
      if (typeof window == 'undefined') {
        return 'front'
      }
    }
    switch (sessionStorage.getItem('selectedEditorDevice')) {
      case 'VKB_GLADIATOR_NXT_EVO_RIGHT':
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_RIGHT
            className='min-w-[330px]'
            view={sessionStorage.getItem('selectedEditorDevice')}
          />
          // <Device_VKB_GLADIATOR_NXT_EVO_RIGHT_BACK className="min-w-[330px]" view={sessionStorage.getItem("deviceViewOrientation")}/>
        )
        break

      case 'VKB_GLADIATOR_NXT_EVO_LEFT':
        return (
          <Device_VKB_GLADIATOR_NXT_EVO_LEFT
            className='min-w-[330px]'
            view={sessionStorage.getItem('deviceViewOrientation')}
          />
        )
        break
      case 'VKB_TRUDDER':
        return (
          <Device_VKB_T_RUDDER_MK5
            className='min-w-[330px] h-[400px]  pt-[128px]'
            // view={sessionStorage.getItem('deviceViewOrientation')}
          />
        )
        break
      default:
        return (
          // <>{selected}</>
          <>{sessionStorage.getItem('selectedEditorDevice')}</>
        )
        break
    }
  }

  const onUpload = async event => {
    event.preventDefault()
    const fileInput = document.getElementById('fileUpload')
    const file = fileInput.files[0]

    const formData = new FormData()

    formData.append('file', file)
    try {
      // const { dataSWR, error } = useSWR('/api/deviceProfiles', fetcher)

      setIsLoading(true)
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      // const data = TEMP_PROFILE;
      console.log('DATA BELOW vvvv')
      console.log(data)
Utils.loadParsedMappingsXML(data);
      setParsedXml(data)
      // sessionStorage.setItem('loadedProfiles', JSON.stringify(loadedProfiles))
    } catch (error) {
      console.log(error)
    } finally {
      // console.log(accountProfiles);
      setIsLoading(false)
    }
  }

  const onSubmit = async event => {
    event.preventDefault()

    const fileInput = document.getElementById('fileUpload')
    const file = fileInput.files[0]

    const formData = new FormData()

    let data = {}
    formData.append('file', file)

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        data = response.json()
        setParsedXml(data)
        console.log(data, parsedXml)
      })
      .then(data => {
        console.log(data.json)
      })
      .catch(error => console.error(error))
  }
  // console.log(parsedXml)

  return (
    <NoSSR>
      <section id='InputViewerPanel' className='editor-container  '>
        <div className={viewerPanelVisibility}>
          <InputViewer />
        </div>

        <div className='flex flex-col gap-0 corner-deviceView '>
          <div className='flex flex-col w-full z-[4] h-full '>
            <div className='flex flex-col mt-[8px]  align-top  ml-[32px] self-start'>
              <div className='flex flex-row gap-[3px] ml-[4px]'>
                <EyeIcon width='14px' />
                <p className=' small-text w-full flex justify-start'>
                  {' '}
                  DEVICE VIEW{' '}
                </p>
              </div>
              {/* <TabMenu unstyled
              className='corner-viewChanger'
              type="device_orientation"
              model={itemsDeviceAxis}
              activeIndex={activeIndexDeviceAxis}
              onTabChange={(e) => setActiveIndexactiveIndexDeviceAxis(e.index)}
            /> */}
              <TabMenu
                unstyled
                className='corner-viewChanger'
                type='device_orientation'
                model={itemsDeviceView}
                activeIndex={activeIndexDeviceView}
                onTabChange={e => setActiveIndexactiveIndexDeviceView(e.index)}
              />
            </div>

            <div className='device-container '>
              {currentSelectedEditorDevice}
              {/* <Device_VKB_T_RUDDER_MK5
              className='min-w-[630px]'
              // view={sessionStorage.getItem('deviceViewOrientation')}
            /> */}
            </div>
          </div>
        </div>
        <div className=' flex flex-row gap-[16px]'>
          <div className='flex  self-center align-middle justify-center'>
            <ChevronsRight width='30px' id='fileinput' />

            <form onSubmit={onUpload}>
            <input type='file' id='fileUpload' name='filename' />
            <input type='submit' />
          </form>

      

            {/* <div className='w-[10px] h-[10px]'>
        <label for="testFile">Choose a profile picture:</label>
      <input type="file" name='testFile' onChange={handleFileUpload} />
    </div>         */}
            <Button onClick={() => Utils.detectDevices()}>asdasd</Button>
          {/* <Button onClick={() => setCookie('testBite', 'ASLKDJASLKDJLAKSDJ')}>
            asdasd
          </Button> */}
            <div className='flex flex-col gap-[4px] hidden'>
              {inputViewerInputType}
              {test}
              <button
                onClick={() => {
                  sessionStorage.clear()
                }}
              >
                clear ss
              </button>
              {/* <fileUpload/> */}
              <button
                onClick={() => {
                  console.log(sessionStorage.getItem('inputViewerInputType'))
                }}
              >
                check ss
              </button>
              <button
                onClick={() => {
                  console.log(inputViewerInputType)
                }}
              >
                check state
              </button>

              <button
                onClick={() => {
                  setInputViewerInputType('asdasd')
                }}
              >
                set input test
              </button>
            </div>
          </div>
          <div id='InputEditorPanel' className={editorPanelVisibility}>
            <InputEditor />
          </div>
        </div>
      </section>
    </NoSSR>
  )
}

export default page
