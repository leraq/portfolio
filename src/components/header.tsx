import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'
import { StyledButton } from '@styles'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 3rem 0 0 0;
`

const GreyHeading = styled(Heading)`
  padding: 5px;
  margin: 0;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  p {
    padding: 10px;
  }
`

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <BlueHeading headingLevel="h5">Hey, my name is</BlueHeading>
      <GreyHeading headingLevel="h2">Leon Delaimy</GreyHeading>
      <p>I&apos;m a software engineer with full stack experience</p>
      <EnterBtn />
    </StyledHeader>
  )
}

const EnterBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <li>
            <AnchorLink className="link" to="#nav" title="Enter" />
          </li>
        </ul>
      </div>
    </StyledButton>
  )
}
