import React from 'react';
import { genericHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const ScrollLink = (props) => genericHashLink(props, Link);

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollWithOffset(el, offset) {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });   
    if (this.state.isOpen) {
      this.toggle(); 
    }
  }
  
  render() {
    return (
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand to="/" tag={Link}>thesingingdesigner</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={ScrollLink} to="/#home" scroll={el => this.scrollWithOffset(el, 85)}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ScrollLink} to="/#work-experience" scroll={el => this.scrollWithOffset(el, 85)}>Work Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ScrollLink} to="/#contact" scroll={el => this.scrollWithOffset(el, 85)}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
