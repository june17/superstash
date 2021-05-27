import React from 'react'
import {Link} from 'react-router-dom'


function Error404() {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg text-center">
            <div className="px-4 py-5 sm:p-6">
                <p>Page does not exist</p>
                <Link type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                to='/dashboard'>
                    Go Home
                </Link>
            </div>
      </div>
    );
}

export default Error404;