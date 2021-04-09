const repository = require('repository/TemplatesRepository')

const TemplatesService = {
  create({ body, title }) {
    return repository.create([title, body]).catch(error => {
      throw new Error(error.message)
    })
  },
  getAll({ items, page }) {
    let fetchedItems

    return repository
      .getAll([items, items * (page - 1)])
      .then(entries => {
        if (!entries?.length) {
          throw new Error('No templates found')
        }
        fetchedItems = entries.map(({ body, id, title }) => ({
          id,
          preview: `${body || ''}`.replace(/\n/g, ' ').replace(/\s+/g, ' ').substring(0, 50),
          title
        }))
        return repository.getTotal()
      })
      .then(total => ({
        items: fetchedItems,
        paging: {
          items,
          itemsFetched: fetchedItems.length,
          page,
          total: Number(total?.[0]?.items) || 0
        }
      }))
      .catch(() => null)
  },
  getById(templateId) {
    return repository.getById([templateId]).then(entries => (entries?.length ? entries[0] : null))
  },
  remove(templateId) {
    return repository.remove([templateId])
  },
  update({ body, templateId, title }) {
    return repository.update([templateId, title, body])
  }
}

module.exports = TemplatesService
