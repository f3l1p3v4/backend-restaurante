const mongoose = require("mongoose");

const SnackSchema = new mongoose.Schema({
  name: String,
  ingredientes: String,
  price: Number
});

module.exports = mongoose.model("Snack", SnackSchema);
