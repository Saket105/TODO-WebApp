const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use("/design", express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Post method
app.post("/", (req, res) => {
  const result = Number(req.body.num1) + Number(req.body.num2);
  req.body.ans = result;
  console.log(result);
  res.send("Your num1 + num2 = " + result);
});

// Server running on port 4000
app.listen(4000, () => {
  console.log("server is running on http://localhost:4000/");
});
