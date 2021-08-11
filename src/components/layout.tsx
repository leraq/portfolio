import React from 'react'
import { Container, Head } from '@components'

export const Layout: React.FC = ({ children }) => {
  return (
    <Container id="layout">
      <Head />
      {children}
    </Container>
  )
}
