import React from 'react'
import { CONSTANTS } from '../../config/constants'
import { IMAGELIST } from '../../config/imageList'
import Navbar from '../global/Navbar'
import BookingCalculatorComponent from './bookingCalculatorComponent'



function IntroComponent() {
    return (
        <div className="min-h-screen h-max grid grid-cols-1 md:grid-cols-2">
            {/* intro details */}
            <div className={`flex flex-col min-h-screen darkenedBackgroundImage md:bg-none text-cream_white md:text-black`}>
                <Navbar />
                <div className="flex flex-grow justify-center items-center p-8 pb-0 md:pb-8">
                    <div className='w-full md:w-max text-center md:text-start' >
                        <h3 className="headline-text font-giambatt text-4xl md:text-6xl lg:text-8xl">
                            <span className={CONSTANTS.CURSIVE_TEXT_CLASS}>Memorable</span> <br />
                            Hotels for <br />
                            moments <span className={CONSTANTS.CURSIVE_TEXT_CLASS}>rich</span> <br />
                            in emotions.
                        </h3>
                        <h4 className={`font-giambatt text-cream_white md:text-brownish text-lg md:text-2xl mt-7 mb-7 md:mb-0`}>
                            Book now and get the best prices
                        </h4>
                        <div className='relative mb-28 hidden md:block' >
                            <BookingCalculatorComponent isAbsolute={true} />
                        </div>
                        <div className='relative mb-28 block md:hidden' >
                            <BookingCalculatorComponent isAbsolute={false} />
                        </div>
                    </div>
                </div>
            </div>
            {/* image details here */}
            <div className={`min-h-screen ${CONSTANTS.BACKGROUND_IMAGE_HELPER} hidden md:block`}>
            </div>
        </div>
    )
}

export default IntroComponent