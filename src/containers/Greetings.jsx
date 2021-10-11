import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';
import { Fade } from 'react-reveal';
import {Link} from 'react-scroll'
// import React, { Component } from 'react'


import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "components/SocialLinks";


const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })

  
  return ( 
    <Fade top duration={1000} distance="40px">
        <main ref="main" >
          <div className="position-relative">
          
            <section 
            style={{backgroundImage: `url("")` }} 
            className="section section-lg section-shaped pb-5 section-profile-cover">
              <div className="shape shape-style-1 bg-gradient-info" style={{
                    // boxShadow: "inset 0px 0px 20px lightsteelblue, 0px 0px 20px steelblue; filter: drop-shadow(white 0px 0px 50px); backdrop-filter: blur(10px); border-radius: 15px;"
              }}>
              <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex" >
                <div className="col px-0">
                  <Row>
                    <Col lg="6" style={{filter: "drop-shadow(white 0px 0px 50px)"}}>
                    

                    <h1 className="display- text-white bg-black border-1" style={{filter: "drop-shadow(0px 0px 70px white)", textShadow: "0px 2px 2px black"}}>
                      {greetings.title}
                      </h1>
                      
                      <p className="lead text-white" style={{filter: "drop-shadow(0px 0px 70px white)", textShadow: "0px 2px 2px black"}}>{greetings.description}</p>
                      <h1 className="" style={{width: "700px"}}>
                      <SocialLinks />
                      </h1>
                      </Col>
                    <Col lg="6" style={{filter: "drop-shadow(0px 5px 150px white)"}}>
                      <GreetingLottie  animationData={code}/>
                    </Col>
                  </Row>
                </div>
                
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew" style={{filter: "drop-shadow(0px 5px 5px black)"}}>
                <svg
                  
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                  style={{fill: "#212122"}}
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
 
export default Greetings;
