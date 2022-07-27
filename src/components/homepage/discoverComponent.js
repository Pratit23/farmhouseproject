import React, { useState, useEffect } from 'react'
import { IMAGELIST } from '../../config/imageList'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import GreenButton from '../global/GreenButton';

const ALLIMAGES = [
    IMAGELIST.SLIDER_1,
    IMAGELIST.SLIDER_2,
    IMAGELIST.SLIDER_1,
    IMAGELIST.SLIDER_2,
    IMAGELIST.SLIDER_1,
    IMAGELIST.SLIDER_2,
]

function Homepage() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const next = () => setCurrentSlide((currentSlide + 1) % ALLIMAGES.length)

    const prev = () => setCurrentSlide(currentSlide != 0 ? currentSlide - 1 : ALLIMAGES.length - 1)



    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="border-t-2 md:border-r-2 border-divider_brown" style={{ height: '56rem' }}>
                <div className="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div className="bg-discover1 bg-center .object-scale-down no-repeat bg-cover" style={{ height: '600px' }}>
                        {/* <img src={IMAGELIST.DISCOVER_1} alt="discover_1" style={{ objectFit: 'contain' }} /> */}
                    </div>
                    <div style={{ height: '200px' }}>
                        <p className="font-giambatt subHeadline-text">Award <span className="font-bally subHeadline-text text-green">Winning</span></p>
                        <p className="font-giambatt subHeadline-text">style and<br />comfort</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-divider_brown" style={{ height: '56rem', width: 'auto' }}>
                <div className="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '48px' }}>
                    <div className="grid grid-cols-2 gap-4">
                        <div style={{ height: '100%' }}>
                            <p className="font-giambatt text-4xl">Room</p>
                            <p className="font-giambatt text-4xl">&Suite</p>
                        </div>
                        <div className="centerChild gap-3" style={{ width: '100%' }}>
                            <GreenButton
                                height={"40px"}
                                width={"40px"}
                                content={<IoIosArrowRoundBack/>}
                                bg="transparent"
                                textColor="green"
                                style={{fontSize: '20px'}}
                            // onClick={() => prev()}
                            />
                            <GreenButton
                                height={"40px"}
                                width={"40px"}
                                content={<IoIosArrowRoundForward />}
                                style={{fontSize: '20px'}}
                                onClick={() => next()}
                            />                        </div>

                    </div>
                    <Carousel className="hidden md:block" showThumbs={false} swipeable={true} centerMode={true} showStatus={false} showIndicators={false} selectedItem={currentSlide} showArrows={false}>
                        {
                            ALLIMAGES.map((image, i) => {
                                return (
                                    <div style={{ height: '360px', margin: '20px' }} key={`img-shown-all-car-#${i}`} >
                                        <img className="object-cover" src={image} style={{ height: '100%' }} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <Carousel className="md:hidden" showThumbs={false} swipeable={true} centerMode={false} showStatus={false} showIndicators={false} selectedItem={currentSlide} showArrows={false}>
                        {
                            ALLIMAGES.map((image, i) => {
                                return (
                                    <div style={{ height: '360px', margin: '10px' }} key={`img-shown-all-car-resp-#${i}`} >
                                        <img className="object-cover" src={image} style={{ height: '100%' }} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <div style={{ height: '200px' }}>
                        <p className="text-sm text-choc_brown">Sleep well and look good while doing it. At our Hotel Scape our unique style blends classic medieval without ever sacrificing comfort. Here 400-thread count sheets and rainfall showers come standard.</p>
                        <br />
                        <p className="text-sm text-choc_brown">Close enough that you can walk, far enough awa that you can sleep.</p>
                        <br />
                        <br />
                        <GreenButton
                            height={"30px"}
                            width={"150px"}
                            content={"DISCOVER ROOM"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage