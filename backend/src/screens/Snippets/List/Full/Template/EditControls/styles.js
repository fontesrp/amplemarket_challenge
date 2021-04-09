import styled from 'styled-components'

export const Container = styled.footer`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  max-width: 50%;
`

export const Cover = styled.div`
  background-color: ${({ theme }) => theme.color.whiteTranslucent};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Separator = styled.div`
  margin-right: 10px;
`
