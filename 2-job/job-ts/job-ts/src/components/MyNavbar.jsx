
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'




const MyNavbar = () => {
  const navigate = useNavigate();
  const handleFav = () => {
    navigate("/favourites")
  }
  const handleHome = () => {
    navigate("/")
  }


    return (
      <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fw-bold">Job Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link onClick={handleHome}>Home</Nav.Link>
          
            <Nav.Link onClick={handleFav}>Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    
    )
}

export default MyNavbar;