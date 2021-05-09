import React, { useState, useEffect } from "react";
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from "../styles/GlobalStyles";
import Nav from './Nav';
import Footer from './Footer'
import SEO from './SEO';
import Particles from 'react-tsparticles';

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black);

  .children {
      flex: 1;
      padding: 0 5px;
  }

  canvas {
    position:fixed !important;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
`;

export default function Layout({ children }) {

    const [maxParticles, setMaxParticles] = useState(50);

    useEffect(function() {
      if (window.innerWidth >= 1000) {
        setMaxParticles(150);
      } else if (window.innerWidth >= 500) {
        setMaxParticles(100);
      }
    }, []);

    return (
      <>
        <SEO />
        <GlobalStyles />
        <LayoutStyles>
          <Nav />
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": maxParticles
                  },
                  "size": {
                      "value": 3
                  },
                  "color": "#88c8ff",
                  "line_linked": {
                    "color": "#88c8ff"
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
            }} 
          />
          <div className="children">
            {children}
          </div>
          <Footer />
        </LayoutStyles>
      </>
    )
}
