//arquivo responsavel por impotar as bibliotecas baixadas com o NPM e declarar a rota principal

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
//app.use("/users", userRoutes);

require("dotenv-safe").config();

const db = require("./config/database");
const userRoutes = require("./routes/userRoutes");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
