import React from 'react'
import { IMAGELIST } from '../../config/imageList'
import Navbar from '../global/Navbar'

function IntroComponent() {
    return (
        <div className="max-h-screen h-screen grid grid-cols-2">
            {/* intro details */}
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-grow justify-center items-center">
                    <h3 className="headline-text font-giambatt">
                        <span className="font-bally subHeadline-text text-green">Memorable</span> <br />
                        Hotel for <br />
                        moments <span className="font-bally subHeadline-text text-green">rich</span> <br />
                        in emotions.
                    </h3>
                </div>
            </div>
            {/* image details here */}
            <div className="h-screen bg-intro-cover-pattern bg-cover bg-center">
            </div>
        </div>
    )
}

export default IntroComponent