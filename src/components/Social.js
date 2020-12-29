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
        margin: 5px 0;
    }

    h1 {
        text-align: center;
    }

    .socialLinks {
        display: flex;
        align-items: center;
        text-align: center;

        > * {
            margin: 0 3px;
        }
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
      <h1 className="strong">Check Out My Latest Tweets</h1>
      <div className="socialLinks">
          <span>& connect with me via</span>
          <a href="https://www.linkedin.com/in/mrpeterhanley/" alt="Peter's LinkedIn page"
                ><LinkedInIcon style={{ fontSize: 40 }} /></a>
      </div>
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
