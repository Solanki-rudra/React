import React from 'react'
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';
import Home2 from './Home2';
import { 
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <div>
       <Navbar />
      <Routes> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home2 />} />
        </Routes>
    </div>
  )
}

export default Home