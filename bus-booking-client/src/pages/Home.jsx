import React from 'react'
import Profile from '../components/card/Profile'

export default function Home() {
  return (
    <div className={`flex justify-center items-center min-h-screen min-w-screen px-8`}>
      <div className={`flex justify-center items-start flex-col`}>
        <Profile />
      </div>
    </div>
  )
}
