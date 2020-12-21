import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const PersonalProjectStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-top: 58px;
    margin-bottom: 100px;

    h1 {
      text-align: center;
    }

    .projectItems {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`;

export default function PersonalProjects() {

  const ImageData = useStaticQuery(
    graphql`
        query {
            whereInWorld: file(relativePath: { eq: "where-in-world.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            worldwideWeather: file(relativePath: { eq: "worldwide-weather.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            rockScissorsPaper: file(relativePath: { eq: "rock-paper-scissors.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            },
            taskPlannerPro: file(relativePath: { eq: "task-planner-pro.jpg" }) {
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
    <PersonalProjectStyles id="personalProjects">
      <h1 className="strong">Personal Projects</h1>
      <div className="projectItems">
      <ProjectItem 
          title='Worldwide Weather'
          image={ImageData.worldwideWeather.childImageSharp.fluid}
          description='Team project - get a current & weekly weather forecast for any city in the world'
          techItems={['CSS Grid','CSS Flex','Typescript','React','JavaScript','Open Weather API']}
          webLink={"https://worldwide-weather.netlify.app/"}
          gitHubLink={"https://github.com/chingu-voyages/v25-geckos-team-04"}
        />
        <ProjectItem 
          title='Where In The World?'
          image={ImageData.whereInWorld.childImageSharp.fluid}
          description='Solo project - a worldwide country information lookup app.'
          techItems={['CSS Grid','React','Material UI','JavaScript','3rd Party API']}
          webLink={"https://where-in-world.netlify.app/"}
          gitHubLink={"https://github.com/mrpeterhanley/Where-In-The-World"}
        />
        <ProjectItem 
          title='Rock Scissors Paper'
          image={ImageData.rockScissorsPaper.childImageSharp.fluid}
          description='Solo project - a modern update on an age-old classic game.'
          techItems={['SCSS','CSS Flex','React','JavaScript','Webpack']}
          webLink={"https://play-rock-paper-scissor.netlify.app/"}
          gitHubLink={"https://github.com/mrpeterhanley/rock-paper-scissors"}
        />
        <ProjectItem 
          title='Task Planner Pro'
          image={ImageData.taskPlannerPro.childImageSharp.fluid}
          description='Team project - a feature rich task planner app inspired by Asana.'
          techItems={['Bootstrap','JavaScript','LocalStorage API','Parcel','Jest']}
          webLink={"https://taskplannerpro.netlify.app/"}
          gitHubLink={"https://github.com/mrpeterhanley/Task-Planner-Pro"}
        />
      </div>
    </PersonalProjectStyles>
  )
}
