import React, {Fragment, useState, } from 'react';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory} from 'react-router-dom'

import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  SparklesIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  BookOpenIcon 
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
  { name: 'Accounts', href: '/accounts', icon: FolderIcon, current: false },
  { name: 'Goals', href: '/goals', icon: SparklesIcon, current: false },
  { name: 'Learn', href: '/learn', icon: BookOpenIcon, current: true },
]

const posts = [
    {
      title: 'My 5 steps for better financial planning for women.',
      href: '#',
      category: { name: 'Youtube', href: '#' },
      description: '',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/learn-thumb1.png?alt=media&token=edbc9ced-11be-4264-85ed-57220054eb33',
      readingTime: '6 min',
      author: {
        name: 'Ankita Chaturvedi',
        href: '#',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/ankita-thumb.png?alt=media&token=16339fbe-5f7c-42fa-a400-b271fc593b3c',
      },
    },
    {
      title: 'Financial planning course for beginners.',
      href: '#',
      category: { name: 'Youtube', href: '#' },
      description: '',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/learn-thumb2.png?alt=media&token=57a31394-48bb-43a6-85f6-a8c871a80a83',
      readingTime: '4 min',
      author: {
        name: 'Rachana Phadke Ranade',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: '3 Golden rules of saving your money in 2021',
      href: '#',
      category: { name: 'Youtube', href: '#' },
      description: '',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/learn-thumb3.png?alt=media&token=89aef19b-459e-4447-808c-1f62d82a45c4',
      readingTime: '11 min',
      author: {
        name: 'Rachana Phadke Ranade',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Learn(props) {
    const [error, setError] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)
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

    console.log(props)
  
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
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-semibold text-gray-900">Learn</h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                {/* Replace with your content */}
                <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                            <p className="text-sm font-medium text-indigo-600">
                                <a href={post.category.href} className="hover:underline">
                                {post.category.name}
                                </a>
                            </p>
                            <a href={post.href} className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                            </a>
                            </div>
                            <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <a href={post.author.href}>
                                <span className="sr-only">{post.author.name}</span>
                                <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                <a href={post.author.href} className="hover:underline">
                                    {post.author.name}
                                </a>
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={post.datetime}>{post.date}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readingTime} read</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }