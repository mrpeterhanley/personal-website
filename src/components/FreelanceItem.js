import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Img from "gatsby-image"
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarIcon from '@material-ui/icons/Star';
import ProjectTech from './ProjectTech';
import LinkIcon from '@material-ui/icons/Link';
import Tilt from 'react-parallax-tilt';

const FreelanceItemStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  grid-template-rows: 50px 150px 80px 70px 50px 70px 50px;
  border: solid 2px white;
  border-radius: var(--border-radius);
  max-width: 400px;
  background-color: rgba(136, 200, 255, 0.15);
  padding: 10px;

  > * {
      margin: 5px 10px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
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

  @media (max-width: 450px) {
    grid-template-rows: auto auto auto auto auto auto auto;
  }
`;

export default function FreelanceItem({title, image, description, techItems, webLink, videoLink, feedback, feedbackLink}) {

  const [tiltEnable, setTiltEnable] = useState(true);

  useEffect(function() {
      if (window.innerWidth < 750) {
        setTiltEnable(false);
      }
  }, []);
      
  return (
    <Tilt className="tilt" tiltEnable={tiltEnable} >
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
    </Tilt>
  )
}