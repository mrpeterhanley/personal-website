import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const HomeStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    > * {
        margin: 10px;
    }

    .gatsby-image-wrapper {
        border-radius: 50%;
        border: white 5px solid;
    }

    .profileText {
        opacity: 0%;
        animation: fade-in 1.5s ease-in 3.5s;
        animation-fill-mode: forwards;
        text-align: center;
        font-size: 1.25rem;
    }

    @keyframes fade-in {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    h1 {
        font-size: 2.5rem;
    }

    .typewriter h1 {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.07em solid white; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        animation: typing 3.5s steps(17, end), blink-caret 0.8s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        0% {
            border-color: transparent;
        }
        50% {
            border-color: white;
        }
        100% {
            border-color: transparent;
        }
    }

    .downloadButton {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
        text-decoration: none;
        color: var(--black);
        padding: 7px;
        border-radius: var(--border-radius);
        border: none;
        font-size: 0.9em;
        opacity: 0%;
        animation: fade-in 1.5s ease-in 5s;
        animation-fill-mode: forwards;
        
        > * {
          margin: 0 5px;
        }

        &:hover {
            background-color: goldenrod;
        }
    }

    @media (max-width: 700px) {
     
        .profileText {
            font-size: 1rem;
        }
        
    }

    @media (max-width: 350px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export default function Home() {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "profile.jpg" }) {
                    childImageSharp {
                        fixed (width: 170) {
                        ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `
    );

  return (
    <HomeStyles>
      <Img fixed={data.file.childImageSharp.fixed} />
       <div class="typewriter">
          <h1 className="strong">Hello! I'm Peter.</h1>
        </div>
        <p class="profileText">
          I'm a front-end web developer from Melbourne, Australia.
        </p>
        <a className="downloadButton" href="/peter-hanley-resume.pdf" alt="Resume PDF">Download My Resume <CloudDownloadIcon /></a>
    </HomeStyles>
  )
}
