import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Circle = styled.div`
  animation: ${rotate} ${({ duration }) => duration} linear infinite;
  border-bottom-color: ${({ theme }) => theme.color.warning};
  border-left-color: ${({ theme }) => theme.color.success};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.color.danger};
  border-style: solid;
  border-top-color: ${({ theme }) => theme.color.primary};
  border-width: ${({ thickness }) => thickness};
  display: block;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const Container = styled.div`
  align-items: center;
  background-color: ${({ background, theme }) =>
    ({
      opaque: theme.color.white,
      translucent: theme.color.whiteTranslucent,
      transparent: 'transparent'
    }[background])};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
