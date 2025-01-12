import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function SearchBuses() {
  const location = useLocation()
  const searchParams = location.state
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${mobileOpen && 'hidden'} `}>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Buses</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <p className="text-gray-600">From: {searchParams?.pickupPoint}</p>
          <p className="text-gray-600">To: {searchParams?.droppingPoint}</p>
          <p className="text-gray-600">Date: {searchParams?.departureDate}</p>
        </div>
        {/* Bus list would go here */}
      </div>
    </div>
  )
}
