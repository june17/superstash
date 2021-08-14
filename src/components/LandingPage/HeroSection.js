import { Fragment, useEffect, useState, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom'
import {database} from '../../firebase'
import { v4 as uuidv4 } from 'uuid'
import SuccessAlertDismiss from '../feedbacks/SuccessAlertDIsmiss'

const navigation = [
    { name: 'Features', url: '#' },
    { name: 'About', url: '/about' },
    { name: 'Login', url: '/signin' },
    { name: 'Signup', url: '/signup' }
  ]

  
export default function HeroSection() {
    const [message, setMessage] = useState('')
    const emailRef = useRef()

    async function handleInviteRequest(e) {
      e.preventDefault()
      const userId = uuidv4()

      try {
        if(emailRef.current.value!== '') {
          setMessage('')
          database.ref('betausers/'+ userId).set({
            email: emailRef.current.value
          })
          setMessage('Thanks for your interest')
          emailRef.current.value = ''
        } else {
          setMessage('Empty email field')
        }
      } catch {
        setMessage('Invalid email')
      }
    }

    return (
      <div className="relative bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
            <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>
  
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
                      <a>
                        <span className="sr-only">SuperStash</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/stash-logo.svg?alt=media&token=432f68f1-f6a9-41d7-8df4-4a0cf3a1f967"
                          alt=""
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:space-x-10">
                      {navigation.map((item) => (
                        <Link key={item.name} to={item.url} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                      <a target='_blank'
                        href="https://tally.so/r/wMEJ8w"
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
                        href="https://tally.so/r/wMEJ8w"
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
  
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-pink-700">Budgeting</span>
                    <span className="block text-black-700">for the rest of us</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Providing you with tools to take control of your money and help you become financially independent.  
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
                  <form  action="#" method="POST" onSubmit={handleInviteRequest} className="mt-3 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="text"
                      name="invite-email"
                      id="invite-email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-pink-500 focus:border-pink-500  border-gray-300  focus:shadow-outline"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                    >
                      Notify me
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    We care about the protection of your data. Read our
                    <a href="#" className="font-medium text-gray-900 underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                {message && 
                    <SuccessAlertDismiss message={message} />
                  }
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width={640}
                  height={784}
                  fill="none"
                  viewBox="0 0 640 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x={118}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                  <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                </svg>
                <div className="relative mx-auto rounded-lg shadow-lg lg:max-w-md">
                
                    <img
                      className="w-full rounded-lg"
                      src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/hero-lady.png?alt=media&token=b63f7c61-e5d0-4808-bf5d-62f016393449"
                      alt=""
                    />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }