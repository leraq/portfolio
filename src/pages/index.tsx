import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Intro, Nav } from '@components'

const IndexPage: React.FC<PageProps> = ({ children }) => {
  return (
    <Layout>
      <Intro />
      <Nav />
      <main style={{ height: '1000px' }}>{children}</main>
      <footer></footer>
    </Layout>
  )
}

export default IndexPage
