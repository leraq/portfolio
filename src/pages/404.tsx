import React from 'react'
import { Link, PageProps } from 'gatsby'
import { Container } from '@components'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <main>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>Sorry we couldn’t find what you were looking for.</p>
        <Link to="/">Go home</Link>
      </main>
    </Container>
  )
}

export default NotFoundPage
