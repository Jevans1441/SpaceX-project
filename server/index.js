require("dotenv").config();
const express = require("express");
const path = require("path");

const server = express();
const { PORT } = process.env;

server.use(express.static(path.resolve(__dirname + "/react-ui/build")));

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./react-ui/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}.`);
});
