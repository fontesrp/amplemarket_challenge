import React from 'react'

import t from 'prop-types'

import { Circle, Container } from './styles'

const Loader = ({ background, duration, size, thickness }) => (
  <Container background={background}>
    <Circle duration={duration} size={size} thickness={thickness} />
  </Container>
)

Loader.propTypes = {
  background: t.oneOf(['opaque', 'translucent', 'transparent']),
  duration: t.string,
  size: t.string,
  thickness: t.string
}

Loader.defaultProps = {
  background: 'translucent',
  duration: '1s',
  size: '50px',
  thickness: '4px'
}

export default Loader
