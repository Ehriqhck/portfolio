"use client";


export const SessionDeviceAxisInputs = {
  getNodes(selectedEditorDevice, profileContext,) {
    // const selectedEditorDevice = selectedEditorDevice;
    // const loadedProfileContext = profileContext;
    // first get array of device buttons names ex: ["Chip Switch", "Pinky Button", "Pill Stick"]

    const deviceButtonNames = Object.keys(profileContext?.deviceList[selectedEditorDevice]?.axis);
    console.log("A:SKD:ALSKD:ALSKD:ALSKD");
    // then use button names to get mappings 
    const selectedDeviceButtons = deviceButtonNames.map((buttonName) => {
      console.log("buttonName_________________________");

      console.log(buttonName);

      // first get array of all of this button's available slots ex: ["Top", "Bottom", "Press"]
      const children = Object.keys(profileContext?.deviceList[selectedEditorDevice]?.axis[buttonName]).map((slot) => {
        // for each button slot:

        console.log("slot_________________________");
        console.log(slot);
        const childKey = "child" + slot + selectedEditorDevice + profileContext?.deviceList[selectedEditorDevice]?.axis[buttonName][slot]?.name
        return ({
          key: childKey,
          label: profileContext?.deviceList[selectedEditorDevice]?.axis[buttonName][slot]?.name,
          data: {
            buttonName: buttonName,
            axisType: profileContext?.deviceList[selectedEditorDevice]?.axis[buttonName][slot]?.axisType,
            slotName: slot,
            layers: profileContext?.deviceList[selectedEditorDevice]?.axis[buttonName][slot]?.layers,
            category: "temp"
          }
        });
      });
      console.log("children_________________________");
      console.log(children);
      const axisKey = "axis" + selectedEditorDevice + buttonName
      return ({
        key: axisKey,
        label: buttonName,
        data: {},
        children: children,
      });
    })

    return (selectedDeviceButtons);
  },


  getTreeTableNodes() {
    console.log("TREE TABLE NODES _______________");
    console.log(
      sessionStorage.getItem('selectedEditorDevice'),
      JSON.parse(sessionStorage.getItem('loadedProfile')),
      sessionStorage.getItem('selectedEditorInputTableInput')
    );
    console.log(sessionStorage.getItem('selectedEditorInputTableInput'));

    return Promise.resolve(
      this.getNodes(
        sessionStorage.getItem('selectedEditorDevice'),
        JSON.parse(sessionStorage.getItem('loadedProfile')),
        sessionStorage.getItem('selectedEditorInputTableInput')
      )
    )
  },


}
