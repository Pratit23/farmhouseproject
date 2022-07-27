import React, { useState } from 'react'
import { CONSTANTS } from '../../config/constants'
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
      className={`bg-white py-3 px-7 flex justify-even flex-col md:flex-row gap-3 ${isAbsolute ? "absolute my-3" : "flex-wrap m-auto"} bookingCalcHeadersWrapper`}
      style={{ maxWidth: isAbsolute ? "none" : "250px", }}
    >
      <div className={`flex-1 text-center md:${CONSTANTS.RIGHT_SIDE_BORDER}`}>
        <h6 className='bookingCalcHeaders'>
          Arrival Date
        </h6>
        <h6 className='text-gray' >
          {arrival}
        </h6>
      </div>
      <div className={`flex-1 text-center md:${CONSTANTS.RIGHT_SIDE_BORDER}`}>
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
          width={isAbsolute ? "150px" : "100%"}
          style={{ maxWidth: "150px", margin: "0 auto" }}
          content={"BOOK A STAY"}
          onClick={redirectToBooking}
        />
      </div>
    </div>
  )
}

export default BookingCalculatorComponent