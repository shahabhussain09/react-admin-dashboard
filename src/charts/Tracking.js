import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import trackingData from '../assets/dummy-data/trackingData'

const Tracking = () => {
  return (
    <ResponsiveContainer width='100%'>
      <LineChart margin={{top: 5, right:30, left:20, bottom:5}}>
        <CartesianGrid strokeDasharray='0' stroke='#b7ffe913' />
        <XAxis dataKey='name' fill='#fff' />
        <YAxis dataKey="mt" fill='#ddd' />
        <Line type='monotone' data={trackingData} dataKey="km" stroke='#e1424e' />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Tracking
