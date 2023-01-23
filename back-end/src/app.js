const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

require("dotenv-safe").config();

const { createTables } = require("./config/table");
const { createProcedures } = require("./config/procedures");
createTables();
createProcedures();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
