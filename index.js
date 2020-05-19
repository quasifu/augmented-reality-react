const express = require("express");
const cors = require("cors");
const server = express();
//const authMiddleware = require("./auth");

server.use(cors());
server.use(express.urlencoded({ extended: true, strict: false }));
server.use(express.json());
//server.use(authMiddleware);

server.use("/", express.static(__dirname + "/build"));
server.use(function (req, res, next) {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT ? process.env.PORT : 1336;

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
