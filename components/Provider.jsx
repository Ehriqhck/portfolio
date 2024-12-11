"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact-sass-theme-9.6.2/themes/mytheme/theme.scss";
import Tailwind from 'primereact/passthrough/tailwind';

export const SelectContext = createContext();
export const SelectedEditorActionContext = createContext();
export const SelectedEditorActionTableTargetContext = createContext();
export const SelectedModLayerContext = createContext();

export const SelectedInputContext = createContext();
export const SelectedLayerContext = createContext();
export const EditorPanelTitleContext = createContext();
export const ViewerPanelTitleContext = createContext();
export const SelectedDeviceContext = createContext();
export const SelectedEditorDeviceContext = createContext();
export const SelectedEditorDeviceViewOrientationContext = createContext();
export const SelectedInputTableInputContext = createContext();
export const TreeTableDialogueSelectionContext = createContext();
export const TreeTableDialogueVisibilityContext = createContext();

export const SelectedActionContext = createContext();
export const ShowViewerPanelContext = createContext();
export const ShowEditorPanelContext = createContext();

export const Context = createContext();
export const ActionUpdateContext = createContext();
export const InputViewerInputTypeContext = createContext();


const Provider = ({ children, session }) => {

  const [selectedLayer, setSelectedLayer] = useState(0);
  const [selectedViewerInput, setSelectedViewerInput] = useState();
  const [selectedAction, setSelectedAction] = useState("No Action Selected");
  const [selectedEditorInput, setSelectedEditorInput] = useState("No Input Selected");
  const [selectedEditorInputActions, setSelectedEditorInputActions] = useState();
  const [selectedDevice, setSelectedDevice] = useState("No Device Selected");
  const [selectedEditorDevice, setSelectedEditorDevice] = useState();
  const [selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation] = useState("Front");
  const [selectedInputTableInput, setSelectedInputTableInput] = useState("Front");
  const [treeTableDialogueSelection, setTreeTableDialogueSelection] = useState(false);
  const [treeTableDialogueVisibility, setTreeTableDialogueVisibility] = useState(false);
  const [selectedModLayer, setSelectedModLayer] = useState(0);

  const [showEditorPanel, setshowEditorPanel] = useState(false);
  const [showViewerPanel, setshowViewerPanel] = useState(true);
  const [editorPanelTitle, setEditorPanelTitle] = useState("SELECT A BUTTON");
  const [viewerPanelTitle, setViewerPanelTitle] = useState("SELECT A BUTTON");
  const [actionUpdate, setActionUpdate] = useState(false);

  const [profileContext, setprofileContext] = useState(false);
  const [inputViewerInputType, setInputViewerInputType ] = useState(false);

  return (
    <SessionProvider session={session}>
      <PrimeReactProvider >
        <SelectedLayerContext.Provider value={{ selectedLayer, setSelectedLayer }}>

          <SelectContext.Provider value={{ selectedViewerInput, setSelectedViewerInput }}>
            <Context.Provider value={{ profileContext, setprofileContext }}>
              <SelectedActionContext.Provider value={{ selectedAction, setSelectedAction }}>
                <SelectedEditorActionContext.Provider value={{ selectedEditorInput, setSelectedEditorInput }}>
                  <ShowEditorPanelContext.Provider value={{ showEditorPanel, setshowEditorPanel }}>
                    <ShowViewerPanelContext.Provider value={{ showViewerPanel, setshowViewerPanel }}>
                      <EditorPanelTitleContext.Provider value={{ editorPanelTitle, setEditorPanelTitle }}>
                        <ViewerPanelTitleContext.Provider value={{ viewerPanelTitle, setViewerPanelTitle }}>
                          <SelectedEditorActionTableTargetContext.Provider value={{ selectedEditorInputActions, setSelectedEditorInputActions }}>
                            <ActionUpdateContext.Provider value={{ actionUpdate, setActionUpdate }}>
                              <SelectedDeviceContext.Provider value={{ selectedDevice, setSelectedDevice }}>
                                <SelectedEditorDeviceContext.Provider value={{ selectedEditorDevice, setSelectedEditorDevice }}>
                                  <SelectedEditorDeviceViewOrientationContext.Provider value={{ selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation }}>
                                    <SelectedInputTableInputContext.Provider value={{ selectedInputTableInput, setSelectedInputTableInput }}>
                                      <TreeTableDialogueSelectionContext.Provider value={{ treeTableDialogueSelection, setTreeTableDialogueSelection }}>
                                        <TreeTableDialogueVisibilityContext.Provider value={{ treeTableDialogueVisibility, setTreeTableDialogueVisibility }}>
                                          <SelectedModLayerContext.Provider value={{selectedModLayer, setSelectedModLayer }}>
                                          <InputViewerInputTypeContext.Provider value={{inputViewerInputType, setInputViewerInputType }}>

                                            {children}
                                            </InputViewerInputTypeContext.Provider>

                                          </SelectedModLayerContext.Provider>

                                        </TreeTableDialogueVisibilityContext.Provider>

                                      </TreeTableDialogueSelectionContext.Provider>

                                    </SelectedInputTableInputContext.Provider>
                                  </SelectedEditorDeviceViewOrientationContext.Provider>

                                </SelectedEditorDeviceContext.Provider>

                              </SelectedDeviceContext.Provider>
                            </ActionUpdateContext.Provider>
                          </SelectedEditorActionTableTargetContext.Provider>
                        </ViewerPanelTitleContext.Provider>
                      </EditorPanelTitleContext.Provider>
                    </ShowViewerPanelContext.Provider>
                  </ShowEditorPanelContext.Provider>
                </SelectedEditorActionContext.Provider>

              </SelectedActionContext.Provider>

            </Context.Provider>
          </SelectContext.Provider>
        </SelectedLayerContext.Provider>
      </PrimeReactProvider>
    </SessionProvider>)
}

export default Provider



