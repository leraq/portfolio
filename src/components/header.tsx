import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { Trail } from '@animations'
import { StyledButton } from '@styles'
import scrollTo from 'gatsby-plugin-smoothscroll'

const MyNameIs = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 3rem 0 0 0;
`

const Name = styled(Title)`
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
    <StyledHeader id="intro">
      <Trail open={true}>
        <MyNameIs headingLevel="h5">Hey, my name is</MyNameIs>
        <Name headingLevel="h2">Leon Delaimy</Name>
        <p>I&apos;m a software engineer with full stack experience</p>
        <FindOutMoreBtn />
      </Trail>
    </StyledHeader>
  )
}

const FindOutMoreBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <li>
            <button className="link" onClick={() => scrollTo('#about')}>
              Find out more
            </button>
          </li>
        </ul>
      </div>
    </StyledButton>
  )
}
