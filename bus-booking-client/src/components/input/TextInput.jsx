import React from 'react';

export default function TextInput({ id, label, placeholder, onChange, type = "text", value, error }) {
    return (
        <div>
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
                className={`border ${error ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-900 rounded-lg block w-full p-2.5`}
            />
            {error && <p className="text-red-500 text-sm pt-1">{error}</p>}
        </div>
    );
}
