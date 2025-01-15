import React from 'react'
import { BusSeatInfo } from '../utils/Bus.js'
import SeatColumn from '../components/bus/SeatColumn.jsx'

export default function BusLayout() {
    const SeatColumnInfo = [
        {
            Info: BusSeatInfo[0].column1,
            style: false
        },
        {
            Info: BusSeatInfo[0].column2,
            style: false
        },
        {
            Info: BusSeatInfo[0].column3,
            style: false
        },
        {
            Info: BusSeatInfo[0].column4,
            style: true
        },
        {
            Info: BusSeatInfo[0].column5,
            style: false
        },
        {
            Info: BusSeatInfo[0].column6,
            style: false
        },
    ]

  return (
    <div className={`flex sm:justify-start justify-center items-start sm:p-8 sm:min-w-fit min-w-full sm:flex-row flex-col`}>
        <div className={`flex justify-center items-center  my-3 mx-2 sm:min-w-fit min-w-full`}>
            <div className={`w-10 h-10 border-2 rounded-full sm:-translate-x-1 translate-x-16`}></div>
        </div>
        <div className={`flex sm:flex-col flex-row-reverse sm:justify-start justify-center sm:min-w-fit min-w-full items-start`}>
            {
                SeatColumnInfo.map((info, index) => {
                    return(
                        <SeatColumn 
                            arr={info.Info}
                            customerStyle={info.style}
                            key={index}
                        />
                    )
                })
            }

            <div className={`min-w-full justify-end items-center py-8 sm:flex hidden`}>
                <button className={`bg-primary text-white py-2 px-4 rounded-md text-sm font-semibold tracking-wide cursor-pointer`}>Proceed</button>
            </div>
        </div>
    </div>
  )
}
