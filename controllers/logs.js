const express = require("express");
const router = express.Router(); // Create an Express router

const Logs = require("../models/logs");

// New GET* Route
router.get("/new", (req, res) => {
  res.render("New");
});

// Create POST* route
router.post("/", async (req, res) => {
  try {
    const newLog = await Logs.create(req.body);
    res.redirect(`/logs/${newLog._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

// Index GET route
router.get("/", async (req, res) => {
  try {
    const logs = await Logs.find({});
    res.render("Index", { logs });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
  }
});

// Show route for a specific log entry
router.get("/:id", async (req, res) => {
  try {
    const log = await Logs.findById(req.params.id);
    res.render("Show", { log });
  } catch (err) {
    console.error(err);
    res.status(404).send("Log entry not found.");
  }
});

// Update PUT route (if you've already implemented it)
router.put("/logs/:id", async (req, res) => {
  try {
    const updatedLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Returns the updated document
    });
    if (!updatedLog) {
      return res.status(404).send("Log entry not found.");
    }
    res.status(201).redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete route (if you've already implemented it)
router.delete("/logs/:id", async (req, res) => {
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

module.exports = router; // Export the router
