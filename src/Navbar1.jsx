import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


const Navbar1 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
          <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">Code Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact activeClassName="activeLink" className="nav-link" to="/">Home</NavLink>
            <NavLink activeClassName="activeLink" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="activeLink" className="nav-link" to="/contact">Contact</NavLink>
            <NavLink activeClassName="activeLink" className="nav-link" to="/service">Services</NavLink>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
          </div>
        </div>

      </div>
      

    </>
  )
}
export default Navbar1;