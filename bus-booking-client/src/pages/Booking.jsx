import React from 'react'
import { useSelector } from 'react-redux';

export default function Booking() {
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);
  return (
    <div className={`flex flex-col ${mobileOpen && 'hidden'}`}>
      Booking
    </div>
  )
}
