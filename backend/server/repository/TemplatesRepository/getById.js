const db = require('config/postgres')
const sql = require('utils/lit')

const getById = params => {
  const query = sql`
    SELECT
      body,
      id,
      title
    FROM
      email_templates
    WHERE
      id = $1
  `

  return db.query(query, params)
}

module.exports = getById
