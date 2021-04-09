import styled from 'styled-components'

export const Container = styled.article`
  align-items: center;
  display: flex;
  min-height: 30px;
  overflow: hidden;
`

export const Icon = styled.img`
  color: ${({ theme }) => theme.color.grayDark};
  height: 20px;
  margin-right: 20px;
  width: 20px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.textColor};
  flex: 1;
  font-size: 1rem;
  font-weight: normal;
  margin-block: 0;
`
