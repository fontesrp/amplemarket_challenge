import React, { useCallback, useContext } from 'react'

import t from 'prop-types'

import { TemplatesControlContext } from 'src/context/TemplatesContext'

import { Container } from './styles'

const PageNumber = ({ isActive, number }) => {
  const { fetchTemplates } = useContext(TemplatesControlContext)

  const onClick = useCallback(() => fetchTemplates(number), [fetchTemplates, number])

  return (
    <Container isActive={isActive} onClick={onClick}>
      {number}
    </Container>
  )
}

PageNumber.propTypes = {
  isActive: t.bool.isRequired,
  number: t.number.isRequired
}

export default PageNumber
