"use client"
import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'
import clsx from 'clsx';

import { Dialog } from 'primereact/dialog';
import React, { useState, useEffect, useContext } from 'react';
import BindButton from './BindButton';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { SessionDeviceInputs } from './SessionDeviceInputs';

import { Tree } from 'primereact/tree';
import { classNames } from 'primereact/utils';
import BindIcon from 'public/assets/icons/generic/bind.svg'
import LayerIcon from 'public/assets/icons/generic/layer.svg'
import RotationalAxisIcon from '@public/assets/icons/actions/gameCategory/RotationalAxisIcon.jsx'
import { TreeTableDialogueSelectionContext, TreeTableDialogueVisibilityContext, SelectContext, SelectedActionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext, InputViewerInputType } from '@components/Provider';
import DeviceAxisSelector from '@app/editor/DeviceAxisSelector.jsx'
import AxisInputTable from '@app/editor/AxisInputTable.jsx'
import TreeTableDialogue from './TreeTableDialogue';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

import SearchIcon from '@components/generic/Icons/SearchIcon';
export default function InputTable(props) {
    const [exampleTableData, setExampleData] = useState([
        {
            "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTCircle_Stick",
            "label": "Circle_Stick",
            "data": {},
            "children": [
                {
                    "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH UP",
                    "label": "CIRCLE SWITCH UP",
                    "data": {
                        "buttonName": "Circle_Stick",
                        "slotName": "top",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "category": "Vehicles / Weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH DOWN",
                    "label": "CIRCLE SWITCH DOWN",
                    "data": {
                        "buttonName": "Circle_Stick",
                        "slotName": "bottom",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH PRESS",
                    "label": "CIRCLE SWITCH PRESS",
                    "data": {
                        "buttonName": "Circle_Stick",
                        "slotName": "press",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH LEFT",
                    "label": "CIRCLE SWITCH LEFT",
                    "data": {
                        "buttonName": "Circle_Stick",
                        "slotName": "left",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH RIGHT",
                    "label": "CIRCLE SWITCH RIGHT",
                    "data": {
                        "buttonName": "Circle_Stick",
                        "slotName": "right",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                }
            ]
        },
        {
            "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTHat_Stick",
            "label": "Hat_Stick",
            "data": {},
            "children": [
                {
                    "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH UP",
                    "label": "HAT SWITCH UP",
                    "data": {
                        "buttonName": "Hat_Stick",
                        "slotName": "top",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH DOWN",
                    "label": "HAT SWITCH DOWN",
                    "data": {
                        "buttonName": "Hat_Stick",
                        "slotName": "bottom",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH PRESS",
                    "label": "HAT SWITCH PRESS",
                    "data": {
                        "buttonName": "Hat_Stick",
                        "slotName": "press",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH LEFT",
                    "label": "HAT SWITCH LEFT",
                    "data": {
                        "buttonName": "Hat_Stick",
                        "slotName": "left",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH RIGHT",
                    "label": "HAT SWITCH RIGHT",
                    "data": {
                        "buttonName": "Hat_Stick",
                        "slotName": "right",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                }
            ]
        },
        {
            "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTPill_Stick",
            "label": "Pill_Stick",
            "data": {},
            "children": [
                {
                    "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH UP",
                    "label": "PILL SWITCH UP",
                    "data": {
                        "buttonName": "Pill_Stick",
                        "slotName": "top",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH DOWN",
                    "label": "PILL SWITCH DOWN",
                    "data": {
                        "buttonName": "Pill_Stick",
                        "slotName": "bottom",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH PRESS",
                    "label": "PILL SWITCH PRESS",
                    "data": {
                        "buttonName": "Pill_Stick",
                        "slotName": "press",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH LEFT",
                    "label": "PILL SWITCH LEFT",
                    "data": {
                        "buttonName": "Pill_Stick",
                        "slotName": "left",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH RIGHT",
                    "label": "PILL SWITCH RIGHT",
                    "data": {
                        "buttonName": "Pill_Stick",
                        "slotName": "right",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                }
            ]
        },
        {
            "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTRed_Button",
            "label": "Red_Button",
            "data": {},
            "children": [
                {
                    "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTRED BUTTON PRESS",
                    "label": "RED BUTTON PRESS",
                    "data": {
                        "buttonName": "Red_Button",
                        "slotName": "press",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                }
            ]
        },
        {
            "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTChip_Stick",
            "label": "Chip_Stick",
            "data": {},
            "children": [
                {
                    "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH UP",
                    "label": "CHIP SWITCH UP",
                    "data": {
                        "buttonName": "Chip_Stick",
                        "slotName": "top",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH DOWN",
                    "label": "CHIP SWITCH DOWN",
                    "data": {
                        "buttonName": "Chip_Stick",
                        "slotName": "bottom",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH PRESS",
                    "label": "CHIP SWITCH PRESS",
                    "data": {
                        "buttonName": "Chip_Stick",
                        "slotName": "press",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH LEFT",
                    "label": "CHIP SWITCH LEFT",
                    "data": {
                        "buttonName": "Chip_Stick",
                        "slotName": "left",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                },
                {
                    "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH RIGHT",
                    "label": "CHIP SWITCH RIGHT",
                    "data": {
                        "buttonName": "Chip_Stick",
                        "slotName": "right",
                        "layers": [
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            },
                            {
                                "key": "v_weapon_manual_gimbal_cycle_source",
                                "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
                                "data": {
                                    "actionmapName": "spaceship_weapons",
                                    "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
                                    "category": "Vehicles / Weapons",
                                    "inputType": "Toggle"
                                }
                            }
                        ],
                        "category": "temp"
                    }
                }
            ]
        }
    ])
    // const exampleTableData = [
    //     {
    //         "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTCircle_Stick",
    //         "label": "Circle_Stick",
    //         "data": {},
    //         "children": [
    //             {
    //                 "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH UP",
    //                 "label": "CIRCLE SWITCH UP",
    //                 "data": {
    //                     "buttonName": "Circle_Stick",
    //                     "slotName": "top",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "category": "Vehicles / Weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH DOWN",
    //                 "label": "CIRCLE SWITCH DOWN",
    //                 "data": {
    //                     "buttonName": "Circle_Stick",
    //                     "slotName": "bottom",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH PRESS",
    //                 "label": "CIRCLE SWITCH PRESS",
    //                 "data": {
    //                     "buttonName": "Circle_Stick",
    //                     "slotName": "press",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH LEFT",
    //                 "label": "CIRCLE SWITCH LEFT",
    //                 "data": {
    //                     "buttonName": "Circle_Stick",
    //                     "slotName": "left",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTCIRCLE SWITCH RIGHT",
    //                 "label": "CIRCLE SWITCH RIGHT",
    //                 "data": {
    //                     "buttonName": "Circle_Stick",
    //                     "slotName": "right",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTHat_Stick",
    //         "label": "Hat_Stick",
    //         "data": {},
    //         "children": [
    //             {
    //                 "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH UP",
    //                 "label": "HAT SWITCH UP",
    //                 "data": {
    //                     "buttonName": "Hat_Stick",
    //                     "slotName": "top",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH DOWN",
    //                 "label": "HAT SWITCH DOWN",
    //                 "data": {
    //                     "buttonName": "Hat_Stick",
    //                     "slotName": "bottom",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH PRESS",
    //                 "label": "HAT SWITCH PRESS",
    //                 "data": {
    //                     "buttonName": "Hat_Stick",
    //                     "slotName": "press",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH LEFT",
    //                 "label": "HAT SWITCH LEFT",
    //                 "data": {
    //                     "buttonName": "Hat_Stick",
    //                     "slotName": "left",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTHAT SWITCH RIGHT",
    //                 "label": "HAT SWITCH RIGHT",
    //                 "data": {
    //                     "buttonName": "Hat_Stick",
    //                     "slotName": "right",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTPill_Stick",
    //         "label": "Pill_Stick",
    //         "data": {},
    //         "children": [
    //             {
    //                 "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH UP",
    //                 "label": "PILL SWITCH UP",
    //                 "data": {
    //                     "buttonName": "Pill_Stick",
    //                     "slotName": "top",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH DOWN",
    //                 "label": "PILL SWITCH DOWN",
    //                 "data": {
    //                     "buttonName": "Pill_Stick",
    //                     "slotName": "bottom",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH PRESS",
    //                 "label": "PILL SWITCH PRESS",
    //                 "data": {
    //                     "buttonName": "Pill_Stick",
    //                     "slotName": "press",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH LEFT",
    //                 "label": "PILL SWITCH LEFT",
    //                 "data": {
    //                     "buttonName": "Pill_Stick",
    //                     "slotName": "left",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTPILL SWITCH RIGHT",
    //                 "label": "PILL SWITCH RIGHT",
    //                 "data": {
    //                     "buttonName": "Pill_Stick",
    //                     "slotName": "right",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTRed_Button",
    //         "label": "Red_Button",
    //         "data": {},
    //         "children": [
    //             {
    //                 "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTRED BUTTON PRESS",
    //                 "label": "RED BUTTON PRESS",
    //                 "data": {
    //                     "buttonName": "Red_Button",
    //                     "slotName": "press",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         "key": "buttonVKB_GLADIATOR_NXT_EVO_RIGHTChip_Stick",
    //         "label": "Chip_Stick",
    //         "data": {},
    //         "children": [
    //             {
    //                 "key": "childtopVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH UP",
    //                 "label": "CHIP SWITCH UP",
    //                 "data": {
    //                     "buttonName": "Chip_Stick",
    //                     "slotName": "top",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childbottomVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH DOWN",
    //                 "label": "CHIP SWITCH DOWN",
    //                 "data": {
    //                     "buttonName": "Chip_Stick",
    //                     "slotName": "bottom",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childpressVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH PRESS",
    //                 "label": "CHIP SWITCH PRESS",
    //                 "data": {
    //                     "buttonName": "Chip_Stick",
    //                     "slotName": "press",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childleftVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH LEFT",
    //                 "label": "CHIP SWITCH LEFT",
    //                 "data": {
    //                     "buttonName": "Chip_Stick",
    //                     "slotName": "left",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             },
    //             {
    //                 "key": "childrightVKB_GLADIATOR_NXT_EVO_RIGHTCHIP SWITCH RIGHT",
    //                 "label": "CHIP SWITCH RIGHT",
    //                 "data": {
    //                     "buttonName": "Chip_Stick",
    //                     "slotName": "right",
    //                     "layers": [
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         },
    //                         {
    //                             "key": "v_weapon_manual_gimbal_cycle_source",
    //                             "label": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)",
    //                             "data": {
    //                                 "actionmapName": "spaceship_weapons",
    //                                 "name": "Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)",
    //                                 "category": "Vehicles / Weapons",
    //                                 "inputType": "Toggle"
    //                             }
    //                         }
    //                     ],
    //                     "category": "temp"
    //                 }
    //             }
    //         ]
    //     }
    // ];
    const [visible, setVisible] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [selectedKey, setSelectedKey] = useState('');
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const { treeTableDialogueVisibility, setTreeTableDialogueVisibility } = useContext(TreeTableDialogueVisibilityContext)
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const { profileContext, setprofileContext } = useContext(Context);
    const { treeTableDialogueSelection, setTreeTableDialogueSelection } = useContext(TreeTableDialogueSelectionContext)

    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [metaKey, setMetaKey] = useState(true);
    useEffect(() => {


        try {
            setIsLoading(true);


            // SessionDeviceAxisInputs.getTreeTableNodes().then((data) => {
            //     sessionStorage.setItem('cache_AxisInputTableData', JSON.stringify(data))
            //     setNodes(data)
            // });

            SessionDeviceInputs.getTreeTableNodes().then((data) => {
                sessionStorage.setItem('cache_ButtonInputTableData', JSON.stringify(data))
                setNodes(data)
            });
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);

        }
    }, [isLoading, selectedEditorDevice, profileContext, SelectedEditorDeviceViewOrientationContext, selectedInputTableInput]);


    const buttonTableClassName = clsx({
        'show': sessionStorage.getItem('inputTableFilter') == 'buttons',
        'hidden': sessionStorage.getItem('inputTableFilter') == 'Axis',

    });
    const axisTableClassName = clsx({
        'show': sessionStorage.getItem('inputTableFilter') == 'axis',
        'hidden': sessionStorage.getItem('inputTableFilter') == 'buttons' || undefined || null,

        

    });
    const getIconLegend = (node) => {
        if (Object.hasOwn(node, "children")) {
            const getChildrenBinded = (children) => {

                let index = 0;
                const bindNum = children.forEach(child => {
                    try {
                        if (child.data.layers[0] !== undefined) {
                            index += 1;

                        }
                    } catch (error) {
                        console.log(error);


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

    const togglerTemplate = (node, options) => {
        const getSlotIcon = (node) => {

            if (!Object.hasOwn(node.data, 'slotName')) {
                return <p className='text-GameAction-Category-Heading'> {node.label}</p>;
            } else {
                return (
                    <div className='flex corner-inputTableIcons'>
                        {Utils.getInputSlotIcons(node.data.slotName, "25px", "25px")}

                    </div>
                )
            }
        }

        // if node is a button
        if (!Object.hasOwn(node.data, 'slotName')) {

            return (<div className='mb-[8px] '>
                <Button type="inputTable" className=" flex flex-row w-full  justify-between " tabIndex={-1} onClick={options.onClick}>

                    <div className='flex py-[2px] flex-row content-start w-full justify-between pr-[16px] self-start gap-[8px] '>
                        <div className='flex flex-row   h-fit'>
                            {Utils.getInputIcon(node.label, "30px", "30px", true)}
                            <p className='text-legend-heading pl-[8px]'> {node.label} </p>

                        </div>

                        {getIconLegend(node)}


                    </div>
                </Button>
                </div>
            );
        } else {
            return (

                <></>

            );
        };
    }



    const nodeTemplate = (node, options) => {
        const getSlotIcon = (node) => {

            if (!Object.hasOwn(node.data, 'slotName')) {
                return <p className='text-GameAction-Category-Heading'> {node.label}</p>;
            } else {
                return (
                    <div className='flex corner-inputTableIcons'>
                        {Utils.getInputSlotIcons(node.data.slotName, "25px", "25px")}

                    </div>
                )
            }
        }
        // check if node is category with child array of game actions
        if (Object.hasOwn(node.data, 'layers')) {
            // console.log(node);

            return (
                <button onClick={() => {
                    setTreeTableDialogueVisibility(true)
                    setTreeTableDialogueSelection(node)
                    console.log(treeTableDialogueVisibility);

                }}>
                    <Button type="inputTable" className=" flex flex-col   " tabIndex={-1} onClick={options.onClick}>



                        <div className='flex flex-col content-start w-full pr-[16px]  self-start gap-[8px] '>
                            <div className='flex flex-row  h-fit '>
                                {Utils.getInputIcon(node.label, "30px", "30px", true)}
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                                {/* {getCategoryHeader(node)} */}
                                <div className='flex gap-[8px]'>
                                    {getSlotIcon(node)}
                                    <p className='text-legend-heading'> {node.label} </p>
                                </div>

                                {getIconLegend(node)}


                            </div>
                            <div className='flex flex-col ml-[2px]'>

                                <ActionList layers={node.data.layers} input_direction="inputTable" selectable={false} />

                            </div>
                            {/* <div className="spacer-dialogue" />

            <span className='self-center justify-center '>{label}</span> */}
                            {/* <div className="spacer-dialogue" /> */}
                            {/* {expanded} */}
                        </div>
                    </Button>
                </button>

            )

        } else {
            return <span className={options.className}>
                <div className='flex flex-row'>


                </div>
            </span>;
        }
    }
    // const filterTemplate = () => {

    //     return (
    //         <div>
    //             <IconField iconPosition="left">
    //                 <InputIcon>
    //                     <svg width="14" height="14" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <g mask="url(#mask0_2642_713)">
    //                             <path
    //                                 fillRule="evenodd"
    //                                 clipRule="evenodd"
    //                                 d="..."
    //                                 fill="var(--primary-color)"
    //                             />
    //                         </g>
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path
    //                             fillRule="evenodd"
    //                             clipRule="evenodd"
    //                             d="..."
    //                             fill="var(--primary-color)"
    //                         />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path fillRule="evenodd" clipRule="evenodd" d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                         <path d="..." fill="var(--primary-color)" />
    //                     </svg>
    //                 </InputIcon>
    //                 <InputText placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    //             </IconField>
    //             <InputText placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />


    //         </div>

    //     )
    // }
    if (props.isExample) {
        return (
            <div className="flex   pt-[8px] w-full flex-col gap-[8px] pb-[8px] w-[100%] h-full content-center self-center ">
                <div className='flex flex-col w-full corner-viewChanger  '>
                    <div className='flex flex-row gap-[3px] ml-[4px] mt-[-8px] mb-[4px] self-center align-middle'>
                        {/* <EyeIcon width="14px" /> */}
                        <p className=' small-text w-full flex  mt-[-4px] pb-[2px]  align-baseline uppercase justify-start self-start'> Input Type Selection </p>
                    </div>
                    <DeviceAxisSelector></DeviceAxisSelector>

                </div>

                <div className={axisTableClassName}>
                    <AxisInputTable isExample={props.isExample} />
                </div>
                <div className={buttonTableClassName} type='example'>
                    {searchValue}
                    <Tree
                        togglerTemplate={togglerTemplate}
                        selectionMode="single" selectionKeys={selectedKey}
                        onSelectionChange={(e) => {
                        }}
                        type="inputTable_example"
                        unstyled
                        onNodeClick={(e) => {
                            setSelectedAction(e.node);
                            // console.log(e.node.key);
                        }}
                        // onNodeClick={(e) => {
                        //     console.log("WHAT IS NODE???:   " + e.data);
                        // }}
                        nodeTemplate={nodeTemplate}
                        value={exampleTableData}
                        filter={true}  filterValue={searchValue} filterMode='lenient'
                        filterPlaceholder='"HAT STICK UP"'
                      
                        className=""
                    />
                    <div className='hidden'>
                        <TreeTableDialogue></TreeTableDialogue>

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex w-full flex-col gap-[8px] pb-[8px] w-[100%] content-center self-center">
                <div className='flex flex-col w-full corner-viewChanger  '>
                    <div className='flex flex-row gap-[3px] ml-[4px] mt-[-8px] mb-[4px] self-center align-middle'>
                        {/* <EyeIcon width="14px" /> */}
                        <p className=' small-text w-full flex  mt-[-4px] pb-[2px]  align-baseline uppercase justify-start self-start'> Input Type Selection </p>
                    </div>
                    <DeviceAxisSelector></DeviceAxisSelector>

                </div>
                {/* <p className='text-base'>// SELECT MODIFIER LAYER (OPTIONAL)</p> */}
                {/* <Button onClick={() => {
                    console.log(sessionStorage.getItem('selectedEditorDeviceViewOrientation'),
                        JSON.parse(sessionStorage.getItem('loadedProfile')));
                    console.log(sessionStorage.getItem('selectedEditorDevice'));
    
                    // console.log("CONTEXT:");
                    // console.log(profileContext);
                }}>check sessionStorage
                </Button>
                <Button onClick={() => {
                    sessionStorage.clear();
                    // console.log("CONTEXT:");
                    // console.log(profileContext);
                }}>CLEAR sessionStorage
                </Button> */}
                <div className={axisTableClassName}>
                    {/* <AxisDataTable /> */}
                    <AxisInputTable isExample={true} />
                </div>
                <div className={buttonTableClassName}>
                    {searchValue}
                    <Tree
                        togglerTemplate={togglerTemplate}
                        selectionMode="single" selectionKeys={selectedKey}
                        onSelectionChange={(e) => {
                        }}
                        type="inputTable"
                        unstyled
                        onNodeClick={(e) => {
                            setSelectedAction(e.node);
                            // console.log(e.node.key);
                        }}
                        // onNodeClick={(e) => {
                        //     console.log("WHAT IS NODE???:   " + e.data);
                        // }}
                        nodeTemplate={nodeTemplate}
                        value={JSON.parse(sessionStorage.getItem('cache_ButtonInputTableData'))}
                        filter={true}  filterValue={searchValue} filterMode='lenient'
                        filterPlaceholder='"HAT STICK UP"'
                        className=""
                    />
                    <div className='hidden'>
                        <TreeTableDialogue></TreeTableDialogue>

                    </div>
                </div>
            </div>
        );
    }

}
