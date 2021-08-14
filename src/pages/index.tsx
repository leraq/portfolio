import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav, About } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <About />
      </main>
      <footer>footer</footer>
    </Layout>
  )
}

export default IndexPage
