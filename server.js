const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/logs/new", (req, res) => {
  res.render("New");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
