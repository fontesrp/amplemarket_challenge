import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.875rem;
  font-weight: 500;
  height: 40px;
  padding: 0 15px;
`
