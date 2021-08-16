import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SEO, Nav } from '@components'
import { GlobalStyles, Container, theme } from '@styles'

export const Layout: React.FC = ({ children }) => {
  const [menu, setMenuOpen] = useState(false)
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <div style={{ position: 'sticky', top: '0' }}>
            <button onClick={() => setMenuOpen(true)}>Menu</button>
          </div>
          <Nav menu={menu} setMenuOpen={setMenuOpen} />
          {children}
        </Container>
      </ThemeProvider>
    </>
  )
}
