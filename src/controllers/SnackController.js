"use strict";

const Snack = require("../models/Snack");

module.exports = {
  async search(req, res) {
    const snack = await Snack.find();

    return res.json(snack);
  },
  async searchSnack(req, res) {
    const { categorie } = req.headers;

    const snack = await Snack.find({ categorie });

    return res.json(snack);
  },
  async addSnack(req, res) {
    try {
      const snack = await Snack.create(req.body);

      console.log(snack.snack);

      return res.send({
        snack
      });
    } catch (error) {
      res.status(500).send(`Erro ao salvar este lanche: ${error}`);
    }
  },
  async changeStatus(req, res) {
    try {
      let busEdit = req.body;
      res.status(200).json(await Snack.findByIdAndUpdate(busEdit._id, busEdit));
    } catch (error) {
      res.status(500).send(`Erro ao editar o lanche: ${error}`);
    }
  },
  async changeSnack(req, res) {
    try {
      let busEdit = req.body;
      res.status(200).json(await Snack.findByIdAndUpdate(busEdit._id, busEdit));
    } catch (error) {
      res.status(500).send(`Erro ao editar o lanche: ${error}`);
    }
  },
  async deleteSnack(req, res) {
    try {
      let id = req.params.id;
      let objDeletar = {};
      objDeletar._id = id;

      res.status(200).json(await Snack.findByIdAndDelete(objDeletar));
    } catch (error) {
      res.status(500).send(`Erro ao remover lanche: ${error}`);
    }
  }
};
