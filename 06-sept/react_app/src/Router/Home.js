import React from 'react'
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';
import Home2 from './Home2';
import PageNotFound from './PageNotFound';
import Login from './Login';
import { 
  Routes,
  useParams,
  Route,
  Outlet,
  Link
} from "react-router-dom";

 
function Home() {
  return (
    <div>
       <Navbar />
      <Routes> 
            <Route path="/" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/learn" element={<Learn />} >
              <Route path='javaScript' element={<JavaScript />}></Route>
              <Route path=':courseId' element={<Course />}></Route>
              <Route path='react' element={<LearnReact />}>
                <Route path='ractNative' element={<ReactNative />}></Route>
                <Route path='nextJs' element={<NextJs />}></Route>
              </Route>
            </Route> 
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default Home

function NotFound() {
  return(
    <h1>page not found</h1>
  )
}


function Learn() {
  return(
    <>
      <h1>Learn about Web-Development</h1>
      <Link className='btn bg-primary m-1' to='javaScript'>javaScript</Link>
      <Link className='btn bg-primary m-1' to='react'>react</Link>
      <Outlet />
    </>
  )
}

function JavaScript() {
  return(
    <h1>javaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore consectetur dolorum id! Deserunt.</h1>
  )
}

function LearnReact() {
  return(
    <>
      <h1>React Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempore?</h1>
      <Link className='btn bg-success m-1' to='ractNative' >React-Native</Link>
      <Link className='btn bg-success m-1' to='nextJs' >NextJs</Link>
      <Outlet />
    </>
  )
}

function ReactNative(){
  return(
    <>
      <h1>React-Native Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit itaque odit sequi debitis hic fugiat delectus reiciendis veniam ut.</h1>
    </>
  ) 
}

function NextJs(){
  return(
    <>
      <h1>NextJs Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit itaque odit sequi debitis hic fugiat delectus reiciendis veniam ut.</h1>
    </>
  )
}
function Course(){
  const {courseId} = useParams()
  return(
    <>
      <h1>{courseId} is not in my case</h1>
    </>
  )
}