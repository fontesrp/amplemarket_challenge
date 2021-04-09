const db = require('config/postgres')
const sql = require('utils/lit')

const remove = params => {
  const query = sql`
    DELETE FROM email_templates WHERE id = $1
  `

  return db.query(query, params)
}

module.exports = remove
