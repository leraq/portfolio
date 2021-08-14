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

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <BlueHeading headingLevel="h5">Hey, my name is</BlueHeading>
      <GreyHeading headingLevel="h2">Leon Delaimy</GreyHeading>
      <p>{`I'm a software engineer with full stack experience.`}</p>
      <GetInTouchBtn />
    </StyledHeader>
  )
}

const GetInTouchBtn = () => {
  return (
    <StyledButton primary>
      <div className="wrapper">
        <ul>
          <li>
            <a className="link" href="mailto:ldelaimy1@gmail.com">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </StyledButton>
  )
}
