import models from "../models/index.js";

const listar = async () => {
  return await models.Experiencia.findAll({ order: [["id", "ASC"]] });
};

const listarPorPessoa = async (pessoaId) => {
  return await models.Experiencia.findAll({
    where: { pessoaId },
    order: [["dataInicio", "DESC"]],
  });
};

const buscarPorId = async (id) => {
  return await models.Experiencia.findByPk(id);
};

const criar = async (dados) => {
  return await models.Experiencia.create({
    empresa: dados.empresa,
    cargo: dados.cargo,
    dataInicio: dados.dataInicio,
    dataFim: dados.dataFim,
    descricao: dados.descricao,
    pessoaId: dados.pessoaId,
  });
};

const atualizar = async (experiencia, dados) => {
  return await experiencia.update(dados);
};

const apagar = async (experiencia) => {
  await experiencia.destroy();
};

export default {
  listar,
  listarPorPessoa,
  buscarPorId,
  criar,
  atualizar,
  apagar,
};
