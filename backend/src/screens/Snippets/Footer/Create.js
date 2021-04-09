import React, { useCallback, useContext, useRef, useState } from 'react'

import { ThemeContext } from 'styled-components'

import api from 'src/api'
import { TemplatesControlContext } from 'src/context/TemplatesContext'
import integration from 'src/integration'
import Item from 'src/screens/Snippets/Footer/Item'
import NameForm from 'src/screens/Snippets/NameForm'

const Create = () => {
  const { fetchTemplates } = useContext(TemplatesControlContext)
  const theme = useContext(ThemeContext)

  const isSubmitting = useRef(false)
  const [stage, setStage] = useState(null)

  const onClick = useCallback(
    evt =>
      setStage(prevStage =>
        evt.target.matches('.footer-item-container') && prevStage === 'form'
          ? null
          : prevStage || 'form'
      ),
    []
  )

  const onSubmit = useCallback(
    title => {
      if (isSubmitting.current) {
        return
      }

      isSubmitting.current = true
      setStage('submitting')

      return integration
        .sendToParent({ type: 'GET_BODY' })
        .then(body => api.templates.create({ body, title }))
        .then(() => fetchTemplates())
        .then(() => setStage(null))
        .catch(error => {
          // eslint-disable-next-line no-alert
          alert(error.apiMessage)
          setStage('form')
        })
        .finally(() => (isSubmitting.current = false))
    },
    [fetchTemplates]
  )

  return (
    <Item icon={theme.icons.plus} onClick={onClick} title="Make this draft a Snippet">
      {!!stage && <NameForm onSubmit={onSubmit} stage={stage} />}
    </Item>
  )
}

export default Create
