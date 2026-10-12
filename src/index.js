import "dotenv/config";
import express from "express";
import models, { sequelize } from "./models/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("API do currículo no ar");
});

app.get("/pessoas", async (req, res) => {
  const pessoas = await models.Pessoa.findAll({ order: [["id", "ASC"]] });
  return res.send(pessoas);
});

app.get("/pessoas/:id", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.params.id);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  return res.send(pessoa);
});

app.post("/pessoas", async (req, res) => {
  const pessoa = await models.Pessoa.create({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    resumo: req.body.resumo,
  });

  return res.status(201).send(pessoa);
});

app.put("/pessoas/:id", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.params.id);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  await pessoa.update(req.body);

  return res.send(pessoa);
});

app.delete("/pessoas/:id", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.params.id);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  await pessoa.destroy();

  return res.status(204).send();
});

app.post("/experiencias", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.body.pessoaId);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  const experiencia = await models.Experiencia.create({
    empresa: req.body.empresa,
    cargo: req.body.cargo,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    descricao: req.body.descricao,
    pessoaId: req.body.pessoaId,
  });

  return res.status(201).send(experiencia);
});

app.get("/pessoas/:id/experiencias", async (req, res) => {
  const pessoa = await models.Pessoa.findByPk(req.params.id);

  if (!pessoa) {
    return res.status(404).send({ erro: "Pessoa não encontrada" });
  }

  const experiencias = await models.Experiencia.findAll({
    where: { pessoaId: req.params.id },
  });

  return res.send(experiencias);
});

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Banco sincronizado");

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});


