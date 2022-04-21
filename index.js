const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var items = [];
app.get("/", (req, res) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("base", { day, items });
});

app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

// Server running on port 4000
app.listen(4000, () => {
  console.log("server is running on http://localhost:4000/");
});
