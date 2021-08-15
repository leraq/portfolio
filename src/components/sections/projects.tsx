import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const ProjectsTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const Project = styled(Title)`
  padding: 0 30px 0 30px;
  margin: 0;
`

const WIP = styled(Title)`
  padding: 0 30px 0 30px;
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.pastelRed};
    &:hover {
      color: ${({ theme }) => theme.colors.zimaBlue};
    }
  }
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
    align-items: center;
    gap: 1.5rem;
  }

  p {
    max-width: 300px;
    padding: 0 30px 0 30px;
    line-height: 1.8;
  }
`

const StyledImage = styled.div`
  .img {
    border: 30px solid ${({ theme }) => theme.colors.zimaBlue};
    border-left: 5px solid ${({ theme }) => theme.colors.zimaBlue};
    border-right: 5px solid ${({ theme }) => theme.colors.zimaBlue};
    border-bottom: 15px solid ${({ theme }) => theme.colors.zimaBlue};
    clip-path: polygon(
      0px 25px,
      26px 0px,
      calc(60% - 25px) 0px,
      60% 25px,
      100% 25px,
      100% calc(100% - 10px),
      calc(100% - 15px) calc(100% - 10px),
      calc(80% - 10px) calc(100% - 10px),
      calc(80% - 15px) calc(100% - 0px),
      10px calc(100% - 0px),
      0% calc(100% - 10px)
    );
    background-color: ${({ theme }) => theme.background};
  }
`

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "b2b-chat.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Projects: React.FC = () => {
  const data = useStaticQuery(query)
  const image = getImage(data.fileName) as IGatsbyImageData
  return (
    <StyledProjects id="projects">
      <div className="projects-wrapper">
        <div>
          <ProjectsTitle headingLevel="h4">Projects</ProjectsTitle>
          <Project headingLevel="h5">b2b</Project>
          <p>Share tracks with friends</p>
          <B2BLink />
        </div>
        <StyledImage>
          <GatsbyImage image={image} className="img" alt="b2b" />
        </StyledImage>
      </div>
    </StyledProjects>
  )
}

const B2BLink = () => {
  return (
    <WIP headingLevel="h6">
      <a href="https://b2b-testing-95cff.web.app" target="_blank" rel="noreferrer">
        Work in progress
      </a>
    </WIP>
  )
}
