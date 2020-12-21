import React from "react";
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactForm from './ContactForm';

const ContactStyles = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1, p, ul {
      margin: 5px 0;
    }

    h1, p {
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
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

export default function Contact() {
    
  return (
    <ContactStyles>
          <h1 className="strong">Contact Me</h1>
          <p>via social media or send me a message below</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mrpeterhanley/" alt="Peter's LinkedIn page"
                ><LinkedInIcon fontSize="large" /></a>
            </li>
            <li>
              <a href="https://twitter.com/peterbrandon" alt="Peter's Twitter page"
                ><TwitterIcon fontSize="large" /></a>
            </li>
            <li>
              <a href="https://github.com/mrpeterhanley" alt="Peter's Github page"
                ><GitHubIcon fontSize="large" /></a>
            </li>
          </ul>
          <ContactForm />
    </ContactStyles>
  )
}