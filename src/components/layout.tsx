import React from 'react'
import { Head } from '@components'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

export const Layout: React.FC = ({ children }) => {
  return (
    <Container id="layout">
      <Head />
      {children}
    </Container>
  )
}
