import React, {Fragment, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory,} from 'react-router-dom'

import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  SparklesIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  BookOpenIcon,
  CheckCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const userNavigation = [
  { name: 'Your Profile', href: '/editprofile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: false },
  { name: 'Expenses', href: '/expenses', icon: UsersIcon, current: true },
  { name: 'Accounts', href: '/accounts', icon: FolderIcon, current: false },
  { name: 'Goals', href: '/goals', icon: SparklesIcon, current: false },
  { name: 'Learn', href: '/learn', icon: BookOpenIcon, current: false },
]

const thisMonth = [
    { name: 'Groceries', total: '-₹16700.85', percentage: '41.5%' },
    { name: 'Online shopping', total: '-₹10254.25', percentage: '32.5%' },
    { name: 'Restaurants', total: '-₹5500.95', percentage: '15%' },
    { name: 'Transport', total: '-₹3800.19', percentage: '12%' },
    { name: 'Subscription', total: '-₹720.85', percentage: '3%' },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Expenses(props) {
    const [error, setError] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [open, setOpen] = useState(false)
    const [showNotif, setShowNotif] = useState(false)
    const [sliderVal, setSliderVal] = useState(0)

    const {currentUser, logout} = useAuth()
    
    
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

    const handleAlert = (e) => {
      setOpen(true)
    }

    const handleChange = (e) =>{
      setSliderVal(e.currentTarget.value)
    }
  
    return (
      <div className="h-screen bg-gray-100 overflow-hidden flex">

        {/* Notification */}
         <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showNotif}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                    <p className="mt-1 text-sm text-gray-500">We will send you notifcation if you exceed the limit</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      onClick={() => {
                        setShowNotif(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>


        {/* Modal window */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" auto-reopen="true" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
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
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="mt-2 text-lg leading-6 font-medium text-gray-900">
                        Set spending limit
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-4xl text-gray-700">
                          {sliderVal}%
                        </p>
                        <p className="text-gray-500 mb-4">of the total spending</p>
                        <input type="range" min="1" max="100" class="slider focus:outline-none" value={sliderVal} onInput={handleChange} id="myRange" />
                        <div className="text-left pt-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Enter phone number
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone number"
                              className="shadow-sm  block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder=""
                            />
                          </div>
                          <p className="text-sm text-gray-500">
                            We’ll send you alerts when your spending crosses the set limit. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 sm:text-sm"
                      onClick={() =>  {
                        setOpen(false)
                        setShowNotif(true)
                      }}
                    >
                      Set Alert
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>


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
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full"
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
          <div className="relative flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
            <button
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none md:hidden"
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
                  <div className="relative w-full text-gray-400 ">
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
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
  
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-30">
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
              <div className="px-4 sm:px-6 md:px-0 md:flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Expenses</h1>
                <div className="flex">
                      <div className="mx-4">
                          <p className="text-xs text-gray-500">Time period</p>
                          <select
                              className="text-xs border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-xs rounded-md"
                              defaultValue="This month"
                          >
                              <option>This month</option>
                              <option>Last Month</option>
                              <option>Last 3 months</option>
                          </select>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">View by</p>
                        <select
                            className="block text-xs border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 rounded-md"
                            defaultValue="Category"
                        >
                            <option>Category</option>
                            <option>All transactions</option>
                        </select>
                      </div>
                  </div>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div>
                    {/* table */}
                    <div>
                        <div className="flex flex-col mt-4">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Expense categories
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        % of total
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Total spent
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {thisMonth.map((item, itemIdx) => (
                                    <tr key={item.percentage} className={itemIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.percentage}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.total}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a onClick={handleAlert} className="text-pink-600 hover:text-pink-900">
                                            Set Alert
                                        </a>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* table end*/}
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }