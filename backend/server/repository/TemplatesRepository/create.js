const db = require('config/postgres')
const sql = require('utils/lit')

const create = params => {
  const query = sql`
    INSERT INTO email_templates (title, body)
    VALUES ($1, $2)
  `

  return db.query(query, params)
}

module.exports = create
