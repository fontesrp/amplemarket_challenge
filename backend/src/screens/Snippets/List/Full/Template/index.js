import React, { useCallback, useContext } from 'react'

import t from 'prop-types'

import { TemplatesDataContext } from 'src/context/TemplatesContext'

import EditBox from './EditBox'
import EditControls from './EditControls'
import { Article, Container, Preview, Title } from './styles'

const Template = ({ id, preview, title }) => {
  const { editing } = useContext(TemplatesDataContext)

  const isBeingEdited = id === editing?.id
  const isEditing = !!editing?.id
  const isInEditingMode = !!editing?.enable

  const onClick = useCallback(() => {
    // TODO: integration
    if (!isInEditingMode) {
      // eslint-disable-next-line no-console
      console.log('clicked!', id)
    }
  }, [id, isInEditingMode])

  return (
    <Container isBeingEdited={isBeingEdited}>
      <Article onClick={onClick}>
        <Title>{title}</Title>
        {editing?.enable ? (
          <EditControls id={id} isBeingEdited={isBeingEdited} isEditing={isEditing} />
        ) : (
          <Preview>{preview}</Preview>
        )}
      </Article>
      {isBeingEdited && <EditBox id={id} title={title} />}
    </Container>
  )
}

Template.propTypes = {
  id: t.number.isRequired,
  preview: t.string.isRequired,
  title: t.string.isRequired
}

export default Template
