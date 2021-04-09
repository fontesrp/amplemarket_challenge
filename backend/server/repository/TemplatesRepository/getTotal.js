const db = require('config/postgres')
const sql = require('utils/lit')

const getTotal = params => {
  const query = sql`
    SELECT
      COUNT(1) items
    FROM
      email_templates
  `

  return db.query(query, params)
}

module.exports = getTotal
