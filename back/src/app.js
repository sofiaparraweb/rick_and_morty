const router = require("../src/routes/index")
const express = require('express');
const server = express();
const PORT = 3001;

server.use(express.json());
server.use("/rickandmorty", router);


module.exports = server;
