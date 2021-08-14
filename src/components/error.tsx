import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Heading } from '@components'
import { StyledButton } from '@styles'

const GreyHeading = styled(Heading)`
  padding: 5px;
  margin: 30px 0;
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
    text-align: center;
  }
`

export const Error: React.FC = () => {
  return (
    <StyledHeader>
      <GreyHeading headingLevel="h3">Page not found</GreyHeading>
      <p>Sorry, this page does not exist.</p>
      <GoBackBtn />
    </StyledHeader>
  )
}

const GoBackBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <li>
            <Link className="link" to="/">
              Go back
            </Link>
          </li>
        </ul>
      </div>
    </StyledButton>
  )
}
