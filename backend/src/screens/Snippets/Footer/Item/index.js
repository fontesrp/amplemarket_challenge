import React from 'react'

import t from 'prop-types'

import { Container, Icon, Title } from './styles'

const Item = ({ children, icon, onClick, title }) => (
  <Container className="footer-item-container" onClick={onClick}>
    <Icon src={icon} />
    {children || <Title>{title}</Title>}
  </Container>
)

Item.propTypes = {
  children: t.any,
  icon: t.string.isRequired,
  onClick: t.func.isRequired,
  title: t.string.isRequired
}

Item.defaultProps = {
  children: null
}

export default Item
