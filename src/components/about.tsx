import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'
import { StaticImage } from 'gatsby-plugin-image'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .about {
    displat: flex;
    flex-direction: column;
  }

  p {
    max-width: 300px;
    padding: 0 30px 0 30px;
    line-height: 1.8;
  }
`

const StyledImage = styled.div`
  .img {
    border: 30px solid ${({ theme }) => theme.colors.pastelRed};
    border-left: 5px solid ${({ theme }) => theme.colors.pastelRed};
    border-right: 5px solid ${({ theme }) => theme.colors.pastelRed};
    border-bottom: 15px solid ${({ theme }) => theme.colors.pastelRed};
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

export const About: React.FC = () => {
  return (
    <section>
      <StyledAbout>
        <div className="about-wrapper">
          <div className="about">
            <BlueHeading headingLevel="h4">About me</BlueHeading>
            <p>
              I&apos;m a software engineer based in Manchester, passionate about science and tech. I&apos;m currently
              working with a growing healthcare tech start-up called
              <a href="https://visformatics.net" target="_blank" rel="noreferrer">
                Visformatics
              </a>
            </p>
          </div>
          <StyledImage>
            <StaticImage className="img" width={300} height={300} src="../images/me.jpg" alt="" />
          </StyledImage>
        </div>
      </StyledAbout>
    </section>
  )
}
