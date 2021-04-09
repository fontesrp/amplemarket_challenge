import styled from 'styled-components'

export const Arrow = styled.i`
  border-color: ${({ theme }) => theme.color.grayLight};
  border-style: solid;
  border-width: 1px 1px 0 0;
  cursor: pointer;
  display: inline-block;
  height: 7px;
  margin: 4px;
  position: relative;
  transform: rotate(
    ${({ direction }) => ({ down: 135, left: 225, right: 45, up: 315 }[direction] || 45)}deg
  );
  width: 7px;
`

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: auto;
  max-height: 45px;
`
