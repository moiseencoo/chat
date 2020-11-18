// server.js
const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static("./static/"));

app.listen(PORT, function () {
  console.log(`Chat app is listening ${PORT}!`);
});
