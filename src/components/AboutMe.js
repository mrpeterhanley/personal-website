import React from "react";
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutMeStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 100px;

    .grid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 70vh;

        > * {
            margin: 0 10px;
        }
    }

    .gatsby-image-wrapper {
        border-radius: var(--border-radius);
        z-index: 2;
    }

    .text {
        border: 2px solid white;
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        background-color: rgba(21, 16, 25, 0.85);
        padding: 10px;
        z-index: 2;

        p {
            margin: 10px;
            text-align: left;
        }

        a {
            color: white;
        }

        a:hover {
            color: goldenrod;
        }
    }

    @media (min-width: 1500px) {
        .text {
            padding: 80px 50px;

            p {
                text-align: left;
            }
        }
    }

    @media (max-width: 1200px) {
        padding-top: 45px;

        .grid {
            grid-template-rows: auto;
        }
    }

    @media (max-width: 800px) {

        .text {
            align-items: center;

            p {
              text-align: center;
            }
        }

        .grid {
            grid-template-columns: 1fr;

            > * {
                margin: 10px;
            }
        }
    }

    @media (max-width: 450px) {
        .text {
            padding: 0;
        }
    }
`;

export default function AboutMe() {
    const ImageData = useStaticQuery(
        graphql`
            query {
                aboutMe: file(relativePath: { eq: "about-me.jpg" }) {
                    childImageSharp {
                        fluid (maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
  return (
    <AboutMeStyles id="aboutMe">
      <h1 className="strong">About Me</h1>
      <div className="grid">
          <Img fluid={ImageData.aboutMe.childImageSharp.fluid} />
          <div className="text">
            <p>Hi there, I'm Peter! <span role="img" aria-label="waving hand emoji">👋</span></p>
            <p>I'm born and bred in Melbourne, Australia, with a lifelong passion for working with technology and taking on new challenges <span role="img" aria-label="muscle arm emoji">💪</span>. I have over 8 years experience in technical solutions sales and marketing in Asia, and now I’m looking for a new challenge as a front-end developer <span role="img" aria-label="man with laptop emoji">👨‍💻</span>.
            </p>
            <p>Recently I been putting my skills to use in the real world, working as a freelance developer on platforms such as <a href="https://www.upwork.com/freelancers/~01c0240618a9b83d7f" alt="Upwork profile page">Upwork</a> and <a href="https://www.airtasker.com/users/peter-h-20646999/" alt="Airtasker profile page">Airtasker</a>. I really enjoy building mobile-responsive websites and web applications that not only implement useful and effective functionality but also are clean & well designed, visually appealing and unique.</p>
            <p>The languages & frameworks I am currently using include JavaScript, React, Gatsby & GraphQL, SCSS / SASS, Node.js & PHP, and AWS serverless technologies (I am both an AWS <a href="https://www.youracclaim.com/badges/8332676d-640f-43cd-92cd-4deb1f36c8bf" alt="AWS developer qualifications page">Certified Developer</a> & <a href="https://www.youracclaim.com/badges/bc0a4983-acb3-426a-90ff-b54341b728f1" alt="AWS SA qualifications page">Certified Solutions Architect</a>).</p>
            <p>In my free time I love travelling <span role="img" aria-label="airplane emoji">✈️</span>, spending time outdoors <span role="img" aria-label="outdoors emoji">🏞️</span>, and keeping fit <span role="img" aria-label="running emoji">🏃</span>. Recently I have been enjoying SUP <span role="img" aria-label="surfing emoji">🏄</span> (Stand-Up Paddleboarding) in the summer, while in the winter I love soaking in hot springs! <span role="img" aria-label="hotsprings emoji">♨️</span></p>
        </div>
      </div>
    </AboutMeStyles>
  )
}