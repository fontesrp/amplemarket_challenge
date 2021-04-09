import React, { useCallback, useState } from 'react'

import t from 'prop-types'

import Loader from 'src/screens/Snippets/Loader'

import { Fieldset, FormStyled, Input, Label, Submit, SubmitContainer } from './styles'

const NameForm = ({ initialValue, onSubmit, stage }) => {
  const [value, setValue] = useState(initialValue || '')

  const onInputChange = useCallback(evt => setValue(evt.target.value.substring(0, 50)), [])
  const onFormSubmit = useCallback(
    evt => {
      evt.preventDefault()
      onSubmit(value)
    },
    [onSubmit, value]
  )

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <Fieldset>
        <Label htmlFor="name">name</Label>
        <Input
          autoFocus
          disabled={stage !== 'form'}
          maxlength={50}
          name="name"
          onChange={onInputChange}
          placeholder="My new snippet"
          required
          type="text"
          value={value}
        />
      </Fieldset>
      <SubmitContainer>
        <Submit type="submit" value="Save" />
        {stage === 'submitting' && <Loader size="25px" />}
      </SubmitContainer>
    </FormStyled>
  )
}

NameForm.propTypes = {
  initialValue: t.string,
  onSubmit: t.func.isRequired,
  stage: t.string
}

NameForm.defaultProps = {
  initialValue: '',
  stage: null
}

export default NameForm
