import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './pages/homepage'
import ContactUs from './pages/contactUs'
import Locations from './pages/locations'
import Gallery from './pages/gallery'
import { ROUTES } from "./config/routes";


function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <BrowserRouter>
        <Routes>
          {
            ROUTES.map(route => {
              return (
                <Route path={route.path} element={route.component} key={route.path} />
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
