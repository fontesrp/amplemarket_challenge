import React, { useCallback, useEffect, useMemo, useState } from 'react'

import api from 'src/api'
import { TemplatesControlContext, TemplatesDataContext } from 'src/context/TemplatesContext'
import integration from 'src/integration'

import Footer from './Footer'
import List from './List'
import { Main } from './styles'

const Snippets = () => {
  const [templates, setTemplates] = useState({ isLoading: true })

  const { enable: editingEnable, id: editingId, keepEditBody: editingKeepEditBody } =
    templates?.editing || {}

  const { page: currentPage } = templates?.paging || {}

  const fetchTemplates = useCallback(
    (page = currentPage) => {
      const updateTemplates = newProps =>
        setTemplates(prevTemplates => ({ ...(prevTemplates || {}), ...newProps }))

      updateTemplates({ isLoading: true })

      return api.templates
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
    ({ enable, id, keepEditBody }) =>
      setTemplates(prevTemplates => ({
        ...(prevTemplates || {}),
        editing: { enable, id, keepEditBody }
      })),
    []
  )

  const tamplatesControl = useMemo(() => ({ fetchTemplates, setEditing }), [
    fetchTemplates,
    setEditing
  ])

  useEffect(() => {
    if (!editingEnable || !editingId || editingKeepEditBody) {
      integration.sendToParent({ type: 'EDIT_TEMPLATE_FINISH' })
      return
    }

    api.templates.getById({ id: editingId }).then(res =>
      integration.sendToParent({
        data: { body: res.data.body, id: editingId, page: currentPage },
        type: 'EDIT_TEMPLATE'
      })
    )
  }, [currentPage, editingEnable, editingId, editingKeepEditBody])

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
