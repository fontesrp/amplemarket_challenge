import styled from 'styled-components'

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.color.grayMedium};
  height: 1px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grayLight};
  font-size: 1rem;
  margin-block: 0;
  font-weight: normal;
`
