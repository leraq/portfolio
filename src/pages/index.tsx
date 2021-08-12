import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Heading } from '@components'
import styled from 'styled-components'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BlueHeading headingLevel="h5">Hey, my name is</BlueHeading>
      <Heading headingLevel="h2">Leon Delaimy</Heading>
    </Layout>
  )
}

export default IndexPage
