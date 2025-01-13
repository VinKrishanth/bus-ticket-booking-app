import React from 'react'

export default function TextCard({ arr = [], customerStyle}) {
  return (
    <ul className='flex flex-col gap-2 px-4'>
        {
            arr.map((info, index) => {
                return (
                    <li key={`${info.title}${index}`} className={`flex justify-start items-start flex-col gap-1 ${customerStyle}`}>
                        <p className={`sm:text-sm  text-xs tracking-wide cursor-pointer capitalize`}>{info.title}</p>
                        <h2 className={`sm:text-base text-sm font-semibold uppercase cursor-pointer leading-6 tracking-widest`}>{info.description}</h2>
                    </li>
                )
            })
        }
    </ul>
  )
}
