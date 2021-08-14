import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'
import { StyledButton } from '@styles'

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
  max-width: 750px;

  .job {
    display: flex;
  }

  .bullet-points {
    display: flex;
  }

  ul {
    list-style-type: '-';
  }

  p {
    padding: 0 30px 0 30px;
    line-height: 1.8;
    font-size: 0.75rem;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Experience: React.FC = () => {
  return (
    <StyledExperience id="experience">
      <BlueHeading headingLevel="h4">Experience</BlueHeading>
      <div className="job">
        <GreyHeading headingLevel="h5">Software Engineer @ </GreyHeading>
        <JobLink />
      </div>
      <div className="bullet-points">
        <Summary />
      </div>
      <CVBtn />
    </StyledExperience>
  )
}

const JobLink = () => {
  return (
    <BlueLink headingLevel="h5">
      <a href="https://visformatics.net" target="_blank" rel="noreferrer">
        Visformatics
      </a>
    </BlueLink>
  )
}

const CVBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <li>
            <a className="link" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>
    </StyledButton>
  )
}

const Summary = () => {
  return (
    <ul>
      <li>
        <p>
          Communicating and collaborating with multi-disciplinary, cross functional teams of engineers, designers, data
          scientists, managers and stakeholders on a daily basis
        </p>
      </li>
      <li>
        <p>
          Developing and shipping across the stack, working on databases, backend APIs, frontends and infrastructure
          deployments
        </p>
      </li>
      <li>
        <p>
          Involved in the full life cycle of product development, with responsibility in gathering requirements,
          documentation, data modelling, designing and testing in all projects, striving for code quality, robust
          architecture and extensibility
        </p>
      </li>
    </ul>
  )
}
