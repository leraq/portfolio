import React from 'react'
import { SEO, Nav } from '@components'
import { GlobalStyles, Container, theme } from '@styles'
import { ThemeProvider } from 'styled-components'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Nav />
          <main>{children}</main>
          <footer>footer</footer>
        </Container>
      </ThemeProvider>
    </>
  )
}
