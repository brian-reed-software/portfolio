import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import Tilt from 'react-parallax-tilt';
import './Navigation.css'
const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");
    const onExited = () => setCollapseClasses("");
    useEffect(() => {
      let headroom = new Headroom(document.getElementById("navbar-main"));
      // initialise
      headroom.init();
    })
    return ( 
        <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h6 className="text-info">{'brian.reed.software@outlook.com'}</h6>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global" style={{filter: "drop-shadow(0px 2px 3px black)"}}>
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      
                      <Link to="/">
                        <h6 className="text-white" style={{filter: "drop-shadow(0px 2px 3px black)"}}>{greetings.name}</h6>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global" style={{filter: "drop-shadow(0px 2px 3px black)"}}>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink
                      size="lg"
                      className="nav-link-icon"
                      href={socialLinks.twitter}
                      target="_blank"
                      style={{filter: "drop-shadow(0px 2px 3px black)"}}
                    >
                      <i className="fa fa-twitter-square" />
                      <span size="lg" className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink                      
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                      style={{filter: "drop-shadow(0px 2px 3px black)"}}
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                      style={{filter: "drop-shadow(0px 2px 3px black)"}}
                    >
                    <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
     );
}
export default Navigation;