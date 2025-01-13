import React, { useState } from 'react';
import { Eye, EyeOff} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const mobileOpen = useSelector(state => state.theme.isMobileOpen);
  return (
    <div className={`min-h-screen bg-[#f8f5ff] flex flex-col ${mobileOpen && 'hidden'} `}>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Sign in</h1>
          <p className="text-gray-600 mb-6">Enter your QTechy Account details.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6d4aff] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6d4aff] focus:border-transparent pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="keep-signed"
                className="h-4 w-4 text-[#6d4aff] focus:ring-[#6d4aff] border-gray-300 rounded"
              />
              <div className="ml-2">
                <label htmlFor="keep-signed" className="text-sm text-gray-700">
                  Keep me signed in
                </label>
                <p className="text-xs text-gray-500">
                  Recommended on trusted devices. <a href="#" className="text-[#6d4aff] hover:underline">Why?</a>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6d4aff] text-white py-3 rounded-lg hover:bg-[#5b3df5] transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to QTechy? <Link to="/bus-booking/register" className="text-[#6d4aff] hover:underline">Create account</Link>
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}


