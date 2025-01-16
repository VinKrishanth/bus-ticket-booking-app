import React from 'react';
import { CiCreditCard2 } from "react-icons/ci";

export default function Button({ label = "Button", onClick, className = "", type = "button"}) {
  return (
    <button
        type={type}
        onClick={onClick}
        className={`px-4 sm:py-2 py-1 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 active:bg-blue-700 transition duration-300 ${className} sm:text-sm  text-xs`}
    >
        {label}
        <CiCreditCard2 className={`inline-block ml-2 h-5 w-5 sm:scale-125 sm:-translate-y-0.5`} />
    </button>
  );
}
