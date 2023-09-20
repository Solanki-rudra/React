import React from 'react'
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <div>
      {/* <Router> */}
      {/* <Navbar />
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
                <h1>This is home</h1>
            </Route>
          </Switch>
        </Router> */}
    </div>
  )
}

export default Home