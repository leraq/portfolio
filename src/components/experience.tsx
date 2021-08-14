import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 3rem 0 0 0;
`
const BlueLink = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 0;
`

const GreyHeading = styled(Heading)`
  padding: 10px;
  margin: 0;
`

const StyledExperience = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .jobs-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <BlueHeading headingLevel="h4">Experience</BlueHeading>
      <div className="jobs-wrapper">
        <GreyHeading headingLevel="h5">Software Engineer @ </GreyHeading>
        <JobBtn />
      </div>
    </StyledExperience>
  )
}

const JobBtn = () => {
  return (
    <BlueLink headingLevel="h5">
      <a href="https://visformatics.net" target="_blank" rel="noreferrer">
        Visformatics
      </a>
    </BlueLink>
  )
}
