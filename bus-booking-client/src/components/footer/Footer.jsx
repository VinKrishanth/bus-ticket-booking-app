import React from 'react'
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';

export default function Footer() {
    const Theme = useSelector(state => state.theme.lightTheme);
  return (
    <footer className={`${Theme ? 'bg-white ' : 'bg-gray-900 '}`}>
      <div className="w-full max-w-screen mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className=" items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse p-4 hidden">
            <Logo />
          </div>
          <ul className={`hidden flex-wrap items-center mb-6 text-sm font-medium ${Theme ? 'text-gray-500' : 'text-gray-400'}  sm:mb-0 `}>
            
          </ul>
        </div>
        <hr className={`my-6 ${Theme ? 'border-gray-200' : 'border-gray-700'}  sm:mx-auto  lg:my-8`} />
        <span className={`block text-sm ${Theme ? 'text-gray-500 ' : 'text-gray-400'} text-center `}>
          © 2025{" "}QTechy Bus Booking System. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}



