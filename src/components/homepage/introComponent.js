import React from 'react'
import { CONSTANTS } from '../../config/constants'

import Navbar from '../global/Navbar'
import BookingCalculatorComponent from './bookingCalculatorComponent'
import introClip from '../../assets/videos/intro-clip.mp4'



function IntroComponent() {
    return (
        <div className="min-h-screen h-max grid grid-cols-1 md:grid-cols-1" style={{ position: 'relative' }}>
            <video src={introClip} autoPlay muted loop style={{ width: '100%', height: '100%', position: 'absolute', objectFit: 'cover', zIndex: '0', filter: 'brightness(75%)' }}/>
            {/* intro details */}
            <div className={`flex flex-col min-h-screen darkenedBackgroundImage md:bg-none text-cream_white md:text-black`} style={{ zIndex: '1', position: 'relative'}}>
                <Navbar />
                <div className="flex flex-grow p-8 pb-0 md:pb-8 items-center">
                    <div className='w-full md:w-max text-center md:text-start' >
                        <h3 className="headline-text font-giambatt text-4xl md:text-6xl text-white lg:text-8xl">
                            <span className={CONSTANTS.CURSIVE_TEXT_CLASS}>Memorable</span> <br />
                            Cottage <br />
                            experience <span className={CONSTANTS.CURSIVE_TEXT_CLASS}>rich</span> <br />
                            in emotions.
                        </h3>
                        {/* <h4 className={`font-giambatt text-cream_white md:text-white text-lg md:text-2xl mt-7 mb-7 md:mb-0`}>
                            Book now and get the best prices
                        </h4> */}
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
            {/* <div className={`min-h-screen hidden md:block`} >
                <video src={introClip} height="100%" autoplay="true" loop/>
            </div> */}
        </div>
    )
}

export default IntroComponent