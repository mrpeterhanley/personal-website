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

    h1, p {
      margin: 10px 0;
      text-align: center;
    }
`;

export default function Contact() {
    
  return (
    <ContactStyles>
          <h1 className="strong">Contact Me</h1>
          <p>Send me a short message below and I'll get in touch soon!</p>
          <ContactForm />
    </ContactStyles>
  )
}