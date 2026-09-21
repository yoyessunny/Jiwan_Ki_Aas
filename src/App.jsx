import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Internship from "./pages/Internship";
import './App.css'
import "swiper/css";
import "swiper/css/pagination";
import 'remixicon/fonts/remixicon.css'
import SchoolVisit from "./pages/SchoolVisit";
import FieldVisit from "./pages/FieldVisit";
import Birthday from "./pages/Birthday";
import HIVTest from "./pages/HIVTest";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/schoolvisit" element={<SchoolVisit />} />
        <Route path="/fieldvisit" element={<FieldVisit />} />
        <Route path="/HIVTest" element={<HIVTest />} />
        <Route path="/birthday" element={<Birthday />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
