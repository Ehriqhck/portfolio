import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useState, useEffect, useContext } from 'react';
import BindButton from './BindButton';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { GameActions } from './GameActions';
import { Tree } from 'primereact/tree';
import ActionList from '@components/ActionList.jsx'
import SaveIcon from '@public/assets/icons/actions/gameCategory/SaveIcon.jsx'
import { classNames } from 'primereact/utils';
import SeatIcon from '@public/assets/icons/actions/gameCategory/SeatIcon.jsx'
import ArrowRightIcon from '@public/assets/icons/actions/gameCategory/ArrowRightIcon.jsx'
import GenericSettingIcon from '@public/assets/icons/actions/gameCategory/GenericSettingIcon.jsx'
import QuantumIcon from '@public/assets/icons/actions/gameCategory/QuantumIcon.jsx'
import SalvageIcon from '@public/assets/icons/actions/gameCategory/SalvageIcon.jsx'
import ScanningIcon from '@public/assets/icons/actions/gameCategory/ScanningIcon.jsx'
import MiningIcon from '@public/assets/icons/actions/gameCategory/MiningIcon.jsx'
import CameraIcon from '@public/assets/icons/actions/gameCategory/CameraIcon.jsx'
import WarningIcon from '@public/assets/icons/actions/gameCategory/WarningIcon.jsx'
import SpaceshipIcon from '@public/assets/icons/actions/gameCategory/SpaceshipIcon.jsx'
import KeyIcon from '@public/assets/icons/actions/gameCategory/KeyIcon.jsx'
import GroundVehicleIcon from '@public/assets/icons/actions/gameCategory/GroundVehicleIcon.jsx'
import PlusIcon from '@public/assets/icons/actions/gameCategory/PlusIcon.jsx'
import MoveIcon from '@public/assets/icons/actions/gameCategory/MoveIcon.jsx'
import LandingIcon from '@components/generic/Icons/LandingIcon.jsx'
import SpeedometerIcon from '@public/assets/icons/actions/gameCategory/SpeedometerIcon.jsx'
import WifiIcon from '@public/assets/icons/actions/gameCategory/WifiIcon.jsx'
import TurretIcon from '@public/assets/icons/actions/gameCategory/TurretIcon.jsx'
import TargetingIcon from '@public/assets/icons/actions/gameCategory/TargetingIcon.jsx'
import TargetingIconHostile from '@public/assets/icons/actions/gameCategory/TargetingIconHostile.jsx'
import TargetingIconFriendly from '@public/assets/icons/actions/gameCategory/TargetingIconFriendly.jsx'
import TargetingIconAttacker from '@public/assets/icons/actions/gameCategory/TargetingIconAttacker.jsx'
import ResetIcon from '@public/assets/icons/actions/gameCategory/ResetIcon.jsx'
import CycleIcon from '@public/assets/icons/actions/gameCategory/CycleIcon.jsx'
import TargetingIconView from '@public/assets/icons/actions/gameCategory/TargetingIconView'
import BackwardIcon from '@public/assets/icons/actions/gameCategory/BackwardIcon.jsx'
import ForwardIcon from '@public/assets/icons/actions/gameCategory/ForwardIcon.jsx'
import OneIcon from '@public/assets/icons/actions/gameCategory/OneIcon.jsx'
import TwoIcon from '@public/assets/icons/actions/gameCategory/TwoIcon.jsx'
import ThreeIcon from '@public/assets/icons/actions/gameCategory/ThreeIcon.jsx'
import IncreaseIcon from '@public/assets/icons/actions/gameCategory/IncreaseIcon.jsx'
import DecreaseIcon from '@public/assets/icons/actions/gameCategory/DecreaseIcon.jsx'
import FractureIcon from '@public/assets/icons/actions/gameCategory/FractureIcon.jsx'
import DisintegrateIcon from '@public/assets/icons/actions/gameCategory/DisintegrateIcon.jsx'
import NudgeIcon from '@public/assets/icons/actions/gameCategory/NudgeIcon.jsx'
import AngleIcon from '@public/assets/icons/actions/gameCategory/AngleIcon.jsx'
import FocusedBeamIcon from '@public/assets/icons/actions/gameCategory/FocusedBeamIcon.jsx'
import TractorBeamIcon from '@public/assets/icons/actions/gameCategory/TractorBeamIcon.jsx'
import LeftwardIcon from '@public/assets/icons/actions/gameCategory/LeftwardIcon.jsx'
import RightwardIcon from '@public/assets/icons/actions/gameCategory/RightwardIcon.jsx'
import SalvageBeamIcon from '@public/assets/icons/actions/gameCategory/SalvageBeamIcon.jsx'
import { getActionTypeIcon } from '@utils/getActionTypeIcon.jsx'
import LeftRightIcon from '@public/assets/icons/actions/gameCategory/LeftRightIcon.jsx'
import UpDownIcon from '@public/assets/icons/actions/gameCategory/UpDownIcon.jsx'
import InvertIcon from '@public/assets/icons/actions/gameCategory/InvertIcon.jsx'
import TurboIcon from '@public/assets/icons/actions/gameCategory/TurboIcon.jsx'
import ZoomInIcon from '@public/assets/icons/actions/gameCategory/ZoomInIcon.jsx'
import ZoomOutIcon from '@public/assets/icons/actions/gameCategory/ZoomOutIcon.jsx'
import ZoomIcon from '@public/assets/icons/actions/gameCategory/ZoomIcon.jsx'
import DockingIcon from '@public/assets/icons/actions/gameCategory/DockingIcon.jsx'
import WeaponsIcon from '@public/assets/icons/actions/gameCategory/WeaponsIcon.jsx'
import MissileIcon from '@public/assets/icons/actions/gameCategory/MissileIcon.jsx'
import RightSideIcon from '@public/assets/icons/actions/gameCategory/RightSideIcon.jsx'
import LeftSideIcon from '@public/assets/icons/actions/gameCategory/LeftSideIcon.jsx'
import FocusIcon from '@public/assets/icons/actions/gameCategory/FocusIcon.jsx'
import ExitIcon from '@public/assets/icons/actions/gameCategory/ExitIcon.jsx'
import ESPIcon from '@public/assets/icons/actions/gameCategory/ESPIcon.jsx'
import ManualGimbalIcon from '@public/assets/icons/actions/gameCategory/ManualGimbalIcon.jsx'
import AutoGimbalIcon from '@public/assets/icons/actions/gameCategory/AutoGimbalIcon.jsx'
import FixedGimbalIcon from '@public/assets/icons/actions/gameCategory/FixedGimbalIcon.jsx'
import LockIcon from '@public/assets/icons/actions/gameCategory/LockIcon.jsx'
import PIPIcon from '@public/assets/icons/actions/gameCategory/PIPIcon.jsx'
import LeadPIPIcon from '@public/assets/icons/actions/gameCategory/LeadPIPIcon.jsx'
import LagPIPIcon from '@public/assets/icons/actions/gameCategory/LagPIPIcon.jsx'
import HUDIcon from '@public/assets/icons/actions/gameCategory/HUDIcon.jsx'
import NextIcon from '@public/assets/icons/actions/gameCategory/NextIcon.jsx'
import PreviousIcon from '@public/assets/icons/actions/gameCategory/PreviousIcon.jsx'
import ShieldTopIcon from '@public/assets/icons/actions/gameCategory/ShieldTopIcon.jsx'
import ShieldLeftIcon from '@public/assets/icons/actions/gameCategory/ShieldLeftIcon.jsx'
import ShieldBottomIcon from '@public/assets/icons/actions/gameCategory/ShieldBottomIcon.jsx'
import ShieldRightIcon from '@public/assets/icons/actions/gameCategory/ShieldRightIcon.jsx'
import ShieldIcon from '@public/assets/icons/actions/gameCategory/ShieldIcon.jsx'
import TopIcon from '@public/assets/icons/actions/gameCategory/TopIcon.jsx'
import BottomIcon from '@public/assets/icons/actions/gameCategory/BottomIcon.jsx'
import ShieldAltIcon from '@public/assets/icons/actions/gameCategory/ShieldAltIcon.jsx'
import NoiseIcon from '@public/assets/icons/actions/gameCategory/NoiseIcon.jsx'
import DecoyIcon from '@public/assets/icons/actions/gameCategory/DecoyIcon.jsx'
import PowerTriangleIcon from '@public/assets/icons/actions/gameCategory/PowerTriangleIcon.jsx'
import ThrusterIcon from '@public/assets/icons/actions/gameCategory/ThrusterIcon.jsx'
import EngineIcon from '@public/assets/icons/actions/gameCategory/EngineIcon.jsx'
import SetMinIcon from '@public/assets/icons/actions/gameCategory/SetMinIcon.jsx'
import SetMaxIcon from '@public/assets/icons/actions/gameCategory/SetMaxIcon.jsx'
import PowerOnIcon from '@public/assets/icons/actions/gameCategory/PowerOnIcon.jsx'
import PowerOffIcon from '@public/assets/icons/actions/gameCategory/PowerOffIcon.jsx'
import PowerButtonIcon from '@public/assets/icons/actions/gameCategory/PowerButtonIcon.jsx'
import WipeIcon from '@public/assets/icons/actions/gameCategory/WipeIcon.jsx'
import FlashlightIcon from '@public/assets/icons/actions/gameCategory/FlashlightIcon.jsx'
import LadderIcon from '@public/assets/icons/actions/gameCategory/LadderIcon.jsx'
import ScoreboardIcon from '@public/assets/icons/actions/gameCategory/ScoreboardIcon.jsx'
import StopwatchIcon from '@public/assets/icons/actions/gameCategory/StopwatchIcon.jsx'
import BrakeIcon from '@public/assets/icons/actions/gameCategory/BrakeIcon.jsx'
import EyeIcon from '@public/assets/icons/actions/gameCategory/EyeIcon.jsx'
import RotateIcon from '@public/assets/icons/actions/gameCategory/RotateIcon.jsx'
import ChatBubbleIcon from '@public/assets/icons/actions/gameCategory/ChatBubbleIcon.jsx'
import UsersIcon from '@public/assets/icons/actions/gameCategory/UsersIcon.jsx'
import FOIPIcon from '@public/assets/icons/actions/gameCategory/FOIPIcon.jsx'
import VOIPIcon from '@public/assets/icons/actions/gameCategory/VOIPIcon.jsx'
import AudioWaveIcon from '@public/assets/icons/actions/gameCategory/AudioWaveIcon.jsx'
import EyeTrackerIcon from '@public/assets/icons/actions/gameCategory/EyeTrackerIcon.jsx'
import SpeakingIcon from '@public/assets/icons/actions/gameCategory/SpeakingIcon.jsx'
import InteractIcon from '@public/assets/icons/actions/gameCategory/InteractIcon.jsx'
import MonitorIcon from '@public/assets/icons/actions/gameCategory/MonitorIcon.jsx'
import InnerThoughtIcon from '@public/assets/icons/actions/gameCategory/InnerThoughtIcon.jsx'
import ChestIcon from '@public/assets/icons/actions/gameCategory/ChestIcon.jsx'
import MobiglassIcon from '@public/assets/icons/actions/gameCategory/MobiglassIcon.jsx'
import RadialMenuIcon from '@public/assets/icons/actions/gameCategory/RadialMenuIcon.jsx'
import ApertureIcon from '@public/assets/icons/actions/gameCategory/ApertureIcon.jsx'
import ChevronsRight from '@public/assets/icons/actions/gameCategory/ChevronsRight.jsx'
import ModLayerSelector from '@components/actionSelector/ModLayerSelector';
import { SelectContext, SelectedActionContext, EditorPanelTitleContext, TreeTableDialogueSelectionContext, TreeTableDialogueVisibilityContext } from '@components/Provider';
import BindIcon from '@public/assets/icons/generic/BindIcon.jsx'

