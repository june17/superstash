import React from 'react';
import {Link} from 'react-router-dom'

function Income(props) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-2xl mx-auto px-4 pt-12 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mt-4">
                    <form className="space-y-1 divide-y divide-gray-200">
                        {/* card header */}
                        <div className="px-4 py-8 sm:px-6">
                            <div>
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your monthly income</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                    Add all your income sources
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* middle container */}
                            <div className="px-4 py-5 sm:p-6">
                                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-12">
                                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                            Account number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-12">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Select bank
                                        </label>
                                        <div className="mt-1">
                                            <select
                                            id="gender"
                                            name="country"
                                            autoComplete="country"
                                            className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            >
                                            <option>Bank of Ireland</option>
                                            <option>AIB</option>
                                            <option>Revolut</option>
                                            <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        {/* card footer */}
                        <div className="px-4 py-4 sm:px-6 pt-5">
                            <div className="flex justify-end">
                            <Link
                                type="button"
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                to={'/dashboard'}
                            >
                                Cancel
                            </Link>
                            <Link
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                to="/recexpense"
                            >
                                Next
                            </Link>
                            </div>
                        </div>
                    </form>
            </div>
            </div>
        </div>
    );
}

export default Income;