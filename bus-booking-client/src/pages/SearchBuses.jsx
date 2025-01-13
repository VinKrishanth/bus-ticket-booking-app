import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import BusBookingCard from '../components/booking/BusBookingCard';

export default function SearchBuses() {
  const location = useLocation()
  const searchParams = location.state
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);

  return (
    <div className={`max-w-screen mx-auto px-8 sm:px-6 lg:px-8 py-12 ${mobileOpen && 'hidden'} `}>
      <BusBookingCard />
    </div>
  )
}
