import React, { useContext, useEffect } from 'react'

import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'
import Loader from 'src/screens/Snippets/Loader'

import Empty from './Empty'
import Full from './Full'
import { Section } from './styles'

const List = () => {
  const { fetchTemplates, setEditing } = useContext(TemplatesControlContext)
  const { isLoading, items, paging } = useContext(TemplatesDataContext)

  const { page } = paging || {}

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const isEditing = urlParams.get('editing')
    const editingPage = Number(urlParams.get('page'))
    const editingId = Number(urlParams.get('id'))

    fetchTemplates(isEditing ? editingPage : page).then(
      () => isEditing && editingId && setEditing({ enable: true, id: editingId })
    )
    // Run only when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section>
      {items?.length ? <Full /> : <Empty />}
      {isLoading && <Loader />}
    </Section>
  )
}

export default List
