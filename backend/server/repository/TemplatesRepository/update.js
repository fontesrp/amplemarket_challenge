const db = require('config/postgres')
const sql = require('utils/lit')

const update = params => {
  const query = sql`
    UPDATE email_templates
    SET title = $2, body = $3
    WHERE id = $1
  `

  return db.query(query, params)
}

module.exports = update
