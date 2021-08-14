import React from 'react';

function DashContentBudget(props) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center">
                <img
                    className="h-12 w-12 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/budget-icon.svg?alt=media&token=40525df8-f95a-4908-a534-14a2405b660c"
                    alt=""
                />
                <p className='px-2 text-lg'>Budget</p>
            </div>
            <div className="px-4 pb-4 sm:px-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="py-3 whitespace-nowrap">Income</td>
                            <td className="text-right text-green-500">₹32000.00</td>
                        </tr>
                        <tr>
                            <td className="py-3 whitespace-nowrap">Recurring expenses</td>
                            <td className="text-right">-₹9600.00</td>
                        </tr>
                        <tr>
                            <td className="py-3 whitespace-nowrap">Towards goals</td>
                            <td className="text-right">-₹7500.00</td>
                        </tr>
                        <tr>
                            <td className="py-3 whitespace-nowrap">Budgeted for other expenses</td>
                            <td className="text-right text-blue-500">₹14900.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashContentBudget;