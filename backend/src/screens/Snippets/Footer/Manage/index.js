import React, { useCallback, useContext } from 'react'

import { ThemeContext } from 'styled-components'

import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'
import Item from 'src/screens/Snippets/Footer/Item'

import { Button } from './styles'

const Manage = () => {
  const { setEditing } = useContext(TemplatesControlContext)
  const { editing } = useContext(TemplatesDataContext)
  const theme = useContext(ThemeContext)

  const onClick = useCallback(
    evt => !evt.target.matches('.manage-submit-button') && setEditing({ enable: true }),
    [setEditing]
  )

  const onSubmit = useCallback(() => setEditing({ enable: false }), [setEditing])

  return (
    <Item icon={theme.icons.gear} onClick={onClick} title="Manage Snippets">
      {!!editing?.enable && (
        <Button className="manage-submit-button" onClick={onSubmit} type="button">
          Done
        </Button>
      )}
    </Item>
  )
}

export default Manage
