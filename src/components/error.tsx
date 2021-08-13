import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Heading } from '@components'
import { StyledButton } from '@styles'

const GreyHeading = styled(Heading)`
  padding: 5px;
  margin: 30px 0;
`

export const Error: React.FC = () => {
  return (
    <header>
      <GreyHeading headingLevel="h2">Page not found</GreyHeading>
      <p>Sorry, this page does not exist.</p>
      <StyledButton primary>
        <div className="menu">
          <ul>
            <li>
              <Link className="link" to="/">
                Go back
              </Link>
            </li>
          </ul>
        </div>
      </StyledButton>
    </header>
  )
}
