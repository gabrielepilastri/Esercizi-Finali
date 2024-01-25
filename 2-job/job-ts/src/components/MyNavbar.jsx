import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import '../App.css'

const MyNavbar = () => {
  const navigate = useNavigate();
  const handleFav = () => {
    navigate("/favourites");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="mynavbar sm-fixed-top">
        <Container>
          <Navbar.Brand className="fw-bold text-light fs-2">Job Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#36DFFF', color: '#ffffff' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-3">
              <Nav.Link onClick={handleHome} className="text-light">Home</Nav.Link>

              <Nav.Link onClick={handleFav} className="text-light">Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
