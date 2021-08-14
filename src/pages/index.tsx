import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav, About, Experience, Projects, Contact } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>footer</footer>
    </Layout>
  )
}

export default IndexPage
