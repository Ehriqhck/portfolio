export const DeviceInputs = {
  getData (selection) {
    // console.log("SWITCH" + (selection === "hatSwitch"));

    switch (selection) {
      case 'pillSwitch':
        return [
          {
            id: '1000',
            button: 'pillSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Pill Stick Up',
            slot: 'top',
            layer: 0
          },
          {
            id: '001',
            button: 'pillSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Pill Stick Down',
            slot: 'bottom',
            layer: 0
          },
          {
            id: '002',
            button: 'pillSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Pill Stick Press',
            slot: 'press',
            layer: 0
          },
          {
            id: '103',
            button: 'pillSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Pill Stick Left',
            slot: 'left',
            layer: 0
          },
          {
            id: '004',
            button: 'pillSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Pill Stick Right',
            slot: 'right',
            layer: 0
          }
        ]
        break
      case 'circleSwitch':
        return [
          {
            id: '1005',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Stick Up',
            slot: 'top',
            layer: 0
          },
          {
            id: '1006',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Stick Down',
            slot: 'bottom',
            layer: 0
          },
          {
            id: '1007',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Stick Press',
            slot: 'press',
            layer: 0
          },
          {
            id: '1008',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Stick Left',
            slot: 'left',
            layer: 0
          },
          {
            id: '1009',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Stick Right',
            slot: 'right',
            layer: 0
          }
        ]
        break
      case 'hatSwitch':
        console.log('SWITCH' + (selection === 'hatSwitch'))

        return [
          {
            id: '1012305',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Stick Up',
            slot: 'top',
            layer: 0
          },
          {
            id: '1012306',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Stick Down',
            slot: 'bottom',
            layer: 0
          },
          {
            id: '1012307',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Stick Press',
            slot: 'press',
            layer: 0
          },
          {
            id: '1012308',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Stick Left',
            slot: 'left',
            layer: 0
          },
          {
            id: '1012309',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Stick Right',
            slot: 'right',
            layer: 0
          }
        ]
        break
      case 'chipSwitch':
        return [
          {
            id: '1010',
            button: 'chipSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Chip Stick Up',
            slot: 'top',
            layer: 0
          },
          {
            id: '1011',
            button: 'chipSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Chip Stick Down',
            slot: 'bottom',
            layer: 0
          },
          {
            id: '1012',
            button: 'chipSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Chip Stick Press',
            slot: 'press',
            layer: 0
          },
          {
            id: '1013',
            button: 'chipSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Chip Stick Left',
            slot: 'left',
            layer: 0
          },
          {
            id: '1014',
            button: 'chipSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Chip Stick Right',
            slot: 'right',
            layer: 0
          }
        ]
        break
      case 'redButton':
        return [
          {
            id: '1010',
            button: 'redButton',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Red Button Press',
            slot: 'press',
            layer: 0
          }
        ]
        break
      default:
        console.log('DEFAULTED')
        return [
          {
            id: '1000',
            button: 'circleSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Switch Up',
            slot: 'top',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 0
          },
          {
            id: '1001',

            button: 'circleSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Switch Press',
            slot: 'press',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 1
          },
          {
            id: '1002',

            button: 'circleSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Switch Left',
            slot: 'left',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 2
          },
          {
            id: '1004',

            button: 'circleSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Circle Switch Right',
            slot: 'right',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 0
          },
          {
            id: '100113',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Switch Up',
            slot: 'top',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 0
          },
          {
            id: '1005',
            button: 'hatSwitch',

            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Switch Down',
            slot: 'bottom',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 0
          },
          {
            id: '1006',

            button: 'hatSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Switch Press',
            slot: 'press',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 1
          },
          {
            id: '1007',

            button: 'hatSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Switch Left',
            slot: 'left',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 2
          },
          {
            id: '1008',

            button: 'hatSwitch',
            device: 'VKB_GLADIATOR_EVO',
            name: 'Hat Switch Right',
            slot: 'right',
            action:
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            layer: 0
          }
        ]
        break
    }
  },

  getCustomersSmall () {
    return Promise.resolve(this.getData().slice(0, 10))
  },

  getCustomersMedium () {
    return Promise.resolve(this.getData().slice(0, 50))
  },

  getCustomersLarge (selection) {
    return Promise.resolve(this.getData(selection).slice(0, 200))
  },

  getCustomersXLarge (selection) {
    return Promise.resolve(this.getData(selection))
  },

  getCustomers ({ params }) {
    const queryParams = params
      ? Object.keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&')
      : ''

    return fetch(
      'https://www.primefaces.org/data/customers?' + queryParams
    ).then(res => res.json())
  }
}
