import React from "react";
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const SocialStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    > * {
        margin: 10px 0;
    }

    h1, p {
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }

    li {
        padding: 0 5px;
    }

    a {
        color: white;
    }

    a:hover {
        color: goldenrod;
    }

`;

export default function Social() {
  
  return (
    <SocialStyles id="social">
      <h1 className="strong">Check Out My Latest Activity on Twitter</h1>
      <p>+ connect with me via LinkedIn / follow me on Github</p>
      <ul>
            <li>
              <a href="https://www.linkedin.com/in/mrpeterhanley/" alt="Peter's LinkedIn page"
                ><LinkedInIcon style={{ fontSize: 40 }} /></a>
            </li>
            <li>
              <a href="https://github.com/mrpeterhanley" alt="Peter's Github page"
                ><GitHubIcon fontSize="large" /></a>
            </li>
          </ul>
      <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'peterbrandon'
        }}
        options={{
            height: '450',
            width: '800',
            chrome: 'nofooter'
        }}
      />
    </SocialStyles>
  )
}
