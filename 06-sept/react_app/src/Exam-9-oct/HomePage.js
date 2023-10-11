import React from 'react'
import Form from './Form';
import LandingPage from './LandingPage';
import PagenotFound from './PagenotFound.js';
import { 
    Routes,
    Route,
 } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Routes> 
            <Route path="/" element={<LandingPage />} />
            <Route path="add" element={<Form />} >
              <Route path=":useId" element={<Form />} />
            </Route>
            <Route path="*" element={<PagenotFound />} />
     </Routes>
    </div>
  )
} 
export default HomePage