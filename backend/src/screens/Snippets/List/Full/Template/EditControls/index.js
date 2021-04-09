import React, { useCallback, useContext, useState } from 'react'

import t from 'prop-types'
import { ThemeContext } from 'styled-components'

import api from 'src/api'
import { TemplatesControlContext } from 'src/context/TemplatesContext'
import Loader from 'src/screens/Snippets/Loader'

import Button from './Button'
import { Container, Cover, Separator } from './styles'

const EditControls = ({ id, isBeingEdited, isEditing }) => {
  const { fetchTemplates, setEditing } = useContext(TemplatesControlContext)
  const theme = useContext(ThemeContext)

  const [isLoading, setIsLoading] = useState(false)

  const onDeleteClick = useCallback(() => {
    setIsLoading(true)

    return (
      api.templates
        .remove({ id })
        .then(() => fetchTemplates())
        // eslint-disable-next-line no-alert
        .catch(error => alert(error?.message || error))
        .finally(() => setIsLoading(false))
    )
  }, [fetchTemplates, id])

  const onEditClick = useCallback(
    () => setEditing({ enable: true, id: isBeingEdited ? null : id }),
    [id, isBeingEdited, setEditing]
  )

  return (
    (isEditing && !isBeingEdited && <Cover />) || (
      <>
        <Container>
          <Button
            alt="Edit"
            icon={theme.icons.pencil}
            isActive={isBeingEdited}
            onClick={onEditClick}
          />
          <Separator />
          <Button alt="Delete" hoverColor icon={theme.icons.trash} onClick={onDeleteClick} />
        </Container>
        {isLoading && <Loader size="15px" />}
      </>
    )
  )
}

EditControls.propTypes = {
  id: t.number.isRequired,
  isBeingEdited: t.bool.isRequired,
  isEditing: t.bool.isRequired
}

export default EditControls
