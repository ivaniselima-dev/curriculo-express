import models from "../models/index.js";

const listar = async () => {
  return await models.Projeto.findAll({ order: [["id", "ASC"]] });
};

const listarPorPessoa = async (pessoaId) => {
  return await models.Projeto.findAll({
    where: { pessoaId },
    order: [["id", "ASC"]],
  });
};

const buscarPorId = async (id) => {
  return await models.Projeto.findByPk(id);
};

const criar = async (dados) => {
  return await models.Projeto.create({
    nome: dados.nome,
    descricao: dados.descricao,
    tecnologias: dados.tecnologias,
    link: dados.link,
    pessoaId: dados.pessoaId,
  });
};

const atualizar = async (projeto, dados) => {
  return await projeto.update(dados);
};

const apagar = async (projeto) => {
  await projeto.destroy();
};

export default {
  listar,
  listarPorPessoa,
  buscarPorId,
  criar,
  atualizar,
  apagar,
};
