import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tokyo trip',
    uv: 1000,
    pv: 2400,
    amt: 2000,
  },
  {
    name: 'Mortgage downpayment...',
    uv: 1200,
    pv: 1398,
    amt: 2000,
  },
];


function DashContentGoals(props) {

    return (
        <div className="bg-white overflow-hidden shadow rounded-lg mt-4">
            <div className="px-4 py-5 sm:px-6 flex items-center">
                <img
                    className="h-12 w-12 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/stash10.appspot.com/o/goal-icon.svg?alt=media&token=d7439ba2-7513-4bb1-a0d2-f5d419b2194c"
                    alt=""
                />
                <p className="text-lg px-2">Goal progress</p>
            </div>
            <div className="px-4 py-5 sm:px-6 relative">
                <ResponsiveContainer width="100%"  aspect={12.0 / 3.0} >
                    <BarChart
                        width={200}
                        height={100}
                        layout="vertical"
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        data={data}
                        barSize={12}
                        >
                    <XAxis hide type="number" />
                    <YAxis hide  dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#41BB5B"  background={{ fill: '#eee' }} radius={[10, 10, 10, 10]}   />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default DashContentGoals;