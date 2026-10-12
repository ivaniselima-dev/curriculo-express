import Sequelize from "sequelize";
import pg from "pg";
import getPessoaModel from "./pessoa.js";
import getExperienciaModel from "./experiencia.js";
import getFormacaoModel from "./formacao.js";
import getProjetoModel from "./projeto.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
  logging: process.env.SQL_LOG === "false" ? false : console.log,
});

const models = {
  Pessoa: getPessoaModel(sequelize, Sequelize),
  Experiencia: getExperienciaModel(sequelize, Sequelize),
  Formacao: getFormacaoModel(sequelize, Sequelize),
  Projeto: getProjetoModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
