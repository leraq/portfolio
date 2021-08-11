import React from 'react'
import { Link, PageProps } from 'gatsby'

const pageStyles = {
  color: `#232129`,
  padding: `96px`,
  fontFamily: `-apple-system, Roboto, sans-serif, serif`,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>Sorry we couldn’t find what you were looking for.</p>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage
