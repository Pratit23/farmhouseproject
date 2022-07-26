import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './pages/homepage'
import ContactUs from './pages/contactUs'
import Locations from './pages/locations'
import Gallery from './pages/gallery'


function App() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-orange-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
