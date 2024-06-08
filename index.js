require('dotenv').config()
const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Home route")
})

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running on port ${process.env.PORT}`);
})