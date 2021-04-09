import React, { useCallback, useContext, useMemo } from 'react'

import t from 'prop-types'

import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'

import PageNumber from './PageNumber'
import { Arrow, Container } from './styles'

const Paging = ({ pageQtt }) => {
  const { fetchTemplates } = useContext(TemplatesControlContext)
  const { paging } = useContext(TemplatesDataContext)

  const { items: itemQtt, page, total } = paging || {}

  const firstPage = 1
  const lastPage = Math.ceil((total || 0) / (itemQtt || 1))

  const shownPages = useMemo(
    () =>
      Array.from({ length: pageQtt })
        .map((_, idx) => idx - Math.floor(pageQtt / 2) + (pageQtt % 2 ? 0 : 1))
        .map(
          (operand, _, operands) =>
            operand +
            ((page === firstPage && operands[operands.length - 1]) ||
              (page === lastPage && -1 * operands[operands.length - 1]) ||
              0)
        )
        .map(operand => operand + (page || 0)),
    [lastPage, page, pageQtt]
  )

  const showLeftArrow = shownPages[0] > firstPage
  const showRightArrow = shownPages[shownPages.length - 1] < lastPage

  const goToNextPage = useCallback(() => fetchTemplates(page + 1), [fetchTemplates, page])
  const goToPreviousPage = useCallback(() => fetchTemplates(page - 1), [fetchTemplates, page])

  return (
    <Container>
      {showLeftArrow && <Arrow direction="left" onClick={goToPreviousPage} />}
      {shownPages.map(pageNumber => (
        <PageNumber isActive={pageNumber === page} key={`${pageNumber}`} number={pageNumber} />
      ))}
      {showRightArrow && <Arrow onClick={goToNextPage} />}
    </Container>
  )
}

Paging.propTypes = {
  pageQtt: t.number
}

Paging.defaultProps = {
  pageQtt: 3
}

export default Paging

// s =>  0  1 2 3 4 5 6
// 1 =>  0
// 2 =>  0  1
// 3 => -1  0 1
// 4 => -1  0 1 2
// 5 => -2 -1 0 1 2
// 6 => -2 -1 0 1 2 3
// 7 => -2 -1 0 1 2 3 4

// size => Array.from({ length: size }).map((_, idx) => idx - (size % 2 === 0 ? Math.floor(size / 2) - 1 : Math.floor(size / 2)))
// size => Array.from({ length: size }).map((_, idx) => idx - Math.floor(size / 2) + (size % 2 ? 0 : 1))
