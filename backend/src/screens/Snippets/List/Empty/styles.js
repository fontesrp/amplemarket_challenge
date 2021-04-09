import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const mainText = css`
  color: ${({ theme }) => theme.color.grayLight};
  font-size: 1.8rem;
  font-weight: bold;
  margin-block: 0;
  text-align: center;
`

export const Instructions = styled.p`
  ${mainText};
  font-size: 1.3rem;
  margin-bottom: 15px;
`

export const Sad = styled.p`
  ${mainText};
  margin-bottom: auto;
`

export const Title = styled.h1`
  ${mainText};
  margin-top: auto;
`
