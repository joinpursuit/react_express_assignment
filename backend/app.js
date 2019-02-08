const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const users = require("./routes/users.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("This is the Homepage");
});

app.get("*", (req, res) => {
  res.status(404).send("Error 404");
});

app.listen(3001, () => {
  console.log("You are listening to post 3001!");
});
