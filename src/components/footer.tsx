import React from 'react'
import styled from 'styled-components'
import { GitHubIcon, LinkedInIcon } from '@components'

const StyledFooter = styled.footer`
  margin: 0 auto;

  .icons {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`
const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.pastelRed};
  padding: 5px;
  height: 3rem;
  width: 2.5rem;
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="icons">
        <StyledIcon>
          <GitHubIcon />
        </StyledIcon>
        <StyledIcon>
          <LinkedInIcon />
        </StyledIcon>
      </div>
      <p>Built by Leon Delaimy</p>
    </StyledFooter>
  )
}
