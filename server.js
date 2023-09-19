require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); //imported body parser
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

const Logs = require("./models/logs");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// connection to mongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", MONGO_URI));
db.on("close", () => console.log("mongo disconnected"));

// New GET* Route
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create POST* route
// route that redirects to the show page after create
app.post("/logs", async (req, res) => {
  try {
    const newLog = await Logs.create(req.body);
    res.redirect(`/logs/${newLog._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
