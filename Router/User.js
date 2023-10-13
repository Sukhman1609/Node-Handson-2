
const User = require("express").Router();

User.post("/login", (req, res) => {
  res.send("<h1>THIS IS LOGIN!!!!!</h1>");
});

User.get("/logout", (req, res) => {
  res.send("<h1>THIS IS LOGOUT!!!!!</h1>");
});
User.put("/welcome", (req, res) => {
    res.send("<h1>THIS IS WELCOME PAGE!!!!!</h1>");
  });

module.exports = User;
