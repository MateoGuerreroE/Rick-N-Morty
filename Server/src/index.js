const express = require("express");
const server = express();
const router = require("./routes/index");

const PORT = 3001;
const ADD = "/rickandmorty";

//! HEADER middlewares MUST BE FIRST or access wont be granted

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json()); //! MW to be able to receive data thorugh body
server.use(ADD, router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
