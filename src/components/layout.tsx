import React from 'react'
import { Head } from '@components'
import { Container, GlobalStyles, theme } from '@styles'
import { ThemeProvider } from 'styled-components'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container id="root">
          <div id="content">
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  )
}
