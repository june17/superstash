import {
    AcademicCapIcon,
    ReceiptTaxIcon,
    ChartPieIcon,
    RefreshIcon,
    LibraryIcon,
    CalculatorIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Improve financial awareness', icon: AcademicCapIcon, description: 'Get access to a rich library of tailor-made content, resources that help you set and plan for financial goals, and a strong community you can count on.' },
    { name: 'Budgeting', icon: ChartPieIcon, description: 'Making a personal budget is easy, but sticking to it is the hard part. We make it easy for you with visuals and spending categories. ' },
    { name: 'Web-first', icon: RefreshIcon, description: 'Being a web-app is what makes the SuperStash app powerful' },
    { name: 'Net-worth calculator', icon: CalculatorIcon, description: 'Track your net-worth over time for an overall view of progress towards your goals and get an one-time snapshot of the numbers.'  },
    { name: 'Plan career break', icon: ReceiptTaxIcon, description: 'Taking a career break is easier when you have a clear end goal in sight – spend time with family, study for an alternative career– the possibilities are endless!'  },
    { name: 'Import transactions', icon: LibraryIcon, description: 'Automatically or manually import your transactions from all your bank accounts into one powerful dashboard'  },
  ]
  
  export default function FeatureSection() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-pink-600 uppercase">features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you need to manage your money
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-12 rounded-lg bg-gray-50 mb-8">
                  <div className="flow-root bg-gray-50 px-6 pb-6 ">
                    <div className="-mt-16">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-pink-700 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }