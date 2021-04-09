import React from 'react'

import t from 'prop-types'

import { ButtonStyled, Icon } from './styles'

const Button = ({ alt, hoverColor, icon, isActive, onClick }) => (
  <ButtonStyled hoverColor={hoverColor} isActive={isActive} onClick={onClick}>
    <Icon alt={alt} src={icon} />
  </ButtonStyled>
)

Button.propTypes = {
  alt: t.string.isRequired,
  hoverColor: t.bool,
  icon: t.string.isRequired,
  isActive: t.bool,
  onClick: t.func.isRequired
}

Button.defaultProps = {
  hoverColor: false,
  isActive: false
}

export default Button
