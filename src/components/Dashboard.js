import React, {Fragment, useState, } from 'react';
import { Link} from 'react-router-dom'
import DashContent from './Dashboard/DashContent';
import Searchbar from './elements/Searchbar';

import { Dialog, Transition } from '@headlessui/react'
import {
  SparklesIcon,
  FolderIcon,
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'


const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Expenses', href: '/expenses', icon: UsersIcon, current: false },
  { name: 'Accounts', href: '/accounts', icon: FolderIcon, current: false },
  { name: 'Goals', href: '/goals', icon: SparklesIcon, current: false },
  { name: 'Learn', href: '/learn', icon: BookOpenIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Dashboard(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const sideBarChildToParent = (childdata) => {
      setSidebarOpen(childdata)
    }

  
    return (
      <div className="h-screen bg-gray-100 overflow-hidden flex">
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
                            'mr-4 flex-shrink-0 h-6 w-6 '
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
                        'group rounded-md py-2 px-2 flex items-center text-sm font-medium '
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
          <Searchbar sideBarChildToParent={sideBarChildToParent} />
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                {/* Replace with your content */}
                <div className="py-4">
                  <DashContent />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }