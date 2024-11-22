import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Card({title , price , num}) {
  return (
    <>
    <div className="p-7 shadow-md rounded-lg w-full">
        <h2 className='text-black text-lg'>{title}</h2>
        <div className="flex items-center gap-4">
            <p className='font-bold text-black text-2xl'>${price}</p>
            <div className="flex items-center gap-1 my-3">
            <span className=''>{num}</span>
            {num > 1 ? (
                <ArrowUpwardIcon className='text-green-600'/>
            ):(
                <ArrowDownwardIcon className='text-red-600'/>
            )}
            </div>
        </div>
        <p className="text-gray-500">Compared to last month</p>
    </div>
    </>
  )
}
