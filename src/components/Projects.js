import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .projects {
    text-align: center;
    height: 750px;
  }
`;

const Projects = () => (
  <StyledComponent>
    <div className="projects">
      <h3>Projects Page Contents are coming soon</h3>
    </div>
  </StyledComponent>
);

export default Projects;
