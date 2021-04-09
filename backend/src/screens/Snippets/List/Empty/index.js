import React from 'react'

import Arrow from './Arrow'
import { Footer, Instructions, Sad, Title } from './styles'

const Empty = () => (
  <>
    <Title>You don't have any snippets yet</Title>
    <Sad>:-(</Sad>
    <Footer>
      <Instructions>Save your current draft as a snippet</Instructions>
      <Arrow />
    </Footer>
  </>
)

export default Empty
