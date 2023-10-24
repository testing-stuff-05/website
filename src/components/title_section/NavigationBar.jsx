import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./styles.css";
import logo from "./Images/logo.png";
import logo_light from "./Images/logo_light.png";
import NavbarElement from "./NavbarElement";
import { Link as LinkScroll } from "react-scroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link as LinkRoute } from "react-router-dom";

function NavigationBar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={fix ? "navbar-fixed" : "navbar-regular"}
      variant={fix ? "light" : "dark"}
    >
      <Navbar.Brand>
        <LinkScroll to="home" spy={true} smooth={true} offset={0} duration={0}>
          <img
            style={{ cursor: "pointer", transition: ".3s ease-in-out" }}
            src={fix ? logo_light : logo}
            height="50"
            alt="Vivaah Event Planner"
          />
        </LinkScroll>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="navbarScroll">
        <Nav>
          <NavbarElement linkText="Home" reference="home" />
          <NavbarElement linkText="Services" reference="services" />
          <NavbarElement linkText="About Us" reference="about" />
          <NavbarElement linkText="Gallery" reference="gallery" />
          <NavbarElement linkText="Testimonials" reference="testimonials" />
          <NavbarElement linkText="Contact Us" reference="contact" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

<BrowserRouter>
  <Routes>
    <Route
      path=""
      element={<NavbarElement linkText="Home" reference="home" />}
    ></Route>
    <Route
      path="/Services"
      element={<NavbarElement linkText="Services" reference="services" />}
    ></Route>
    <Route
      path=""
      element={<NavbarElement linkText="About Us" reference="about" />}
    ></Route>
    <Route
      path=""
      element={<NavbarElement linkText="Gallery" reference="gallery" />}
    ></Route>
    <Route
      path=""
      element={
        <NavbarElement linkText="Testimonials" reference="testimonials" />
      }
    ></Route>
    <Route
      path=""
      element={<NavbarElement linkText="Contact Us" reference="contact" />}
    ></Route>
  </Routes>
</BrowserRouter>;
