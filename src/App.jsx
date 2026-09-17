import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Internship from "./pages/Internship";
import './App.css'
import "swiper/css";
import "swiper/css/pagination";
import 'remixicon/fonts/remixicon.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