import { Utils } from '@app/editor/utils.js'

export default function TreeTableDialogue(props) {
    const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
    const { treeTableDialogueSelection, setTreeTableDialogueSelection } = useContext(TreeTableDialogueSelectionContext)
    const { treeTableDialogueVisibility, setTreeTableDialogueVisibility } = useContext(TreeTableDialogueVisibilityContext)

    const [selectedGameAction, setSelectedGameAction] = useState(
        <Button type="gameActions" unstyled className='flex whitespace-nowrap flex-row pl-[8px] py-[8px]'>



            <div className='flex flex-col  justify-start w-full'>
                <p className='gameAction-text-regular whitespace-nowrap flex '>SELECT A GAME ACTION FROM THE TABLE BELOW</p>
                {/* <p className=' gameAction-text-subheading whitespace-nowrap flex' >{node.data.category}</p> */}

            </div>

        </Button>
    )
    const [visible, setVisible] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [selectedKey, setSelectedKey] = useState('');
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const [isLoading, setIsLoading] = useState(false);

    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    const layers_placeholder = [
        {
            key: 'v_weapon_manual_gimbal_cycle_source',
            label:
                'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
            data: {
                actionmapName: 'spaceship_weapons',
                name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                category: 'Vehicles / Weapons',
                inputType: 'Toggle'
            }
        },
        {
            key: 'v_weapon_manual_gimbal_cycle_source',
            label:
                'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
            data: {
                actionmapName: 'spaceship_weapons',
                name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                category: 'Vehicles / Weapons',
                inputType: 'Toggle'
            }
        },
        {
            key: 'v_weapon_manual_gimbal_cycle_source',
            label:
                'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
            data: {
                actionmapName: 'spaceship_weapons',
                name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                category: 'Vehicles / Weapons',
                inputType: 'Toggle'
            }
        }
    ];
    useEffect(() => {


        GameActions.getTreeTableNodes().then((data) => setNodes(data));
        // setTreeTableDialogueVisibility(JSON.parse(sessionStorage.getItem("dialogueVisibility")))
        // setVisible(treeTableDialogueVisibility)
        console.log(treeTableDialogueSelection);
        setVisible(treeTableDialogueVisibility)
        // setTreeTableDialogueVisibility(true)

    }, [treeTableDialogueVisibility, treeTableDialogueSelection]);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();
    const getHeaderIcon = (node) => {
        switch (node) {
            // Seat Icon
            case "":
                return (<div className='w-[25px]'> <SeatIcon /></div>)
            // Spaceship Icon + Ground Vehicle
            case "Vehicles":
                return (
                    <div className='flex flex-row gap-[3px] h-[42px] '>
                        <div className='flex flex-row gap-[3px] mx-[5px]'>
                            <SpaceshipIcon width='25px' />
                            {/* <div className='spacer'/> */}
                            <GroundVehicleIcon width='28px' />
                        </div>
                    </div>
                )
            // Spaceship Icon + Ground Vehicle
            case "Targeting":
                return (
                    <div className='flex flex-row gap-[3px] h-[42px] '>
                        <div className='flex flex-row gap-[3px] mx-[5px]'>
                            <TargetingIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Spaceship Icon + Ground Vehicle
            case "Ground Vehicle":
                return (
                    <div className='flex flex-row gap-[3px] h-[42px] '>
                        <div className='flex flex-row gap-[3px] mx-[5px]'>
                            <GroundVehicleIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Camera Icon
            case "View":

                return (
                    <div className='flex flex-row gap-[3px] h-[42px] '>
                        <div className='flex flex-row gap-[3px] mx-[6px] self-center align-middle'>
                            <CameraIcon width='26px' />
                            {/* <div className='spacer'/> */}
                        </div>
                    </div>
                )
            // Spaceship Icon
            case "Flight":
                return (
                    <div className='flex flex-row gap-[3px] h-[42px] '>
                        <div className='flex flex-row gap-[3px] mx-[5px]'>
                            <SpaceshipIcon width='25px' />
                            {/* <div className='spacer'/> */}
                            {/* <GroundVehicleIcon width='28px' /> */}
                        </div>
                    </div>)

            // Seat Icon 
            case "Seats & Operator Modes":
                return (
                    <div className='GameAction-Category-Heading '>
                        <SeatIcon width='25px' />
                        {/* <div className='spacer'/> */}
                    </div>
                )
            // Seat + Spaceship Icon 
            case "Cockpit":
                return (
                    <div className='GameAction-Category-Heading '>
                        {/* <div className='spacer'/> */}
                        <div className='flex flex-row gap-[3px] '>
                            <SpaceshipIcon width='25px' />
                            <SeatIcon width='25px' />

                            {/* <GroundVehicleIcon width='28px' /> */}
                        </div>
                    </div>
                )
            // Move Icon
            case "spaceship_movement-maneuvering":
            case "Movement":
                return (
                    <div className='GameAction-Category-Heading '>
                        <MoveIcon width='25px' />
                        {/* <div className='spacer'/> */}
                    </div>
                )
            // Quantum Icon
            case "Quantum Travel":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <QuantumIcon width='25px' />

                        </div>
                    </div>
                )
            case "Target Cycling":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <TargetingIcon width='25px' />

                        </div>
                        <div className='flex flex-row gap-[3px] '>
                            <CycleIcon width='25px' />

                        </div>
                    </div>
                )

            case "Docking":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <DockingIcon width='25px' />

                        </div>
                    </div>
                )
            case "Target Hailing":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <TargetingIcon width='25px' />

                        </div>
                        <div className='flex flex-row gap-[3px] '>
                            <WifiIcon width='25px' />

                        </div>
                    </div>
                )
            case "Radar":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <ScanningIcon width='25px' />

                        </div>

                    </div>
                )
            case "Mining":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <MiningIcon width='25px' />

                        </div>

                    </div>
                )
            case "Salvage":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <SalvageIcon width='25px' />

                        </div>

                    </div>
                )
            case "Turret Movement Advanced":
            case "Turret Movement":

                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px] '>
                            <TurretIcon width='25px' />

                        </div>

                    </div>
                )
            case "Weapons":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <WeaponsIcon width='29px' height='25px' />

                        </div>

                    </div>
                )
            case "Missiles":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <MissileIcon width='23px' />

                        </div>

                    </div>
                )
            case "Shields and Countermeasures":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <ShieldAltIcon height='22px' />

                        </div>

                    </div>
                )
            case "Power Triangle Assignment":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <PowerTriangleIcon height='22px' />

                        </div>

                    </div>
                )
            case "Power":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <PowerButtonIcon height='26px' />

                        </div>

                    </div>
                )
            case "HUD":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row gap-[3px]  outline-primary self-center'>
                            <HUDIcon height='26px' />

                        </div>

                    </div>
                )
            case "Lights":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <FlashlightIcon height='26px' />

                        </div>

                    </div>
                )
            case "Stopwatch":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <StopwatchIcon height='26px' />

                        </div>

                    </div>
                )
            case "Spectator":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <EyeIcon width='26px' />

                        </div>

                    </div>
                )
            case "VOIP, FOIP, and Headtracking":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <EyeTrackerIcon width='26px' />

                        </div>

                    </div>
                )
            case "Quick Keys, Interaction, & Inner Thought":
                return (
                    <div className='GameAction-Category-Heading '>
                        <div className='flex flex-row   self-center'>
                            <InteractIcon width='24px' />

                        </div>

                    </div>
                )
            default:
                break;
        }
    }

    const getCategoryHeader = (node) => {
        if (!Object.hasOwn(node, 'children')) {
            console.log('Node has no data.category' + Object.hasOwn(node.data, 'category'));
            return (<></>);
        } else {
            // console.log('NODE HAS DATA CATEGORY: ' + Object.hasOwn(node.data, 'category'));
            let stringCategory = node.data.category;
            const split = stringCategory.split(" / ");
            // console.log("SPLIT[0]: " + split);


            return (
                <div className='flex flex-row'>
                    {
                        split.map((category, index) => {
                            if (index == 0) {
                                return (
                                    <div className='flex flex-row'>
                                        {/* <div className="spacer-dialogue" /> */}

                                        <span className='self-center justify-center '>
                                            <p className='text-GameAction-Category-Heading'>{category} </p>
                                        </span>
                                        <span className='' aria-hidden="true">
                                            {getHeaderIcon(category)}

                                        </span>
                                    </div>

                                )
                            } else {
                                if (split[index + 1] === undefined) {
                                    return (
                                        <div className='flex flex-row'>
                                            <div className="spacer-dialogue" />
                                            <span className='self-center justify-center '>
                                                <p className='text-GameAction-Category-Heading'>{category} </p>
                                            </span>
                                            <span className='' aria-hidden="true">
                                                {getHeaderIcon(category)}

                                            </span>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='flex flex-row'>
                                            <div className="spacer-dialogue" />

                                            <span className='self-center justify-center '>
                                                <p className='text-GameAction-Category-Heading'>{category} </p>
                                            </span>
                                            <span className='' aria-hidden="true">
                                                {getHeaderIcon(category)}

                                            </span>
                                        </div>
                                    )
                                }


                            }

                        })
                    }
                </div>
            )
        }


    }

    const togglerTemplate = (node, options) => {
        if (!node) {
            return (<></>);
        }
        let label = <p className='self-center justify-center text-list-default '>{node.label?.toUpperCase()}</p>;
        const expanded = options.expanded;

        const toggleIcon = (expanded) => {
            if (!expanded) {
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z" fill="currentColor" /><path d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z" fill="currentColor" /></svg>
                )
            } else {
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z" fill="currentColor" /><path d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z" fill="currentColor" /></svg>
                )
            }

        }
        return (
            <button type="button" className="justify-center  p-tree-toggler flex flex-col  gap-[0px] pl-[2px]  " tabIndex={-1}
                onClick={
                    options.onClick

                }
            >
                <div className='flex flex-row content-start justify-center self-start gap-[3px] '>
                    <div className='self-center justify-center '>
                        {getCategoryHeader(node)}
                    </div>
                    <div className='self-center justify-center flex '>
                        {/* {getHeaderIcon(node)} */}
                    </div>
                    {/* <div className="spacer-dialogue" />

                    <span className='self-center justify-center '>{label}</span> */}
                    {/* <div className="spacer-dialogue" /> */}
                    {expanded}
                </div>

            </button>
        );
    };

    const getGameActionIcon = (node) => {
        switch (node.key) {

            // Reset Icon
            case "v_target_cycle_friendly_reset":
            case "v_target_cycle_attacker_reset":
            case "v_target_cycle_hostile_reset":
            case "v_target_cycle_all_reset":
            case "v_target_cycle_in_view_reset":
            case "v_target_cycle_pinned_reset":
            case "v_target_cycle_subitem_reset":
            case "v_salvage_reset_gimbal":
            case "v_weapon_reset_max_missiles":
            case "v_shield_reset_level":
            case "v_capacitor_assignment_reset":
            case "stopwatch_reset":

                return (
                    <div className=' self-center flex flex-row gap-[px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <ResetIcon width='24px' />
                    </div>
                )
            // Reset Icon + Generic Settings Icon
            case "turret_recenter":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ResetIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>
                    </div>
                )
            // Forward Icon
            case "v_target_cycle_hostile_fwd":
            case "v_target_cycle_friendly_fwd":
            case "v_target_cycle_attacker_fwd":
            case "v_target_cycle_all_fwd":
            case "v_target_cycle_in_view_fwd":
            case "v_target_cycle_pinned_fwd":
            case "v_target_cycle_subitem_fwd":
            case "v_strafe_forward_abs":
            case "v_strafe_forward_abs_rel":
            case "v_strafe_forward_rel":
            case "v_view_pitch_up":
            case "turret_pitch_up":
            case "v_pitch_up":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ForwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )

            //  Backward Icon
            case "v_target_cycle_hostile_back":
            case "v_target_cycle_attacker_back":
            case "v_target_cycle_friendly_back":
            case "v_target_cycle_all_back":
            case "v_target_cycle_pinned_back":
            case "v_target_cycle_subitem_back":
            case "v_target_cycle_in_view_back":
            case "v_strafe_back_abs":
            case "v_strafe_back_abs_rel-FIX THIS KEY":
            case "v_strafe_back_abs_rel":
            case "v_strafe_down":
            case "v_view_pitch_down":
            case "turret_pitch_down":
            case "v_pitch_down":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <BackwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )

            // Rightward Icon
            case "v_strafe_right":
            case "v_view_yaw_right":
            case "turret_yaw_left":
            case "v_yaw_right":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <RightwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Leftward Icon
            case "v_strafe_left":
            case "v_view_yaw_left":
            case "turret_yaw_right":
            case "v_yaw_left":

                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftwardIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // UpDown Icon
            case "v_strafe_vertical":
            case "v_strafe_longitudinal_abs":
            case "v_strafe_longitudinal_abs_rel":
            case "v_strafe_longitudinal_rel":
            case "v_view_pitch":
            case "turret_pitch":
            case "v_pitch":

                // case "v_strafe_longitudinal_invert":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <UpDownIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // LeftRight Icon
            case "v_strafe_lateral":
            case "v_view_yaw":
            case "turret_yaw":
            case "v_yaw":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftRightIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Turbo / Afterburner Icon
            case "v_afterburner":
            case "v_boost":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <TurboIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon
            case "turret_limiter_abs":
            case "turret_limiter_rel":
            case "turret_remote_zoom_in":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Forward Icon
            case "v_move_forward":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <ForwardIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Backward Icon
            case "v_move_back":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <BackwardIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + UpDown Icon
            case "v_move":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="26px" className='self-center' />
                            <UpDownIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Increase Icon
            case "turret_limiter_rel_increase":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <IncreaseIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Decrease Icon
            case "turret_limiter_rel_decrease":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <DecreaseIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Speedometer Icon + Generic Settings Icon
            case "turret_limiter_toggle":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <SpeedometerIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>
                    </div>
                )

            // Zoom In Icon
            case "turret_instant_zoom":
            case "pc_zoom_in":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <IncreaseIcon width="24px" className='self-center' />

                        </div>

                    </div>

                )
            // Zoom In Icon + Zoom Out Icon
            case "v_view_dynamic_zoom_abs":
            case "v_view_dynamic_zoom_rel":
            case "spectate_zoom":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <ZoomOutIcon width="24px" className='self-center' />

                        </div>

                    </div>

                )
            // Zoom In Icon + Zoom Out Icon + Generic Settings Icon
            case "v_view_dynamic_zoom_abs_toggle":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <ZoomOutIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>

                    </div>

                )
            // Zoom In Icon + Increase Icon
            case "v_view_zoom_in":
            case "v_view_dynamic_zoom_rel_in":
            case "turret_remote_zoom_in":
            case "spectate_zoom_in":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomInIcon width="24px" className='self-center' />
                            <IncreaseIcon width="24px" className='self-center' />

                        </div>

                    </div>



                )

            // Zoom Out Icon
            case "v_view_zoom_out":
            case "v_view_dynamic_zoom_rel_out":
            case "turret_remote_zoom_out":
            case "spectate_zoom_out":
            case "pc_zoom_out":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomOutIcon width="24px" className='self-center' />
                            <DecreaseIcon width="24px" className='self-center' />

                        </div>

                    </div>
                )
            // Zoom + Settings Icon
            case "v_view_dynamic_zoom_abs_toggle":
            case "turret_remote_zoom_toggle":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ZoomIcon width="24px" className='self-center' />
                            <GenericSettingIcon width="22px" className='self-center' />

                        </div>

                    </div>
                )
            // Zoom In Out Icon
            case "v_view_dynamic_zoom_abs":
            case "v_view_dynamic_zoom_rel":
            case "pc_zoom_in":

                return (
                    <div className='flex flex-row gap-[3px] '>
                        <div className='self-center'>
                            <ZoomIcon width='24px' />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <DecreaseIcon />
                        </div>
                        <div className=' h-[24px] self-center'>
                            <IncreaseIcon />
                        </div>
                    </div>
                )

            // Zoom Icon
            case "v_view_freelook_mode":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <div className='self-center'>
                            <ZoomIcon width='24px' />
                        </div>

                    </div>
                )
            // Invert Icon
            case "v_strafe_longitudinal_invert":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <div className='self-center'>
                            <InvertIcon width='24px' />
                        </div>
                        <div className='w-[26px] self-center'>
                            <UpDownIcon width='26px' />
                        </div>
                    </div>

                )
            // Cycle Icon
            case "v_view_mode":
            case "v_view_cycle_fwd":
            case "v_toggle_docking_mode":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <div className='self-center'>
                            <CycleIcon width='26px' />
                        </div>

                    </div>

                )
            // Cycle Icon + Weapons Icon
            case "turret_change_firemode":
            case "v_weapon_change_firemode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <CycleIcon width="24px" className='self-center' />
                            <WeaponsIcon width="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Angle Icon
            case "v_weapon_convergence_distance_rel":
            case 'v_weapon_convergence_distance_abs':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <AngleIcon height="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Turret Icon
            case "v_enter_remote_turret_1":
            case "v_enter_remote_turret_2":
            case "v_enter_remote_turret_3":

                return (
                    <div className=' self-center flex flex-row gap-[3px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <TurretIcon width='25px' />
                    </div>
                )

            // Wifi/Communications Icon
            case "v_atc_loading_area_request":
            case "v_atc_request":
            case "v_target_hail":
            case "toggle_contact":

                return (
                    <div className=' self-center flex flex-row '>
                        <div className='mr-[2px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <WifiIcon width='24px' />
                    </div>
                )
            // Landing Icon
            case "v_deploy_landing_system":
            case "v_retract_landing_system":
            case "v_toggle_landing_system":

                return (
                    <div className='w-[25px] self-center'>
                        <LandingIcon />
                    </div>
                )
            // Quantum Icon
            case "v_toggle_quantum_mode":
            case "v_toggle_jump_request":
            case "v_engage_jump":
            case "v_toggle_qdrive_engagement":
            case "v_starmap":

                return (
                    <div className=' self-center flex flex-row gap-[3px]'>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <QuantumIcon width='25px' />
                    </div>
                )

            // Salvage Icon
            case "v_toggle_salvage_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <SalvageIcon />
                    </div>
                )

            // Scanning Icon  
            case "v_toggle_scan_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <ScanningIcon />
                    </div>
                )

            // Mining Icon  
            case "v_toggle_mining_mode":
                return (
                    <div className='w-[25px] self-center'>
                        <MiningIcon />
                    </div>
                )

            // Camera Icon  
            case "v_weapon_launch_missile_cinematic":
            case "v_weapon_launch_missile_cinematic_hold":
            case "pc_camera_orbit":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <CameraIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )
            // Camera Icon  + Lock Icon
            case "spectate_toggle_lock_target":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <CameraIcon width="24px" className='self-center' />
                            <LockIcon width="24px" className='self-center' />

                        </div>
                    </div>
                )


            // Warning Icon
            case "v_emergency_exit":
            case "v_self_destruct":
            case "v_eject":
            case "v_jettison_volatile_cargo":
            case "respawn":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <WarningIcon width="25px" className='self-center' />

                        </div>
                    </div>
                )
                break;

            // Key Icon
            case "v_close_all_doors":
            case "v_lock_all_doors":
            case "v_toggle_all_doorlocks":
            case "v_open_all_doors":
            case "v_toggle_all_doors":
            case "v_lock_all_ports":
            case "v_unlock_all_ports":
            case "v_toggle_all_portlocks":
            case "v_unlock_all_doorlocks":

            case "v_toggle_all_doorlocks":
                return (
                    <div className='w-[25px] self-center'>
                        <KeyIcon />

                    </div>

                )
                break;
            case "v_toggle_all_doorlocks":
                return (
                    <div className='w-[25px] self-center'>
                        <KeyIcon />
                    </div>
                )
                break;

            // One Icon
            case "v_mining_use_consumable1":
            case "v_attack_group1":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <OneIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )


            // Two Icon
            case "v_mining_use_consumable2":
            case "v_attack_group2":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <TwoIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // One Icon + Two Icon
            case "v_attack_all":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>
                            <OneIcon height="25px" className='self-center ' />

                            <TwoIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Three Icon
            case "v_mining_use_consumable3":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ThreeIcon height="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // LeftSide Icon 
            case "v_salvage_toggle_fire_left":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <LeftSideIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // LeftSide Icon + Forward Icon
            case "v_salvage_nudge_up__left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <ForwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Down Icon
            case "v_salvage_nudge_down__left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <BackwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Leftward Icon
            case "v_salvage_nudge_left__left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <LeftwardIcon height="26px" className='self-center' />

                    </div>
                )
            // LeftSide Icon + Rightward Icon
            case "v_salvage_nudge_right__left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <LeftSideIcon width="26px" className='self-center' />
                        <RightwardIcon height="26px" className='self-center' />

                    </div>
                )
            // RightSide Icon 
            case "v_salvage_toggle_fire_right":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <RightSideIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // RightSide Icon + Upward Icon
            case "v_salvage_nudge_up__right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <ForwardIcon height="26px" className='self-center' />

                    </div>
                )
            // RightSide Icon + Downward Icon
            case "v_salvage_nudge_down__right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <BackwardIcon height="26px" className='self-center' />
                    </div>
                )
            // RightSide Icon + Leftward Icon
            case "v_salvage_nudge_left__right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <LeftwardIcon height="26px" className='self-center' />
                    </div>
                )
            // RightSide Icon + Rightward Icon
            case "v_salvage_nudge_right__right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <RightSideIcon width="26px" className='self-center' />
                        <RightwardIcon height="26px" className='self-center' />
                    </div>
                )
            // Laser Icon + Cycle Icon
            case "v_toggle_mining_laser_fire":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />


                    </div>
                )
            // Laser Icon + Generic Icon
            case "v_salvage_toggle_beam_spacing_axis":
                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>

                        <div className='gap-[3px] flex flex-row'>
                            <SalvageBeamIcon height="26px" className='self-center' />
                            <GenericSettingIcon height="22px" className='self-center' />
                        </div>

                    </div>

                )
            // Laser Icon + Cycle Icon
            case "v_toggle_mining_laser_type":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />

                        <CycleIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon + Increase Icon
            case "v_increase_mining_throttle":
            case "v_salvage_increase_beam_spacing":

                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />

                        <IncreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon + Decrease Icon
            case "v_decrease_mining_throttle":
            case "v_salvage_decrease_beam_spacing":

                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />

                        <DecreaseIcon width="26px" className='self-center' />

                    </div>
                )

            // Laser Icon + Decrease Icon + Decrease Icon
            case "v_mining_throttle":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />

                        <SalvageBeamIcon height="26px" className='self-center' />
                        <IncreaseIcon width="26px" className='self-center' />

                        <DecreaseIcon width="26px" className='self-center' />

                    </div>
                )
            // Laser Icon 
            case "v_salvage_beam_spacing_abs":
            case "v_salvage_beam_spacing_rel":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>


                            <SalvageBeamIcon height="26px" className='self-center' />

                            <GenericSettingIcon width="22px" className='self-center' />
                        </div>
                    </div>
                )

            // Focus Icon 
            case "v_salvage_focus_disintegrate":
            case "v_salvage_toggle_fire_focused":
            case "pc_focus":

                return (

                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Left Icon + Right Icon
            case "v_salvage_focus_all_heads":
                return (

                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Left Icon
            case "v_salvage_focus_left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Focus Icon + Right Icon
            case "v_salvage_focus_right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Focus Icon + Increase Icon 
            case "v_salvage_focus_disintegrate":
                return (

                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />


                    </div>
                )
            // Focus Icon + Fracture Icon 
            case "v_salvage_focus_fracture":
                return (

                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <FocusIcon height="26px" className='self-center' />
                        <FractureIcon height="26px" className='self-center' />


                    </div>
                )
            // Cycle Icon + Focus Icon
            case "v_salvage_cycle_modifiers_focused":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <FocusIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Left Icon
            case "v_salvage_cycle_modifiers_left":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <LeftSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Left Icon
            case "v_salvage_cycle_modifiers_right":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <RightSideIcon height="26px" className='self-center' />
                    </div>
                )
            // Cycle Icon + Salvage Icon
            case "v_salvage_cycle_modifiers_structural":
                return (
                    <div className='flex flex-row gap-[3px] '>
                        <ArrowRightIcon width="20px" />
                        <CycleIcon height="26px" className='self-center' />
                        <SalvageIcon height="26px" className='self-center' />
                    </div>
                )
            // Angle Icon + Decrease Icon
            case "v_dec_scan_focus_level":
            case "v_weapon_convergence_distance_rel_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>

                            <AngleIcon height="24px" className='self-center ' />
                            <DecreaseIcon width="24px" className='self-center ' />
                        </div>

                    </div>

                )
            // Angle Icon + Increase Icon
            case "v_inc_scan_focus_level":
            case "v_weapon_convergence_distance_rel_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>

                            <AngleIcon height="24px" className='self-center ' />
                            <IncreaseIcon width="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Angle Icon + Reset Icon
            case "v_weapon_convergence_distance_set_default":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ResetIcon width="24px" className='self-center ' />

                            <AngleIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Auto Gimbal Icon 
            case "v_weapon_gimbal_mode_set_auto":
            case "v_weapon_gimbal_mode_set_auto_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <AutoGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon 
            case "v_weapon_gimbal_mode_set_manual":
            case "v_weapon_gimbal_mode_set_manual_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Generic Settings Icon 
            case "v_weapon_manual_gimbal_cycle_source":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <GenericSettingIcon height="22px" className='self-center ' />

                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Lock Icon 
            case "v_weapon_manual_gimbal_lock_vector":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[2px]  justify-center'>
                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <LockIcon width="24px" className='self-center ' />

                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Auto Gimbal Icon + Fixed Gimbal Icon + Cycle Icon
            case "v_weapon_gimbal_mode_cycle_all":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <CycleIcon width="24px" className='self-center ' />
                            <AutoGimbalIcon height="24px" className='self-center ' />
                            <ManualGimbalIcon height="24px" className='self-center ' />

                            <FixedGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Manual Gimbal Icon + Fixed Gimbal Icon + Reset Icon
            case "v_weapon_gimbal_mode_cycle_fixed_auto":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <CycleIcon height="24px" className='self-center ' />

                            <FixedGimbalIcon width="24px" className='self-center ' />
                            <AutoGimbalIcon height="24px" className='self-center ' />

                        </div>

                    </div>
                )

            // Manual Gimbal Icon + Fixed Gimbal Icon + Reset Icon
            case "v_weapon_gimbal_mode_cycle_fixed_auto":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <CycleIcon height="24px" className='self-center ' />

                            <ManualGimbalIcon height="24px" className='self-center ' />
                            <FixedGimbalIcon width="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Fixed Gimbal Icon 
            case "v_weapon_gimbal_mode_set_fixed":
            case "v_weapon_gimbal_mode_set_fixed_long":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <FixedGimbalIcon height="24px" className='self-center ' />
                        </div>

                    </div>
                )
            // Empty
            case "v_salvage_toggle_fire_disintegrate":
            case "v_weapon_launch_missile":
            case "v_weapon_toggle_launch_missile":
            case "v_power_toggle":
            case "v_power_toggle":
            case "player":
            case "pc_interaction_mode":
            case "pc_interaction_mode":

                return (
                    <></>
                )
            // Increase Icon
            case "tractor_beam_vehicle_increase_distance":
            case "v_weapon_increase_max_missiles":
            case "v_power_throttle_up":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <IncreaseIcon width="26px" className='self-center ' />
                        </div>

                    </div>
                )
            // Decrease Icon
            case "tractor_beam_vehicle_decrease_distance":
            case "v_weapon_decrease_max_missiles":
            case "v_power_throttle_down":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <DecreaseIcon width="26px" className='self-center ' />
                        </div>

                    </div>
                )
            // Set Min Icon
            case "v_power_throttle_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  justify-center'>
                            <SetMinIcon width="22px" className='self-center ' />
                        </div>

                    </div>
                )
            // Fracture Icon + Focus Icon
            case "v_salvage_toggle_fire_fracture":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <FractureIcon height="26px" className='self-center' />

                        </div>
                    </div>
                )
            // Exit Icon
            case "turret_remote_exit":
            case "pc_personal_back":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <ExitIcon width="26px" className='self-center' />

                        </div>
                    </div>
                )
            // ESP Icon
            case "turret_esp_hold":
            case 'turret_esp_toggle':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] outline-primary self-center'>

                            <ESPIcon height="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // PIP Icon
            case "v_weapon_pip_combination_type_set_combined_all":
            case 'v_weapon_pip_combination_type_set_combined_weapon_group':
            case 'v_weapon_pip_combination_type_set_single':
            case 'v_weapon_pip_combination_type_toggle':

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Increase Icon
            case 'v_weapon_bombing_hud_range_increase':

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <IncreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Decrease Icon
            case 'v_weapon_bombing_hud_range_decrease':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <DecreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Reset Icon
            case 'v_weapon_bombing_hud_range_reset':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <ResetIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // HUD Icon + Generic Settings Icon
            case 'spectate_toggle_hud':
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center '>
                            <div className='self-center outline-primary '>
                                <HUDIcon height="24px" />
                            </div>
                            <GenericSettingIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lead PIP Icon + Lag PIP Icon
            case "v_weapon_pip_toggle_lead_lag":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LeadPIPIcon width="25px" className='self-center ' />
                            <CycleIcon width="25px"></CycleIcon>
                            <LagPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lead PIP Icon
            case "v_weapon_pip_set_lead":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LeadPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lag PIP Icon
            case "v_weapon_pip_set_lag":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <LagPIPIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )

            // Targeting Icon + Generic Settings Icon
            case "v_weapon_bombing_toggle_desired_impact_point":
            case "v_weapon_bombing_toggle_desired_impact_point_hold":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <TargetingIcon width="25px" className='self-center ' />
                            <GenericSettingIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Next Icon
            case "v_weapon_cycle_missile_fwd":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NextIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Next Icon + Generic Settings Icon
            case "spectate_gen_nextmode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NextIcon width="25px" className='self-center ' />
                            <GenericSettingIcon width="23px" className='self-center ' />

                        </div>
                    </div>
                )
            // Previous Icon + Generic Settings Icon
            case "spectate_gen_prevmode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PreviousIcon width="25px" className='self-center ' />
                            <GenericSettingIcon width="23px" className='self-center ' />

                        </div>
                    </div>
                )
            // Next Icon + Target Icon
            case "spectate_next_target":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NextIcon width="25px" className='self-center ' />
                            <TargetingIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Previous Icon + Target Icon
            case "spectate_prev_target":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PreviousIcon width="25px" className='self-center ' />
                            <TargetingIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )

            // Previous Icon
            case "v_weapon_cycle_missile_back":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PreviousIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Bottom Icon + Increase Icon
            case "v_shield_raise_level_back":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldBottomIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Front Icon + Increase Icon
            case "v_shield_raise_level_forward":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldTopIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Right Icon + Increase Icon
            case "v_shield_raise_level_right":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldRightIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Top Icon + Increase Icon
            case "v_shield_raise_level_up":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <TopIcon width="23px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Top Icon + Increase Icon
            case "v_shield_raise_level_down":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <BottomIcon width="23px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Left Icon + Increase Icon
            case "v_shield_raise_level_left":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldLeftIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Noise Icon
            case "v_weapon_countermeasure_noise_launch":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <NoiseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon
            case "v_weapon_countermeasure_decoy_launch":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Increase Icon
            case "v_weapon_countermeasure_decoy_burst_increase":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Decrease Icon
            case "v_weapon_countermeasure_decoy_burst_decrease":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Decoy Icon + Warning Icon
            case "v_weapon_countermeasure_decoy_launch_panic":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <DecoyIcon width="25px" className='self-center ' />
                            <WarningIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon 
            case "v_power_toggle_thrusters":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Decrease Icon
            case "v_capacitor_assignment_engine_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Decrease Icon + Set Min Icon
            case "v_capacitor_assignment_engine_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <DecreaseIcon width="25px" className='self-center ' />

                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Increase Icon
            case "v_capacitor_assignment_engine_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_engine_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <IncreaseIcon width="25px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Set Max Icon
            case "v_capacitor_assignment_engine_max":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Engine Icon + Set Min Icon
            case "v_capacitor_assignment_engine_min":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <EngineIcon width="28px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Decrease Icon
            case "v_capacitor_assignment_shield_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Decrease Icon + Set Min Icon
            case "v_capacitor_assignment_shield_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Increase Icon
            case "v_capacitor_assignment_shield_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_shield_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Set Max Icon
            case "v_capacitor_assignment_shield_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon + Set Min Icon
            case "v_capacitor_assignment_shield_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Shield Icon 
            case "v_power_toggle_shields":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ShieldIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon 
            case "v_power_toggle_weapons":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Increase Icon
            case "v_capacitor_assignment_weapon_increase":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Increase Icon + Set Max Icon
            case "v_capacitor_assignment_weapon_combined_increase_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="26px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Decrease Icon
            case "v_capacitor_assignment_weapon_decrease":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Decrease Icon  + Set Min Icon
            case "v_capacitor_assignment_weapon_combined_decrease_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="26px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Set Max Icon
            case "v_capacitor_assignment_weapon_max":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <SetMaxIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Weapons Icon + Set Min Icon
            case "v_capacitor_assignment_weapon_min":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="24px" className='self-center ' />
                            <SetMinIcon width="22px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  
            case "v_power_set_on":
            case "pc_interaction_select":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            case "v_power_set_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Shield Icon
            case "v_power_set_shields_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <ShieldIcon width="28px" className='self-center ' />

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power Off Icon  + Shield Icon
            case "v_power_set_shields_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <ShieldIcon width="28px" className='self-center ' />

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power Off Icon  + Thruster Icon
            case "v_power_set_thrusters_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EngineIcon width="28px" className='self-center ' />

                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Thruster Icon
            case "v_power_set_thrusters_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EngineIcon width="28px" className='self-center ' />

                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Weapons Icon
            case "v_power_set_weapons_off":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />
                            <PowerOffIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Power On Icon  + Weapons Icon
            case "v_power_set_weapons_on":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WeaponsIcon width="28px" className='self-center ' />
                            <PowerOnIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Scoreboard Icon 
            case "v_hud_open_scoreboard":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <ScoreboardIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Wipe Icon 
            case "visor_wipe":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>

                            <WipeIcon height="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Ladder Icon + Cycle Icon
            case "v_cycle_pitch_ladder_mode":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <CycleIcon height="26px" className='self-center ' />

                            <LadderIcon height="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Lock Icon + LeftRight Icon
            case "v_lock_rotation":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <LockIcon height="26px" className='self-center ' />

                            <UpDownIcon height="24px" className='self-center ' />
                            <LeftRightIcon height="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Brake Icon 
            case "v_brake":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <BrakeIcon height="25px" className='self-center ' />


                        </div>
                    </div>
                )
            // Rotate Icon + UpDown Icon
            case "spectate_rotatepitch":
            case "spectate_rotatepitch_mouse":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <RotateIcon width="26px" height='26px' className='self-center ' />
                            <UpDownIcon height="24px" className='self-center ' />


                        </div>
                    </div>
                )
            // Rotate Icon + LeftRight Icon
            case "spectate_rotateyaw":
            case "spectate_rotateyaw_mouse":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <RotateIcon width="26px" height='26px' className='self-center ' />
                            <LeftRightIcon height="24px" className='self-center ' />


                        </div>
                    </div>
                )
            // Chat Bubble Icon
            case "toggle_chat":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[5px]  self-center'>
                            <ChatBubbleIcon width="22px" height='26px' className='self-center ' />


                        </div>
                    </div>
                )
            // Chat Bubble Icon + Focus Icon
            case "focus_on_chat_textinput":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[7px]  self-center'>
                            <ChatBubbleIcon width="22px" height='26px' className='self-center ' />
                            <FocusIcon height="24px" className='self-center ' />


                        </div>
                    </div>
                )
            // Exit Icon + Seat Icon
            case "pl_exit":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[px]  self-center'>
                            <ExitIcon width="24px" className='self-center ' />
                            <SeatIcon width="26px" className='self-center ' />


                        </div>
                    </div>
                )
            // Cycle Icon + Audio Wave Icon
            case "foip_cyclechannel":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <CycleIcon width="26px" className='self-center ' />

                            <AudioWaveIcon width="24px" className='self-center ' />


                        </div>
                    </div>
                )
            // VOIP Icon + Power On Icon
            case "foip_pushtotalk":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <VOIPIcon width="26px" className='self-center ' />
                            <AudioWaveIcon width="26px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}


                        </div>
                    </div>
                )
            // VOIP Icon + Speaking Icon
            case "foip_pushtotalk_proximity":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <VOIPIcon width="26px" className='self-center ' />
                            <SpeakingIcon width="22px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )

            // FOIP Icon + Speaking Icon
            case "foip_recalibrate":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[7px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />
                            <SpeakingIcon width="22px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}


                        </div>
                    </div>
                )
            // FOIP Icon + Camera Icon
            case "foip_viewownplayer":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[7px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />
                            <CameraIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // FOIP Icon + Power On Icon
            case "headtrack_camera_enabled":
            case "headtrack_hold":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />

                            <PowerOnIcon width="24px" className='self-center ' />
                        </div>
                    </div>
                )
            // FOIP Icon + Camera Icon
            case "foip_viewownplayer":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[7px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />
                            <CameraIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // FOIP Icon + Camera Icon + Generic Settings Icon
            case "headtrack_enabled":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[7px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />
                            <CameraIcon width="24px" className='self-center ' />
                            <GenericSettingIcon width="22px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // FOIP Icon + Reset Icon
            case "headtrack_recenter_device":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <FOIPIcon height="26px" className='self-center ' />
                            <ResetIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Interact Icon 
            case "headtrack_recenter_device":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <InteractIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon 
            case "pc_personal_thought":
            case "pc_select":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon + Emote Icon
            case "pc_pit_emotes":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            😀
                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon + Spaceship Icon
            case "pc_pit_flight_systems":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <SpaceshipIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon + Spaceship Icon
            case "pc_pit_flight_systems":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <SpaceshipIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon + Chest Icon
            case "pc_pit_inventory":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <ChestIcon width="24px" className='self-center ' />

                            {/* <AudioWaveIcon width="24px" className='self-center ' /> */}
                        </div>
                    </div>
                )
            // Inner Thought Icon + Mining Icon
            case "pc_pit_miningmode_actions":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <MiningIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Inner Thought Icon + MobiGlass Icon
            case "pc_pit_mobiglas_actions":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <MobiglassIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Inner Thought Icon + Power Icon
            case "pc_pit_ship_systems":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <PowerTriangleIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Inner Thought Icon + Ground Vehicle Icon
            case "pc_pit_vehicle_actions":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <GroundVehicleIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Inner Thought Icon + Weapons Icon
            case "pc_pit_weapons_systems":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <WeaponsIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Inner Thought Icon + Weapons Icon + Cycle Icon
            case "pc_pit_weapon_selection":

                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <CycleIcon width="24px" className='self-center ' />

                            <WeaponsIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )

            // Inner Thought Icon + Turret Icon
            case "pc_pit_remote_turrets":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <InnerThoughtIcon width="24px" className='self-center ' />
                            <TurretIcon width="28px" className='self-center ' />

                        </div>
                    </div>
                )
            // Radial Menu Icon + One  Icon
            case "pc_qs_consumables":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <RadialMenuIcon width="24px" className='self-center ' />
                            <OneIcon width="26px" className='self-center ' />

                        </div>
                    </div>
                )
            // Radial Menu Icon + Spaceship  Icon
            case "pc_qs_flight_mode":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <RadialMenuIcon width="24px" className='self-center ' />
                            <SpaceshipIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Monitor Icon + Backward  Icon
            case "pc_screen_focus_down":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <MonitorIcon width="24px" className='self-center ' />
                            <BackwardIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Monitor Icon + ForwardIcon Icon
            case "pc_screen_focus_up":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[4px]  self-center'>
                            <MonitorIcon width="24px" className='self-center ' />
                            <ForwardIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Monitor Icon + Leftward Icon
            case "pc_screen_focus_left":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <MonitorIcon width="24px" className='self-center ' />
                            <LeftwardIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Monitor Icon + Rightward Icon
            case "pc_screen_focus_right":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <MonitorIcon width="24px" className='self-center ' />
                            <RightwardIcon width="24px" className='self-center ' />

                        </div>
                    </div>
                )
            // Aperture Icon + Increase Icon
            case "view_fstop_in":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <ApertureIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>

                )
            // Aperture Icon + Decrease Icon
            case "view_fstop_out":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <ApertureIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>

                )
            // Eye Icon
            case "v_dock_toggle_view":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EyeIcon width="26px" className='self-center ' />
                        </div>
                    </div>
                )
            // Eye Icon + Increase Icon
            case "view_fov_in":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EyeIcon width="24px" className='self-center ' />
                            <IncreaseIcon width="24px" className='self-center ' />
                        </div>
                    </div>
                )
            // Eye Icon + Decrease Icon
            case "view_fov_out":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EyeIcon width="24px" className='self-center ' />
                            <DecreaseIcon width="24px" className='self-center ' />

                        </div>
                    </div>

                )
            // Eye Icon + Reset Icon
            case "view_restore_defaults":
                return (
                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px]  self-center'>
                            <EyeIcon width="24px" className='self-center ' />
                            <ResetIcon width="24px" className='self-center ' />

                        </div>
                    </div>

                )
            default:
                return (

                    <div className='flex flex-row '>
                        <div className='mr-[3px] self-center'>
                            <ArrowRightIcon width="20px" />
                        </div>
                        <div className='flex flex-row gap-[3px] '>

                            <GenericSettingIcon height="24px" className='self-center' />

                        </div>
                    </div>
                )
                break;
        }
    }
    const getCategoryIcon = (node) => {
        if (Object.hasOwn(node, 'children')) {
            return;
        }
        if (node.data.category === 'Camera / Advanced Camera Controls') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] '>
                        <CameraIcon width='24px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Quick Keys, Interaction, & Inner Thought') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[25px] self-center mr-[-2px] '>
                        <InteractIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Social / General') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <UsersIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'VOIP, FOIP, and Headtracking') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] '>
                        <EyeTrackerIcon width='26px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Electronic Access / Spectator') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <EyeIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === "Lights") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[0px]'>
                        <FlashlightIcon width='30px' />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === "Ground Vehicle / General" || node.data.category === "Ground Vehicle / Movement") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[3px]'>
                        <GroundVehicleIcon width='24px' />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === "Stopwatch") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mx-[0px]'>
                        <StopwatchIcon width='27px' />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Flight / Power') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] '>
                        <PowerButtonIcon width='28px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Flight / HUD') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className=' self-center mr-[3px] outline-primary '>
                        <HUDIcon height='24px' />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Power Triangle Assignment') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[27px] self-center mr-[3px] '>
                        <PowerTriangleIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Shields and Countermeasures') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <ShieldAltIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }

        if (node.data.actionmapName === "spaceship_targeting_advanced") {
            switch (node.key) {
                // TargetingFriendly Icon
                case "v_target_cycle_friendly_back":
                case "v_target_cycle_friendly_fwd":
                case "v_target_cycle_friendly_reset":
                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>

                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconFriendly />
                                </div>
                                {getGameActionIcon(node)}
                            </div>

                        </div>
                    )
                case "v_target_cycle_all_back":
                case "v_target_cycle_all_fwd":
                case "v_target_cycle_all_reset":
                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>


                            <div className='flex flex-row gap-[3px]'>

                                {getGameActionIcon(node)}
                            </div>

                        </div>
                    )
                // TargetingHostile Icon
                case "v_target_cycle_attacker_back":
                case "v_target_cycle_attacker_fwd":
                case "v_target_cycle_attacker_reset":

                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>
                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>

                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconAttacker />
                                </div>
                                {getGameActionIcon(node)}
                            </div>
                        </div>
                    )
                // TargetingHostile Icon
                case "v_target_cycle_hostile_back":
                case "v_target_cycle_hostile_fwd":
                case "v_target_cycle_hostile_reset":

                    return (
                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center'>
                                <TargetingIcon />
                            </div>

                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>

                            <div className='flex flex-row gap-[3px]'>
                                <div className='w-[26px] self-center'>
                                    <TargetingIconHostile />
                                </div>
                                {getGameActionIcon(node)}
                            </div>
                        </div>
                    )
                case "v_target_cycle_in_view_back":
                case "v_target_cycle_in_view_fwd":
                case "v_target_cycle_in_view_reset":

                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>

                            <div className='w-[26px] self-center mx-[3px]'>
                                <TargetingIconView />
                            </div>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                case "v_target_cycle_pinned_back":
                case "v_target_cycle_pinned_fwd":
                case "v_target_cycle_pinned_reset":
                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>
                            <div className='w-[20px] self-center mx-[3px]'>
                                <ArrowRightIcon />
                            </div>
                            <div className='w-[22px] self-center mr-[3px]'>
                                <GenericSettingIcon />
                            </div>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                case "v_target_cycle_subitem_back":
                case "v_target_cycle_subitem_fwd":
                case "v_target_cycle_subitem_reset":
                    return (

                        <div className=' flex flex-row mr-[5px]'>
                            {getActionTypeIcon.getIcon('vehicles')}
                            <div className='w-[26px] self-center '>
                                <TargetingIcon />
                            </div>
                            <div className='w-[26px] self-center mx-[3px]'>
                                <GenericSettingIcon />
                            </div>
                            <div className='flex flex-row gap-[3px]'>
                                <div className='flex self-center content-center align-middle'>
                                    {getGameActionIcon(node)}
                                </div>
                            </div>
                        </div>
                    )
                default:
                    break;
            }
        }

        if (node.data.actionmapName === "spaceship_targeting") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[2px] '>
                        <TargetingIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }

        if (node.data.category === "Vehicles / Missiles") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[24px] self-center mx-[3px]'>
                        <MissileIcon />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Flight / Docking') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <DockingIcon width='26px' />
                    </div>
                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <SalvageIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage / Nudging') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[px]'>
                        <NudgeIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.category === 'Vehicles / Salvage / Tractor Beam') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center '>
                        <TractorBeamIcon />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle mx-[3px]'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Salvage / Disintegration Beam') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center '>
                        <SalvageIcon />
                    </div>
                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[3px]'>
                        <DisintegrateIcon />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }

        if (node.data.actionmapName === 'turret_movement' || node.data.actionmapName === 'turret_advanced') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TurretIcon />
                    </div>

                    <div className='flex flex-row gap-[3px]'>
                        <div className='flex self-center content-center align-middle'>
                            {getGameActionIcon(node)}
                        </div>
                    </div>
                </div>
            )
        }
        if (node.data.category === 'Vehicles / Weapons') {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <WeaponsIcon />
                    </div>

                    {/* <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div> */}
                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }
        if (node.data.actionmapName === "spaceship_mining") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    <div className='w-[26px] self-center mr-[5px]'>
                        <MiningIcon />
                    </div>



                    <div className='flex self-center content-center align-middle'>
                        {getGameActionIcon(node)}
                    </div>
                </div>
            )
        }


        if (node.data.actionmapName === "spaceship_radar"
            ||
            node.data.actionmapName === "spaceship_scanning") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <ScanningIcon />
                    </div>


                    {getGameActionIcon(node)}
                </div>
            )
        }
        // if (node.data.actionmapName === "spaceship_targeting_advanced") {
        //     return (<div className=' flex flex-row mr-[5px]'>
        //         {getActionTypeIcon.getIcon('vehicles')}

        //         <div className='w-[20px] self-center '>
        //             <ArrowRightIcon />
        //         </div>
        //         <div className='w-[26px] self-center mx-[3px]'>
        //             <TargetingIcon />
        //         </div>
        //         {getGameActionIcon(node)}

        //     </div>
        //     )
        // }
        if (node.data.actionmapName === "spaceship_target_hailing") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('vehicles')}
                    {getGameActionIcon(node)}

                    <div className='w-[20px] self-center mx-[3px]'>
                        <ArrowRightIcon />
                    </div>
                    <div className='w-[26px] self-center mx-[3px]'>
                        <TargetingIcon />
                    </div>
                </div>
            )
        }
        if (node.data.actionmapName === "spaceship_view") {
            return (<div className=' flex flex-row mr-[5px]'>
                {getActionTypeIcon.getIcon('vehicles')}

                {/* <div className='w-[20px] self-center mx-[3px]'>
                    <ArrowRightIcon />
                </div> */}
                <div className='w-[25px] self-center mx-[2px]'>
                    <CameraIcon />
                </div>

                <div className=' self-center mx-[3px]'>
                    {getGameActionIcon(node)}

                </div>

            </div>
            )
        }
        if (node.data.category === "Flight / Movement / Maneuvering") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <MoveIcon />
                    </div>

                    {getGameActionIcon(node)}
                </div>
            )
        }
        if (node.data.category === "Flight / Movement / Limiters") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <SpeedometerIcon />
                    </div>

                    {getGameActionIcon(node)}
                </div>
            )
        }
        if (node.data.category === "Flight / Movement") {
            return (
                <div className=' flex flex-row mr-[5px]'>
                    {getActionTypeIcon.getIcon('spaceship')}
                    <div className='w-[26px] self-center mr-[3px] '>
                        <SpeedometerIcon />
                    </div>
                    {getGameActionIcon(node)}
                </div>
            )
        }
        switch (node.data.category) {
            // Quantum Icon
            case "Flight / Quantum Travel":

                return (
                    <div className=' flex flex-row mr-[5px]'>
                        {getActionTypeIcon.getIcon('spaceship')}
                        <div className='w-[26px] self-center mr-[3px] '>
                            <QuantumIcon />
                        </div>

                    </div>
                )

            // Seat Icon
            case "Vehicles / Seats & Operator Modes":
                return (
                    <div className=' flex flex-row mr-[5px]'>
                        {getActionTypeIcon.getIcon('vehicles')}

                        <div className='w-[24px] self-center mr-[2px]'>
                            <SeatIcon />
                        </div>

                        {getGameActionIcon(node)}
                    </div>
                )



            // Spaceship Icon + Ground Vehicle Icon
            case "Vehicles / Cockpit":
            case "Vehicles / View":
                return (

                    <div className=' flex flex-row mr-[5px] '>
                        {getActionTypeIcon.getIcon('vehicles')}
                        <div className='w-[25px] self-center mr-[2px] '>
                            <SeatIcon />
                        </div>

                        {getGameActionIcon(node)}
                    </div>
                )

            default:
                break;
        }
    }

    const nodeTemplate = (node, options) => {
        let label = <p>{node.label}</p>;

        // check if node is category with child array of game actions
        if (Object.hasOwn(node, 'children')) {
            return (
                <></>
            )
        }

        return (
            <Button type="gameActions" unstyled
                onClick={
                    () => {
                        setSelectedGameAction(

                            <Button type="gameActions" unstyled className='flex whitespace-nowrap flex-row pl-[8px] py-[8px]'>

                                {getCategoryIcon(node)}

                                <div className='flex flex-col  justify-start w-full'>
                                    <p className='gameAction-text-regular whitespace-nowrap flex '>{label}</p>
                                    <p className=' gameAction-text-subheading whitespace-nowrap flex' >{node.data.category}</p>

                                </div>

                            </Button>
                        )
                        console.log(selectedGameAction);
                    }
                }
            >
                {/* <span className={options.className}> */}
                <div unstyled className='flex flex-row pl-[8px] py-[8px]'>

                    {getCategoryIcon(node)}

                    <div className='flex flex-col  justify-start w-full'>
                        <p className='gameAction-text-regular flex '>{label}</p>
                        <p className=' gameAction-text-subheading flex' >{node.data.category}</p>

                    </div>

                </div>
                {/* </span> */}
            </Button>
        )


    }
    const getIconLegend = (node) => {
        if (Object.hasOwn(node, "children")) {
            const getChildrenBinded = (children) => {

                let index = 0;
                const bindNum = children.forEach(child => {
                    if (child.data.layers[0] !== undefined) {
                        index += 1;

                    }
                }
                );
                return (index);

            }
            return (
                <div className='flex flex-row gap-[12px] h-fit'>

                    <div className='flex flex-row gap-[5px]'>
                        <p className='text-legend-heading flex self-center mb-[-3px] '>  BINDS: </p>
                        <div className='flex flex-row gap-[3px] content-center'>
                            <BindIcon className='self-center w-[17px] h-[17px]' />
                            <p className='text-legend self-center'>
                                {getChildrenBinded(node.children)} / {Object.keys(node.children).length}
                            </p>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flex flex-row gap-[12px] h-fit'>
                    {/* <div className='flex flex-row gap-[3px] '>
                    <p className='mb-[-3px] text-legend-heading flex self-center leading-[10px]  align-middle  text-center justify-self-center '> AXIS</p>
                    <div className='flex flex-row h-fit gap-[3px] content-center align-center justify-center'>
                        <AxisIcon className='self-center w-[17px] h-[17px] align-center' />
                        <p className=' h-full mb-[-1px] text-legend  align-middle  text-center self-center justify-self-center'>9</p>
                    </div>
                </div> */}
                    <div className='flex flex-row gap-[5px]'>
                        <p className='text-inputTable flex self-center mb-[-3px] '> BINDS</p>
                        <div className='flex flex-row gap-[3px] content-center'>
                            <BindIcon className='self-center w-[17px] h-[17px]' />
                            <p className='text-legend self-center'>

                                {node.data.layers.length}
                            </p>
                        </div>
                    </div>
                </div>
            )

        }
    }

    const getSlotIcon = (node, width, height, corner) => {
        if (!node) {
            return <></>
        }
        if (!Object.hasOwn(node.data, 'slotName')) {
            // <p className='text-GameAction-Category-Heading'> {node.label}</p>
            return <></>;
        } else {
            return (
                <div className='flex self-center'>
                    {Utils.getInputSlotIcons(node.data.slotName, width, height, corner)}

                </div>
            )
        }
    }

    const selection = (node) => {
        if (node !== false) {
            try {
                return (
                    <div type=" w-full" className=" flex flex-col w-full  " tabIndex={-1}
                        onClick={console.log(treeTableDialogueSelection)}>
                        <div className='flex flex-row  w-full  self-start gap-[8px] '>


                            <div className='flex flex-col ml-[2px] w-full'>

                                <ActionList
                                    layers={layers_placeholder}
                                    input_direction="dialogueModLayerButtons"
                                    selectable={true} />
                            </div>
                            <div className='flex w-[30px]'>
                                <ChevronsRight width="30px" />
                            </div>

                            <div className='flex flex-row justify-between w-[200px] '>
                                {/* {getCategoryHeader(node)} */}
                                <Button type="gameActions" unstyled className='flex flex-col gap-[8px] '>

                                    <div className='flex flex-col  p-[8px] gap-[4px] w-full h-full pb-[16px] px-[16px]  '>
                                        <div className='flex flex-col gap-[4px] pt-[8px] pb-[8px]'>

                                            {/* <SaveIcon width="30px" /> */}
                                            <div className="self-center">
                                                <BindIcon width="30px" />

                                            </div>
                                            <p className='text-legend-heading'>
                                                SAVE BIND TO ROTATE X
                                            </p>

                                        </div>
                                        <div className='flex h-[30px]  w-full self-center justify-center gap-[8px] mb-[4px]'>
                                            <div className='flex rotate-[90deg] self-center align-middle justify-center'>
                                                <ChevronsRight width="15px" height="15px" />
                                            </div>

                                        </div>
                                        <div className=' flex flex-col h-full corner-inputTableIcons w-full gap-[8px] '>
                                            {/* <p className='text-legend-heading'> ROTATE X </p> */}

                                            <div className='flex flex-row gap-[12px]'>
                                                <div className='flex self-center '>
                                                    {Utils.getSelectedDeviceIcon("VKB_GLADIATOR_NXT_EVO_LEFT", '40px', '100%')}
                                                </div>
                                                <div className="spacer-default " />
                                                <div className='flex flex-col  h-fit  w-fit py-[4px] pl-[4px] gap-[12px]  content-between justify-evenly self-center  align-middle'>
                                                    <div className='flex '>
                                                        {Utils.getInputAxisIcons('ROTATE X', "30px", "30px")}
                                                    </div>

                                                    {Utils.getInputIcon('Circle_Stick', '32px', '32px', false)}
                                                    {getSlotIcon(treeTableDialogueSelection, "32px", "32px", false)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* {getIconLegend(treeTableDialogueSelection)} */}

                                </Button>
                            </div>
                        </div>
                    </div>

                )
            } catch (error) {
                console.log(error)
                return (
                    <>error</>
                )
            }
        } else {
            return (
                <>error</>
            )
        }


    }
    if (props.noDialogueOverlay) {
        return (


            <div className='w-full h-fit  justify-content-center self-center justify-center flex' >

                <div className="panel-gameAction flex  flex-col w-full
       gap-[3px]   radial-outline">


                    <div className='flex w-full flex-row h-full self-center bind-panel-default  '>
                        <div class="panel-title mt-[-8px]">
                            <div className='flex flex-row'>

                                <span class="text-legend-heading px-[5px] "> 1. SELECT A GAME ACTION FOR SELECTED INPUT:</span>
                                <p className='text-legend-heading'> {treeTableDialogueSelection.label} </p>


                            </div>
                        </div>
                        <div className='corner-inputTableIcon gap-[12px] flex flex-row content-center align-middle '>



                            <div className='corner-inputTableIcons flex w-full flex-col gap-[8px] h-full mt-[24px] self-center'>
                                {selectedGameAction}

                            </div>

                        </div>

                    </div>
                    <div className='flex flex-row h-full self-center bind-panel-default mb-[12px] mt-[8px]'>

                        <div class="panel-title mt-[-8px]">
                            <div className='flex flex-row '>

                                <span class="text-legend-heading px-[5px] "> 2. BIND GAME ACTION TO INPUT LAYER</span>

                            </div>
                        </div>
                        <div className=' w-full flex flex-row gap-[8px] mt-[24px]'>

                            {selection()}
                        </div>

                    </div>

                    <Tree
                        togglerTemplate={togglerTemplate}
                        selectionMode="single" selectionKeys={selectedKey}
                        onSelectionChange={(e) => {
                        }}
                        type="treeTableDialogue"
                        unstyled
                        onNodeClick={(e) => {
                            setSelectedAction(e.node);
                            // console.log(e.node.key);
                        }}
                        // onNodeClick={(e) => {
                        //     console.log("WHAT IS NODE???:   " + e.data);
                        // }}
                        nodeTemplate={nodeTemplate} value={nodes} filter filterBy='label' filterMode="strict" filterPlaceholder="'Fire Weapon Group 1'"
                        className="w-full min-w-[300px] h-[100%]" />
                </div>
            </div>



        )
    } else {
        return (
            <div className=" flex justify-content-center radial-outline">
                <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />

                <Dialog
                    visible={
                        visible
                    }
                    id="gameActionDialogue"
                    modal={true}
                    closable
                    unstyled
                    closeOnEscape


                    content={() => (
                        <div className='w-[100vw] h-[100vh]  justify-content-center self-center justify-center flex' >

                            <div className="panel-gameAction flex self-center flex-col
                         justify-content-center gap-[3px]  justify-center radial-outline">
                                <div className='flex '>
                                    <Button type='default' unstyled className='my-[8px] mb-2px '
                                        onClick={() => {

                                            setVisible(false)

                                        }} >
                                        <p className='text-legend-heading px-[5px] '>
                                            CANCEL & RETURN
                                        </p>
                                    </Button>
                                </div>

                                <div className='flex w-full flex-row h-full self-center bind-panel-default  '>
                                    <div class="panel-title mt-[-8px]">
                                        <div className='flex flex-row'>

                                            <span class="text-legend-heading px-[5px] "> 1. SELECT A GAME ACTION FOR SELECTED INPUT:</span>
                                            <p className='text-legend-heading'> {treeTableDialogueSelection.label} </p>


                                        </div>
                                    </div>
                                    <div className='corner-inputTableIcon gap-[12px] flex flex-row content-center align-middle '>



                                        <div className='corner-inputTableIcons flex w-full flex-col gap-[8px] h-full mt-[24px] self-center'>
                                            {selectedGameAction}
                                            {/* <ModLayerSelector /> */}

                                        </div>


                                    </div>

                                </div>
                                <div className='flex flex-row h-full self-center bind-panel-default mb-[12px] mt-[8px]'>

                                    <div class="panel-title mt-[-8px]">
                                        <div className='flex flex-row '>

                                            <span class="text-legend-heading px-[5px] "> 2. BIND GAME ACTION TO INPUT LAYER</span>

                                        </div>
                                    </div>
                                    <div className=' w-full flex flex-row gap-[8px] mt-[24px]'>



                                        {selection()}
                                    </div>



                                </div>

                                {/* <Button label="hide" icon="pi pi-external-link"
                                onClick={() => {

                                    // console.log(JSON.parse(sessionStorage.getItem('cache_ButtonInputTableData')));
                                    console.log(treeTableDialogueSelection);



                                }} /> */}

                                <Tree
                                    togglerTemplate={togglerTemplate}
                                    selectionMode="single" selectionKeys={selectedKey}
                                    onSelectionChange={(e) => {
                                    }}
                                    type="treeTableDialogue"
                                    unstyled
                                    onNodeClick={(e) => {
                                        setSelectedAction(e.node);
                                        // console.log(e.node.key);
                                    }}
                                    // onNodeClick={(e) => {
                                    //     console.log("WHAT IS NODE???:   " + e.data);
                                    // }}
                                    nodeTemplate={nodeTemplate} value={nodes} filter filterBy='label' filterMode="strict" filterPlaceholder="'Fire Weapon Group 1'"
                                    className="w-[800px] h-[100%]" />
                            </div>
                        </div>

                    )}
                ></Dialog>
            </div>

        )
    }
}