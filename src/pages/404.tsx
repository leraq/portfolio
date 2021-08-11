import React from 'react'
import { Link, PageProps } from 'gatsby'
import { Layout } from '@components'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFoundPage
