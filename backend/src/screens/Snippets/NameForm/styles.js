import styled, { css } from 'styled-components'

const cleanFieldset = css`
  border: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
`

export const Fieldset = styled.fieldset`
  ${cleanFieldset}
  flex: 1;
  margin-right: 10px;
`

export const FormStyled = styled.form`
  align-items: flex-end;
  display: flex;
  flex: 1;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  border-radius: 5px;
  box-sizing: border-box;
  height: 40px;
  padding: 0 15px;
  width: 100%;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.color.textColor};
  display: block;
  font-size: 0.75rem;
  margin-bottom: 5px;
  width: 100%;
`

export const Submit = styled.input`
  background-color: ${({ theme }) => theme.color.primary};
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.875rem;
  font-weight: 500;
  height: 40px;
  padding: 0 15px;
`

export const SubmitContainer = styled.fieldset`
  ${cleanFieldset}
  position: relative;
`
