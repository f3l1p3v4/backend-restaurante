const { Router } = require("express");

const BusController = require("./controllers/BusController");
const InfoController = require("./controllers/InfoController");

const routes = Router();

routes.get("/", function (req, res) {
  res.send("Bem-vindo a API - Bilhetagem Consórcio!");
});

//Rote bushes
routes.get("/all", BusController.search);
routes.get("/bushes", BusController.searchBushes);
routes.post("/bushes", BusController.addBushes);
routes.put("/bushes", BusController.changeStatus);
routes.put("/bus", BusController.changeBus);
routes.delete("/bushes/:id", BusController.deleteBus);

//Rote info
routes.get("/info", InfoController.search);
routes.post("/info", InfoController.addInfos);

module.exports = routes;
