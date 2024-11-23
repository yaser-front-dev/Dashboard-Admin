import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

export default function Chart({title, data, dataKey, grid}) {
  return (
      <div className="mt-3 shadow-lg rounded-lg">
          <h3 className='text-2xl pl-4 pt-2 font-semibold'>{title}</h3>
          <ResponsiveContainer className="p-4" width="100%" aspect={4}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke='#5550bd' />
                  <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
  )
}
