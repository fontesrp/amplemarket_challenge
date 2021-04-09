import Base from './Base'

const templatesPath = '/templates'

class Templates extends Base {
  create({ body, title }) {
    return this.post(templatesPath, { body, title })
  }
  getAll({ items = 7, page = 1 }) {
    return this.get(templatesPath, { items, page })
  }
  getById({ id }) {
    return this.get(`${templatesPath}/${id}`)
  }
  remove({ id }) {
    return this.delete(`${templatesPath}/${id}`)
  }
  update({ body, id, title }) {
    return this.put(`${templatesPath}/${id}`, { body, title })
  }
}

export default new Templates()
