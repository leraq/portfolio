import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Error } from '@components'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Error />
    </Layout>
  )
}

export default NotFoundPage
