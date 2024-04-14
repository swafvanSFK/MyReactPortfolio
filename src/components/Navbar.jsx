import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import "./Navbar.css";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const navLinks = [
    {
      label: "Home",
      to: "home",
    },
    {
      label: "About",
      to: "about",
    },
    {
      label: "Resume",
      to: "resume",
    },
    {
      label: "Services",
      to: "services",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];
  return (
    <Navbar expand="lg" className="navbar bg-bg-transparent ">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img className="logo-img" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav">
            {navLinks.map((links, index) => (
              <ScrollLink
                className="nav-links"
                key={index}
                to={links.to}
                smooth={true}
                duration={100}
              >
                {links.label}
              </ScrollLink>
            ))}
          </Nav>
          <Nav.Link as={Link} to={'/contact'} href="#link">
            <button className="btn contact-btn">connect</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
