import React from 'react'
import Seats from './Seats'


export default function SeatColumn( { arr = [] , customerStyle}) {
    return (
        <div className={`flex flex-col sm:flex-row  ${customerStyle ? 'justify-end sm:min-w-full min-h-full' : 'justify-center'}  items-center  sm:gap-1 `}>
            {
                arr.map((seat, index) => {
                    return(
                        <Seats 
                            count={seat.SeatNo < 10 ? `${seat.SeatNo}` : seat.SeatNo  }
                            type={seat.type}
                            key={`seat-${seat.SeatNo}-${index}`}
                            index={`seat-${seat.SeatNo}-${index}`}
                            space={seat.space}
                        />
                    )
                })
            }
        </div>
     )
}
