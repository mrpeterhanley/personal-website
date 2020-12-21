import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import FreelanceItem from './FreelanceItem';

const FreelanceProjectStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-top: 58px;

    h1 {
      text-align: center;
    }

    .projectItems {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`;

export default function FreelanceProjects() {

  const ImageData = useStaticQuery(
    graphql`
        query {
            transnetMultilingual: file(relativePath: { eq: "transnet-multilingual.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            patchExperts: file(relativePath: { eq: "patch-experts.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            eraClubhouse: file(relativePath: { eq: "era-clubhouse.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            gyroid: file(relativePath: { eq: "gyroid.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            cedarBooks: file(relativePath: { eq: "cedar-books.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `
  );
   
  return (
    <FreelanceProjectStyles id="freelanceProjects">
      <h1 className="strong">Freelance Projects</h1>
      <div className="projectItems">
        <FreelanceItem 
          title='Transnet Multilingual'
          image={ImageData.transnetMultilingual.childImageSharp.fluid}
          description='A mobile responsive website rebuilt from a previous version created with Flash'
          techItems={['Gatsby','React','JavaScript','CSS Grid','CSS Flex']}
          webLink={"http://www.transnetmultilingual.ca/"}
          videoLink={"https://youtu.be/SjzkqG0FOCY"}
          feedback="Peter delivered exactly as I had requested for my project. Quality work and was done much quicker than expected. Good communication and very responsive. I highly recommend his services!"
          feedbackLink={"https://www.upwork.com/freelancers/~01c0240618a9b83d7f"}
        />
        <FreelanceItem 
          title='Patch Experts'
          image={ImageData.patchExperts.childImageSharp.fluid}
          description='A design proposal for a mobile responsive landing page'
          techItems={['Gatsby','React','JavaScript','CSS Grid','CSS Flex']}
          webLink={"https://patch-experts.netlify.app/"}
          feedback="Out of 5 different proposals submitted, the client said this one stood out BY MILES and he’d love to discuss further"
        />
        <FreelanceItem 
          title='The ERA Clubhouse'
          image={ImageData.eraClubhouse.childImageSharp.fluid}
          description='Building a mobile responsive image map component that could integrate into an existing WordPress theme'
          techItems={['Wordpress','JavaScript','CSS Grid','CSS Flex']}
          webLink={"http://neweramapleridge.com/era-clubhouse/"}
          feedback="Peter was simply amazing. I was super happy with his work and I'm looking forward to working with him again in the close future."
          feedbackLink={"https://www.upwork.com/freelancers/~01c0240618a9b83d7f"}
        />
        <FreelanceItem 
          title='Gyroid.io'
          image={ImageData.gyroid.childImageSharp.fluid}
          description='A mobile responsive landing page based on a PSD design file'
          techItems={['JavaScript','CSS Grid','CSS Flex','AWS Lambda']}
          webLink={"http://gyroid.io/"}
          feedback="Peter went above and beyond to make a great website. He finished the task on time, and was responsive and easy to work with."
          feedbackLink={"https://www.upwork.com/freelancers/~01c0240618a9b83d7f"}
        />
        <FreelanceItem 
          title='Cedar Books'
          image={ImageData.cedarBooks.childImageSharp.fluid}
          description='Re-coding an existing static website to make it fully mobile responsive'
          techItems={['JavaScript','CSS Grid','CSS Flex']}
          webLink={"http://www.cedarbooks.com.au/"}
          feedback="Peter was very accurate and helpful. The work he has done on my website to make it mobile responsive was extremely professional. I will never hesitate to recommend him."
          feedbackLink={"https://www.airtasker.com/users/peter-h-20646999/"}
        />
      </div>
    </FreelanceProjectStyles>
  )
}
