import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";

function navbar() {
  function activer({isActive}){
    return{
      color: isActive ? 'red' : 'white'
    }
  } 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink style={activer} className='m-1 ' to="/">Home</NavLink>
            <NavLink style={activer} className='m-1' to="/about">About</NavLink>
            <NavLink style={activer} className='m-1' to="/contact">Contact</NavLink>
            <NavLink style={activer} className='m-1' to="/learn">Learn</NavLink>
          </Nav>
          <Link className="btn bg-primary" to='/login'>Login</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;