import React from 'react'
import styled from 'styled-components'

const StyledProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .projects-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <div className="projects-wrapper">Projects</div>
    </StyledProjects>
  )
}
