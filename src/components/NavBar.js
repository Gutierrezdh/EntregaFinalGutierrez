import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MelodyMarket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/instrumentos">Instrumentos</Nav.Link>
            <Nav.Link as={Link} to="/category/amplificadores">Amplificadores</Nav.Link>
            <Nav.Link as={Link} to="/category/accesorios">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;