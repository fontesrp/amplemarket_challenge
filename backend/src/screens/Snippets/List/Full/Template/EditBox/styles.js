import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.color.grayBackground};
  border: 1px solid ${({ theme }) => theme.color.grayMedium};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
`

export const Explanation = styled.h1`
  color: ${({ theme }) => theme.color.textColor};
  font-size: 0.9rem;
  font-weight: 300;
  margin-block: 0;
  margin-top: 15px;
  text-align: center;
`

export const FormContainer = styled.section`
  display: flex;
`
