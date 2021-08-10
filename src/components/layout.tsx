import React from 'react'
import { Head } from '@components'

export const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Head />
      {children}
    </div>
  )
}