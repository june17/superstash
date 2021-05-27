/* This example requires Tailwind CSS v2.0+ */

import React, {Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom'

const posts = [
    {
      title: 'Sample blog 1',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Arun Raj',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '6 min',
    },
    {
      title: 'Sample blog 2',
      href: '#',
      category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Arun Raj',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '4 min',
    },
    {
      title: 'Sample blog 3',
      href: '#',
      category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Arun Raj',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
  ]

  const navigation = [
    { name: 'Features', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Login', url: '/signin' },
    { name: 'Signup', url: '/signup' }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="bg-white pb-20 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <Popover>
            {({ open }) => (
              <>
                <nav
                  className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link to="/">
                        <span className="sr-only">Log</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/stash-logo.svg?alt=media&token=432f68f1-f6a9-41d7-8df4-4a0cf3a1f967"
                          alt=""
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:space-x-10">
                      {navigation.map((item) => (
                        <Link key={item.name} to={`${item.url}`} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                      <a target='_blank'
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdx0dmdFFNIIE6CkqNPX9zeDZis8fqhG1gEDA3vAy7X-SJ4yA/viewform?usp=sf_link"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50"
                      >
                        Take Survey
                      </a>
                    </span>
                  </div>
                </nav>
  
                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-pink-600.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <Link 
                            key={item.name} 
                            to={`${item.url}`} 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <a target='_blank'
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdx0dmdFFNIIE6CkqNPX9zeDZis8fqhG1gEDA3vAy7X-SJ4yA/viewform?usp=sf_link"
                        className="block w-full px-5 py-3 text-center font-medium text-pink-700 bg-gray-50 hover:bg-gray-100"
                      >
                        Take Survey
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          </div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 ">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Building SuperStash</h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                    arcu.
                    </p>
                </div>
                <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {posts.map((post) => (
                    <div key={post.title}>
                        <div>
                        <a href={post.category.href} className="inline-block">
                            <span
                            className={classNames(
                                post.category.color,
                                'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                            )}
                            >
                            {post.category.name}
                            </span>
                        </a>
                        </div>
                        <a href={post.href} className="block mt-4">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                        </a>
                        <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <a href={post.author.href}>
                            <span className="sr-only">{post.author.name}</span>
                            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                            </a>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                            <a href={post.author.href}>{post.author.name}</a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} read</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </main>
      </div>
    )
  }
  