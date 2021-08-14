import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StyledButton } from '@styles'

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

const StyledNav = styled(StyledButton)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .wrapper {
    display: flex;
    justify-content: center;
  }

  .wrapper ul li {
    text-shadow: none;
    border-color: transparent;
  }

  .wrapper ul li::after {
    border-color: transparent;
  }
`

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <div className="wrapper">
        <ul>
          {routes.map(({ name, url }, i) => {
            return (
              <li key={i.toString()}>
                <Link className="link" to={url}>
                  {name}
                </Link>
              </li>
            )
          })}
          <CVLink />
        </ul>
      </div>
    </StyledNav>
  )
}

const CVLink = () => {
  return (
    <li>
      <a className="link" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        CV
      </a>
    </li>
  )
}
