import React, { useState } from 'react'
import GreenButton from '../global/GreenButton'

/**
 * @description for the book a stay component on homepage
 * @props {string} isAbsolute - for position styling related changes
 * 
*/
function BookingCalculatorComponent({ isAbsolute }) {
  const [arrival, setArrival] = useState("06/04/2022")
  const [departure, setDeparture] = useState("12/04/2022")
  const [numberOfPeople, setNumberOfPeople] = useState(1)

  const redirectToBooking = () => {
    console.log("redirecting")
  }


  return (
    <div
      className={`bg-white py-3 px-7 flex justify-even flex-row gap-3 ${isAbsolute ? "absolute" : ""} my-3`}
      style={{ width: isAbsolute ? "900px" : "100%" }}
    >
      <div className='flex-1 text-center border-r-2 border-divider_brown'>
        <h6 className='bookingCalcHeaders'>
          Arrival Date
        </h6>
        <h6 className='text-gray' >
          {arrival}
        </h6>
      </div>
      <div className='flex-1 text-center border-r-2 border-divider_brown'>
        <h6 className='bookingCalcHeaders'>
          Departure Date
        </h6>
        <h6 className='text-gray' >
          {departure}
        </h6>
      </div>

      <div className='flex-1 text-center'>
        <h6 className='bookingCalcHeaders'>
          Number of people
        </h6>
        <h6 className='text-gray' >
          {numberOfPeople}
        </h6>
      </div>
      <div className='flex-2 text-center'>
        <GreenButton
          height={"40px"}
          width={"150px"}
          content={"BOOK A STAY"}
          onClick={redirectToBooking}
        />
      </div>
    </div>
  )
}

export default BookingCalculatorComponent