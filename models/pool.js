require('dotenv').config();
const { Pool } = require('pg');
const { argv } = require('node:process');

module.exports = new Pool({
  connectionString:
    'postgresql://postgres:jsWokCCtlsmcBYZHPDKPoERGllOAuriB@metro.proxy.rlwy.net:32002/railway', //process.env[argv[2]],
});
