import React from 'react';
import { Disclosure } from '@headlessui/react'

import {
    ChevronDownIcon,
    GlobeAltIcon, 
    LightningBoltIcon, 
    ScaleIcon 
  } from '@heroicons/react/outline'

  import { SearchIcon } from '@heroicons/react/solid'

const features = [
    {
      name: 'Recurring deposit',
      projected:'₹32500+',
      risk: 'Zero',
      description:'yes',
      icon: GlobeAltIcon,
    },
    {
      name: 'Debt fund',
      projected:'₹33500+',
      risk: 'Low',
      description:'',
      icon: ScaleIcon,
    },
    {
      name: 'Equity fund',
      projected: '₹37600+',
      risk: 'Very high',
      description:'',
      icon: LightningBoltIcon,
    },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function GoalItem(props) {
    return (
        <>
           <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:px-6">
                        <div>
                            <h3 className="text-xl font-bold">Tokyo trip</h3>
                            <p className="text-gray-500">12 Months</p>
                        </div>
                        <div className="grid grid-cols-3 mt-4">
                            <div>
                                <p className="text-sm text-gray-500">Monthly payment</p>
                                <h5 className="text-xl">₹3,160.00</h5>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Current balance</p>
                                <h5 className="text-xl">₹0.00</h5>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Goal</p>
                                <h5 className="text-xl">₹32,000.00</h5>
                            </div>
                        </div>
                        <div>
                             <Disclosure as="div" className="pt-6">
                                {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
                                        <span className="text-base font-medium text-pink-600 hover:text-pink-700">Reach your goals faster</span>
                                        <span className="ml-6 h-7 flex items-center">
                                        <ChevronDownIcon
                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 bg-pink-50 rounded">
                                        
                                        <div className="py-4 px-4">
                                            <div className="max-w-xl mx-auto lg:max-w-7xl">
                                                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4 ">
                                                {features.map((feature) => (
                                                    <div key={feature.name} className="p-2 rounded-md cursor-pointer hover:bg-pink-100">
                                                        <dt>
                                                            <p className="text-base text-bold leading-6 font-medium text-gray-900">{feature.name}</p>
                                                        </dt>
                                                        <dd className="text-sm text-gray-500">
                                                            Projected returns: {feature.projected}
                                                        </dd>
                                                        <dd className="text-sm text-gray-500">
                                                            Risk: {feature.risk}
                                                        </dd>
                                                        {feature.description && <dd className="text-xs text-blue-500">Attractive rates for women</dd>}
                                                    </div>
                                                ))}
                                                </dl>
                                            </div>
                                        </div>

                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                        </div>
                        
                    </div>  
        </>
    );
}

export default GoalItem;