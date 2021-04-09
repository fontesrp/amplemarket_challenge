import React, { useContext, useEffect } from 'react'

import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'
import Loader from 'src/screens/Snippets/Loader'

import Empty from './Empty'
import Full from './Full'
import { Section } from './styles'

const List = () => {
  const { fetchTemplates } = useContext(TemplatesControlContext)
  const { isLoading, items, paging } = useContext(TemplatesDataContext)

  const { page } = paging || {}

  useEffect(() => {
    fetchTemplates(page)
    // Run only when the component mounts
    // eslint-disable-next-line
  }, [])

  return (
    <Section>
      {items?.length ? <Full /> : <Empty />}
      {isLoading && <Loader />}
    </Section>
  )
}

export default List
