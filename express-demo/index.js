const express = require("express");

const app = express();

const port = 3000;

const home = (req, res) => {
  res.send("Welcome to my main page !");
};

const contact = (req, res) => {
  res.send("This is the contactpage !");
};

// create route
app.get("/", home);

app.get("/contact", contact);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
