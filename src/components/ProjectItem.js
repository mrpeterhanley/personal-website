import React from "react";
import styled from 'styled-components';
import Img from "gatsby-image"
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectTech from './ProjectTech';

const ProjectItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 2px white;
  border-radius: var(--border-radius);
  max-width: 400px;
  width: 100%;
  background-color: rgba(136, 200, 255, 0.1);
  padding: 10px;
  margin: 10px;

  > * {
      margin: 5px;
      text-align: center;
  }

  h2 {
      margin: 10px;
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
      
  return (
    <ProjectItemStyles>
      <h2 className="strong">{title}</h2>
      <a href={webLink} alt='Website Link'>
          <Img fluid={image} />
      </a>
      <p>{description}</p>
      <ProjectTech techItems={techItems} />
      <div className="links">
        <a href={webLink} alt='Website Link'><LanguageIcon fontSize="large" /></a>
        <a href={gitHubLink} alt='Github Link'><GitHubIcon fontSize="large" /></a>
      </div>
    </ProjectItemStyles>
  )
}