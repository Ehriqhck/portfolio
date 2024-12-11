export const GameActions = {
  getTreeTableNodesData () {
    return [
      //seat_general
      {
        key: 'seat_general',
        label: 'Seats & Operator Modes',
        parentCategory: 'Vehicles',

        data: {
          name: 'Vehicles / Seats & Operator Modes',
          category: 'Vehicles / Seats & Operator Modes'
        },
        children: [
          {
            key: 'v_eject',
            label: 'Eject',
            data: {
              name: 'Eject',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Press'
            }
          },
          {
            key: 'v_emergency_exit',
            label: 'Emergency Exit Seat',
            data: {
              name: 'Emergency Exit Seat',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Press'
            }
          },
          {
            key: 'v_operator_mode_cycle_back',
            label: 'Cycle Operator Mode Back',
            data: {
              name: 'Cycle Operator Mode Back',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Press'
            }
          },
          {
            key: 'v_operator_mode_cycle_forward',
            label: 'Cycle Operator Mode Forward',
            data: {
              name: 'Cycle Operator Mode Forward',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_mining_mode',
            label: 'Toggle Mining Mode',
            data: {
              name: 'Toggle Mining Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_quantum_mode',
            label: 'Toggle Quantum Mode',
            data: {
              name: 'Toggle Quantum Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_salvage_mode',
            label: 'Toggle Salvage Mode',
            data: {
              name: 'Toggle Salvage Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_scan_mode',
            label: 'Toggle Scan Mode',
            data: {
              name: 'Toggle Scan Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Toggle'
            }
          },
          {
            key: 'v_view_look_behind',
            label: 'Look Behind',
            data: {
              name: 'Look Behind',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              category: 'Vehicles / Seats & Operator Modes',

              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_general',
        data: {
          category: 'Vehicles / Cockpit'
        },
        label: 'Vehicles / Cockpit',

        children: [
          {
            key: 'v_close_all_doors',
            label: 'Close All Doors',
            data: {
              name: 'Close All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_cooler_throttle_down',
            label: 'Decrease Cooler Rate',
            data: {
              name: 'Decrease Cooler Rate',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_cooler_throttle_up',
            label: 'Increase Cooler Rate',
            data: {
              name: 'Increase Cooler Rate',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_flightready',
            label: 'Flight & Systems Ready',
            data: {
              name: 'Flight & Systems Ready',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_lock_all_doors',
            label: 'Lock All Doors',
            data: {
              name: 'Lock All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_doorlocks',
            label: 'Lock & Unlock Doors',
            data: {
              name: 'Lock & Unlock Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },

          {
            key: 'v_open_all_doors',
            label: 'Open All Doors',
            data: {
              name: 'Open All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_doors',
            label: 'Open & Close All Doors',
            data: {
              name: 'Open & Close All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_lock_all_ports',
            label: 'Lock All Ports',
            data: {
              name: 'Lock All Ports',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_unlock_all_ports',
            label: 'Unlock All Ports',
            data: {
              name: 'Unlock All Ports',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_portlocks',
            label: 'Port Lock Toggle All',
            data: {
              name: 'Port Lock Toggle All',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_self_destruct',
            label: 'Self Destruct',
            data: {
              name: 'Self Destruct',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_view',
        label: 'Vehicles / View',
        data: {
          name: 'Vehicles / View',
          category: 'Vehicles / View'
        },
        children: [
          {
            key: 'v_view_cycle_fwd',
            label: 'Cycle Camera View',
            data: {
              name: 'Cycle Camera View',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_zoom_in',
            label: 'Zoom In (Third Person View)',
            data: {
              name: 'Zoom In (Third Person View)',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_zoom_out',
            label: 'Zoom Out (Third Person View)',
            data: {
              name: 'Zoom Out (Third Person View)',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_abs',
            label: 'Dynamic Zoom In & Out (Absolute)',
            data: {
              name: 'Dynamic Zoom In & Out (Absolute)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_abs_toggle',
            label: 'Dynamic Zoom Toggle (Absolute)',
            data: {
              name: 'Dynamic Zoom Toggle (Absolute)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel',
            label: 'Dynamic Zoom In & Out (Relative)',
            data: {
              name: 'Dynamic Zoom In & Out (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel_in',
            label: 'Dynamic Zoom In (Relative)',
            data: {
              name: 'Dynamic Zoom In (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel_out',
            label: 'Dynamic Zoom Out (Relative)',
            data: {
              name: 'Dynamic Zoom Out (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_freelook_mode',
            label: 'Freelook',
            data: {
              name: 'Freelook',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_view_mode',
            label: 'Cycle Camera Orbit Mode',
            data: {
              name: 'Cycle Camera Orbit Mode',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_pitch',
            label: 'Look/Pitch Up & Down',
            data: {
              name: 'Look/Pitch Up & Down',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_view_pitch_down',
            label: 'Look/Pitch Down',
            data: {
              name: 'Look/Pitch Down',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_pitch_up',
            label: 'Look/Pitch Up',
            data: {
              name: 'Look/Pitch Up',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_yaw',
            label: 'Look/Yaw Left & Right',
            data: {
              name: 'Look/Yaw Left & Right',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_view_yaw_left',
            label: 'Look/Yaw Left',
            data: {
              name: 'Look/Yaw Left',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_yaw_right',
            label: 'Look/Yaw Right',
            data: {
              name: 'Look/Yaw Right',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_movement',
        label: 'Flight / Movement',
        data: {
          category: 'Flight / Movement'
        },
        children: [
          {
            key: 'spaceship_movement-maneuvering',
            label: 'Movemeasdant',
            data: {
              actionmapName: 'spaceship_movement-maneuvering',
              category: 'Flight / Movement / Maneuvering'
            },
            children: [
              {
                key: 'v_strafe_back_abs',
                label: 'Throttle - Backwards (Absolute)',
                data: {
                  name: 'Throttle - Backwards (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_back_abs_rel-FIX THIS KEY',
                label: 'Throttle - Backwards (Relative)',
                data: {
                  name: 'Throttle - Backwards (Relative)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_back_abs_rel',
                label: 'Throttle - Backwards (Relative & Absolute)',
                data: {
                  name: 'Throttle - Backwards (Relative & Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },

              {
                key: 'v_strafe_forward_abs',
                label: 'Throttle - Forward (Absolute)',
                data: {
                  name: 'Throttle - Forward (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_forward_abs_rel',
                label: 'Throttle - Forward (Absolute & Relative)',
                data: {
                  name: 'Throttle - Forward (Absolute & Relative)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_forward_rel',
                label: 'Throttle - Forward (Relative)',
                data: {
                  name: 'Throttle - Forward (Relative)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_right',
                label: 'Strafe Right (Absolute)',
                data: {
                  name: 'Strafe Right (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'PressHold'
                }
              },
              {
                key: 'v_strafe_vertical',
                label: 'Strafe Up & Down (Absolute)',
                data: {
                  name: 'Strafe Up & Down (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'PressHold'
                }
              },
              {
                key: 'v_strafe_down',
                label: 'Strafe Down (Absolute)',
                data: {
                  name: 'Strafe Down (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'pressHold'
                }
              },
              {
                key: 'v_strafe_lateral',
                label: 'Strafe Left & Right (Absolute)',
                data: {
                  name: 'Strafe Left & Right (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_strafe_left',
                label: 'Strafe Left (Absolute)',
                data: {
                  name: 'Strafe Left (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'PressHold'
                }
              },
              {
                key: 'v_strafe_longitudinal_abs',
                label: 'Strafe Forward & Backward (Absolute)',
                data: {
                  name: 'Strafe Forward & Backward (Absolute)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_strafe_longitudinal_abs_rel',
                label: 'Strafe Forward & Backward (Absolute & Relative)',
                data: {
                  name: 'Strafe Forward & Backward (Absolute & Relative)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_strafe_longitudinal_rel',
                label: 'Strafe Forward & Backward (Relative)',
                data: {
                  name: 'Strafe Forward & Backward (Relative)',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_strafe_longitudinal_invert',
                label: 'Strafe Forward & Back Invert',
                data: {
                  name: 'Strafe Forward & Back Invert',
                  category: 'Flight / Movement / Maneuvering',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_afterburner',
                label: 'Afterburner',
                data: {
                  name: 'Afterburner',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press',
                  category: 'Flight / Movement / Maneuvering'
                }
              }
            ]
          },
          {
            key: 'spaceship_movement-limiters',
            label: 'Limiters',
            data: {
              actionmapName: 'spaceship_movement-limiters',
              category: 'Flight / Movement / Limiters'
            },
            children: [
              {
                key: 'v_speed_range_abs',
                label: 'Speed Limiter (Absolute)',
                data: {
                  name: 'Speed Limiter (Absolute)',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_speed_range_down',
                label: 'Speed Limiter Decrease',
                data: {
                  name: 'Speed Limiter Decrease',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'PressHold'
                }
              },
              {
                key: 'v_speed_range_up',
                label: 'Speed Limiter Increase',
                data: {
                  name: 'Speed Limiter Increase',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'PressHold'
                }
              },
              {
                key: 'v_speed_range_rel',
                label: 'Speed Limiter (Relative)',
                data: {
                  name: 'Speed Limiter (Relative)',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_accel_range_abs',
                label: 'Acceleration Limiter Up/Down (Absolute)',
                data: {
                  name: 'Acceleration Limiter Up/Down (Absolute)',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Axis'
                }
              },
              {
                key: 'v_accel_range_up',
                label: 'Acceleration Limiter Increase',
                data: {
                  name: 'Acceleration Limiter Increase',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_accel_range_down',
                label: 'Acceleration Limiter Decrease',
                data: {
                  name: 'Acceleration Limiter Decrease',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_accel_range_rel',
                label: 'Acceleration Limiter Up/Down (Relative)',
                data: {
                  name: 'Acceleration Limiter Up/Down (Relative)',
                  inputType: 'Press',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement'
                }
              },
              {
                key: 'v_ifcs_speed_limiter_reset_scm',
                label: 'Speed Limiter - Reset to SCM Speed',
                data: {
                  name: 'Speed Limiter - Reset to SCM Speed',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_ifcs_toggle_speed_limiter',
                label: 'Speed Limiter On/Off (Hold/Toggle)',
                data: {
                  name: 'Speed Limiter On/Off (Hold/Toggle)',
                  category: 'Flight / Movement / Limiters',
                  actionmapName: 'spaceship_movement',
                  inputType: 'Press'
                }
              }
            ]
          },

          {
            key: 'v_strdafe_abs_rel_swap',
            label: 'Throttle - Swap Relative & Absolute',
            data: {
              name: 'Throttle - Swap Relative & Absolute',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'press'
            }
          },

          {
            key: 'v_strafe_reset_rel_long',
            label: 'Throttle - Remove Trim (Long)',
            data: {
              name: 'Throttle - Remove Trim (Long)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_reset_rel_short',
            label: 'Throttle - Remove Trim (Short)',
            data: {
              name: 'Throttle - Remove Trim (Short)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_set_rel_from_abs_long',
            label: 'Throttle - Set Trim (Long)',
            data: {
              name: 'Throttle - Set Trim (Long)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_set_rel_from_abs_short',
            label: 'Throttle - Set Trim (Short)',
            data: {
              name: 'Throttle - Set Trim (Short)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },

          {
            key: 'v_target_match_vel',
            label: 'Match Target Velocity',
            data: {
              name: 'Match Target Velocity',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },

          {
            key: 'v_atc_loading_area_request',
            label: 'ATC Loading Request',
            data: {
              name: 'ATC Loading Request',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_atc_request',
            label: 'ATC Request Landing',
            data: {
              name: 'ATC Request Landing',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_deploy_landing_system',
            label: 'Landing System (Deploy)',
            data: {
              name: 'Landing System (Deploy)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_retract_landing_system',
            label: 'Landing System (Retract)',
            data: {
              name: 'Landing System (Retract)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_landing_system',
            label: 'Landing System (Toggle)',
            data: {
              name: 'Landing System (Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_vtol',
            label: 'Toggle VTOL',
            data: {
              name: 'Toggle VTOL',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_yaw_roll_swap',
            label: 'Swap Yaw & Roll (Toggle)',
            data: {
              name: 'Swap Yaw & Roll (Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_cycle',
            label: 'Cycle Configuration',
            data: {
              name: 'Cycle Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_deploy',
            label: 'Expand Configuration',
            data: {
              name: 'Expand Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_retract',
            label: 'Retract Configuration',
            data: {
              name: 'Retract Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_engage_jump',
            label: 'Jump Drive - Engage Jump',
            data: {
              name: 'Jump Drive - Engage Jump',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_jump_request',
            label: 'Jump Drive - Request Jump',
            data: {
              name: 'Jump Drive - Request Jump',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_esp_hold',
            label: 'IFCS ESP Hold',
            data: {
              name: 'IFCS ESP Hold',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Hold'
            }
          },

          {
            key: 'v_ifcs_toggle_cruise_control',
            label: 'Cruise Control',
            data: {
              name: 'Cruise Control',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_esp',
            label: 'ESP Toggle On & Off (Press)',
            data: {
              name: 'ESP Toggle On & Off (Press)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_gforce_safety',
            label: 'G-Force Safety On/Off (Hold/Toggle)',
            data: {
              name: 'G-Force Safety On/Off (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },

          {
            key: 'v_ifcs_toggle_vector_decoupling',
            label: 'Decoupled Mode (Hold/Toggle)',
            data: {
              name: 'Decoupled Mode (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_lock_rotation',
            label: 'Lock Pitch & Yaw Movement (Hold/Toggle)',
            data: {
              name: 'Lock Pitch & Yaw Movement (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          }
        ]
      },
      {
        key: 'spaceship_quantum',
        label: 'Flight / Quantum Travel',
        data: {
          category: 'Flight / Quantum Travel'
        },
        children: [
          {
            key: 'v_toggle_qdrive_engagement',
            label: 'Engage Quantum Drive (Hold)',
            data: {
              name: 'Engage Quantum Drive (Hold)',
              category: 'Flight / Quantum Travel',
              actionmapName: 'spaceship_quantum',
              inputType: 'Hold'
            }
          }
        ]
      },
      {
        key: 'spaceship_docking',
        label: 'Flight / Docking',
        data: {
          category: 'Flight / Docking'
        },
        children: [
          {
            key: 'v_toggle_docking_mode',
            label: 'Toggle Docking Mode',
            data: {
              name: 'Toggle Docking Mode',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          },
          {
            key: 'v_invoke_docking',
            label: 'Invoke Docking',
            data: {
              name: 'Invoke Docking',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          },
          {
            key: 'v_dock_toggle_view',
            label: 'Toggle Docking View',
            data: {
              name: 'Toggle Docking View',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_targeting',
        label: 'Flight / Targeting',
        data: {
          category: 'Flight / Targeting'
        },
        children: [
          {
            key: 'v_enter_remote_turret_1',
            label: 'Enter Remote Turret 1',
            data: {
              name: 'Enter Remote Turret 1',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_enter_remote_turret_2',
            label: 'Enter Remote Turret 2',
            data: {
              name: 'Enter Remote Turret 2',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_enter_remote_turret_3',
            label: 'Enter Remote Turret 3',
            data: {
              name: 'Enter Remote Turret 3',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_look_ahead_enable',
            label: 'Enable / Disable Look Ahead',
            data: {
              name: 'Enable / Disable Look Ahead',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_look_ahead_start_target_tracking',
            label: 'Enable / Disable Target Padlock (Toggle, Hold)',
            data: {
              name: 'Enable / Disable Target Padlock (Toggle, Hold)',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_target_lock_selected',
            label: 'Lock Selected Target',
            data: {
              name: 'Lock Selected Target',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_unlock_selected',
            label: 'Unlock Selected Target',
            data: {
              name: 'Unlock Selected Target',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_target_pin_selected',
            label: 'Pin Selected Target (Press)',
            data: {
              name: 'Pin Selected Target (Press)',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_pin_selected_hold',
            label: 'Pin Selected Target (Hold)',
            data: {
              name: 'Pin Selected Target (Hold)',
              category: 'Flight / Targeting',
              actionmapName: 'spaceship_targeting',
              inputType: 'Hold'
            }
          }
        ]
      },
      {
        key: 'spaceship_targeting_advanced',
        label: 'Vehicles / Target Cycling',
        data: {
          category: 'Vehicles / Target Cycling'
        },
        children: [
          {
            key: 'v_target_cycle_all_back',
            label: 'Cycle Lock - All - Back',
            data: {
              name: 'Cycle Lock - All - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_all_fwd',
            label: 'Cycle Lock - All - Forward',
            data: {
              name: 'Cycle Lock - All - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_all_reset',
            label: 'Cycle Lock - All - Reset',
            data: {
              name: 'Cycle Lock - All - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_back',
            label: 'Cycle Lock - Attacker - Back',
            data: {
              name: 'Cycle Lock - Attacker - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_fwd',
            label: 'Cycle Lock - Attacker - Forward',
            data: {
              name: 'Cycle Lock - Attacker - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_reset',
            label: 'Cycle Lock - Attacker - Reset',
            data: {
              name: 'Cycle Lock - Attacker - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_back',
            label: 'Cycle Lock - Friendly - Back',
            data: {
              name: 'Cycle Lock - Friendly - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_fwd',
            label: 'Cycle Lock - Friendly - Forward',
            data: {
              name: 'Cycle Lock - Friendly - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_reset',
            label: 'Cycle Lock - Friendly - Reset',
            data: {
              name: 'Cycle Lock - Friendly - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_back',
            label: 'Cycle Lock - Hostiles - Back',
            data: {
              name: 'Cycle Lock - Hostiles - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_fwd',
            label: 'Cycle Lock - Hostiles - Forward',
            data: {
              name: 'Cycle Lock - Hostiles - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_reset',
            label: 'Cycle Lock - Hostiles - Reset',
            data: {
              name: 'Cycle Lock - Hostiles - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_back',
            label: 'Cycle Lock - In View - Back',
            data: {
              name: 'Cycle Lock - In View - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_fwd',
            label: 'Cycle Lock - In View - Forward',
            data: {
              name: 'Cycle Lock - In View - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_reset',
            label: 'Cycle Lock - In View - Reset',
            data: {
              name: 'Cycle Lock - In View - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_back',
            label: 'Cycle Lock - Pinned - Back',
            data: {
              name: 'Cycle Lock - Pinned - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_fwd',
            label: 'Cycle Lock - Pinned - Forward',
            data: {
              name: 'Cycle Lock - Pinned - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_reset',
            label: 'Cycle Lock - Pinned - Reset',
            data: {
              name: 'Cycle Lock - Pinned - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_back',
            label: 'Cycle Lock - Sub-Target - Back',
            data: {
              name: 'Cycle Lock - Sub-Target - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_fwd',
            label: 'Cycle Lock - Sub-Target - Forward',
            data: {
              name: 'Cycle Lock - Sub-Target - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_reset',
            label: 'Cycle Lock - Sub-Target - Reset',
            data: {
              name: 'Cycle Lock - Sub-Target - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_target_hailing',
        label: 'Vehicles / Target Hailing',

        data: {
          category: 'Vehicles / Target Hailing'
        },
        children: [
          {
            key: 'v_target_hail',
            label: 'Hail Target',
            data: {
              name: 'Hail Target',
              category: 'Flight / Target Hailing',
              actionmapName: 'spaceship_target_hailing',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_radar',
        label: 'Vehicles / Radar',

        data: {
          category: 'Vehicles / Radar'
        },
        children: [
          {
            key: 'v_invoke_ping',
            label: 'Activate Ping (Hold & Release)',
            data: {
              name: 'Activate Ping (Hold & Release)',
              category: 'Vehicles / Radar',
              actionmapName: 'spaceship_radar',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_scanning_trigger_scan',
            label: 'Activate Scanning',
            data: {
              name: 'Activate Scanning',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          },
          {
            key: 'v_inc_scan_focus_level',
            label: 'Increase Scanning Angle',
            data: {
              name: 'Increase Scanning Angle',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          },
          {
            key: 'v_dec_scan_focus_level',
            label: 'Decrease Scanning Angle',
            data: {
              name: 'Decrease Scanning Angle',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_mining',
        label: 'Vehicles / Mining',
        data: {
          category: 'Vehicles / Mining'
        },
        children: [
          {
            key: 'v_toggle_mining_laser_fire',
            label: 'Fire Mining Laser (Toggle)',
            data: {
              name: 'Fire Mining Laser (Toggle)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_mining_laser_type',
            label: 'Switch Mining Laser (Toggle)',
            data: {
              name: 'Switch Mining Laser (Toggle)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_mining_throttle',
            label: 'Increase / Decrease Mining Laser Power',
            data: {
              name: 'Increase / Decrease Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_increase_mining_throttle',
            label: 'Increase Mining Laser Power',
            data: {
              name: 'Increase Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_decrease_mining_throttle',
            label: 'Decrease Mining Laser Power',
            data: {
              name: 'Decrease Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_jettison_volatile_cargo',
            label: 'Jettison Cargo',
            data: {
              name: 'Jettison Cargo',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable1',
            label: 'Activate Mining Module (Slot 1)',
            data: {
              name: 'Activate Mining Module (Slot 1)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable2',
            label: 'Activate Mining Module (Slot 2)',
            data: {
              name: 'Activate Mining Module (Slot 2)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable3',
            label: 'Activate Mining Module (Slot 3)',
            data: {
              name: 'Activate Mining Module (Slot 3)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          }
        ]
      },
      // spaceship_salvage / Vehicles - Salvage
      {
        key: 'spaceship_salvage',
        label: 'Vehicles / Salvage',

        data: {
          category: 'Vehicles / Salvage'
        },
        children: [
          {
            key: 'spaceship_salvage-nudging',
            label: 'Vehicles / Salvage / Nudging',

            data: {
              category: 'Vehicles / Salvage / Nudging'
            },
            children: [
              {
                key: 'v_salvage_nudge_up__left',
                label: 'Nudge Left Salvage Tool Up',
                data: {
                  name: 'Nudge Left Salvage Tool Up',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_salvage_nudge_down__left',
                label: 'Nudge Left Salvage Tool Down',
                data: {
                  name: 'Nudge Left Salvage Tool Down',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },

              {
                key: 'v_salvage_nudge_left__left',
                label: 'Nudge Left Salvage Tool Left',
                data: {
                  name: 'Nudge Left Salvage Tool Left',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_salvage_nudge_right__left',
                label: 'Nudge Left Salvage Tool Right',
                data: {
                  name: 'Nudge Right Salvage Tool Left',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_salvage_nudge_up__right',
                label: 'Nudge Right Salvage Tool Up',
                data: {
                  name: 'Nudge Right Salvage Tool Up',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_salvage_nudge_down__right',
                label: 'Nudge Right Salvage Tool Down',
                data: {
                  name: 'Nudge Right Salvage Tool Down',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },

              {
                key: 'v_salvage_nudge_left__right',
                label: 'Nudge Right Salvage Tool Left',
                data: {
                  name: 'Nudge Right Salvage Tool Right',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },

              {
                key: 'v_salvage_nudge_right__right',
                label: 'Nudge Right Salvage Tool Right',
                data: {
                  name: 'Nudge Right Salvage Tool Right',
                  category: 'Vehicles / Salvage / Nudging',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              }
            ]
          },
          {
            key: 'spaceship_salvage-tractor',
            label: 'Vehicles / Salvage / Tractor Beam',

            data: {
              category: 'Vehicles / Salvage / Tractor Beam'
            },
            children: [
              {
                key: 'tractor_beam_vehicle_increase_distance',
                label: 'Tractor Beam Vehicle - Increase Distance',
                data: {
                  name: 'Tractor Beam Vehicle - Increase Distance',
                  category: 'Vehicles / Salvage / Tractor Beam',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'tractor_beam_vehicle_decrease_distance',
                label: 'Tractor Beam Vehicle - Decrease Distance',
                data: {
                  name: 'Tractor Beam Vehicle - Decrease Distance',
                  category: 'Vehicles / Salvage / Tractor Beam',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              }
            ]
          },
          {
            key: 'spaceship_salvage-disintegration',
            label: 'Vehicles / Salvage / Disintegration Beam',

            data: {
              category: 'Vehicles / Salvage / Disintegration Beam'
            },
            children: [
              {
                key: 'v_salvage_focus_disintegrate',
                label: 'Focus Disintegration Tool',
                data: {
                  name: 'Focus Disintegration Tool',
                  category: 'Vehicles / Salvage / Disintegration Beam',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              },
              {
                key: 'v_salvage_toggle_fire_disintegrate',
                label: 'Toggle Fire Disintegrate',
                data: {
                  name: 'Toggle Fire Disintegrate',
                  category: 'Vehicles / Salvage / Disintegration Beam',
                  actionmapName: 'spaceship_salvage',
                  inputType: 'Press'
                }
              }
            ]
          },
          {
            key: 'v_salvage_beam_spacing_abs',
            label: 'Salvage Beam Spacing (Absolute)',
            data: {
              name: 'Salvage Beam Spacing (Absolute)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_beam_spacing_rel',
            label: 'Salvage Beam Spacing (Relative)',
            data: {
              name: 'Salvage Beam Spacing (Relative)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },

          {
            key: 'v_salvage_cycle_modifiers_focused',
            label: 'Cycle Focused Salvage Modifiers',
            data: {
              name: 'Cycle Focused Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_left',
            label: 'Cycle Left Salvage Modifiers',
            data: {
              name: 'Cycle Left Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_right',
            label: 'Cycle Right Salvage Modifiers',
            data: {
              name: 'Cycle Right Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_structural',
            label: 'Cycle Structural Salvage Modes',
            data: {
              name: 'Cycle Structural Salvage Modes',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_increase_beam_spacing',
            label: 'Increase Beam Spacing',
            data: {
              name: 'Increase Beam Spacing',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_decrease_beam_spacing',
            label: 'Decrease Beam Spacing',
            data: {
              name: 'Decrease Beam Spacing',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_beam_spacing_axis',
            label: 'Salvage Beam Axis (Toggle)',
            data: {
              name: 'Salvage Beam Axis (Toggle)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_all_heads',
            label: 'Focus All Salvage Heads',
            data: {
              name: 'Focus All Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_left',
            label: 'Focus Left Salvage Heads',
            data: {
              name: 'Focus Left Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_right',
            label: 'Focus Right Salvage Heads',
            data: {
              name: 'Focus Right Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },

          {
            key: 'v_salvage_focus_fracture',
            label: 'Focus Fracture Tool',
            data: {
              name: 'Focus Fracture Tool',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },

          {
            key: 'v_salvage_toggle_fire_focused',
            label: 'Toggle Fire Focused',
            data: {
              name: 'Toggle Fire Focused',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_fracture',
            label: 'Toggle Fire Fracture',
            data: {
              name: 'Toggle Fire Fracture',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_left',
            label: 'Toggle Fire Left',
            data: {
              name: 'Toggle Fire Left',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_right',
            label: 'Toggle Fire Right',
            data: {
              name: 'Toggle Fire Right',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_reset_gimbal',
            label: 'Reset Salvage Gimbal',
            data: {
              name: 'Reset Salvage Gimbal',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_gimbal_mode',
            label: 'Salvage Mode Gimbal (Toggle)',
            data: {
              name: 'Salvage Mode Gimbal (Toggle)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          }
        ]
      },
      // turret_movement / Turret Movement
      {
        key: 'turret_movement',
        label: 'Vehicles / Turret Movement',
        data: {
          name: 'Vehicles / Turret Movement',
          category: 'Vehicles / Turret Movement'
        },
        children: [
          {
            key: 'turret_gyromode',
            label: 'Turret Gyro Stabilization (Toggle)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Gyro Stabilization (Toggle)',
              category: 'Vehicles / Turret Movement',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_pitch',
            label: 'Turret Pitch Up & Down (Axis)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Up & Down',
              category: 'Turret Movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_pitch_up',
            label: 'Turret Pitch Up (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Up',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_pitch_down',
            label: 'Turret Pitch Down (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Down',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_yaw',
            label: 'Turret Yaw Left & Right (Axis)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw Left & Right',
              category: 'Turret Movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_yaw_left',
            label: 'Turret Yaw Left (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw Left',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_yaw_right',
            label: 'Turret Yaw Right (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw Right',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_exit',
            label: 'Exit Remote Turret (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Exit Remote Turret',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_in',
            label: 'Zoom In (Remote Turret) (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom In (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_out',
            label: 'Zoom Out (Remote Turret) (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom Out (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_toggle',
            label: 'Zoom Toggle (Remote Turret) (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom Toggle (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_toggle_mouse_mode',
            label: 'Toggle Turret Mouse Movement (VJoy <-> FPS) (Press)',
            data: {
              actionmapName: 'turret_movement',
              name: 'Toggle Turret Mouse Movement (VJoy <-> FPS)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          }
        ]
      },
      // turret_advanced / Turret Advanced
      {
        key: 'turret_advanced',
        label: 'Vehicles / Turret Movement Advanced',

        data: {
          category: 'Vehicles / Turret Movement Advanced'
        },
        children: [
          {
            key: 'turret_change_firemode',
            label: 'Cycle Fire Mode (Staggered <-> Combined) (Press)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Cycle Fire Mode (Staggered <-> Combined)',
              category: 'Turret Advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_change_position',
            label: 'Change Turret Position (Press)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Change Turret Position',
              category: 'Turret Advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_esp_hold',
            label: 'Turret ESP - Enable Temporarily (Hold)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret ESP - Enable Temporarily (Hold)',
              category: 'Turret Advanced',
              inputType: 'Hold'
            }
          },
          {
            key: 'turret_esp_toggle',
            label: 'Turret ESP Toggle On / Off (Toggle)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret ESP Toggle On / Off',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_instant_zoom',
            label: 'Turret Instant Zoom (Toggle)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret Instant Zoom',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_limiter_abs',
            label: 'Turret - Speed Limiter (Absolute) (Axis)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Speed Limiter (Absolute)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel',
            label: 'Turret - Speed Limiter (Relative) (Axis)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel_increase',
            label: 'Turret - Increase Speed Limiter (Relative) (Axis)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Increase Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel_decrease',
            label: 'Turret - Decrease Speed Limiter (Relative) (Axis)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Decrease Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },

          {
            key: 'turret_limiter_toggle',
            label:
              'Turret - Toggle Speed Limiter On / Off (Hold/Toggle) (Toggle)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Toggle Speed Limiter On / Off (Hold/Toggle)',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_recenter',
            label: 'Recenter Turret (Hold) (Hold)',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Recenter Turret (Hold)',
              category: 'Turret Advanced',
              inputType: 'Hold'
            }
          }
        ]
      },

      // spaceship_weapons / Vehicles - Weapons
      {
        key: 'spaceship_weapons',
        label: 'Vehicles / Weapons',
        data: {
          category: 'Vehicles / Weapons'
        },
        children: [
          {
            key: 'v_attack_all',
            label: 'Fire Weapon All (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon All',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_attack_group1',
            label: 'Fire Weapon Group 1 (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon Group 1',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_attack_group2',
            label: 'Fire Weapon Group 2 (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon Group 2',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_change_firemode',
            label: 'Cycle Fire Mode (Staggered <-> Combined) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Fire Mode (Staggered <-> Combined)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_convergence_distance_abs',
            label: 'Manual Convergence Distance (Absolute) (Axis)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance (Absolute)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_weapon_convergence_distance_rel',
            label: 'Manual Convergence Distance (Relative) (Axis)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_weapon_convergence_distance_rel_decrease',
            label: 'Manual Convergence Distance - Decrease (Relative) (Axis)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Decrease (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_weapon_convergence_distance_rel_increase',
            label: 'Manual Convergence Distance - Increase (Relative) (Axis)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Increase (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_weapon_convergence_distance_set_default',
            label: 'Manual Convergence Distance - Reset (Relative) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Reset (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_cycle_all',
            label:
              'Cycle Gimbal Assist / Standard Gimbal / Gimbal Lock Modes (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Gimbal Assist / Standard Gimbal / Gimbal Lock Modes',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_cycle_fixed_auto',
            label: 'Cycle Fixed / Auto Gimbal Modes (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Fixed / Auto Gimbal Modes',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_auto',
            label: 'Set Auto Gimbal Mode (Short Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Auto Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_auto_long',
            label: 'Set Auto Gimbal Mode (Long Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Auto Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_fixed',
            label: 'Set Fixed Gimbal Mode (Short Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Fixed Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_fixed_long',
            label: 'Set Fixed Gimbal Mode (Long Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Fixed Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_manual',
            label: 'Set Manual Gimbal Mode (Short Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Manual Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_gimbal_mode_set_manual_long',
            label: 'Set Manual Gimbal Mode (Long Press) (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Manual Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
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
            key: 'v_weapon_manual_gimbal_lock_vector',
            label: 'Manual Gimbal Mode - Lock Aim Vector (Toggle) (Toggle)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Gimbal Mode - Lock Aim Vector (Toggle)',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_weapon_pip_combination_type_set_combined_all',
            label: 'PIP Combination Type: Set Average of All (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set Average of All',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_pip_combination_type_set_combined_weapon_group',
            label: 'PIP Combination Type: Set One Pip Per Weapon Type (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set One Pip Per Weapon Type',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_pip_combination_type_set_single',
            label: 'PIP Combination Type: Set One Pip Per Weapon (Press)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set One Pip Per Weapon',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_pip_combination_type_toggle',
            label: 'PIP Combination Type: Toggle (Toggle)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Toggle',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_weapon_pip_toggle_lead_lag',
            label: 'Toggle Lead / Lag PIPs (Toggle) (Toggle)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Toggle Lead / Lag PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_weapon_pip_set_lag',
            label: 'Set Lag PIPs (Toggle) (Toggle)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Lag PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_weapon_pip_set_lead',
            label: 'Set Lead PIPs (Toggle) (Toggle)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Lead PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_weapon_suppress_aim_assists_hold',
            label: 'Suppress Aim Assist (Hold) (Hold)',
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Suppress Aim Assist (Hold)',
              category: 'Vehicles / Weapons',
              inputType: 'Hold'
            }
          }
        ]
      },
      // spaceship_missiles / Vehicles - Missiles
      {
        key: 'spaceship_missiles',
        label: 'Vehicles / Missiles',

        data: {
          category: 'Vehicles / Missiles'
        },
        children: [
          {
            key: 'v_weapon_bombing_hud_range_increase',
            label: 'Bombs - Increase HUD Range (Hold)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Increase HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_weapon_bombing_hud_range_decrease',
            label: 'Bombs - Decrease HUD Range (Hold)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Decrease HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_weapon_bombing_hud_range_reset',
            label: 'Bombs - Reset HUD Range (Hold)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Reset HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_weapon_bombing_toggle_desired_impact_point',
            label: 'Bombs - Toggle Desired Impact Point (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Toggle Desired Impact Point (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_bombing_toggle_desired_impact_point_hold',
            label: 'Bombs - Toggle Desired Impact Point (Hold) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Toggle Desired Impact Point (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_cycle_missile_fwd',
            label: 'Cycle Next Missile (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Cycle Next Missile',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_cycle_missile_back',
            label: 'Cycle Previous Missile (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Cycle Previous Missile',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_decrease_max_missiles',
            label: 'Decrease Number of Armed Missiles (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Decrease Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_increase_max_missiles',
            label: 'Increase Number of Armed Missiles (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Increase Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_reset_max_missiles',
            label: 'Reset Number of Armed Missiles (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Reset Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_launch_missile',
            label: 'Launch Missile (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Launch Missile (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_toggle_launch_missile',
            label: 'Launch Missile (Hold) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Launch Missile (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_launch_missile_cinematic',
            label: 'Enable Cinematic Camera (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Enable Cinematic Camera (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_launch_missile_cinematic_hold',
            label: 'Enable Cinematic Camera (Hold) (Press)',
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Enable Cinematic Camera (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            }
          }
        ]
      },

      // spaceship_defensive / Vehicles - Shields and Countermeasures
      {
        key: 'spaceship_defensive',
        label: 'Vehicles / Shields and Countermeasures',

        data: {
          category: 'Vehicles / Shields and Countermeasures'
        },
        children: [
          {
            key: 'v_shield_raise_level_back',
            label: 'Shield Raise Level Back (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Back',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },

          {
            key: 'v_shield_raise_level_forward',
            label: 'Shield Raise Level Forward (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Forward',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_shield_raise_level_left',
            label: 'Shield Raise Level Left (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Left',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_shield_raise_level_right',
            label: 'Shield Raise Level Right (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Right',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_shield_raise_level_up',
            label: 'Shield Raise Level Top (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Top',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_shield_raise_level_down',
            label: 'Shield Raise Level Bottom (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Bottom',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_shield_reset_level',
            label: 'Shield Reset Levels (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Reset Levels',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_countermeasure_decoy_burst_decrease',
            label: 'Decoy - Decrease Burst Size (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Decrease Burst Size (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_countermeasure_decoy_burst_increase',
            label: 'Decoy - Increase Burst Size (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Increase Burst Size (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_countermeasure_decoy_launch',
            label:
              'Decoy - Launch Burst (Tap), Set & Launch Burst (Hold) (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Launch Burst (Tap), Set & Launch Burst (Hold)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_countermeasure_decoy_launch_panic',
            label: 'Decoy - Panic Launch (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Panic Launch (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          },
          {
            key: 'v_weapon_countermeasure_noise_launch',
            label: 'Noise - Deploy (Tap) (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Noise - Deploy (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            }
          }
        ]
      },
      // vehicle_capacitor_assignment / Vehicles - Power Triangle Assignment
      {
        key: 'spaceshivehicle_capacitor_assignmentp_defensive',
        label: 'Vehicles / Power Triangle Assignment',
        data: {
          category: 'Vehicles / Power Triangle Assignment'
        },
        children: [
          {
            key: 'v_capacitor_assignment_engine_combined_decrease_min',
            label:
              'Engines - Decrease Power (Tap) / Set to Minimum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_engine_combined_increase_max',
            label:
              'Engines - Increase Power (Tap) / Set to Maximum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_engine_decrease',
            label: 'Engines - Decrease Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_engine_increase',
            label: 'Engines - Increase Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_engine_max',
            label: 'Engines - Set to Maximum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_engine_min',
            label: 'Engines - Set to Minimum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_reset',
            label: 'Reset Assignment (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Reset Assignment',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_combined_decrease_min',
            label:
              'Shields - Decrease Power (Tap) / Set to Minimum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_combined_increase_max',
            label:
              'Shields - Increase Power (Tap) / Set to Maximum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_decrease',
            label: 'Shields - Decrease Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_increase',
            label: 'Shields - Increase Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_max',
            label: 'Shields - Set to Maximum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_shield_min',
            label: 'Shields - Set to Minimum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_reset',
            label: 'Shields Assignment (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields Assignment',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_combined_decrease_min',
            label:
              'Weapons - Decrease Power (Tap) / Set to Minimum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_combined_increase_max',
            label:
              'Weapons - Increase Power (Tap) / Set to Maximum (Hold) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_decrease',
            label: 'Weapons - Decrease Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_increase',
            label: 'Weapons - Increase Power (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_max',
            label: 'Weapons - Set to Maximum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          },
          {
            key: 'v_capacitor_assignment_weapon_min',
            label: 'Weapons - Set to Minimum (Tap) (Press)',
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            }
          }
        ]
      },
      // spaceship_power / Flight - Power
      {
        key: 'spaceship_power',
        label: 'Flight / Power',
        data: {
          category: 'Flight / Power'
        },
        children: [
          {
            key: 'v_power_set_off',
            label: 'Set Power Off (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_on',
            label: 'Set Power On (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_toggle_shields',
            label: 'Toggle Power - Shields (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Shields',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_shields_off',
            label: 'Set Shields Power Off (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Shields Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_shields_on',
            label: 'Set Shields Power On (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Shields Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_toggle_thrusters',
            label: 'Toggle Power - Thrusters (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Thrusters',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_thrusters_off',
            label: 'Set Thrusters Power Off (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Thrusters Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_thrusters_on',
            label: 'Set Thrusters Power On (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Thrusters Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_toggle_weapons',
            label: 'Toggle Power - Weapons (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Weapons',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_weapons_off',
            label: 'Set Weapons Power Off (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Weapons Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_set_weapons_on',
            label: 'Set Weapons Power On (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Weapons Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_throttle_down',
            label: 'Decrease Throttle (Press)',
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decrease Throttle',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_throttle_min',
            label: 'Decrease Throttle To Minimum (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Decrease Throttle To Minimum',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_throttle_up',
            label: 'Increase Throttle (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Increase Throttle',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          },
          {
            key: 'v_power_toggle',
            label: 'Toggle Power - All (Press)',
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - All',
              category: 'Flight / Power',
              inputType: 'Press'
            }
          }
        ]
      },
      // spaceship_hud / Flight - HUD
      {
        key: 'spaceship_hud',
        label: 'Flight / HUD',
        data: {
          category: 'Flight / HUD'
        },
        children: [
          {
            key: 'v_cycle_pitch_ladder_mode',
            label: 'Cycle Pitch Ladder Mode (Press)',
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Cycle Pitch Ladder Mode',
              category: 'Flight / HUD',
              inputType: 'Press'
            }
          },
          {
            key: 'v_hud_open_scoreboard',
            label: 'Open Scoreboard (Press)',
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Open Scoreboard',
              category: 'Flight / HUD',
              inputType: 'Press'
            }
          },
          {
            key: 'v_starmap',
            label: 'Open Map (Starmap) (Press)',
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Open Map (Starmap)',
              category: 'Flight / HUD',
              inputType: 'Press'
            }
          },
          {
            key: 'visor_wipe',
            label: 'Wipe Helmet Visor (Press)',
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Wipe Helmet Visor',
              category: 'Flight / HUD',
              inputType: 'Press'
            }
          }
        ]
      },
      // lights_controller / Lights
      {
        key: 'lights_controller',
        label: 'Lights',

        data: {
          category: 'Vehicles / Lights'
        },
        children: [
          {
            key: 'v_lights',
            label: 'Headlights (Toggle) (Press)',
            data: {
              actionmapName: 'lights_controller',
              name: 'Headlights (Toggle)',
              category: 'Lights',
              inputType: 'Press'
            }
          }
        ]
      },
      // Stopwatch / stopwatch
      {
        key: 'stopwatch',
        label: 'Stopwatch',
        data: {
          category: 'Vehicles / Stopwatch'
        },
        children: [
          {
            key: 'stopwatch_reset',
            label: 'Reset (Long Press) (Hold)',
            data: {
              actionmapName: 'stopwatch',
              name: 'Reset (Long Press)',
              category: 'Stopwatch',
              inputType: 'Hold'
            }
          },
          {
            key: 'player',
            label: 'Start / Pause (Short Press) (Hold)',
            data: {
              actionmapName: 'stopwatch',
              name: 'Start / Pause (Short Press)',
              category: 'Stopwatch',
              inputType: 'Hold'
            }
          }
        ]
      },
      // player / On Foot - All

      // {
      //   key: 'player',
      //   label: 'On Foot / All',
      //   data: { category: 'On Foot / All' },
      //   children: [
      //     {
      //       key: 'ammoRepool',
      //       label: 'Repool Ammo (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Repool Ammo',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'attack1',
      //       label: 'Firearm - Attack (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Firearm - Attack',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'consume',
      //       label: '????? (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: '?????',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'customize',
      //       label: 'Customize Weapon (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Customize Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'drop',
      //       label: 'Drop Item (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Drop Item',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'fixed_speed_decrement',
      //       label: 'Default Movement Speed Decrease (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Default Movement Speed Decrease',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'fixed_speed_increment',
      //       label: 'Default Movement Speed Increase (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Default Movement Speed Increase',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'force_respawn',
      //       label: 'Force Respawn (EVA / On Foot) (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Force Respawn (EVA / On Foot)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'gp_crouch',
      //       label: 'Crouch (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Crouch',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'jump',
      //       label: 'Jump (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Jump',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'gp_movex',
      //       label: 'Move Forward (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Forward',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'gp_movey',
      //       label: 'Move Left / Right (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Left / Right',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'gp_rotatepitch',
      //       label: 'Look - Pitch (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Look - Pitch',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'gp_rotateyaw',
      //       label: 'Look - Yaw (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Look - Yaw',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'holster',
      //       label: 'Holster Weapon (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Holster Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'inspect',
      //       label: 'Inspect Item (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Inspect Item',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'leanright',
      //       label: 'Lean Left (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Lean Left',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'leanleft',
      //       label: 'Lean Right (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Lean Right',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'ledgegrab',
      //       label: 'Grab Ledge (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Grab Ledge',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_AttackSyringeStab',
      //       label: 'Medical Pen - Inject Other (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Medical Pen - Inject Other',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_AttackHeavyLeft',
      //       label: 'Melee - Attack Heavy Left (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Attack Heavy Left',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_AttackLightLeft',
      //       label: 'Melee - Attack Left (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Attack Light Left',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_AttackHeavyRight',
      //       label: 'Melee - Attack Heavy Right (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Attack Heavy Right',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_AttackLightRight',
      //       label: 'Melee - Attack Right (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Attack Light Right',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'melee_block',
      //       label: 'Melee - Block (Hold)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Block',
      //         category: 'On Foot / All',
      //         inputType: 'Hold'
      //       }
      //     },
      //     {
      //       key: 'moveback',
      //       label: 'Move Backwards (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Backwards',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'moveforward',
      //       label: 'Move Forwards (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Forwards',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'moveleft',
      //       label: 'Move Left (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Left',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'moveright',
      //       label: 'Move Right (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Move Right',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'nextweapon',
      //       label: 'Next Weapon (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Next Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'prevweapon',
      //       label: 'Previous Weapon (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Previous Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'sprint',
      //       label: 'Sprint (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Sprint',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'prone',
      //       label: 'Prone (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Prone',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'reload',
      //       label: 'Reload (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Reload',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'reloadSecondary',
      //       label: 'Reload Secondary (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Reload Secondary',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'selectMeleeWeapon',
      //       label: 'Select Melee (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Melee',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'weapon_melee',
      //       label: 'Melee - Attack (Ranged Weapon & Takedowns) (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Melee - Attack (Ranged Weapon & Takedowns)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'selectUnarmedCombat',
      //       label: 'Select Unarmed Combat (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Unarmed Combat',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'selectgadget',
      //       label: 'Select Gadget (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Gadget',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       key: 'selectpistol',
      //       label: 'Select Skeyearm (Press)',
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Skeyearm',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       }
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Primary Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'selectprimary',
      //       label: 'Select Primary Weapon'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Select Secondary Weapon',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'selectsecondary',
      //       label: 'Select Secondary Weapon'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Ship Recall',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'ship_recall',
      //       label: 'Ship Recall'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Hold Breath (ADS)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'stabilize',
      //       label: 'Hold Breath (ADS)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Hold Breath (ADS)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'stabilize',
      //       label: 'Hold Breath (ADS)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Free View Camera (Hold)',
      //         category: 'On Foot / All',
      //         inputType: 'Hold'
      //       },
      //       key: 'free_thirdperson_camera',
      //       label: 'Free View Camera (Hold)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Third Person View (Toggle)',
      //         category: 'On Foot / All',
      //         inputType: 'Toggle'
      //       },
      //       key: 'thirdperson',
      //       label: 'Third Person View (Toggle)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Throw - Overhand & Two-Handed',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'throw_overhand',
      //       label: 'Throw - Overhand & Two-Handed'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Throw - Underarm',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'throw_underhand',
      //       label: 'Throw - Underarm'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Helmet',
      //         category: 'On Foot / All',
      //         inputType: 'Toggle'
      //       },
      //       key: 'toggleAttachHelmet',
      //       label: 'Helmet'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: '?toggleHelmetState',
      //         category: 'On Foot / All',
      //         inputType: 'Toggle'
      //       },
      //       key: 'toggleHelmetState',
      //       label: '?toggleHelmetState'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Flashlight (Toggle)',
      //         category: 'On Foot / All',
      //         inputType: 'Toggle'
      //       },
      //       key: 'toggle_flashlight',
      //       label: 'Flashlight (Toggle)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Map / Starmap',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'v_starmap',
      //       label: 'Map / Starmap'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Wipe Helmet Visor',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'visor_wipe',
      //       label: 'Wipe Helmet Visor'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Walk',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'walk',
      //       label: 'Walk'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'FPS Underbarrel Attachment Action',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'weapon_auxiliary_action',
      //       label: 'FPS Underbarrel Attachment Action'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Change Fire Mode',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'weapon_change_firemode',
      //       label: 'Change Fire Mode'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Weapon Zeroing Decrease',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'weapon_zeroing_decrease',
      //       label: 'Weapon Zeroing Decrease'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Weapon Zeroing Increase / Auto',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'weapon_zeroing_increase',
      //       label: 'Weapon Zeroing Increase / Auto'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Aim Down Sight',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'zoom',
      //       label: 'Aim Down Sight'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Zoom In (ADS)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'zoom_in',
      //       label: 'Zoom In (ADS)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Zoom Out (ADS)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'zoom_out',
      //       label: 'Zoom Out (ADS)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'player',
      //         name: 'Zoom In / Out (ADS)',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'zoom_in_out',
      //       label: 'Zoom In / Out (ADS)'
      //     }
      //   ]
      // },
      // SUBCHILD: prone
      // {
      //   key: 'playerProne',
      //   label: 'On Foot / All / Prone',
      //   data: { category: 'On Foot / All / Prone' },
      //   children: [
      //     {
      //       data: {
      //         actionmapName: 'prone',
      //         name: 'Roll Left (While Prone)',
      //         category: 'On Foot / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'prone_rollleft',
      //       label: 'Roll Left (While Prone)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'prone',
      //         name: 'Roll Right (While Prone)',
      //         category: 'On Foot / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'prone_rollright',
      //       label: 'Roll Right (While Prone)'
      //     }
      //   ]
      // },
      // SUBCHILD: tractor_beam
      // {
      //   key: 'playerTractorBeam',
      //   label: 'On Foot / All / Tractor Beam',
      //   data: { category: 'On Foot / All / Tractor Beam' },
      //   children: [
      //     {
      //       data: {
      //         actionmapName: 'tractor_beam',
      //         name: 'Tractor Beam - Decrease Distance',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'tractor_beam_decrease_distance',
      //       label: 'Tractor Beam - Decrease Distance'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'tractor_beam',
      //         name: 'Tractor Beam - Increase Distance',
      //         category: 'On Foot / All',
      //         inputType: 'Press'
      //       },
      //       key: 'tractor_beam_increase_distance',
      //       label: 'Tractor Beam - Increase Distance'
      //     }
      //   ]
      // },
      // zero_gravity_eva / EVA - ALL
      // {
      //   key: 'zero_gravity_eva',
      //   data: { category: 'EVA / All' },
      //   label: 'EVA / All',

      //   children: [
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Boost',
      //         category: 'EVA / All',
      //         inputType: 'Hold'
      //       },
      //       key: 'eva_boost',
      //       label: 'EVA Boost'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Brake',
      //         category: 'EVA / All',
      //         inputType: 'Hold'
      //       },
      //       key: 'eva_brake',
      //       label: 'EVA Brake'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Roll Left / Right',
      //         category: 'EVA / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'eva_roll',
      //       label: 'EVA Roll Left / Right'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Roll Left',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_roll_left',
      //       label: 'EVA Roll Left'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Roll Right',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_roll_right',
      //       label: 'EVA Roll Right'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Back',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_back',
      //       label: 'EVA Strafe Back'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Up / Down',
      //         category: 'EVA / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'eva_strafe_vertical',
      //       label: 'EVA Strafe Up / Down'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Up',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_up',
      //       label: 'EVA Strafe Up'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Down',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_down',
      //       label: 'EVA Strafe Down'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Forward',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_forward',
      //       label: 'EVA Strafe Forward'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Left / Right',
      //         category: 'EVA / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'eva_strafe_lateral',
      //       label: 'EVA Strafe Left / Right'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Left',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_left',
      //       label: 'EVA Strafe Left'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA Strafe Right',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_strafe_right',
      //       label: 'EVA Strafe Right'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'Freelook (Hold)',
      //         category: 'EVA / All',
      //         inputType: 'Hold'
      //       },
      //       key: 'eva_toggle_headlook_mode',
      //       label: 'Freelook (Hold)'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Up / Down',
      //         category: 'EVA / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'eva_view_pitch',
      //       label: 'EVA View Up / Down'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Down',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_view_pitch_down',
      //       label: 'EVA View Down'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Up',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_view_pitch_up',
      //       label: 'EVA View Up'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Left / Right',
      //         category: 'EVA / All',
      //         inputType: 'Axis'
      //       },
      //       key: 'eva_view_yaw',
      //       label: 'EVA View Left / Right'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Left',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_view_yaw_left',
      //       label: 'EVA View Left'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_eva',
      //         name: 'EVA View Right',
      //         category: 'EVA / All',
      //         inputType: 'Press'
      //       },
      //       key: 'eva_view_yaw_right',
      //       label: 'EVA View Right'
      //     }
      //   ]
      // },
      // zero_gravity_traversal / Zero G Traversal
      // {
      //   key: 'zero_gravity_traversal',
      //   label: 'Zero G Traversal',
      //   data: { category: 'Zero G Traversal' },
      //   children: [
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_traversal',
      //         name: 'EVA Detach',
      //         category: 'Zero G Traversal',
      //         inputType: 'Press'
      //       },
      //       key: 'zgt_detach',
      //       label: 'EVA Detach'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_traversal',
      //         name: 'EVA Launch',
      //         category: 'Zero G Traversal',
      //         inputType: 'Press'
      //       },
      //       key: 'zgt_launch',
      //       label: 'EVA Launch'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_traversal',
      //         name: 'EVA Roll Left',
      //         category: 'Zero G Traversal',
      //         inputType: 'Press'
      //       },
      //       key: 'zgt_roll_left',
      //       label: 'EVA Roll Left'
      //     },
      //     {
      //       data: {
      //         actionmapName: 'zero_gravity_traversal',
      //         name: 'EVA Roll Right',
      //         category: 'Zero G Traversal',
      //         inputType: 'Press'
      //       },
      //       key: 'zgt_roll_right',
      //       label: 'EVA Roll Right'
      //     }
      //   ]
      // },
      // vehicle_general / Ground Vehicle - General
      {
        key: 'vehicle_general',
        label: 'Ground Vehicle / General',
        data: { category: 'Ground Vehicle / General' },
        children: [
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Horn',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_horn',
            label: 'Horn'
          }
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Fire Weapon All',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_attack_all',
          //   label: 'Fire Weapon All'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Fire Weapon Group 1',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_attack_group1',
          //   label: 'Fire Weapon Group 1'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Fire Weapon Group 2',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_attack_group2',
          //   label: 'Fire Weapon Group 2'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Flight / Systems Ready',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_flightready',
          //   label: 'Flight / Systems Ready'
          // },

          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Lock All Doors',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_lock_all_doors-vehicles',
          //   label: 'Lock All Doors'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Lock All Ports',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_lock_all_ports',
          //   label: 'Lock All Ports'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Close All Doors',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_close_all_doors',
          //   label: 'Close All Doors'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Open All Doors',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_open_all_doors',
          //   label: 'Open All Doors'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Open Map / Starmap',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_starmap',
          //   label: 'Open Map / Starmap'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Lock / Unlock Doors (Toggle)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Toggle'
          //   },
          //   key: 'v_toggle_all_doorlocks',
          //   label: 'Lock / Unlock Doors (Toggle)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Open / Close Doors (Toggle)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Toggle'
          //   },
          //   key: 'v_toggle_all_doors',
          //   label: 'Open / Close Doors (Toggle)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Lock / Unlock Ports (Toggle)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Toggle'
          //   },
          //   key: 'v_toggle_all_portlocks',
          //   label: 'Lock / Unlock Ports (Toggle)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Unlock All Doors',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_unlock_all_doors',
          //   label: 'Unlock All Doors'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Unlock All Ports',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_unlock_all_ports',
          //   label: 'Unlock All Ports'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Cycle Camera View',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_view_cycle_fwd',
          //   label: 'Cycle Camera View'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Freelock (Hold)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Hold'
          //   },
          //   key: 'v_view_freelook_mode',
          //   label: 'Freelock (Hold)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Look Up / Down',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Axis'
          //   },
          //   key: 'v_view_pitch',
          //   label: 'Look Up / Down'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Look Left / Right',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Axis'
          //   },
          //   key: 'v_view_yaw',
          //   label: 'Look Left / Right'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Zoom In (Third Person View)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_view_zoom_in',
          //   label: 'Zoom In (Third Person View)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Zoom Out (Third Person View)',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'v_view_zoom_out',
          //   label: 'Zoom Out (Third Person View)'
          // },
          // {
          //   data: {
          //     actionmapName: 'vehicle_general',
          //     name: 'Wipe Helmet Visor',
          //     category: 'Ground Vehicle / General',
          //     inputType: 'Press'
          //   },
          //   key: 'visor_wipe',
          //   label: 'Wipe Helmet Visor'
          // }
        ]
      },

      // vehicle_driver / Ground Vehicle - Movement
      {
        key: 'vehicle_driver',
        label: 'Ground Vehicle / Movement',
        data: { category: 'Ground Vehicle / Movement' },
        children: [
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Boost',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_boost',
            label: 'Boost'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Brake',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_brake',
            label: 'Brake'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock Pitch / Yaw Movement (Toggle / Hold)',
              category: 'Ground Vehicle / Movement',
              inputType: 'PressHold'
            },
            key: 'v_lock_rotation',
            label: 'Lock Pitch / Yaw Movement (Toggle / Hold)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: '?v_mgv_switch_brake_on_keyle',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_mgv_switch_brake_on_keyle',
            label: '?v_mgv_switch_brake_on_keyle'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Forward / Backward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_move',
            label: 'Drive Forward / Backward'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Backward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_move_back',
            label: 'Drive Backward'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Forward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_move_forward',
            label: 'Drive Forward'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Left / Right (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_yaw',
            label: 'Yaw Left / Right (AXIS / HOTAS)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Left (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_yaw_left',
            label: 'Yaw Left (AXIS / HOTAS)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Right (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_yaw_right',
            label: 'Yaw Right (AXIS / HOTAS)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Up / Down (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_pitch',
            label: 'Pitch Up / Down (AXIS / HOTAS)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Down',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_pitch_down',
            label: 'Pitch Down'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Up',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_pitch_up',
            label: 'Pitch Up'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In & Out (Absolute)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_view_dynamic_zoom_abs',
            label: 'Dynamic Zoom In & Out (Absolute)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom Toggle (Absolute)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Toggle'
            },
            key: 'v_view_dynamic_zoom_abs_toggle',
            label: 'Dynamic Zoom Toggle (Absolute)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In & Out (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_view_dynamic_zoom_rel',
            label: 'Dynamic Zoom In & Out (Relative)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_view_dynamic_zoom_rel_in',
            label: 'Dynamic Zoom In (Relative)'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom Out (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_view_dynamic_zoom_rel_out',
            label: 'Dynamic Zoom Out (Relative)'
          }
        ]
      },
      // spectator / Electronic Access - Spectator
      {
        key: 'spectator',
        label: 'Electronic Access / Spectator',
        data: { category: 'Electronic Access / Spectator' },
        children: [
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Mode (Next)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_gen_nextmode',
            label: 'Spectator Camera Mode (Next)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Mode (Previous)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_gen_prevmode',
            label: 'Spectator Camera Mode (Previous)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Target (Next)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_next_target',
            label: 'Spectator Camera Target (Next)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Target (Previous)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_prev_target',
            label: 'Spectator Camera Target (Previous)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Pitch',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotatepitch',
            label: 'Spectator Camera Rotate Pitch'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Pitch (Mouse)',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotatepitch_mouse',
            label: 'Spectator Camera Rotate Pitch (Mouse)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Yaw',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotateyaw',
            label: 'Spectator Camera Rotate Yaw'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Yaw (Mouse)',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotateyaw_mouse',
            label: 'Spectator Camera Rotate Yaw (Mouse)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator HUD (Toggle)',
              category: 'Electronic Access / Spectator',
              inputType: 'Toggle'
            },
            key: 'spectate_toggle_hud',
            label: 'Spectator HUD (Toggle)'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Lock Target',
              category: 'Electronic Access / Spectator',
              inputType: 'Toggle'
            },
            key: 'spectate_toggle_lock_target',
            label: 'Spectator Camera Lock Target'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom In / Out',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom',
            label: 'Spectator Zoom In / Out'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom In',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom_in',
            label: 'Spectator Zoom In'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom Out',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom_out',
            label: 'Spectator Zoom Out'
          }
        ]
      },
      //default / Social - General
      {
        key: 'default',
        label: 'Social / General',
        data: { category: 'Social / General' },
        children: [
          {
            data: {
              actionmapName: 'default',
              name: 'CommLink App (Toggle)',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'toggle_contact',
            label: 'CommLink App (Toggle)'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Chat Window (Toggle)',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'toggle_chat',
            label: 'Chat Window (Toggle)'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Chat Window Focus',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'focus_on_chat_textinput',
            label: 'Chat Window Focus'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Exit Seat',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'pl_exit',
            label: 'Exit Seat'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Respawn',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'respawn',
            label: 'Respawn'
          }
        ]
      },
      //player_emotes / Social - Emotes
      // {
      //   key: 'player_emotes',
      //   label: 'Social / Emotes',
      //   data: { category: 'Social / Emotes' },
      //   children: [
      //     {
      //       key: 'emote_agree',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Agree',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Agree'
      //     },
      //     {
      //       key: 'emote_angry',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Angry',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Angry'
      //     },
      //     {
      //       key: 'emote_atease',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote At Ease',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote At Ease'
      //     },
      //     {
      //       key: 'emote_attention',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Attention',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Attention'
      //     },
      //     {
      //       key: 'emote_blah',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Blah',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Blah'
      //     },
      //     {
      //       key: 'emote_bored',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Bored',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Bored'
      //     },
      //     {
      //       key: 'emote_bow',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Bow',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Bow'
      //     },
      //     {
      //       key: 'emote_burp',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Burp',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Burp'
      //     },
      //     {
      //       key: 'emote_cheer',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Cheer',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Cheer'
      //     },
      //     {
      //       key: 'emote_chicken',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Chicken',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Chicken'
      //     },
      //     {
      //       key: 'emote_clap',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Clap',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Clap'
      //     },
      //     {
      //       key: 'emote_come',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Come',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Come'
      //     },
      //     {
      //       key: 'emote_cry',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Cry',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Cry'
      //     },
      //     {
      //       key: 'emote_cs_forward',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Forward',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Forward'
      //     },
      //     {
      //       key: 'emote_cs_left',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Left',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Left'
      //     },
      //     {
      //       key: 'emote_cs_yes',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Yes',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Yes'
      //     },
      //     {
      //       key: 'emote_cs_no',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote No',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote No'
      //     },
      //     {
      //       key: 'emote_cs_right',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Right',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Right'
      //     },
      //     {
      //       key: 'emote_cs_stop',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Stop',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Stop'
      //     },
      //     {
      //       key: 'emote_dance',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Dance',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Dance'
      //     },
      //     {
      //       key: 'emote_disagree',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Disagree',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Disagree'
      //     },
      //     {
      //       key: 'emote_flex',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Failure',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Failure'
      //     },
      //     {
      //       key: 'emote_failure',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Flex',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Flex'
      //     },
      //     {
      //       key: 'emote_flirt',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Flirt',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Flirt'
      //     },
      //     {
      //       key: 'emote_gasp',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Gasp',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Gasp'
      //     },
      //     {
      //       key: 'emote_gloat',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Gloat',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Gloat'
      //     },
      //     {
      //       key: 'emote_greet',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Greet',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Greet'
      //     },
      //     {
      //       key: 'emote_laugh',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Laugh',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Laugh'
      //     },
      //     {
      //       key: 'emote_launch',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Launch',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Launch'
      //     },
      //     {
      //       key: 'emote_point',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Point',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Point'
      //     },
      //     {
      //       key: 'emote_rude',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Rude',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Rude'
      //     },
      //     {
      //       key: 'emote_salute',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Salute',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Salute'
      //     },
      //     {
      //       key: 'emote_sit',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Sit',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Sit'
      //     },
      //     {
      //       key: 'emote_sleep',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Sleep',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Sleep'
      //     },
      //     {
      //       key: 'emote_smell',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Smell',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Smell'
      //     },
      //     {
      //       key: 'emote_taunt',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Taunt',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Taunt'
      //     },
      //     {
      //       key: 'emote_threaten',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Threaten',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Threaten'
      //     },
      //     {
      //       key: 'emote_wait',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Wait',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Wait'
      //     },
      //     {
      //       key: 'emote_wave',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Wave',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Wave'
      //     },
      //     {
      //       key: 'emote_whistle',
      //       data: {
      //         actionmapName: 'player_emotes',
      //         name: 'Emote Whistle',
      //         category: 'Social / Emotes',
      //         inputType: 'Press'
      //       },
      //       label: 'Emote Whistle'
      //     }
      //   ]
      // },
      // player_input_optical_tracking / VOIP, FOIP, and Headtracking
      {
        key: 'player_input_optical_tracking',
        label: 'VOIP, FOIP, and Headtracking',
        data: { category: 'VOIP, FOIP, and Headtracking' },
        children: [
          {
            key: 'foip_cyclechannel',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Cycle Through Audio Channels',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'Cycle Through Audio Channels'
          },
          {
            key: 'foip_pushtotalk',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'VOIP Push To Talk',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'VOIP Push To Talk'
          },
          {
            key: 'foip_pushtotalk_proximity',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'VOIP Push To Talk (Proximity Only)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'VOIP Push To Talk (Proximity Only)'
          },
          {
            key: 'foip_recalibrate',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'FOIP Recalibrate',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'FOIP Recalibrate'
          },
          {
            key: 'foip_viewownplayer',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'FOIP Selfie Camera',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'FOIP Selfie Camera'
          },

          {
            key: 'headtrack_enabled',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Enable / Disable Head Tracking for Third Person Camera (Toggle)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Toggle'
            },
            label:
              'Enable / Disable Head Tracking for Third Person Camera (Toggle)'
          },
          {
            key: 'headtrack_camera_enabled',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Enable Head Tracking',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Toggle'
            },
            label: 'Enable Head Tracking'
          },
          {
            key: 'headtrack_hold',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Head Tracking (Hold)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Hold'
            },
            label: 'Head Tracking (Hold)'
          },
          {
            key: 'headtrack_recenter_device',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Recenter Head Tracking Device (Except TrackIR)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            },
            label: 'Recenter Head Tracking Device (Except TrackIR)'
          }
        ]
      },
      // player_choice / Quick Keys, Intraction, & Inner Thought
      {
        key: 'player_choice',
        label: 'Quick Keys, Interaction, & Inner Thought',
        data: { category: 'Quick Keys, Interaction, & Inner Thought' },
        children: [
          {
            key: 'pc_camera_orbit',
            data: {
              actionmapName: 'player_choice',
              name: '?pc_camera_orbit',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: '?pc_camera_orbit'
          },
          {
            key: 'pc_focus',
            data: {
              actionmapName: 'player_choice',
              name: 'Focus',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Focus'
          },
          {
            key: 'pc_interaction_mode',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Interaction Mode'
          },
          {
            key: 'pc_interaction_select',
            data: {
              actionmapName: 'player_choice',
              name: 'Activate Inner Thought',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Activate Inner Thought'
          },
          {
            key: 'pc_personal_back',
            data: {
              actionmapName: 'player_choice',
              name: 'Exit',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Exit'
          },
          {
            key: 'pc_personal_thought',
            data: {
              actionmapName: 'player_choice',
              name: 'Personal Inner Thought (PIT)',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Personal Inner Thought (PIT)'
          },
          {
            key: 'pc_pit_emotes',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Emotes',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Emotes'
          },
          {
            key: 'pc_pit_flight_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Flight Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Flight Systems'
          },
          {
            key: 'pc_pit_inventory',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Inventory',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Inventory'
          },
          // {
          //   key: 'pc_pit_item_actions',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Pit Category - Item Actions',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Pit Category - Item Actions'
          // },
          // {
          //   key: 'pc_pit_item_drop',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Drop Item',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Drop Item'
          // },
          {
            key: 'pc_pit_miningmode_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Mining Mode Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Mining Mode Actions'
          },
          {
            key: 'pc_pit_mobiglas_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Mobiglass Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Mobiglass Actions'
          },
          // {
          //   key: 'pc_pit_player_actions',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Pit Category - Player Actions',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Pit Category - Player Actions'
          // },
          {
            key: 'pc_pit_remote_turrets',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Remote Turret',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Remote Turret'
          },
          {
            key: 'pc_pit_ship_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Ship Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Ship Systems'
          },
          {
            key: 'pc_pit_vehicle_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Vehicle Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Vehicle Actions'
          },
          {
            key: 'pc_pit_weapon_selection',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Weapon Selection',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Weapon Selection'
          },
          {
            key: 'pc_pit_weapons_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Weapon Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Pit Category - Weapon Systems'
          },
          {
            key: 'pc_qs_consumables',
            data: {
              actionmapName: 'player_choice',
              name: 'Consumable Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Consumable Select Radial Menu'
          },
          {
            key: 'pc_qs_flight_mode',
            data: {
              actionmapName: 'player_choice',
              name: 'Flight Mode Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Flight Mode Select Radial Menu'
          },
          // {
          //   key: 'pc_qs_grenades',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Throwables Select Radial Menu',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Throwables Select Radial Menu'
          // },
          // {
          //   key: 'pc_qs_weapons_pistol',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Skeyearm Weapons Select Radial Menu',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Skeyearm Weapons Select Radial Menu'
          // },
          // {
          //   key: 'pc_qs_weapons_secondary',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Secondary Weapons Select Radial Menu',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Secondary Weapons Select Radial Menu'
          // },
          // {
          //   key: 'pc_qs_weapons_primary',
          //   data: {
          //     actionmapName: 'player_choice',
          //     name: 'Primary Weapons Select Radial Menu',
          //     category: 'Quick Keys, Interaction, & Inner Thought',
          //     inputType: 'Press'
          //   },
          //   label: 'Primary Weapons Select Radial Menu'
          // },
          {
            key: 'pc_screen_focus_down',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Down',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'MFD Down'
          },
          {
            key: 'pc_screen_focus_up',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Up',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'MFD Up'
          },
          {
            key: 'pc_screen_focus_left',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Left',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'MFD Left'
          },
          {
            key: 'pc_screen_focus_right',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Right',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'MFD Right'
          },
          {
            key: 'pc_select',
            data: {
              actionmapName: 'player_choice',
              name: 'Activate Inner Thought (pc_select)',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Activate Inner Thought (pc_select)'
          },
          {
            key: 'pc_zoom_in',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode Zoom In',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Interaction Mode Zoom In'
          },
          {
            key: 'pc_zoom_out',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode Zoom Out',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            },
            label: 'Interaction Mode Zoom Out'
          }
        ]
      },
      // view_director_mode / Camera - Advanced Camera Controls
      {
        key: 'view_director_mode',
        label: 'Camera / Advanced Camera Controls',
        data: {
          category: 'Camera / Advanced Camera Controls'
        },
        children: [
          {
            key: 'view_fov_in',
            label: 'Increase FoV',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Increase FoV',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fov_out',
            label: 'Decrease FoV',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Decrease FoV',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fstop_in',
            label: 'Increase DoF / fstop',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Increase DoF / fstop',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fstop_out',
            label: 'Decrease DoF / fstop',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Decrease DoF / fstop',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_restore_defaults',
            label: 'Reset Current View',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Reset Current View',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          }
        ]
      }
    ]
  },

  getCustomersSmall () {
    return Promise.resolve(this.getData().slice(0, 10))
  },

  getCustomersMedium () {
    return Promise.resolve(this.getData().slice(0, 50))
  },

  getCustomersLarge () {
    return Promise.resolve(this.getData().slice(0, 200))
  },

  getCustomersXLarge () {
    return Promise.resolve(this.getData())
  },
  getTreeTableNodes () {
    return Promise.resolve(this.getTreeTableNodesData())
  },
  getCustomers (params) {
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
