import React from "react";
import styled from 'styled-components';
import Img from "gatsby-image"
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarIcon from '@material-ui/icons/Star';
import ProjectTech from './ProjectTech';
import LinkIcon from '@material-ui/icons/Link';

const FreelanceItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 2px white;
  border-radius: var(--border-radius);
  max-width: 400px;
  width: 100%;
  background-color: var(--black);
  padding: 10px;
  margin: 10px;
  z-index: 2;

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

  .feedback {
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .feedback span {
    text-decoration: underline;
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
          {videoLink && <a href={videoLink} alt='Video Link'><YouTubeIcon style={{ fontSize: 40 }} /></a>}
          <a href={webLink} alt='Website Link'><LanguageIcon style={{ fontSize: 40 }} /></a>
        </div>
      </div>
      <div className="feedback"><span>Client Feedback</span> {feedbackLink && <a href={feedbackLink} alt='Feedback Link'><LinkIcon /></a>}</div>
      <div className="italic">"{feedback}"</div>
      {feedbackLink && <div className="rating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>}
    </FreelanceItemStyles>
  )
}