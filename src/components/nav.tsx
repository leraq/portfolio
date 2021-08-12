import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const routes = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Experience',
    url: '#experience',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
]

const CVLink = () => {
  return (
    <a className="cv-button" href="/CV_Leon_Delaimy_PDF.pdf" target="_blank" rel="noopener noreferrer">
      VIEW CV
    </a>
  )
}

const StyledHeader = styled.header`
  padding: 15px 200px;
  @media (max-width: 768px) {
    padding: 15px;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`

const StyledNav = styled.nav``

const StyledLinks = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-weight: 400;
    font-size: 15px;
  }

  .cv-button {
    border-bottom: 1px solid ${({ theme }) => theme.colors.pastelRed};
  }
`

export const Nav: React.FC = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <ul>
            {routes.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              )
            })}
            <CVLink />
          </ul>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}
