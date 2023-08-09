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
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#instrumentos">Instrumentos</Nav.Link>
            <Nav.Link href="#amplificadores">Amplificadores</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>

          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;













/* 
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
    <CartWidget/>
    </nav>
)};

 */









