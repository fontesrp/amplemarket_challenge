import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ isActive, theme }) => (isActive ? theme.color.primary : theme.color.grayLight)};
  cursor: pointer;
  padding: 7px;
  :not(:last-of-type) {
    margin-right: 3px;
  }
`
