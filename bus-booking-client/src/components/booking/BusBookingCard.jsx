import React, { useState } from 'react'
import { QTechyBusDemo } from '../../utils/index.js'
import { SearchBusDemo } from '../../utils/SearchBusDemo.js'
import TextCard from './TextCard.jsx';
import { IoIosInformationCircle } from "react-icons/io";

export default function BusBookingCard() {
    const [moreInfo, setMoreInfo] = useState(false) ; 

    const toggleMoreInfo = () => {
        setMoreInfo(!moreInfo)
    }

  return (
    <div className={`flex flex-col min-w-screen justify-items-start border-2 min-h-52 rounded-xl`}>
        <div className={`flex justify-between bg-blue-500 rounded-t-xl py-2 px-6 border-b-8 border-tertiary text-white`}>
          <h2 className={`capitalize cursor-pointer sm:text-base text-sm tracking-wider`}>stops@<span className='font-semibold'>Colombo</span></h2>
          <h2 className={`capitalize  cursor-pointer sm:text-base text-sm tracking-wider`}>Route No <span className='font-semibold'>87</span></h2>
        </div>
        <main className={`flex sm:flex-row  flex-col   sm:py-8 py-4 px-6 justify-start items-center sm:gap-8 gap-4`}>
            <img 
                src={QTechyBusDemo}
                className={`object-cover object-center cursor-pointer transition-all duration-500 ease-linear delay-75 rounded-lg xl:h-[300px] sm:h-[150px] h-[100px] xl:w-[300px] sm:w-[150px] w-[100px]`}
            />
            <div className={`flex-grow flex flex-col justify-center gap-4`}>
                <div className='flex sm:min-w-fit min-w-full lg:flex-row flex-col'>
                    <div className={`flex flex-row justify-items-start relative gap-16`}>
                        <TextCard 
                            arr={SearchBusDemo[0].departureInfo}
                        />
                        <div className={`sm:min-w-48 min-w-24 sm:h-12 h-6 bg-tertiary clip-path-triangle rotate-90 absolute sm:translate-x-20 translate-x-24 translate-y-16 cursor-pointer`}></div>
                        <TextCard 
                            arr={SearchBusDemo[0].arrivalInfo}
                        />
                    </div>
                    <div className={`lg:hidden flex min-w-full justify-end items-center py-4`}>
                        <button  
                            onClick={toggleMoreInfo}
                            className='text-tertiary  '>
                            <span><IoIosInformationCircle className={'h-5 w-5'} /></span> 
                        </button>
                    </div>
                    <div className={` flex-row justify-items-start relative gap-4 sm:pt-0 pt-8 ${moreInfo ? 'flex' : 'hidden'}`}>
                        <TextCard 
                            arr={SearchBusDemo[0].busInfo}
                        />
                        <TextCard 
                            arr={SearchBusDemo[0].schedule}
                        />
                    </div>
                    <div className={`flex flex-col justify-start items-start sm:pl-4 sm:gap-4 `}>
                        <h1 className={`sm:text-2xl text-xl font-bold tracking-wider cursor-pointer leading-8 text-blue-800 sm:text-right text-center min-w-full`} >Rs. <span className={`sm:text-4xl text-xl`}>1,378.00</span></h1>
                        <ul className={`flex  sm:text-2xl text-xs font-semibold tracking-wider cursor-pointer sm:py-4 py-2 sm:justify-end justify-center items-center min-w-full`} >
                            <li className={`sm:max-w-[50%] max-w-[20%] text-center pr-2`}> Available Seats</li>
                            <li className={`sm:text-5xl text-2xl  text-tertiary border-l-2 border-tertiary sm:pl-4 pl-2`}>40</li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-between min-w-full items-center sm:p-4 sm:flex-row flex-col sm:gap-4 gap-2 sm:translate-y-2 -translate-y-2`}>
                    <h1 className={`sm:text-base text-xs tracking-wider font-normal cursor-pointer`}>Duration: <span className={`font-semibold sm:text-lg text-sm`}>{SearchBusDemo[0].duration} Hours</span></h1>
                    <button className={`sm:text-base text-sm tracking-wider cursor-pointer bg-tertiary text-white sm:px-8 px-4 sm:py-2 py-1 rounded-xl bg-opacity-75 hover:bg-opacity-100`}>Book Now</button>
                </div>
            </div>
        </main>
        <div className={`flex sm:justify-end justify-center items-end min-w-full py-2 px-6  bg-gray-800 text-white rounded-b-xl`}>
            <button className={`text-base tracking-wider cursor-pointer`}>Boarding/Dropping Points</button>
        </div>
    </div>
  );
};

