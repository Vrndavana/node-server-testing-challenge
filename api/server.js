const express = require("express");
const Warriors = require("../warriors/warriorsModels");
const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/warriors", (req, res) => {
  Warriors.getAll()
    .then(warriors => {
      res.status(200).json(warriors);
    })
    .catch(error => {
      res.status(200).json(error);
    });
});

module.exports = server;
