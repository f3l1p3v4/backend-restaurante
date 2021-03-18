const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  bus: String,
  itinerario: String,
  tablet: String,
  command: String
});

module.exports = mongoose.model("Info", InfoSchema);
