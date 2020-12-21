import React from "react";
import styled from 'styled-components';
import Img from "gatsby-image"
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarIcon from '@material-ui/icons/Star';
import ProjectTech from './ProjectTech';

const FreelanceItemStyles = styled.div`
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

  .links {
    display: flex;
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

  .subgrid {
    display: grid;
    grid-template-columns: 1fr 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .rating {
    display: flex;
    align-items: center;
    color: goldenrod;
  }

  .rating a {
    margin-left: 5px;
  }

  .rating a:hover {
    cursor: pointer;
  }
`;

export default function FreelanceItem({title, image, description, techItems, webLink, videoLink, feedback, feedbackLink}) {
      
  return (
    <FreelanceItemStyles>
      <h2 className="strong">{title}</h2>
      <a href={webLink} alt='Website Link'>
          <Img fluid={image} />
      </a>
      <p>{description}</p>
      <div className="subgrid">
        <ProjectTech techItems={techItems} />
        <div className="links">
          {videoLink && <a href={videoLink} alt='Video Link'><YouTubeIcon fontSize="large" /></a>}
          <a href={webLink} alt='Website Link'><LanguageIcon fontSize="large" /></a>
        </div>
      </div>
      <p>Client Feedback:</p>
      <p className="italic">"{feedback}"</p>
      {feedbackLink && <div className="rating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> <a href={feedbackLink} alt='Feedback Link'>(link)</a></div>}
    </FreelanceItemStyles>
  )
}