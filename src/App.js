import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './pages/homepage'
import ContactUs from './pages/contactUs'
import Locations from './pages/locations'
import Gallery from './pages/gallery'
import { ROUTES } from "./config/routes";


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
  );
}

export default App;
