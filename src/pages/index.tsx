import React, { useState } from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav, About, Experience, Projects, Contact, Footer } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  const [menu, setMenuOpen] = useState(false)

  return (
    <Layout>
      <Header />
      <Nav menu={menu} setMenuOpen={setMenuOpen} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
