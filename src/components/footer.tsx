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
const StyledIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.zimaBlue};
    padding: 5px;
    height: 3rem;
    width: 2.5rem;
    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.colors.pastelRed};
    }
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="icons">
        <StyledIcon>
          <a href="https://github.com/leraq" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href="https://www.linkedin.com/in/leon-delaimy-606505150/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </StyledIcon>
      </div>
      <p>Built by Leon Delaimy</p>
    </StyledFooter>
  )
}
