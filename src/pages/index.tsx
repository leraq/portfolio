import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav } from '@components'

const IndexPage: React.FC<PageProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Nav />
      <main style={{ height: '1000px' }}>{children}</main>
      <footer>footer</footer>
    </Layout>
  )
}

export default IndexPage
