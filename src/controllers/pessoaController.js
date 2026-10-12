import { pessoaService } from "../services/index.js";
import { naoEncontrado } from "../utils/index.js";

const listar = async (req, res) => {
  const pessoas = await pessoaService.listar();
  return res.send(pessoas);
};

const buscar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  return res.send(pessoa);
};

const buscarCurriculo = async (req, res) => {
  const curriculo = await pessoaService.buscarCurriculo(req.params.id);

  if (!curriculo) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  return res.send(curriculo);
};

const criar = async (req, res) => {
  const pessoa = await pessoaService.criar(req.body);
  return res.status(201).send(pessoa);
};

const atualizar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const pessoaAtualizada = await pessoaService.atualizar(pessoa, req.body);
  return res.send(pessoaAtualizada);
};

const apagar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  await pessoaService.apagar(pessoa);
  return res.status(204).send();
};

export default {
  listar,
  buscar,
  buscarCurriculo,
  criar,
  atualizar,
  apagar,
};
