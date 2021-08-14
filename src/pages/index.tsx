import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav, About, Experience, Projects } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <footer>footer</footer>
    </Layout>
  )
}

export default IndexPage
