import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/core'

const routes = [
  {
    name: 'About',
    route: '#about',
  },
  {
    name: 'Experience',
    route: '#experience',
  },
  {
    name: 'Projects',
    route: '#projects',
  },
  {
    name: 'Contact',
    route: '#contact',
  },
]

const StyledNav = styled(StyledButton)`
  position: sticky;
  top: 0;
  z-index: 99;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: ${({ theme }) => theme.background};
    color: #fff;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: hidden;
  }

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

interface INavProps {
  menu: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Nav: React.FC<INavProps> = ({ menu, setMenuOpen }) => {
  const menuAnimation = useSpring({
    transform: menu ? `translateY(0)` : `translateY(-100%)`,
    opacity: menu ? 1 : 0,
  })
  return (
    <StyledNav id="nav">
      <div>
        <button onClick={() => setMenuOpen(true)}>Menu</button>
      </div>
      <animated.div className="menu btn-wrapper" style={menuAnimation}>
        <ul>
          {routes.map(({ name, route }, i) => {
            return (
              <li key={i.toString()}>
                <button className="link" onClick={() => handleNavigation(route, setMenuOpen)}>
                  {name}
                </button>
              </li>
            )
          })}
        </ul>
      </animated.div>
    </StyledNav>
  )
}

const handleNavigation = (route: string, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setMenuOpen(false)
  return scrollTo(route)
}
