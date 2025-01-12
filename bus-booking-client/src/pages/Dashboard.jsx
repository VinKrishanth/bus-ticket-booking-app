import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);
  return (
    <div className={`flex flex-col ${mobileOpen && 'hidden'}`}>
      Dashboard
    </div>
  )
}
