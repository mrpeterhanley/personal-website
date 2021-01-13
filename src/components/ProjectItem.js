import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Img from "gatsby-image"
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectTech from './ProjectTech';
import Tilt from 'react-parallax-tilt';

const ProjectItemStyles = styled.div`
   display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  grid-template-rows: minmax(50px, auto) auto 80px minmax(70px, auto) 50px;
  border: solid 2px white;
  border-radius: var(--border-radius);
  max-width: 400px;
  background-color: rgba(136, 200, 255, 0.15);
  padding: 10px;

  > * {
      margin: 5px;
      text-align: center;
  }

  h2 {
      margin: 10px;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .links > * {
      margin: 0 5px;
  }

  a {
      color: white;
      width: 100%;
  }

  a:hover {
      color: goldenrod;
  }

  .gatsby-image-wrapper {
      max-width: 300px;
      margin: auto;
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      border-radius: var(--border-radius);
  }

  .gatsby-image-wrapper:hover {
      border-color: goldenrod;
  }
`;

export default function ProjectItem({title, image, description, techItems, webLink, gitHubLink}) {

  const [tiltEnable, setTiltEnable] = useState(true);

  useEffect(function() {
      if (window.innerWidth < 750) {
        setTiltEnable(false);
      }
  }, []);
      
  return (
    <Tilt className="tilt" tiltEnable={tiltEnable} >
    <ProjectItemStyles>
      <h2 className="strong">{title}</h2>
      <a href={webLink} alt='Website Link'>
          <Img fluid={image} />
      </a>
      <p>{description}</p>
      <ProjectTech techItems={techItems} />
      <div className="links">
        <a href={webLink} alt='Website Link'><LanguageIcon style={{ fontSize: 40 }} /></a>
        <a href={gitHubLink} alt='Github Link'><GitHubIcon fontSize="large" /></a>
      </div>
    </ProjectItemStyles>
    </Tilt>
  )
}