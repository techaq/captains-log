const express = require("express");
const bodyParser = require("body-parser"); //imported body parser
const app = express();
const PORT = process.env.PORT || 3000;

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// New GET* Route
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create POST* route
app.post("/logs", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
