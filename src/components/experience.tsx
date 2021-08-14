import React from 'react'
import styled from 'styled-components'

const StyledExperience = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .experience-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <div className="experience-wrapper">Experience</div>
    </StyledExperience>
  )
}
