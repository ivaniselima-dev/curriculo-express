import Sequelize from "sequelize";
import pg from "pg";
import getPessoaModel from "./pessoa.js";
import getExperienciaModel from "./experiencia.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});

const models = {
  Pessoa: getPessoaModel(sequelize, Sequelize),
  Experiencia: getExperienciaModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;