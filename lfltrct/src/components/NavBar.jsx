import React, { useState } from 'react';
import BasicMap from './BasicMap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark" expand="md">
        <NavbarBrand href="/">Leaflet Sandbox</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/staticrender/">Static Render</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dynamicrender/">Dynamic Render</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
