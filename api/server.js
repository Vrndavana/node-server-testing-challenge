const express = require("express");
const server = express();

const Hobbits = require("../hobbits/hobbitsModel.js");

server.use(express.json());



server.get("/", (req, res) => {
  res.json({ api: "up" });
});






module.exports = server;