import React, { useCallback, useMemo, useState } from 'react'

import api from 'src/api'
import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'

import Footer from './Footer'
import List from './List'
import { Main } from './styles'

const Snippets = () => {
  const [templates, setTemplates] = useState({ isLoading: true })

  const { page: currentPage } = templates?.paging || {}

  const fetchTemplates = useCallback(
    (page = currentPage) => {
      const updateTemplates = newProps =>
        setTemplates(prevTemplates => ({ ...(prevTemplates || {}), ...newProps }))

      updateTemplates({ isLoading: true })

      api.templates
        .getAll({ page })
        .then(res => {
          const { items, paging } = res.data || {}
          updateTemplates({ items, paging })
        })
        .catch(() => updateTemplates({ items: null, paging: null }))
        .finally(() => updateTemplates({ isLoading: false }))
    },
    [currentPage]
  )

  const setEditing = useCallback(
    ({ enable, id }) =>
      setTemplates(prevTemplates => ({ ...(prevTemplates || {}), editing: { enable, id } })),
    []
  )

  const tamplatesControl = useMemo(() => ({ fetchTemplates, setEditing }), [
    fetchTemplates,
    setEditing
  ])

  return (
    <TemplatesControlContext.Provider value={tamplatesControl}>
      <TemplatesDataContext.Provider value={templates}>
        <Main>
          <List />
          <Footer />
        </Main>
      </TemplatesDataContext.Provider>
    </TemplatesControlContext.Provider>
  )
}

export default Snippets
