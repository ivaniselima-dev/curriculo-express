import models from "../models/index.js";

const listar = async () => {
  return await models.Pessoa.findAll({ order: [["id", "ASC"]] });
};

const buscarPorId = async (id) => {
  return await models.Pessoa.findByPk(id);
};

// Pessoa com todas as seções do currículo
const buscarCurriculo = async (id) => {
  return await models.Pessoa.findByPk(id, {
    include: [models.Experiencia, models.Formacao, models.Projeto],
  });
};

const criar = async (dados) => {
  return await models.Pessoa.create({
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    cidade: dados.cidade,
    resumo: dados.resumo,
  });
};

const atualizar = async (pessoa, dados) => {
  return await pessoa.update(dados);
};

const apagar = async (pessoa) => {
  await pessoa.destroy();
};

export default {
  listar,
  buscarPorId,
  buscarCurriculo,
  criar,
  atualizar,
  apagar,
};
