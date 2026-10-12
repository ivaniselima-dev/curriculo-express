import { pessoaService, formacaoService } from "../services/index.js";
import { naoEncontrado } from "../utils/index.js";

const listar = async (req, res) => {
  const formacoes = await formacaoService.listar();
  return res.send(formacoes);
};

// Relacionamento: formacoes de uma pessoa (GET /pessoas/:id/formacoes)
const listarPorPessoa = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const formacoes = await formacaoService.listarPorPessoa(pessoa.id);
  return res.send(formacoes);
};

const buscar = async (req, res) => {
  const formacao = await formacaoService.buscarPorId(req.params.id);

  if (!formacao) {
    return naoEncontrado(res, "Formação não encontrada");
  }

  return res.send(formacao);
};

const criar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.body.pessoaId);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const formacao = await formacaoService.criar(req.body);
  return res.status(201).send(formacao);
};

const atualizar = async (req, res) => {
  const formacao = await formacaoService.buscarPorId(req.params.id);

  if (!formacao) {
    return naoEncontrado(res, "Formação não encontrada");
  }

  const formacaoAtualizada = await formacaoService.atualizar(formacao, req.body);
  return res.send(formacaoAtualizada);
};

const apagar = async (req, res) => {
  const formacao = await formacaoService.buscarPorId(req.params.id);

  if (!formacao) {
    return naoEncontrado(res, "Formação não encontrada");
  }

  await formacaoService.apagar(formacao);
  return res.status(204).send();
};

export default {
  listar,
  listarPorPessoa,
  buscar,
  criar,
  atualizar,
  apagar,
};
