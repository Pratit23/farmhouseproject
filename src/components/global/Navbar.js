import React from 'react'
import { CONSTANTS } from '../../config/constants'
import { IMAGELIST } from '../../config/imageList'

const NAVROUTES = [
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

function Navbar() {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:border-b-2 border-divider_brown py-7">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={IMAGELIST.LOGO} className="mr-3 h-6 sm:h-9" alt={`${CONSTANTS.appName}`} />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                        {CONSTANTS.appName}
                    </span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg c_md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" ariaControls="navbar-default" ariaExpanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full c_md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {
                            NAVROUTES.map(route => {
                                return (
                                    <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" ariaCurrent="page">
                                            {route.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar