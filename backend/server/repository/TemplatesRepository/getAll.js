const db = require('config/postgres')
const sql = require('utils/lit')

const getAll = params => {
  const query = sql`
    SELECT
      body,
      id,
      title
    FROM
      email_templates
    ORDER BY
      created_at DESC
    OFFSET
      $2
    LIMIT
      $1
  `

  return db.query(query, params)
}

module.exports = getAll
