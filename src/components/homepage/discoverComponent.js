import React, { useState, useEffect } from 'react'
import { IMAGELIST } from '../../config/imageList'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function Homepage() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const next = () => {
        console.log("next working")
        setCurrentSlide(currentSlide + 1)
    }

    const prev = () => {
        console.log("prev working")
        setCurrentSlide(currentSlide - 1)
    }

    const updateCurrentSlide = (index) => {
        if(currentSlide !== index) {
            setCurrentSlide(index)
        }
    }

    return (
        <div className="grid grid-cols-2">
            <div className="border-t-2 border-r-2 border-divider_brown" style={{ height: '56rem' }}>
                <div className="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div className="bg-discover1 bg-center .object-scale-down no-repeat bg-cover" style={{ backgroundColor: 'red', height: '600px' }}>
                        {/* <img src={IMAGELIST.DISCOVER_1} alt="discover_1" style={{ objectFit: 'contain' }} /> */}
                    </div>
                    <div style={{ height: '200px' }}>
                        <p className="font-giambatt subHeadline-text">Award <span className="font-bally subHeadline-text text-green">Winning</span></p>
                        <p className="font-giambatt subHeadline-text">style and<br />comfort</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-divider_brown" style={{ height: '56rem' }}>
                <div className="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div className="grid grid-cols-2 gap-4">
                        <div style={{ height: '100%' }}>
                            <p className="font-giambatt text-4xl">Room</p>
                            <p className="font-giambatt text-4xl">&Suite</p>
                        </div>
                        <div className="centerChild grid grid-cols-2" style={{ width: '100px', marginLeft: '125px'}}>
                            <div className="text-xs bg-green text-white centerChild" style={{ height: '40px', width: '40px', cursor: 'pointer'}} onClick={() => prev()}><IoIosArrowRoundBack /></div>
                            <div className="text-xs bg-green text-white centerChild" style={{ height: '40px', width: '40px', cursor: 'pointer'}} onClick={() => next()}><IoIosArrowRoundForward /></div>
                        </div>

                    </div>

                    <Carousel showThumbs={false} swipeable={true} centerMode={true} showStatus={false} showIndicators={false} onChange={() => updateCurrentSlide()} selectedItem={currentSlide}>
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
                        <div className="text-xs bg-green text-white centerChild" style={{ height: '30px', width: '150px' }}>DISCOVER ROOM</div>                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage