const { Client } = require("pg");
const connectionString = process.env.DATABASE_URL;

const pgClient = new Client({ connectionString });

module.exports = pgClient;
