"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://bilhetagem:fe197987@cluster0.8yf4i.mongodb.net/<bilhetagem>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
