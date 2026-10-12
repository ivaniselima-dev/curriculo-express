import models from "../models/index.js";

const listar = async () => {
  return await models.Formacao.findAll({ order: [["id", "ASC"]] });
};

const listarPorPessoa = async (pessoaId) => {
  return await models.Formacao.findAll({
    where: { pessoaId },
    order: [["dataInicio", "DESC"]],
  });
};

const buscarPorId = async (id) => {
  return await models.Formacao.findByPk(id);
};

const criar = async (dados) => {
  return await models.Formacao.create({
    instituicao: dados.instituicao,
    curso: dados.curso,
    nivel: dados.nivel,
    dataInicio: dados.dataInicio,
    dataFim: dados.dataFim,
    situacao: dados.situacao,
    pessoaId: dados.pessoaId,
  });
};

const atualizar = async (formacao, dados) => {
  return await formacao.update(dados);
};

const apagar = async (formacao) => {
  await formacao.destroy();
};

export default {
  listar,
  listarPorPessoa,
  buscarPorId,
  criar,
  atualizar,
  apagar,
};
