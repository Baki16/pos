const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  status: { type: String, enum: ["free", "occupied"], default: "free" },
});

module.exports = mongoose.model("Table", TableSchema);
