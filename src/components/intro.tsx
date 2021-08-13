import React from 'react'
import { Heading } from '@components'
import styled from 'styled-components'

const BlueHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.zimaBlue};
`

export const Intro: React.FC = () => {
  return (
    <>
      <BlueHeading headingLevel="h5">Hey, my name is</BlueHeading>
      <Heading headingLevel="h2">Leon Delaimy</Heading>
    </>
  )
}
