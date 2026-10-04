import "dotenv/config";
import express from "express";
import models, { sequelize } from "./models/index.js";

const app = express();

app.get("/pessoas", async (req, res) => {
  const pessoas = await models.Pessoa.findAll();
  return res.send(pessoas);
});

app.get("/pessoas/:id", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.params.id);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  return res.send(pessoa);
});

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Banco sincronizado");

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

import Sequelize from "sequelize";
import pg from "pg";

