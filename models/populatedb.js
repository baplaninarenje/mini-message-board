#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');
const { argv } = require('node:process');

const SQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  try {
    console.log('seeding...');
    const client = new Client({
      connectionString: process.env.PROD_DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

main();
