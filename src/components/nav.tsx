import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
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

const StyledNav = styled(StyledButton)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  .btn-wrapper ul li {
    text-shadow: none;
    border-color: transparent;
  }

  .btn-wrapper ul li::after {
    border-color: transparent;
  }
`

export const Nav: React.FC = () => {
  return (
    <StyledNav id="nav">
      <div className="btn-wrapper">
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
        </ul>
      </div>
    </StyledNav>
  )
}
