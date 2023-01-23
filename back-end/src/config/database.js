//require("dotenv").config();
//const { Client } = require("pg");
//const client = new Client({
//  host: process.env.DB_HOST,
//  user: process.env.DB_USER,
//  password: process.env.DB_PASS,
//  database: process.env.DB_NAME,
//  port: process.env.DB_PORT,
//});
//
//console.log(
//  `Conectando ao banco de dados: ${process.env.DB_NAME} em ${process.env.DB_HOST}`
//);
////client.connect();
//
//
//var pg = require("pg");
////or native libpq bindings
////var pg = require('pg').native
//
//var conString = process.env.postgres_URI; //Can be found in the Details page
//var client = new pg.Client(conString);
//client.connect(function (err) {
//  if (err) {
//    return console.error("could not connect to postgres", err);
//  }
//  client.query('SELECT NOW() AS "theTime"', function (err, result) {
//    if (err) {
//      return console.error("error running query", err);
//    }
//    console.log(result.rows[0].theTime);
//    // >> output: 2018-08-23T14:02:57.117Z
//    client.end();
//  });
//});
//
//module.exports = client;
const { Client } = require("pg");
const connectionString =
  "postgres://rltkvpkd:4bJqfKmrG5mcBsU-jm4iaPRw_7-8zBpA@babar.db.elephantsql.com/rltkvpkd";

const pgClient = new Client({ connectionString });

module.exports = pgClient;
