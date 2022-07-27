import React from 'react'
import {
    MdOutlinePool,
    MdOutlineEmojiNature,
    MdWifi,
    MdAcUnit
} from 'react-icons/md'

const ICONSIZE = "28px"
const ICONCLASSNAME = "text-green"

const ALLAMENITIES = [
    {
        icon: <MdOutlinePool size={ICONSIZE} className={ICONCLASSNAME} />,
        name: "Pool services",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula turpis, tempor id enim quis, rhoncus iaculis felis."
    },
    {
        icon: <MdOutlineEmojiNature size={ICONSIZE} className={ICONCLASSNAME} />,
        name: "Nature vibes",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula turpis, tempor id enim quis, rhoncus iaculis felis."
    },
    {
        icon: <MdWifi size={ICONSIZE} className={ICONCLASSNAME} />,
        name: "Wifi available",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula turpis, tempor id enim quis, rhoncus iaculis felis."
    },
    {
        icon: <MdAcUnit size={ICONSIZE} className={ICONCLASSNAME} />,
        name: "AC Conditioning",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula turpis, tempor id enim quis, rhoncus iaculis felis."
    },
]

function AmenitiesComponent() {
    return (
        <div className='w-full bg-white py-20 px-40 border-t-2 border-divider_brown' >
            <div>
                <h3 className='headline-text font-giambatt text-center text-4xl mb-8'>
                    <span className={`font-bally subHeadline-text text-cream_white md:text-green text-4xl md:text-5xl lg:text-6xl pr-28`}>
                        Premium
                    </span> <br />
                    What we offer <br />
                </h3>
                <div className='flex flex-row gap-20'>
                    {
                        ALLAMENITIES.map(amenity => {
                            return (
                                <div className='px-6 py-6 text-green cursor-pointer relative z-10'>
                                    {amenity.icon}
                                    <h5 className='font-semibold text-lg z-10'>
                                        {amenity.name}
                                    </h5>
                                    <br />
                                    <h6 className='text-black text-xs z-10'>
                                        {amenity.body}
                                    </h6>
                                    <div className='bgGrayDecor z-5' ></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AmenitiesComponent