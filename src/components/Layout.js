import React from "react";
import 'normalize.css';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import GlobalStyles from "../styles/GlobalStyles";
import Nav from './Nav';
import Footer from './Footer'
import SEO from './SEO';

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .children {
      flex: 1;
      padding: 10px;
  }
`;

export default function Layout({ children }) {

    const data = useStaticQuery(
        graphql`
          query {
            file(relativePath: { eq: "cool-background.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
    );

    return (
      <>
        <SEO />
        <GlobalStyles />
        <LayoutStyles>
          <Nav />
          <BackgroundImage style={{ backgroundSize: '100%', backgroundRepeat: 'repeat' }} fluid={data.file.childImageSharp.fluid} className="children">    
            {children}
          </BackgroundImage>
          <Footer />
        </LayoutStyles>
      </>
    )
}
