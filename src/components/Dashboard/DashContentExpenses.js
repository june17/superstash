import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tokyo trip',
    uv: 500,
    pv: 1200,
    amt: 2000,
  },
];

function DashContentExpenses(props) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg mt-4">
            <div className="px-4 py-5 sm:px-6 flex items-center">
                <img
                    className="h-12 w-12 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/account-icon.svg?alt=media&token=143f1bce-a047-44b9-9e79-a428accd397f"
                    alt=""
                />
                <p className="text-lg px-2">Recurring expenses</p>
            </div>
            <div>
            </div>
            <div className="px-4 pb-4 sm:px-6">
                <div className="flex justify-between">
                    <p><b>₹18489.45 </b>
                        <span className="text-gray-400">/ ₹25100.00</span>
                    </p>
                    <p className="text-gray-400">0% paid</p>
                </div>
                <div className="">
                    <ResponsiveContainer width="100%"  height={40} >
                        <BarChart
                            width={200}
                            height={100}
                            layout="vertical"
                            data={data}
                            barSize={12}
                            >
                        <XAxis hide type="number" />
                        <YAxis hide  dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#41BB5B"  background={{ fill: '#eee' }} radius={[10, 10, 10, 10]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex w-full border p-3 rounded">
                    <div className="flex-grow">
                        <div className="flex">
                            <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="focus:ring-pink-200 h-4 w-4 mt-1 text-pink-600 border-gray-300 rounded"
                            />
                            <div className="px-3">
                                <h3>Rent</h3>
                                <p className="text-sm text-gray-500">Today</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        -₹20000.00
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashContentExpenses;