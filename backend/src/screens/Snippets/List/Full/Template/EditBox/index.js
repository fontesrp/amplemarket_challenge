import React, { useCallback, useContext, useRef, useState } from 'react'

import t from 'prop-types'

import api from 'src/api'
import { TemplatesControlContext } from 'src/context/TemplatesContext'
import integration from 'src/integration'
import NameForm from 'src/screens/Snippets/NameForm'

import { Container, Explanation, FormContainer } from './styles'

const EditBox = ({ id, title }) => {
  const { fetchTemplates, setEditing } = useContext(TemplatesControlContext)

  const isSubmitting = useRef(false)
  const [stage, setStage] = useState('form')

  const onSubmit = useCallback(
    newTitle => {
      if (isSubmitting.current) {
        return
      }

      isSubmitting.current = true
      setStage('submitting')

      return (
        integration
          .sendToParent({ type: 'EDIT_GET_BODY' })
          .then(body => api.templates.update({ body, id, title: newTitle }))
          .then(() => fetchTemplates())
          // eslint-disable-next-line no-alert
          .catch(error => alert(error?.apiMessage || error?.message || error))
          .finally(() => {
            isSubmitting.current = false
            setStage('form')
            setEditing({ enable: false })
          })
      )
    },
    [fetchTemplates, id, setEditing]
  )

  return (
    <Container>
      <FormContainer>
        <NameForm initialValue={title} onSubmit={onSubmit} stage={stage} />
      </FormContainer>
      <Explanation>Edit the snippet on Gmail, open back this window and click on Save</Explanation>
    </Container>
  )
}

EditBox.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired
}

export default EditBox
