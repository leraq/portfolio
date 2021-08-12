import React from 'react'
import { PageProps } from 'gatsby'
import { Layout } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h4>Hey, my name is</h4>
      <h1>Leon Delaimy</h1>
    </Layout>
  )
}

export default IndexPage
