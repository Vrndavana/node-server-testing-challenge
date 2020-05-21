const express = require("express");
const Hobbits = require("../warriors/warriorsModels");
const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/warriors", (req, res) => {
  Hobbits.getAll()
    .then(warroprs => {
      res.status(200).json(warriors);
    })
    .catch(error => {
      res.status(200).json(error);
    });
});

module.exports = server;
