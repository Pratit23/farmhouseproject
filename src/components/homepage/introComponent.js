import React from 'react'
import { IMAGELIST } from '../../config/imageList'
import Navbar from '../global/Navbar'
import BookingCalculatorComponent from './bookingCalculatorComponent'

function IntroComponent() {
    return (
        <div className="max-h-screen h-screen grid grid-cols-2">
            {/* intro details */}
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-grow justify-center items-center">
                    <div>
                        <h3 className="headline-text font-giambatt text-8xl">
                            <span className="font-bally subHeadline-text text-green text-7xl">Memorable</span> <br />
                            Hotels for <br />
                            moments <span className="font-bally subHeadline-text text-green text-7xl">rich</span> <br />
                            in emotions.
                        </h3>
                        <h4 className='font-giambatt text-brownish text-2xl mt-7'>
                            Book now and get the best prices
                        </h4>
                        <div className='relative mb-28' >
                            <BookingCalculatorComponent isAbsolute={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/* image details here */}
            <div className="h-screen bg-intro-cover-pattern bg-cover bg-center">
            </div>
        </div>
    )
}

export default IntroComponent