import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  NavbarBrand,
  Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar className="nav" color="light" sticky="top" bg="light" expand="md">
      <Container>
        <NavbarBrand href="/">Logo</NavbarBrand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </NavItem>

            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item>Dropdown1</NavDropdown.Item>
              <NavDropdown.Item>Dropdown2</NavDropdown.Item>
              <NavDropdown.Item>Dropdown3</NavDropdown.Item>
            </NavDropdown>

            <NavItem>
              <NavLink className="nav-link" to="/page">
                Page
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
