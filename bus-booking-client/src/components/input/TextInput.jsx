import React from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function TextInput({
    id,
    label,
    placeholder,
    onChange,
    type = "text",
    value,
    error,
    maxLength = "",
}) {


    return (
        <div className=''>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange} 
                className={`border ${error ? 'border-red-500' : 'border-gray-300'} text-xs bg-gray-50 text-gray-900 rounded-lg block w-full p-2.5`}
                maxLength={type === "number" ? undefined : maxLength} 
            />
            {error && 
            <p className="flex justify-start items-center gap-1 text-red-500 text-sm pt-1">
                <IoMdInformationCircleOutline className={'scale-125'}/> 
                {error}
            </p>}
        </div>
    );
}
