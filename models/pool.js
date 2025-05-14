require('dotenv').config();
const { Pool } = require('pg');
const { argv } = require('node:process');

module.exports = new Pool({
  connectionString: process.env.PROD_DB_URL, // process.env[argv[2]],
});
