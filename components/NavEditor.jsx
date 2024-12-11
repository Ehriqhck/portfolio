"use client";
import { useContext } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Context, SelectedDeviceContext, SelectedEditorDeviceContext } from '@components/Provider.jsx'
import { Button } from 'primereact/button';
import { usePathname } from 'next/navigation'
import { Utils } from '@app/editor/utils.js'

const NavEditor = () => {
  const { selectedDevice, setSelectedDevice } = useContext(SelectedDeviceContext);
  const { selectedEditorDevice, setSelectedEditorDevice } = useContext(SelectedEditorDeviceContext);
  const [isLoading, setIsLoading] = useState(false);
  const [pathname, setPathname] = useState()
  const [devices, setDevices] = useState([
    {
      name: 'VKB GLADIATOR NXT EVO SCG (RIGHT)',
      image: 'amyelsner.png',
      template: (item) => itemRenderer(item, 0)
    },
    {
      name: 'VKB GLADIATOR NXT EVO SCG (LEFT)',
      image: 'annafali.png',
      template: (item) => itemRenderer(item, 1)
    },
    {
      name: 'VKB T-RUDDER',
      image: 'asiyajavayant.png',
      template: (item) => itemRenderer(item, 2)
    }
  ]);

  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [profileName, setProfileName] = useState("no profile loaded")
  const [activeIndex, setActiveIndex] = useState(0);
  const parseDeviceString = (deviceString) => {

    return (deviceString.split('_').join(' '));
  }
  const deviceNameGetter = (device) => {
    if (device === 'VKB TRUDDER') {
      return ("VKB T-RUDDERS")
    } else {
      return device;
    }
  }
  const itemRenderer = (item, itemIndex) => (
    <Button
      type="device_switcher"
      className="navdMenu-item  "
      onClick={() => {
        setActiveIndex(itemIndex);
        setSelectedEditorDevice(item.name);
        sessionStorage.setItem('selectedEditorDevice', item.name);
      }
      }
    >

      <span className="navMenu-text small-text flex mr-[8px]">{deviceNameGetter(parseDeviceString(item.name))}</span>
      <div className='mr-[4px] py-[8px]'>
        {
          Utils.getSelectedDeviceIcon(item.name, "30px")

        }
      </div>
    </Button>
  );

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const getProfileName = () => {
    try {
      return (
        <p className='nowrap'>
          {JSON.parse(sessionStorage.getItem('loadedProfile'))?.profileName}
        </p>

      )
    } catch (error) {
      console.log("EERROROROROR");


      return ("error")

    }
  }


  useEffect(() => {
    // then set the selected device item in the tabmenu to be ACTIVE/FOCUS
    try {
      setIsLoading(true)
      sessionStorage.setItem('selectedDevice', JSON.stringify(selectedDevice))
      console.log("STORED PROFILE VVVV");
      console.log(sessionStorage.getItem('selectedProfile'));
      setDevices(
        Object.keys(JSON.parse(sessionStorage.getItem('selectedProfile'))?.deviceList).map(
          (key, index) => {
            return ({
              name: key,
              template: (item) => itemRenderer(item, index)
            })
          }
        )
      )
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedDevice, isLoading]);


  const urlPath = usePathname();
  console.log(urlPath);
  switch (urlPath) {

    case "/profile-select":
      return (
        <nav className=' w-full'>

          <div className='flex flex-col'>

            <div className='nav  w-full mb-[-1px] pt-3 flex flex-between flex-row'>
              <div className="flex flex-row gap-[28px] title-left">
                <div className="flex flex-col">
                  <p className="title-text">HOME</p>
                </div>
                <div className="spacer" />
                <div className="flex flex-col">
                  <p className="title-text">EDITOR</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-base">// CURRENT PROFILE</p>
                </div>
                <p className="text-profile-title slant">{profileName}</p>
              </div>
              {/* Desktop Navigation */}
              <div className='flex '>
                {session?.user ? (
                  <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-control-profile' className='black_btn hidden'>
                      Create Control Profile
                    </Link>

                    <button type='button' onClick={signOut} className='outline_btn'>
                      Sign Out
                    </button>

                    <Link href='/profile'>
                      <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <button
                          type='button'
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                          className='black_btn'
                        >
                          Sign in
                        </button>
                      ))}
                  </>
                )}
              </div>
            </div >

          </div>

        </nav>
      )
      break;

    case "/editor":

      return (

        <div className=' flex flex-col header-gradient  w-full mb-[16px]'>

          <div className=' flex flex-col  w-full'>

            <nav className='nav flex flex-col  w-full '>
              <div className='flex-between  mb-[5px] pt-3 pb-[8px] w-full'>

                <div className="flex flex-row gap-[30px] title-left ">
          
                <div className=' self-center flex'>
                    {session?.user ? (
                      <div className='flex gap-3 md:gap-5'>
                        {/* <Link href='/create-control-profile' className='black_btn hidden'>
                          Create Control Profile
                        </Link> */}

                        <Button unstyled type='default-white' onClick={signOut} className='h-[24px] flex default-white '>
                          <p className='self-center w-fit default-white-text'> Sign Out</p>
                          <Link href='/profile' className='self-center'>
                            <Image
                              src={session?.user.image}
                              width={26}
                              height={26}
                              className='rounded-[100px]'
                              alt='profile'
                            />
                          </Link>
                        </Button>


                      </div>
                    ) : (
                      <>
                        {providers &&
                          Object.values(providers).map((provider) => (
                            <Button
                              unstyled
                              type='default-white'
                              key={provider.name}
                              onClick={() => {
                                signIn(provider.id);
                              }} className='h-[24px] flex default-white '>
                              <p className='self-center w-full'>
                                Sign in
                              </p>

                            </Button>

                            // <button
                            //   type='button'
                            //   key={provider.name}
                            //   onClick={() => {
                            //     signIn(provider.id);
                            //   }}
                            //   className='black_btn'
                            // >
                            //   Sign in
                            // </button>
                          ))}
                      </>
                    )}
                  </div>
                  <div className="spacer" />

                  <div className="flex flex-col self-center">
                    <div className="flex flex-row">
                      <p className="text-base">// CURRENT PROFILE</p>
                      <div> </div>
                    </div>
                    <p className="text-profile-title slant">{getProfileName()}</p>
                  </div>
                

                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <TabMenu unstyled className="flex flex-row" type="device_switcher" model={devices} activeIndex={activeIndex} onTabChange={(e) => {
                        setActiveIndex(e.index);

                      }} />
                    </div>
                  </div>
                </div>
              </div>

            </nav>
          </div>
          <div className='navbarExtra '>

            <div className='flex gap-[8px] pb-[2px] '>
              <Button
                onClick={() => {
                  sessionStorage.clear()
                }}
                unstyled type="small" className=' self-center flex justify-center align-middle px-[5px] py-[5px] w-fit' >
                <span className='small-text px-[5px] '> ADD DEVICE +</span>
              </Button>

              <Button
                onClick={() => {
                  sessionStorage.clear()
                }}
                unstyled type="small" className=' self-center flex justify-center align-middle px-[5px] py-[5px] w-fit' >
                <span className='small-text px-[5px] '> IMPORT PROFILE</span>
              </Button>
              <Button
                onClick={() => {
                  sessionStorage.clear()
                }}
                unstyled type="small" className=' self-center flex justify-center align-middle px-[5px] py-[5px] w-fit' >
                <span className='small-text px-[5px] '> SHARE</span>
              </Button>
            </div>
          </div>


        </div>

      )
      break;
    default:
      return (
        <nav className=' w-full h-[64px] rounded-none stickyNav '>


            <div className='nav  w-full h-full mb-[-1px] pt-3 flex rounded-none flex-between flex-row'>
              <div className="flex flex-row gap-[28px] title-left rounded-none">
                <div className="flex flex-col">
                  <p className="title-text">HOME</p>
                </div>
                <div className="spacer" />
                <div className="flex flex-col">
                  <p className="title-text">EDITOR</p>
                </div>
              </div>
    
              {/* Desktop Navigation */}
              <div className=' self-center flex'>
                    {session?.user ? (
                      <div className='flex gap-3 md:gap-5'>
                        {/* <Link href='/create-control-profile' className='black_btn hidden'>
                          Create Control Profile
                        </Link> */}

                        <Button unstyled type='default-white' onClick={signOut} className='h-[24px] flex default-white '>
                          <p className='self-center w-fit default-white-text'> Sign Out</p>
                          <Link href='/profile' className='self-center'>
                            <Image
                              src={session?.user.image}
                              width={26}
                              height={26}
                              className='rounded-[100px]'
                              alt='profile'
                            />
                          </Link>
                        </Button>


                      </div>
                    ) : (
                      <>
                        {providers &&
                          Object.values(providers).map((provider) => (
                            <Button
                              unstyled
                              type='default-white'
                              key={provider.name}
                              onClick={() => {
                                signIn(provider.id);
                              }} className='h-[24px] flex default-white '>
                              <p className='self-center w-full'>
                                Sign in
                              </p>

                            </Button>

                            // <button
                            //   type='button'
                            //   key={provider.name}
                            //   onClick={() => {
                            //     signIn(provider.id);
                            //   }}
                            //   className='black_btn'
                            // >
                            //   Sign in
                            // </button>
                          ))}
                      </>
                    )}
                  </div>
            </div >


        </nav>
      )

  }

};

export default NavEditor;
