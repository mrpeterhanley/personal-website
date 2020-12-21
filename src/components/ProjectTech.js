import React from "react";
import styled from 'styled-components';

const ProjectTechStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .techItem {
    padding: 5px 10px;
    margin: 5px;
    text-align: center;
    color: var(--black);
    background-color: var(--blue);
    border-radius: var(--border-radius);
    font-size: 0.9em;
  }
`;

export default function ProjectTech({ techItems }) {
   
  return (
    <ProjectTechStyles>
      {techItems.map(item => (<div className="techItem">{item}</div>))}
    </ProjectTechStyles>
  )
}