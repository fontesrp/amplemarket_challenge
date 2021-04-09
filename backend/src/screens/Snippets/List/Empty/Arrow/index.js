import React from 'react'

import t from 'prop-types'

import { Container, Pointer } from './styles'

const Arrow = ({ direction, stemHeight, stemWidth, triangleHeight }) => (
  <Container direction={direction}>
    <Pointer stemHeight={stemHeight} stemWidth={stemWidth} triangleHeight={triangleHeight} />
  </Container>
)

Arrow.propTypes = {
  direction: t.oneOf(['down', 'left', 'right', 'up']),
  stemHeight: t.string,
  stemWidth: t.string,
  triangleHeight: t.string
}

Arrow.defaultProps = {
  direction: 'down',
  stemHeight: '23px',
  stemWidth: '15px',
  triangleHeight: '20px'
}

export default Arrow
