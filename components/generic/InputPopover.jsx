import React, { useContext } from 'react'
import { Tooltip } from 'react-tooltip'
import EditIcon from '@components/generic/Icons/EditIcon.svg'
import { SelectContext } from '@components/Provider.jsx'
import { SelectedEditorActionContext, EditorPanelTitleContext, ViewerPanelTitleContext, SelectedEditorActionTableTargetContext } from '@components/Provider'

const InputPopover = ({ InputName, InputId, TargetId }) => {
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
    const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
    const { viewerPanelTitle, setViewerPanelTitle } = useContext(ViewerPanelTitleContext)
    const { selectedEditorInputActions, setSelectedEditorInputActions } = useContext(SelectedEditorActionTableTargetContext)

    return (
        <Tooltip
            className=' input-tooltip  '
            tooltipOptions={{ autoHide: true }}

            // data-tooltip-id={InputId}
            // id={InputId}
            anchorSelect={TargetId}
            clickable={true}
        // mouseTrackLeft={0}
        // position="top"
        >

            <div className='flex flex-col default small-text py-[16px] px-[12px] '>
                <p>{InputName}</p>
                {/* <div className=' flex flex-row'>
                    <button onClick={() => {
                        setSelectedViewerInput(InputId)
                        setViewerPanelTitle(InputName)
                    }}>
                        <div className='input-tooltip-select-left flex flex-col justify-center align-middle pb-[16px] pt-[16px]  w-[75px]'>
                            <div className='h-[40px] w-[40px] p-[5px] flex self-center '>

                                <div className=" self-center" >
                                    <svg width="" height="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.9836 9.85231C19.9679 9.78372 19.9521 9.7454 19.9379 9.70985C19.9095 9.64345 19.8823 9.59337 19.8504 9.53653C19.733 9.33231 19.5445 9.05575 19.2862 8.70778C18.9006 8.1893 18.3695 7.53239 17.7678 6.88411C17.1656 6.23583 16.4976 5.59747 15.8174 5.1154C14.8555 4.43469 13.9202 3.9054 12.9623 3.54571C12.0051 3.18575 11.0252 2.99884 10 2.99942C8.97477 2.99884 7.99492 3.18575 7.03766 3.54575C6.07945 3.9054 5.14445 4.43473 4.18258 5.11512C3.1709 5.83415 2.17473 6.90141 1.40531 7.82837C1.02152 8.29188 0.698047 8.71891 0.464766 9.052C0.347617 9.21888 0.253711 9.36161 0.181406 9.48212C0.144961 9.54333 0.114375 9.59798 0.085 9.65919C0.0701563 9.6904 0.0559375 9.72255 0.0401953 9.76766C0.0324609 9.79052 0.0241016 9.81708 0.0164062 9.85231C0.00898437 9.88786 0.0003125 9.93173 0 10C0.0003125 10.068 0.00894531 10.1122 0.0164062 10.1477C0.0318359 10.2163 0.0479297 10.2543 0.0621094 10.2901C0.0905469 10.3566 0.117734 10.4066 0.14957 10.4632C0.266992 10.6674 0.455469 10.9443 0.713789 11.2922C1.0991 11.8107 1.63055 12.4679 2.23219 13.1162C2.83441 13.7645 3.50246 14.4025 4.18258 14.8846C5.14445 15.5653 6.07949 16.0943 7.03766 16.4543C7.99492 16.814 8.97477 17.0012 10 17.0006C11.0252 17.0012 12.0051 16.814 12.9623 16.4543C13.9202 16.0943 14.8555 15.5653 15.8175 14.8849C16.8291 14.1658 17.8253 13.0986 18.5947 12.1716C18.9785 11.7081 19.302 11.2811 19.5353 10.948C19.6524 10.7808 19.7463 10.6384 19.8186 10.5175C19.8551 10.4564 19.8857 10.4017 19.915 10.3408C19.9296 10.3096 19.9441 10.2774 19.9598 10.232C19.9676 10.2091 19.9759 10.1829 19.9836 10.1477C19.9911 10.1121 19.9997 10.068 20 9.99997C19.9997 9.93173 19.9911 9.88786 19.9836 9.85231ZM10 14.7456C7.37879 14.7456 5.25445 12.6209 5.25445 10C5.25445 7.37977 7.37879 5.2545 10 5.2545C12.6212 5.2545 14.7455 7.37977 14.7455 10C14.7455 12.6209 12.6212 14.7456 10 14.7456Z"
                                            fill="#CEFCFF" />
                                        <path
                                            d="M11.1881 9.78063C10.939 9.82637 10.6841 9.73798 10.5175 9.54763C10.3507 9.35669 10.2969 9.09278 10.3757 8.85177L10.6847 7.90684C10.469 7.83637 10.2395 7.79747 9.99996 7.79747C8.78316 7.79747 7.79715 8.78313 7.79715 9.99997C7.79715 11.2168 8.78316 12.2031 9.99996 12.2031C11.2168 12.2031 12.2028 11.2168 12.2028 9.99997C12.2028 9.86341 12.1886 9.72989 12.1648 9.60016L11.1881 9.78063Z"
                                            fill="#CCFBFF" />
                                    </svg>
                                </div>

                            </div>
                            <p className='text-list-default text-modifier-chip self-center'>
                                VIEW
                            </p>
                        </div>
                    </button>
                    <div className='spacer ' />
                    <button onClick={() => {
                        // setSelectedEditorInput(InputId)
                        setSelectedEditorInputActions(InputId)

                        setEditorPanelTitle(InputName);

                        console.log(InputId);
                    }}>
                        <div className=' input-tooltip-select-right flex flex-col justify-center align-middle pb-[16px] pt-[16px] w-[75px]'>
                            <EditIcon className="w-[40px] h-[40px] p-[5px] self-center" />
                            <p className='text-list-default text-modifier-chip self-center'>
                                EDIT
                            </p>
                        </div>
                    </button>
                </div> */}
            </div>

        </Tooltip>
    )
}

export default InputPopover