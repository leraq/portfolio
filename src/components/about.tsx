import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .about-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <div className="about-wrapper">About me</div>
    </StyledAbout>
  )
}
