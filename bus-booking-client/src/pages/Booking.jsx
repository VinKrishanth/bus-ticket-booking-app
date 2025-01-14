import React from 'react'
import { useSelector } from 'react-redux';
import Bus from '../components/bus/Bus';

export default function Booking() {
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);
  return (
    <div className={`flex flex-col ${mobileOpen && 'hidden'} min-h-[80vh] px-8 pt-24`}>
      <Bus />
    </div>
  )
}
