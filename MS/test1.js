const express = require("express");
const { nextTick } = require("process");

const app = express();

app.use((req, res, next) => {
  console.log("m1");
  res.write("Hello1");
  next();
});

app.use((req, res) => {
  console.log("Hey");
  res.write("23");
  res.end();
});

app.listen(3000, () => console.log("Server Done"));
