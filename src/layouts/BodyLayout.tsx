import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

const Main = styled.div`
  position: relative;
  display: block;

  width: 100%;
  max-width: 1023px;

  padding: 9rem 3rem 0 3rem;
  margin: 0 auto;
`

export default ({ children }) => (
  <Main>
    <Header />
    {children}
  </Main>
)
