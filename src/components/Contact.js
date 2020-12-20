import React from "react";
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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

    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 100%;
    }

    input,
    textarea {
        padding: 5px;
        margin: 10px;
        border: 0;
        border-radius: var(--border-radius);
    }

    button {
        background-color: var(--blue);
        color: var(--black);
        padding: 7px;
        margin: 0 10px;
        border-radius: var(--border-radius);
        border: none;

        &:hover {
            background-color: goldenrod;
        }
    }
`;

export default function Contact() {
    
  return (
    <ContactStyles>
          <h1>Contact Me</h1>
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

          <form class="contact-form" method="POST">
            <input type="text" id="Name" placeholder="Name" />
            <input type="email" id="Email" placeholder="Email" />
            <textarea
              rows="5"
              cols="50"
              id="Message"
              placeholder="Message"
            ></textarea>
            <p id="response"></p>
            <button type="submit">SEND</button>
          </form>
    </ContactStyles>
  )
}