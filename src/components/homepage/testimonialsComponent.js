import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import GreenButton from '../global/GreenButton';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TESTIMONIALS = [
    "They are not the typical hotels you see out there. They have taken care of every last detail. They are very comfortable and the truth is that you are almost better than at home. We will come back for sure!",
    "Hello"
]


export default function TestimonialsComponent() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const next = () => setCurrentSlide((currentSlide + 1) % TESTIMONIALS.length)

    const prev = () => setCurrentSlide(currentSlide != 0 ? currentSlide - 1 : TESTIMONIALS.length - 1)

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="border-t-2 md:border-r-2 border-divider_brown hidden md:block">
                <div className="grid grid-rows-8 gap-8" style={{ height: '100%', padding: '64px' }}>
                    <div className="bg-testimonials bg-center .object-scale-down no-repeat bg-cover" style={{ minHeight: '40rem' }}>
                        {/* <img src={IMAGELIST.DISCOVER_1} alt="discover_1" style={{ objectFit: 'contain' }} /> */}
                    </div>
                </div>
            </div>
            <div className="border-t-2 md:border-b-2 border-divider_brown px-5 md:px-20 h-max min-h-full centerChild">
                <div className="grid grid-rows-8" style={{ height: '100%', }}>
                    <Carousel className="min-w-full" showThumbs={false} swipeable={true} showStatus={false} showIndicators={false} selectedItem={currentSlide} showArrows={false}>
                        {
                            TESTIMONIALS.map((review, i) => {
                                return (

                                    <p className="font-giambatt text-xl m-6 md:text-4xl">{review}</p>
                                )
                            })
                        }
                    </Carousel>
                    <div className="m-6">
                        <div style={{ display: 'inline-block' }}>
                            <p className="font-giambatt text-1xl" style={{ paddingBottom: '6px' }}>PRATIT</p>
                            <hr className="solid text-divider_brown" style={{ width: '140%', paddingBottom: '6px' }}></hr>
                            <p className="text-xs text-green text-bold" style={{ fontWeight: 'bold', paddingBottom: '14px' }}>MAY 2022</p>
                            <div className="flex flex-start">
                                <GreenButton
                                    height={"40px"}
                                    width={"40px"}
                                    content={<IoIosArrowRoundBack />}
                                    style={{ fontSize: '20px', marginRight: '10px' }}
                                    bg="transparent"
                                    textColor="green"
                                    onClick={() => prev()}
                                />
                                <GreenButton
                                    height={"40px"}
                                    width={"40px"}
                                    style={{ fontSize: '20px' }}
                                    content={<IoIosArrowRoundForward />}
                                    onClick={() => next()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
