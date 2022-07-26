import ContactUs from "../pages/contactUs";
import Gallery from "../pages/gallery";
import Homepage from "../pages/homepage";
import Locations from "../pages/locations";

export const ROUTES = [
    {
        path: "/",
        component: <Homepage />
    },
    {
        path: "/locations",
        component: <Locations />
    },
    {
        path: "/gallery",
        component: <Gallery />
    },
    {
        path: "/contact-us",
        component: <ContactUs />
    },
]