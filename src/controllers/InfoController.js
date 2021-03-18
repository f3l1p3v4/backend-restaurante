"use strict";

const Info = require("../models/Info");

module.exports = {
  async search(req, res) {
    const info = await Info.find();

    return res.json(info);
  },
  async addInfos(req, res) {
    try {
      const info = await Info.create(req.body);

      console.log(info.info);

      return res.send({
        info
      });
    } catch (error) {
      res.status(500).send(`Erro ao salvar informações: ${error}`);
    }
  }
};
