import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  background #f1f1f1;
  min-height: 100vh;
`
export default ({ children }) => <Container>{children}</Container>
