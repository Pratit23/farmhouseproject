import React from 'react'
import IntroComponent from '../components/homepage/introComponent'
import DiscoverComponent from '../components/homepage/discoverComponent'
import TestimonialsComponent from '../components/homepage/testimonialsComponent'
import Footer from '../components/global/Footer'

function Homepage() {
    return (
        <>
            <IntroComponent />
            <DiscoverComponent />
            <TestimonialsComponent />
            <Footer />
        </>
    )
}

export default Homepage