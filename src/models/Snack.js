const mongoose = require("mongoose");

const SnackSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  price: String
});

module.exports = mongoose.model("Snack", SnackSchema);
