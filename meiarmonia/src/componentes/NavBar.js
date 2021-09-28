
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'



const NavBar = () => {

  return (

    <div>
      <Navbar bg="light" expand="lg">

        <Container>
          <Navbar.Brand href="#home">MeiEnArmonia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">escencias</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">cremas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">jabones veganos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">linea vegetal</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>

      </Navbar>



    </div>


  )
}

export default NavBar