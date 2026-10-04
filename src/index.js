import "dotenv/config";
import express from "express";
import { sequelize } from "./models/index.js";

const app = express();

const pessoas = [
  { id: 1, nome: "Ivanise Lima", email: "ivanise.dev@gmail.com" },
  { id: 2, nome: "Juarês Santos", email: "juares.santos@email.com" },
];

app.get("/pessoas", (req, res) => {
  return res.send(pessoas);
});

app.get("/pessoas/:id", (req, res) => {
  const id = Number(req.params.id);
  const pessoa = pessoas.find((p) => p.id === id);
  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  return res.send(pessoa);
});

const port = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
  console.log("Conectado ao banco de dados");

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

import Sequelize from "sequelize";
import pg from "pg";

