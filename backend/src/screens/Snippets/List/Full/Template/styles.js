import styled, { css } from 'styled-components'

export const Article = styled.article`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
`

const floatingCnotainer = css`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  flex: unset;
  left: 10px;
  max-height: unset;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translate(0, -50%);
  z-index: 1;
  article:first-of-type {
    height: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 45px;
  ${({ isBeingEdited }) => isBeingEdited && floatingCnotainer};
`

const wrapText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Preview = styled.p`
  ${wrapText}
  color: ${({ theme }) => theme.color.grayLight};
  flex: 1;
  font-size: 0.8rem;
  margin-block: 0;
  text-align: right;
`

export const Title = styled.h1`
  ${wrapText}
  color: ${({ theme }) => theme.color.textColor};
  font-size: 1rem;
  margin-block: 0;
  margin-right: 10px;
  max-width: 50%;
  font-weight: normal;
`
