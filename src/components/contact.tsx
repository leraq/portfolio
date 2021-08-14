import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import { Heading } from '@components'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  margin: 3rem 0 0 0;
`

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  p {
    padding: 0 30px 0 30px;
    max-width: 400px;
    text-align: center;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Contact: React.FC = () => {
  return (
    <StyledContact id="contact">
      <BlueHeading headingLevel="h4">Contact me</BlueHeading>
      <p>If you want to get hold of me, send over an email</p>
      <GetInTouchBtn />
    </StyledContact>
  )
}

const GetInTouchBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
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
