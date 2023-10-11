import React from 'react'
import { 
    Routes,
    Route,
 } from "react-router-dom";
 import LandingaPage from './LandingaPage';
 import FormFile from './FormFile';

function MainFile() {
  return (
    <div>
      <Routes> 
            <Route path="/" element={<LandingaPage />} />
            <Route path="/add" element={<FormFile/>} />/
     </Routes>
    </div>
  )
}

export default MainFile
