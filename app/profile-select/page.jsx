"use client"
import React from 'react'
import NoSsr from '../../components/NoSsr'
import dynamic from 'next/dynamic'
import { useContext, useState, useEffect } from 'react'
import { Context } from '@components/Provider.jsx'
import DataTableProfileCards from '@app/profile-select/DataTableProfileCards.jsx'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { SelectedEditorDeviceContext } from '@components/Provider';
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// import { FileUpload } from 'primereact/fileupload';

const page = () => {
    const DataTableCardsNoSsr = dynamic(
        () => import('app/profile-select/DataTableProfileCards.jsx'),
        { ssr: false }
    )

    const TEMP_PROFILE = {
        "_id": { "$oid": "669d8e426876942f3d04d3b2" },
        "email": "rickierumbles@gmail.com",
        "username": "rickierumbles",
        "image": "https://lh3.googleusercontent.com/a/ACg8ocJ4GNNufWvuw4IiOPY6nd5L4SrJTIIMwwrM8tB5veVjiI9f8MAQ=s96-c",
        "deviceProfiles":
        {
            "TEST_PROFILE_1":
            {
                "profileName": "TEST PROFILE 1",
                "dateModified": "yesterday",
                "dateCreated": "today",
                "savedDevices": {
                    "VKB_GLADIATOR_NXT_EVO_RIGHT": {
                        "buttons": {

                            "X_Axis": {
                                "press": {
                                    "name": "TWIST X",
                                    "layers": [
                                        "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                        "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                        "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                    ]
                                },
                                "bottom":
                                {
                                    "name": "TRANSLATE X",
                                    "layers": [
                                        "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                        "SECOND LAYER",
                                        "THIRD LAYER"
                                    ]
                                },
                            },
                            "Y_Axis": {
                                "Twist Y": {
                                    "press": {
                                        "name": "TWIST Y",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                                "Translate Y": {
                                    "bottom": {
                                        "name": "Translate Y",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                            },
                            "Z_AXIS": {
                                "Translate_Z": {
                                    "press": {
                                        "name": "TRANSLATE Z",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                }
                            },
                            "Front": {
                                "Circle_Stick": {
                                    "top": {
                                        "name": "CIRCLE SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "CIRCLE SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "CIRCLE SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "CIRCLE SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "CIRCLE SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Hat_Stick": {
                                    "top": {
                                        "name": "HAT SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "HAT SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "HAT SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "HAT SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "HAT SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Pill_Stick": {
                                    "top": {
                                        "name": "PILL SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "PILL SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "PILL SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "PILL SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "PILL SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Red_Button": {
                                    "press": {
                                        "name": "RED BUTTON PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Chip_Stick": {
                                    "top": {
                                        "name": "CHIP SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "CHIP SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "CHIP SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "CHIP SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "CHIP SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                }
                            },
                            "Back": {
                                "Primary_Trigger": {
                                    "press": {
                                        "name": "PRIMARY TRIGGER PRESS",
                                        "layers": [
                                            "FIRE WEAPONS",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                                "Secondary_Trigger": {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "FIRE WEAPONS",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                                "Pinky_Button": {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "TOGGLE INTERACTION MODE",
                                        ]
                                    },


                                },
                                'Side_Index_Button': {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "TOGGLE INTERACTION MODE",
                                        ]
                                    },
                                }
                            }

                        },
                        "axis": [
                            {
                                "name": "TWIST X",
                                "slotName": "press",
                                "layers": [
                                    "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",

                                ]
                            },
                            {
                                "slotName": "bottom",
                                "name": "TRANSLATE X",
                                "layers": [
                                    "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",

                                ]
                            },
                            {
                                "slotName": "press",
                                "name": "TWIST Y",
                                "layers": [
                                    "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",

                                ]
                            },
                            {
                                "name": "Translate Y",
                                "slotName": "bottom",
                                "layers": [
                                    "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",

                                ]
                            },

                            {
                                "slotName": "press",
                                "name": "TRANSLATE Z",
                                "layers": [
                                    "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",

                                ]
                            }

                        ]
                    },
                    "VKB_GLADIATOR_NXT_EVO_LEFT": {
                        "buttons": {
                            "Main Stick": {
                                "Twist_X": {
                                    "top": {
                                        "name": "TWIST X",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "Twist_Y": {
                                        "name": "TWIST Y",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "Translate_X": {
                                        "name": "TRANSLATE X",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "Translate_Y": {
                                        "name": "TRANSLATE Y",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "Translate_Z": {
                                        "name": "TRANSLATE Z",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Hat_Stick": {
                                    "top": {
                                        "name": "HAT SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "HAT SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "HAT SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "HAT SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "HAT SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Pill_Stick": {
                                    "top": {
                                        "name": "PILL SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "PILL SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "PILL SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "PILL SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "PILL SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Red_Button": {
                                    "press": {
                                        "name": "RED BUTTON PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Chip_Stick": {
                                    "top": {
                                        "name": "CHIP SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "CHIP SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "CHIP SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "CHIP SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "CHIP SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                }
                            },
                            "Front": {
                                "Circle_Stick": {
                                    "top": {
                                        "name": "CIRCLE SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "CIRCLE SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "CIRCLE SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "CIRCLE SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "CIRCLE SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Hat_Stick": {
                                    "top": {
                                        "name": "HAT SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "HAT SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "HAT SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "HAT SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "HAT SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Pill_Stick": {
                                    "top": {
                                        "name": "PILL SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "PILL SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "PILL SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "PILL SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "PILL SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Red_Button": {
                                    "press": {
                                        "name": "RED BUTTON PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                },
                                "Chip_Stick": {
                                    "top": {
                                        "name": "CHIP SWITCH UP",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "bottom": {
                                        "name": "CHIP SWITCH DOWN",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "press": {
                                        "name": "CHIP SWITCH PRESS",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                    "left": {
                                        "name": "CHIP SWITCH LEFT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
                                        ]
                                    },
                                    "right": {
                                        "name": "CHIP SWITCH RIGHT",
                                        "layers": [
                                            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    }
                                }
                            },
                            "Back": {
                                "Primary_Trigger": {
                                    "press": {
                                        "name": "PRIMARY TRIGGER PRESS",
                                        "layers": [
                                            "FIRE WEAPONS",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                                "Secondary_Trigger": {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "FIRE WEAPONS",
                                            "SECOND LAYER",
                                            "THIRD LAYER"
                                        ]
                                    },
                                },
                                "Pinky_Button": {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "TOGGLE INTERACTION MODE",
                                        ]
                                    },


                                },
                                'Side_Index_Button': {
                                    "press": {
                                        "name": "SECONDARY TRIGGER PRESS",
                                        "layers": [
                                            "TOGGLE INTERACTION MODE",
                                        ]
                                    },
                                }
                            }

                        }
                    },
                },

            }
        }, "__v": { "$numberInt": "0" }
    }

    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const [isLoading, setIsLoading] = useState(false)
    const { profileContext, setprofileContext } = useContext(Context);
    const [profiles, setProfiles] = useState()
    const [accountProfiles, setAccountProfiles] = useState([
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            template: (item) => itemRenderer(item, 0)
        },
    ]);

    useEffect(() => {
        const fetchDeviceProfiles = async () => {
            try {
                // const { dataSWR, error } = useSWR('/api/deviceProfiles', fetcher)
                setIsLoading(true);
                const response = await fetch('/api/deviceProfiles', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: session?.user.id
                    })
                })
                const data = await response.json()
                // const data = TEMP_PROFILE;
                console.log("DATA BELOW vvvv");
                console.log(data);
                const loadedProfiles = Object.keys(data?.deviceProfiles).map((device) => {
                    return ({
                        "profileName": data?.deviceProfiles[device]?.profileName,
                        "dateModified": data?.deviceProfiles[device]?.dateModified,
                        "dateCreated": data?.deviceProfiles[device]?.dateCreated,
                        "savedDevices": data?.deviceProfiles[device]?.savedDevices,
                        "deviceAmount": data?.deviceProfiles[device]?.deviceAmount,
                        "gameVersion": data?.deviceProfiles[device]?.gameVersion,
                    })
                })
                setAccountProfiles(loadedProfiles);
                sessionStorage.setItem('loadedProfiles', JSON.stringify(loadedProfiles))
                setProfiles(data?.deviceProfiles)
    
    
            } catch (error) {
                console.log(error);
            }
            finally {
                console.log(accountProfiles);
                setIsLoading(false);
            }
            // setProfileName(data?.deviceProfiles?.TEST_PROFILE_1?.saved['VKB_GLADIATOR_EVO'].profileName)
    
            // setProfiles(Object.keys(data?.deviceProfiles).map(key => (
            //     {
            //         name: key,
            //         devices: Object.keys(data[key]?.saved)?.length,
            //         dateLastModified: data[key].dateModified,
            //         dateCreated: data[key].dateCreated,
            //     }
            // )))
        }

        fetchDeviceProfiles()

    }, [isLoading]);
    

    const profileUpload = async () => {
        // console.log(selectedAction);

        const response = await fetch("/api/deviceProfiles/bindButton", {
            method: "PATCH",
            body: JSON.stringify({
                userId: session?.user.id,
                selectedInput: selectedEditorInput,
                selectedAction: selectedAction.key,
                selectedLayer: selectedLayer
            })
        }


        );

        const data = await response.json();

        setprofileContext(data);

        setActionUpdate(!actionUpdate);
    };

    const onUpload = () => {
        console.log();
    }

    return (
            <section>
                {/* <FileUpload mode="basic" name="uploadTEST" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel="Browse" /> */}
                {/* <DataTableCardsNoSsr context={accountProfiles}> </DataTableCardsNoSsr> */}
                <DataTableProfileCards context={accountProfiles} />
            </section>
    )
}

export default page