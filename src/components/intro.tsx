import React from 'react'
import styled from 'styled-components'
import { Heading } from '@components'
import { StyledButton } from '@styles'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 3rem 0 0 0;
`

const GreyHeading = styled(Heading)`
  padding: 5px;
  margin: 0;
`

export const Intro: React.FC = () => {
  return (
    <header>
      <BlueHeading headingLevel="h5">Hey, my name is</BlueHeading>
      <GreyHeading headingLevel="h2">Leon Delaimy</GreyHeading>
      <p>{`I'm a software engineer with full stack experience.`}</p>
      <StyledButton primary>
        <div className="menu">
          <ul>
            <EmailLink />
          </ul>
        </div>
      </StyledButton>
    </header>
  )
}

const EmailLink = () => {
  return (
    <li>
      <a className="link" href="mailto:ldelaimy1@gmail.com">
        Get in touch
      </a>
    </li>
  )
}
