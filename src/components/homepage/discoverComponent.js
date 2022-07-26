import React from 'react'
import { IMAGELIST } from '../../config/imageList'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Homepage() {
    return (
        <div class="grid grid-cols-2">
            <div className="border-t-2 border-r-2 border-divider_brown" style={{ height: '56rem' }}>
                <div class="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div className="bg-discover1 bg-center .object-scale-down no-repeat bg-cover" style={{ backgroundColor: 'red', height: '600px' }}>
                        {/* <img src={IMAGELIST.DISCOVER_1} alt="discover_1" style={{ objectFit: 'contain' }} /> */}
                    </div>
                    <div style={{ height: '200px' }}>
                        <p className="font-giambatt subHeadline-text">Award <span className="font-bally subHeadline-text text-green">Winning</span></p>
                        <p className="font-giambatt subHeadline-text">style and<br />comfort</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-r-2 border-divider_brown" style={{ height: '56rem' }}>
                <div class="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div style={{ height: '100%' }}>
                        <p className="font-giambatt text-4xl">Room</p>
                        <p className="font-giambatt text-4xl">&Suite</p>
                    </div>
                    <Carousel showThumbs={false} swipeable={true} centerMode={true} showStatus={false} showIndicators={false}>
                        <div style={{ height: '360px', margin: '20px' }}>
                            <img className="object-cover" src={IMAGELIST.SLIDER_1} style={{ height: '100%' }} />
                        </div>
                        <div style={{ height: '360px', margin: '20px' }}>
                            <img className="object-cover" src={IMAGELIST.SLIDER_2} style={{ height: '100%' }} />
                        </div>
                        <div style={{ height: '360px', margin: '20px' }}>
                            <img className="object-cover" src={IMAGELIST.SLIDER_1} style={{ height: '100%' }} />
                        </div>
                        <div style={{ height: '360px', margin: '20px' }}>
                            <img className="object-cover" src={IMAGELIST.SLIDER_2} style={{ height: '100%' }} />
                        </div>
                    </Carousel>
                    <div style={{ height: '200px' }}>
                        <p className="text-sm text-choc_brown">Sleep well and look good while doing it. At our Hotel Scape our unique style blends classic medieval without ever sacrificing comfort. Here 400-thread count sheets and rainfall showers come standard.</p>
                        <br />
                        <p className="text-sm text-choc_brown">Close enough that you can walk, far enough awa that you can sleep.</p>
                        <br />
                        <br />
                        <div className="text-xs text-choc_brown bg-green" style={{ height: '30px', width: '150px', display: 'flex', justifyContent: 'center'}}><p className="text-white">DISCOVER ROOM</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage