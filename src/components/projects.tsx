import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const GreyHeading = styled(Heading)`
  padding: 0 30px 0 30px;
  margin: 0;
`

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
  }

  p {
    max-width: 400px;
    padding: 0 30px 0 30px;
    line-height: 1.8;
  }
`

export const Projects: React.FC = () => {
  return (
    <StyledProjects id="projects">
      <div className="projects-wrapper">
        <div>
          <BlueHeading headingLevel="h4">Projects</BlueHeading>
          <GreyHeading headingLevel="h5">b2b</GreyHeading>
          <p>Share tracks with friends</p>
          <p>Full stack web application with Postgres database, Golang API using GraphQL and React frontend</p>
        </div>
      </div>
    </StyledProjects>
  )
}
