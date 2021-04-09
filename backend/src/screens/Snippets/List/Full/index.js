import React, { Fragment, useContext } from 'react'

import { TemplatesDataContext } from 'src/context/TemplatesContext'

import Paging from './Paging'
import { Separator, Title } from './styles'
import Template from './Template'

const List = () => {
  const { items, paging } = useContext(TemplatesDataContext)

  const { items: itemQtt, page, total } = paging || {}

  return (
    <>
      <Title>Personal Snippets</Title>
      {items?.map(({ id, preview, title }, idx) => (
        <Fragment key={`${id}`}>
          <Template id={id} preview={preview} title={title} />
          {idx < items.length - 1 && <Separator />}
        </Fragment>
      ))}
      {(page > 1 || total > (page || 1) * (itemQtt || 1)) && <Paging />}
    </>
  )
}

export default List
