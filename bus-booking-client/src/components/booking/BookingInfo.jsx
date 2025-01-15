import React from 'react'
import BookCard from './components/BookCard'

export default function BookingInfo() {
  return (
    <div className='col-span-1 space-y-8'>
        <div className={`flex justify-center items-center px-4 py-2 bg-gray-300 `}>
            <h2 className={`text-sm font-bold tracking-wider leading-6`}>Seat No.</h2>
            <span className={`text-sm font-bold tracking-wider leading-6 pl-2`}>45</span>
        </div>
        <BookCard label={`Journey Summary`} mainTitle={true} />
        <BookCard label={`Free Breakdown`} />
    </div>
  )
}
