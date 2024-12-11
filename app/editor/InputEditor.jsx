'use client'

import React from 'react'
import InputTable from '@app/editor/InputTable'
import { Context, SelectContext, SelectedEditorActionContext, EditorPanelTitleContext, SelectedEditorDeviceContext, SelectedInputTableInputContext } from '@components/Provider';

import { Utils } from '@app/editor/utils.js'

import { useContext, useState } from 'react';



const Editor = (props) => {
  const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
  const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
  const { selectedEditorDevice, setselectedEditorDevice } = useContext(SelectedEditorDeviceContext)
  const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
  const [isLoading, setIsLoading] = useState(false)
  const { profileContext, setprofileContext } = useContext(Context);


  const getInputTitle = () => {
    try {
      var name = (editorPanelTitle).toUpperCase();
      return (name)
    } catch (error) {
      return ("SELECT A BUTTON");
    }
  }


  if (props.isExample) {
    return (
      <div className=' flex flex-col gap-[16px] w-[50%]' >
     
        {/* <div className='flex flex-row pt-[24px] mb-[12px] self-center radial-outline w-full justify-center gap-[16px]'>
          <div className='flex'>

            {Utils.getSelectedDeviceIcon(
              'VKB_GLADIATOR_NXT_EVO_RIGHT',
              '40px', '', true)}
          </div>

          <p className='title-colon text-input-title  '> :</p>
          <div className=' corner-test   self-center'>
            {Utils.getEditorPanelDeviceTitle('VKB_GLADIATOR_NXT_EVO_RIGHT')}
          </div>
        </div> */}


        <div className='flex flex-col gap-[2px] w-full max-w-[650px]' >

          <div className="radial-outline inputTable-inset flex flex-col gap-[0px] pt-[16px]">

            <InputTable
              onInputSelect={setSelectedInput} isExample={true}
            />
          </div>

        </div>

      </div>
    )

  } else {


    return (


      <div className='panel-default ' id="editorPanel">
        <div class="panel-title mt-[-7px] ">
          <div className='flex flex-row '>

            <span class="text-legend-heading px-[5px] "> BIND EDITOR PANEL</span>
            {/* <p className='text-legend-heading'> {treeTableDialogueSelection.label} </p> */}


          </div>
        </div>


        <div className='flex flex-row pt-[24px] mb-[12px]'>
          <div className='flex'>

            {Utils.getSelectedDeviceIcon(
              sessionStorage.getItem('selectedEditorDevice'),
              '40px', '', true)}
          </div>

          <p className='title-colon text-input-title  '> :</p>
          <div className=' corner-test   self-center'>
            {Utils.getEditorPanelDeviceTitle(sessionStorage.getItem('selectedEditorDevice'))}
          </div>
        </div>


        <div className='flex flex-col gap-[2px] w-[100%]' >
          <div className="inputTable-inset flex flex-col gap-[0px]">

            <InputTable
              onInputSelect={setSelectedInput}
            />
          </div>

        </div>

      </div>
    )
  }
}
export default Editor