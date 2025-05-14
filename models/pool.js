require('dotenv').config();
const { Pool } = require('pg');
const { argv } = require('node:process');

module.exports = new Pool({
  connectionString:
    'postgresql://postgres:jsWokCCtlsmcBYZHPDKPoERGllOAuriB@postgres.railway.internal:5432/railway', //process.env.DATABASE_URL,
});
