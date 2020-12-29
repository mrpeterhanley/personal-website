import React from "react";
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1 {
        text-align: center;
    }

    .socialLinks {
        margin-bottom: 5px;
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

    @media (max-width: 500px) {
        padding-top: 45px;
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
            height: '500',
            width: '800',
            chrome: 'nofooter'
        }}
      />
    </SocialStyles>
  )
}
