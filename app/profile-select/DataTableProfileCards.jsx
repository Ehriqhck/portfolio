"use client";
import NoSsr from '../../components/NoSsr';
import React from 'react'
import { DataTable } from 'primereact/datatable';
import { useState, useEffect, useContext } from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Context } from '@components/Provider.jsx'
import { parse } from 'postcss';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext,InputViewerInputTypeContext, TreeTableDialogueSelectionContext, TreeTableDialogueVisibilityContext, SelectedInputTableInputContext } from '@components/Provider';
import { SessionDeviceInputs } from '@app/editor/SessionDeviceInputs.js';
import useSWR from 'swr'
import { FileUpload } from 'primereact/fileupload';




const DataTableProfileCards = (props) => {
    const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const { treeTableDialogueSelection, setTreeTableDialogueSelection } = useContext(TreeTableDialogueSelectionContext)
    const { treeTableDialogueVisibility, setTreeTableDialogueVisibility } = useContext(TreeTableDialogueVisibilityContext)

    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);
    const { inputViewerInputType, setInputViewerInputType } = useContext(InputViewerInputTypeContext);

    const [context, setContext] = useState({
    })
    const [isLoading, setIsLoading] = useState(false)

    const [selectedPreview, setSelectedPreview] = useState({
        profileName: "loading",
        deviceList: ["none"],
        deviceAmount: '-',

    })
    const { profileContext, setprofileContext } = useContext(Context);

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const [filters, setFilters] = useState({

        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },

    });

    const [loading, setLoading] = useState(true)
    const [devices, setDevices] = useState([{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }, {
        id: '1020',
        code: 'f230fh0asdg3',
        name: 'Bamboo Watdch',
        description: 'Prodddasuct Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }]);



    useEffect(() => {

        try {
            setIsLoading(true)
            setContext(props?.context)

            // props?.context
            setDevices(props?.context)
            console.log("GALSKDJALSKDJ");
            console.log(context);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }


    },)
    useEffect(() => {
        sessionStorage.setItem("selectedProfile", JSON.stringify(selectedPreview))


    }, [selectedPreview])

    const imageBodyTemplate = (profile) => {

        return (
                <Button onClick={(e) => {
                    try {
                        setLoading(true);
                        console.log(Object.entries(profile?.savedDevices).length);
                        setSelectedPreview({
                            deviceAmount: profile.deviceAmount,
                            profileName: profile.profileName,
                            deviceList: profile?.savedDevices,
                            dateModified: profile.dateModified,
                            dateCreated: profile.dateCreated,
                            gameVersion: profile.gameVersion
                        });
                        console.log("new selection");
                        console.log(JSON.parse(sessionStorage.getItem('loadedProfile')));
                        console.log(selectedPreview);
                        setSelectedEditorDeviceViewOrientation('Front');
                        setprofileContext(selectedPreview);

                    } catch (error) {
                        console.log(error);
                    } finally {

                        setLoading(false)

                    }


                }}
                    type='profile-card-button'
                    className='flex flex-col min-w-[250px]  w-[345px]  control-profile-card-bg  px-[16px] pb-[8px] pt-[14px] gap-[8px] '>
                    <div className='flex w-full'>
                        <p className=' control-profile-card-title'>{profile.profileName} </p>
                    </div>

                    <div className='flex flex-row justify-between mb-[4px]  w-[100%]'>
                        <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                            <p className='flex control-profile-card-device-number justify-self-end  self-end'>
                                {profile.deviceAmount}

                            </p>

                            <p className='flex control-profile-card-device self-end '>DEVICES</p>
                        </div>

                        <div className='flex flex-col  justify-between gap-[2px] '>
                            <p className='control-profile-card-body mb-[2px]'>LAST MODIFIED</p>
                            <p className='control-profile-card-body'>July 3rd, 12:10AM {profile.dateLastModified}</p>
                        </div>
                    </div>
                </Button>
        )
    };



    const paginatorBodyTemplate = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',

        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    }
    return (

            <div className='flex flex-row  control-profile-selector'>
                <div className='radial-outline'>
                    <p> SAVED PROFILES</p>

                    <DataTable
                        className='min-w-[345px] '
                        filterDisplay="row" type='profile card'
                        value={devices} rows={3} paginator={true} selectionMode='single' paginatorTemplate={paginatorBodyTemplate}>
                        <Column field="name" filter filterPlaceholder='search' body={imageBodyTemplate}></Column>

                    </DataTable>
                </div>

                <div className='ml-[36px] flex flex-col'>
                    <div className='min-w-[600px] flex flex-col p-[16px] min-h-[385px] panel-white  gap-[16px]'>
                        <p className="font-['Exo_2'] text-[24px] leading-[24px] font-medium"> Title </p>

                        <div>
                            <div className='flex flex-row gap-[36px]'>
                                <div className='flex flex-col gap-[4px] '>
                                    <p className="font-['Exo_2'] text-[10pt] font-medium "> LAST MODIFIED </p>
                                    <p className="font-['Exo_2'] text-[10pt] font-light capitalize ">{selectedPreview.dateModified} </p>
                                </div>
                                <div className='flex flex-col gap-[4px] '>
                                    <p className="font-['Exo_2'] text-[10pt] font-medium  "> DATE CREATED </p>
                                    <p className="font-['Exo_2'] text-[10pt] font-light capitalize "> {selectedPreview.dateCreated} </p>
                                </div>
                                <div className='flex flex-col gap-[4px] '>
                                    <p className="font-['Exo_2'] text-[10pt] font-medium "> GAME VERSION </p>
                                    <p className="font-['Exo_2'] text-[10pt] font-light capitalize "> {selectedPreview.gameVersion} </p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-[4px] mt-[16px]'>
                                <p className="font-['Exo_2'] text-[10pt] font-medium "> PROFILE DEVICES </p>


                                <p className="font-['Exo_2'] text-[10pt] font-light capitalize ">{Object.keys(selectedPreview.deviceList)} </p>


                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-[3px] mt-[16px]'>
                        <div>
                            <div>
                                <p className="font-['Exo_2'] text-[10pt] font-medium">SELECTED PROFILE </p>
                                <Button unstyled onClick={(e) => {
                                    console.log("ASDAKSDHKASJ" + e.devices[0])
                                    console.log(e);
                                }}
                                    className='flex flex-col min-w-[250px] control-profile-card-bg  w-[345px] p-[8px] gap-[8px] '>
                                    <div className='flex w-full'>
                                        <p className='ml-[8px] ml-[0px] control-profile-card-title'>{selectedPreview.profileName} </p>
                                    </div>

                                    <div className='flex flex-row justify-between mb-[4px]'>
                                        <div className='flex flex-row mr-[64px] h-full justify-center gap-[4px]'>
                                            <p className='flex control-profile-card-device-number justify-self-end  self-end'>{selectedPreview.deviceAmount}</p>
                                            <p className='flex control-profile-card-device self-end '>DEVICES</p>
                                        </div>

                                        <div className='flex flex-col  justify-between '>
                                            <p className='control-profile-card-body whitespace-nowrap'>LAST MODIFIED</p>
                                            <p className='control-profile-card-body whitespace-nowrap'> {selectedPreview.dateLastModified}</p>
                                        </div>
                                        <FileUpload
                                            mode="basic"
                                            name="demoTest"
                                            url="/api/upload"
                                            accept=""
                                            maxFileSize={1000000}
                                        />
                                    </div>
                                </Button>
                            </div>
                            <Link href="/editor">

                                <Button onClick={(e) => {
                                    // console.log("ASDAKSDHKASJ" + e.devices[0])
                                    setprofileContext(selectedPreview);
                                    console.log(profileContext?.buttons);
                                    setSelectedEditorDevice(Object.keys(selectedPreview.deviceList)[0]);
                                    setSelectedEditorDeviceViewOrientation('Front');
                                    setSelectedEditorDevice(Object.keys(selectedPreview.deviceList)[0]);
                                    setTreeTableDialogueVisibility(false);
                                    setInputViewerInputType('Device_Button_Inputs');
                                    // sessionStorage.setItem('selectedEditorInputTableInput', 'buttons');
                                    sessionStorage.setItem('inputTableFilter', 'buttons');
                                    sessionStorage.setItem("dialogueVisibility", "false")
                                    sessionStorage.setItem('loadedProfile', JSON.stringify(selectedPreview));
                                    // setSelectedInputTableInput('Front');
                                    sessionStorage.setItem('selectedEditorInputTableInput', "Front");
                                    sessionStorage.setItem('selectedEditorDeviceViewOrientation', "Front");
                                    sessionStorage.setItem('selectedEditorDevice', Object.keys(selectedPreview.deviceList)[0]);
                                    sessionStorage.setItem('inputViewerInputType', "Device_Button_Inputs");

                                    console.log("LOADING DEVICE:");
                                    // SessionDeviceInputs.getTreeTableNodes().then((data) => {
                                    //     sessionStorage.setItem('cache_ButtonInputTableData', JSON.stringify(data))
                                    //     setNodes(data)
                                    // });
                                    console.log(Object.keys(selectedPreview.deviceList)[0]);
                                }}>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default DataTableProfileCards