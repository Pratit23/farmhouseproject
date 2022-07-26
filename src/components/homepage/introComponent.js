import React from 'react'
import { IMAGELIST } from '../../config/imageList'
import Navbar from '../global/Navbar'

function IntroComponent() {
    return (
        <div class="max-h-screen h-screen grid grid-cols-2">
            {/* intro details */}
            <div class="h-screen">
                <Navbar />
            </div>
            {/* image details here */}
            <div class="h-screen bg-intro-cover-pattern bg-cover bg-center">
            </div>
        </div>
    )
}

export default IntroComponent