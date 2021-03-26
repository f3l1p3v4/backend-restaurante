const mongoose = require("mongoose");

const SnackSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  imagem: String,
  price: String,
  group: String
});

module.exports = mongoose.model("Snack", SnackSchema);
