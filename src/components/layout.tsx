import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SEO } from '@components'
import { GlobalStyles, Container, theme } from '@styles'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container id="root">{children}</Container>
      </ThemeProvider>
    </>
  )
}
