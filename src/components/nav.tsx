import React, { Fragment } from 'react'
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
    <a className="cv-button" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
      VIEW CV
    </a>
  )
}

const StyledHeader = styled.header`
  padding: 15px 200px;
  @media (max-width: 768px) {
    padding: 15px;
  }
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

  span {
    color: ${({ theme }) => theme.colors.pastelRed};
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
                <Fragment key={i.toString()}>
                  <li>
                    <Link to={url}>{name}</Link>
                  </li>
                  <span>|</span>
                </Fragment>
              )
            })}
            <CVLink />
          </ul>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}
