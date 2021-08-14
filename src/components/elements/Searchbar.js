import React, {Fragment, useState } from 'react';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory} from 'react-router-dom'

import {
    PlusIcon,
    MenuAlt2Icon,
  } from '@heroicons/react/outline'

  import { SearchIcon } from '@heroicons/react/solid'

import { Menu, Transition } from '@headlessui/react'

const userNavigation = [
    { name: 'Your Profile', href: '/editprofile' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

function Searchbar({ sideBarChildToParent }) {
    const [error, setError] = useState('')
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

    return (
        <>
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
        <button
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 md:hidden"
          onClick={() => sideBarChildToParent(true)}
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
          <Menu as="div" className="ml-3 relative">
              {({ open }) => (
                <>
                  <div>
                  <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">  
                    <span className="sr-only">Add new</span>
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
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
                            <Link to={'/editprofile'} className="block py-2 px-4 text-sm text-gray-700" >Expense</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/editprofile'} className="block py-2 px-4 text-sm text-gray-700" >Income</Link>
                        </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

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
    </>
    );
}

export default Searchbar;