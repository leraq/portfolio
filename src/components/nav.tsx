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

const StyledLinks = styled(StyledButton)`
  .menu ul li {
    font-size: 20px;
    text-shadow: none;
    border-color: transparent;
  }

  .menu ul li::after {
    border-color: transparent;
  }
`

export const Nav: React.FC = () => {
  return (
    <nav>
      <StyledLinks>
        <div className="menu">
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
      </StyledLinks>
    </nav>
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
