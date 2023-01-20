const { Client } = require("pg");
const connectionString =
  "postgres://rltkvpkd:4bJqfKmrG5mcBsU-jm4iaPRw_7-8zBpA@babar.db.elephantsql.com/rltkvpkd";

const client = new Client({
  connectionString: connectionString,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

module.exports = client;
