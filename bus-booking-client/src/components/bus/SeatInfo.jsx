import React from 'react'
import { useSelector } from 'react-redux'

export default function SeatInfo({title, color , index}) {
    const Theme = useSelector(state => state.theme.lightTheme);
  return (
    <div 
        className={`flex justify-items-center gap-1`}
        key={index}
    >
        <div className={`md:h-4 md:w-4 w-3 h-3 border-2 border-black ${color} rounded-sm hover:border-blue-300 transition-all duration-500 ease-linear cursor-pointer`}></div>
        <div className={`flex justify-center items-center gap-1 -translate-y-0.5`}>
            <h2 className={`lg:text-xs  customer-text-lg font-normal tracking-wide ${Theme ? 'text-gray-900' : 'text-white'} cursor-pointer`}>{title}</h2>
            <p className={`lg:text-xs  customer-text-lg font-normal tracking-wide ${Theme ? 'text-gray-900' : 'text-white'} cursor-pointer sm:flex hidden`}>Seats</p>
        </div>
    </div>
  )
}
