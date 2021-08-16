import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import { ArrowDownIcon, ArrowUpIcon } from '@components'

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

const StyledNav = styled.nav`
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
    height: 100%;
    width: 100%;
    top: 0;
    overflow: hidden;
  }
`

const StyledButtons = styled(StyledButton)`
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

const StyledIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.zimaBlue};
    padding: 5px;
    height: auto;
    width: 4rem;
    &:hover {
      fill: ${({ theme }) => theme.colors.pastelRed};
    }
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
      <StyledIcon>
        <button onClick={() => setMenuOpen(true)}>
          <ArrowDownIcon />
        </button>
      </StyledIcon>
      <StyledButtons>
        <animated.div className="menu btn-wrapper" style={menuAnimation}>
          <StyledIcon>
            <button onClick={() => setMenuOpen(false)}>
              <ArrowUpIcon />
            </button>
          </StyledIcon>
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
      </StyledButtons>
    </StyledNav>
  )
}

const handleNavigation = (route: string, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setMenuOpen(false)
  return scrollTo(route)
}
