import Sequelize from "sequelize";
import pg from "pg";
import getPessoaModel from "./pessoa.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});

const models = {
  Pessoa: getPessoaModel(sequelize, Sequelize),
};

export { sequelize };

export default models;