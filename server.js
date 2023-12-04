const express = require("express");
const path = require("path");
const app = express();
const database = require("./knex");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "dist")));

module.exports = () => {
  app.get("/api", (req, res) => {
    console.log("getリクエストが来ました");
    database("lists")
      .select()
      .then((result) => {
        res.header("Content-Type", "application/json");
        res.send(result);
      });
  });
  return app;
};
