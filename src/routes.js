const { Router } = require("express");

const SnackController = require("./controllers/SnackController");
const InfoController = require("./controllers/InfoController");

const routes = Router();

routes.get("/", function (req, res) {
  res.send("Bem-vindo a API - Restaurantes!");
});

//Rote bushes
routes.get("/all", SnackController.search);
routes.get("/snack", SnackController.searchSnack);
routes.post("/snack", SnackController.addSnack);
routes.put("/status", SnackController.changeStatus);
routes.put("/snack", SnackController.changeSnack);
routes.delete("/snack/:id", SnackController.deleteSnack);

//Rote info
routes.get("/info", InfoController.search);
routes.post("/info", InfoController.addInfos);

module.exports = routes;
