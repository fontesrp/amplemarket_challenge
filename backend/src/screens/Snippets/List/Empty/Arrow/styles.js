import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  transform: rotate(
    ${({ direction }) => ({ down: 0, left: 90, right: 270, up: 180 }[direction])}deg
  );
  width: fit-content;
`

export const Pointer = styled.i`
  border-color: transparent;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.color.grayLight};
  border-width: ${({ triangleHeight }) => triangleHeight};
  display: inline-block;
  margin: ${({ stemHeight }) => stemHeight} 0 -${({ triangleHeight }) => triangleHeight} 0;
  &:before {
    background-color: ${({ theme }) => theme.color.grayLight};
    content: '';
    height: ${({ stemHeight }) => stemHeight};
    left: 50%;
    margin-left: calc(-${({ stemWidth }) => stemWidth} / 2);
    position: absolute;
    top: 0;
    width: ${({ stemWidth }) => stemWidth};
  }
`
