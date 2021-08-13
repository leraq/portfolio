import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Intro } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  )
}

export default IndexPage
