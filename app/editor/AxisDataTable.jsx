import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { SelectContext, TreeTableDialogueVisibilityContext, SelectedActionContext, TreeTableDialogueSelectionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext } from '@components/Provider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'
import IconLegend from '@components/generic/IconLegend';
import { IconField } from 'primereact/iconfield';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputIcon } from 'primereact/inputicon';
import SearchIcon from '@components/generic/Icons/SearchIcon';
import { InputText } from 'primereact/inputtext';

const AxisDataTable = () => {
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
        'hidden': sessionStorage.getItem('inputTableFilter') == 'buttons',

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

            return (
                <Button type="inputTable" className=" flex flex-row w-full  justify-between " tabIndex={-1} onClick={options.onClick}>

                    <div className='flex py-[2px] flex-row content-start w-full justify-between pr-[16px] self-start gap-[8px] '>
                        <div className='flex flex-row   h-fit'>
                            {Utils.getInputIcon(node.label, "30px", "30px", true)}
                            <p className='text-legend-heading pl-[8px]'> {node.label} </p>

                        </div>

                        {getIconLegend(node)}


                    </div>
                </Button>
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

    return (
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
            value={JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]}
            filter={true} filterBy={'name'} filterValue={searchValue} filterMode='lenient'
            filterPlaceholder='"HAT STICK UP"'
            className=""
    // />
    //     <DataTable
    //         className='min-w-[345px] '
    //         filters={filters}
    //         unstyled
    //         header={header}
    //         globalFilterFields={['name']}
    //         dataKey="name"
    //         globalFilterValue={globalFilterValue}
    //         filterDisplay="row"
    //         type='AxisInputTable'
    //         value={JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]}
    //         rows={3} paginator={false} selectionMode='single' >
    //         <Column field="name"
    //             filter={false} filterPlaceholder='search' body={imageBodyTemplate}></Column>
    //     </DataTable>
    )
}

export default AxisDataTable