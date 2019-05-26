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
  Container,
} from 'reactstrap';
import styled from 'styled-components';
import logo from '../../assets/images/thesingingdesigner.svg';

const BrandLogo = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

const TopNavBar= styled(Navbar)`
  padding: 0px;
  @media (min-width: 768px) {
    .ml-auto.navbar-nav {
      margin-top: 20px;
    }
  }
`;

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
      <TopNavBar color="light" light expand="md" fixed="top">
        <Container>
          <NavbarBrand to="/" tag={Link}>
            <BrandLogo>
              <img src={logo} />
            </BrandLogo>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {typeof this.props.children === 'undefined' ? (
                <React.Fragment>
                  <NavItem>
                    <NavLink tag={ScrollLink} to="/#home" scroll={el => this.scrollWithOffset(el, 130)}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ScrollLink} to="/#work-experience" scroll={el => this.scrollWithOffset(el, 130)}>Work Experience</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ScrollLink} to="/#education" scroll={el => this.scrollWithOffset(el, 130)}>Education</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ScrollLink} to="/#contact" scroll={el => this.scrollWithOffset(el, 130)}>Contact</NavLink>
                  </NavItem>
                </React.Fragment>
              ) : (
                this.props.children
              )}
            </Nav>
          </Collapse>
        </Container>
      </TopNavBar>
    );
  }
}
