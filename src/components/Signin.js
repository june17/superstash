
import { LockClosedIcon } from '@heroicons/react/solid'
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from '../contexts/AuthContext'
import { ExclamationIcon } from '@heroicons/react/outline'
import { Link, useHistory } from 'react-router-dom'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signin} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Account does not exist')
        }
        setLoading(false)
    } 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/stash-logo.svg?alt=media&token=432f68f1-f6a9-41d7-8df4-4a0cf3a1f967"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-700 focus:z-10 sm:text-sm"
                placeholder="Email address"
                ref={emailRef}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none rounded-b-md focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/resetpass" className="font-medium text-pink-600 hover:text-pink-700">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button disabled={loading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-pink-700 group-hover:text-pink-600" aria-hidden="true" />
              </span>
              Sign in
            </button>
            <div>
                {error && 
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                {error}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
