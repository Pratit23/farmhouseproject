import React from 'react'
import { CONSTANTS } from '../../config/constants'
// import { NAVROUTES } from '../../config/routes'


export const NAVROUTES = [
    {
        path: "/gallery",
        name: "Gallery"
    },
    {
        path: "/locations",
        name: "Locations"
    },
    {
        path: "/contact-us",
        name: "Contact Us"
    },

]
function Footer() {
    return (
        <div className='w-full h-max darkenedFooterBgImage text-cream_white' style={{ marginTop: '20px'}}>
            <div className='max-w-lg m-auto text-center pt-32 pb-20'>
                <h6 className="headline-text font-giambatt text-5xl md:text-6xl pb-20">
                    {CONSTANTS.appName}
                </h6>
                <h6 className='text-lg' >
                    Murdyala, Farmhouse <br />
                    Kudal, Goa <br />
                </h6>
                <h6 className='text-lg' >
                    (6969) 69696969696
                </h6>
                <h6 className='text-lg' >
                    farmhouse@gmail.com
                </h6>
            </div>
            <div className=' py-4 md:py-8 border-t-2 border-b-2 flex justify-center flex-col md:flex-row md:gap-20'>
                {
                    NAVROUTES.map((route, i) => {
                        return (
                            <>
                                <a href="#" className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-center" ariaCurrent="page">
                                    {route.name}
                                </a>
                                {i != NAVROUTES.length - 1 && <p className='hidden md:block'>●</p>}
                            </>
                        )
                    })
                }
            </div>
            <div className='py-10 text-center'>
                {CONSTANTS.copyrightSentence}
            </div>
        </div>
    )
}

export default Footer