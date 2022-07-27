import React from 'react'
import IntroComponent from '../components/homepage/introComponent'
import DiscoverComponent from '../components/homepage/discoverComponent'
import TestimonialsComponent from '../components/homepage/testimonialsComponent'
import Footer from '../components/global/Footer'
import AmenitiesComponent from '../components/homepage/amenitiesComponent'

function Homepage() {
    return (
        <>
            <IntroComponent />
            <DiscoverComponent />
            <AmenitiesComponent />
            <TestimonialsComponent />
            <Footer />
        </>
    )
}

export default Homepage