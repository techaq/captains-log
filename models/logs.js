const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// define Logs schema
const logsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    shipIsBroken: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Logs = model("Logs", logsSchema);

module.exports = Logs;
