require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); //imported body parser
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

const Logs = require("./models/logs");
const jsxViewEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// connection to mongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "));
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

// Index GET route
app.get("/logs", async (req, res) => {
  try {
    // Fetch all logs from the database
    const logs = await Logs.find({});

    // Render the Index view and pass the logs data
    res.render("Index", { logs });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

// Show route for a specific log entry
app.get("/logs/:id", async (req, res) => {
  try {
    // Find the log entry by ID
    const log = await Logs.findById(req.params.id);

    if (!log) {
      // Handle the case where the log entry is not found
      return res.status(404).send("Log entry not found.");
    }

    // Render the Show view and pass the log data
    res.render("Show", { log });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

app.delete("/logs/:id", async (req, res) => {
  try {
    const deletedLog = await Logs.findByIdAndRemove(req.params.id);
    if (!deletedLog) {
      return res.status(404).send("Log entry not found.");
    }
    res.redirect("/logs"); // Redirect back to the index route
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
