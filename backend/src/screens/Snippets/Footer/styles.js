import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.color.grayBackground};
  border-top: 1px solid ${({ theme }) => theme.color.grayMedium};
  padding: 10px 15px;
`

export const Separator = styled.div`
  margin-top: 15px;
`
