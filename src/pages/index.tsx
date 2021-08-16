import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, About, Experience, Projects, Contact, Footer } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
