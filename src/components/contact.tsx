import React from 'react'
import styled from 'styled-components'

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .contact-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Contact: React.FC = () => {
  return (
    <StyledContact>
      <div className="contact-wrapper">Contact me</div>
    </StyledContact>
  )
}
