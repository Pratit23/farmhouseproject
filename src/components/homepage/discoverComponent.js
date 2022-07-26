import React from 'react'
import { IMAGELIST } from '../../config/imageList'

function Homepage() {
    return (
        <div class="grid grid-cols-2">
            <div className="border-t-2 border-r-2 border-divider_brown" style={{ height: '36rem' }}>
                <div class="grid grid-rows-2 grid-flow-col gap-4 p-16">
                    <div style={{ backgroundColor: 'red', height: '70%' }}>
                        {/* <img className="object-contain" src={IMAGELIST.DISCOVER_1} alt="discover_1" /> */}
                    </div>
                    <div style={{ backgroundColor: 'yellow', height: '30%' }}>09</div>
                </div>
                {/* <div class="container" style={{ height: '24rem', backgroundColor: 'yellow' }}>
                    
                </div> */}
            </div>
            <div>09</div>
        </div>
    )
}

export default Homepage