const express = require("express");
const Mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const server = app.listen(process.env.port || 3000, () => {
  console.log(`server runnin on port ${server.address.port} `);
});
