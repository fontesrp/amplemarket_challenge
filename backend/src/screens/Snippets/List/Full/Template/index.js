import React, { useCallback, useContext, useState } from 'react'

import t from 'prop-types'

import api from 'src/api'
import { TemplatesDataContext } from 'src/context/TemplatesContext'
import integration from 'src/integration'
import Loader from 'src/screens/Snippets/Loader'

import EditBox from './EditBox'
import EditControls from './EditControls'
import { Article, Container, Preview, Title } from './styles'

const Template = ({ id, preview, title }) => {
  const { editing } = useContext(TemplatesDataContext)

  const [isLoading, setIsLoading] = useState(false)

  const isBeingEdited = id === editing?.id
  const isEditing = !!editing?.id
  const isInEditingMode = !!editing?.enable

  const onClick = useCallback(() => {
    if (isInEditingMode) {
      return Promise.resolve()
    }

    setIsLoading(true)

    return (
      api.templates
        .getById({ id })
        .then(res => integration.sendToParent({ data: res.data?.body, type: 'USE_TEMPLATE' }))
        // eslint-disable-next-line no-alert
        .catch(error => alert(error?.apiMessage || error?.message || error))
        .finally(() => setIsLoading(false))
    )
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
      {isLoading && <Loader size="15px" />}
    </Container>
  )
}

Template.propTypes = {
  id: t.number.isRequired,
  preview: t.string.isRequired,
  title: t.string.isRequired
}

export default Template
