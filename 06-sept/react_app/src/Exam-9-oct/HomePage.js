import React from 'react'
import Form from './Form';
import LandingPage from './LandingPage';
import { 
    Routes,
    Route,
 } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Routes> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/add" element={<Form />} />
     </Routes>
    </div>
  )
}

export default HomePage