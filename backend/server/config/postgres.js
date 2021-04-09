const pg = require('pg')
const logger = require('utils/logger')

const TYPE_PARSER_OID = 1700
const TYPE_PARSER_FUNC = val => parseFloat(val, 10)

pg.types.setTypeParser(TYPE_PARSER_OID, TYPE_PARSER_FUNC)

// TODO: get db config from environment variables
const config = {
  database: 'amplemarket_challenge',
  host: 'localhost',
  password: null,
  port: 5432,
  user: 'rfontes'
}

const pool = new pg.Pool(config)

pool.on('error', error => logger.error('PostgreSQL pool error', error))

const postgres = {
  query: (sql, params) => pool.query(sql, params).then(result => result?.rows)
}

module.exports = postgres
