import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.grayBackground : theme.color.white};
  border: 0;
  border-radius: 5px;
  height: 90%;
  padding: 0 15px;
  &:hover {
    background-color: ${({ theme }) => theme.color.grayBackground};
  }
  &:hover img {
    ${({ hoverColor }) =>
      hoverColor && 'filter: invert(32%) sepia(95%) saturate(5) hue-rotate(323deg)'};
  }
  ${({ isActive }) =>
    isActive && 'img { filter: invert(32%) sepia(95%) saturate(5) hue-rotate(188deg); }'};
`

export const Icon = styled.img`
  color: ${({ theme }) => theme.color.grayDark};
  height: 20px;
  width: 20px;
`
