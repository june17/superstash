import React, {Fragment, useState, } from 'react';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory} from 'react-router-dom'

import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  BookOpenIcon,
  SparklesIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  DotsVerticalIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const userNavigation = [
  { name: 'Your Profile', href: '/editprofile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: false },
  { name: 'Expenses', href: '/expenses', icon: UsersIcon, current: false },
  { name: 'Accounts', href: '/accounts', icon: FolderIcon, current: true },
  { name: 'Goals', href: '/goals', icon: SparklesIcon, current: false },
  { name: 'Learn', href: '/learn', icon: BookOpenIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Goals(props) {
    const [error, setError] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const {currentUser, logout} = useAuth()
    const [openAccount, setOpenAccount] = useState(false)
    
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch{
            setError('Failed to logou')
        }
    }  

    const handleModal = (e) => (
      setOpenAccount(true)
    )

    console.log(props)
  
    return (
      <div className="h-screen bg-gray-100 overflow-hidden flex">

        {/* Modal start */}
        <Transition.Root show={openAccount} as={Fragment}>
          <Dialog as="div" auto-reopen="true" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpenAccount}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title as="h3" className="mt-2 text-lg text-center leading-6 font-medium text-gray-900">
                        Add new account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-4xl text-gray-700">
                          
                        </p>
                        <div className="text-left pt-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Account number
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone number"
                              className="shadow-sm  block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Enter"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Bank
                          </label>
                          <select
                            id="location"
                            name="location"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                          >
                            <option>AIB</option>
                            <option>Revolut</option>
                            <option>Permanent TSB</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 sm:text-sm"
                      onClick={() =>  {
                        setOpenAccount(false)
                      }}
                    >
                      Add Bank
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Modal end */}

        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 z-40 flex md:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/stash-dash-logo.svg?alt=media&token=d9823572-388c-486a-9059-cdfbae78a72e"
                    alt="Super Stash"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group rounded-md py-2 px-2 flex items-center text-base font-medium'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>
  
        {/* Static sidebar for desktop */}
        <div className="hidden bg-white md:flex md:flex-shrink-0">
          <div className="w-64 flex flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/stash-dash-logo.svg?alt=media&token=d9823572-388c-486a-9059-cdfbae78a72e"
                  alt="Super Stash"
                />
              </div>
              <div className="flex-grow mt-5 flex flex-col">
                <nav className="flex-1 bg-white px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
            <button
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 flex justify-between px-4 md:px-0  bg-white md:bg-gray-100">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search_field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-white md:bg-gray-100"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6 ">
                <button className=" p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
  
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/profile-photo.png?alt=media&token=e15c869b-b04b-40ee-87a5-00ba884c39b4"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                        >
                            <Menu.Item>
                                <Link to={'/editprofile'} className="block py-2 px-4 text-sm text-gray-700" >Edit Profile</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="w-full overflow-hidden focus:outline-none text-left py-2 px-4 text-sm text-gray-700" onClick={handleLogout}>Sign Out</button>
                            </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
  
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-0 flex w-full justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Accounts</h1>
                <button onClick={handleModal} className="text-base pl-4 text-pink-600">Add new</button>
              </div>
              
              <div className="px-4 sm:px-6 md:px-0">
                <div className="py-4">
                    <div className="bg-white overflow-hidden shadow rounded-lg h-96">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex w-full border p-3 rounded">
                                <div className="flex-grow">
                                    <div className="flex">
                                        <div className="px-3">
                                            <h3>Federal Bank **** 4361</h3>
                                            <p className="text-gray-500">₹430,000.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-sm text-green-500">Connected</p>
                                  <Menu as="div" className="mx-4 relative inline-block text-left">
                                      <div>
                                        <Menu.Button className="rounded-full flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
                                          <span className="sr-only">Open options</span>
                                          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                      </div>

                                      <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                      >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                          <div className="py-1">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                  )}
                                                >
                                                  Disconnect
                                                </a>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        </Menu.Items>
                                      </Transition>
                                    </Menu>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }