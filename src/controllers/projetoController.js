import { pessoaService, projetoService } from "../services/index.js";
import { naoEncontrado } from "../utils/index.js";

const listar = async (req, res) => {
  const projetos = await projetoService.listar();
  return res.send(projetos);
};

// Relacionamento: projetos de uma pessoa (GET /pessoas/:id/projetos)
const listarPorPessoa = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const projetos = await projetoService.listarPorPessoa(pessoa.id);
  return res.send(projetos);
};

const buscar = async (req, res) => {
  const projeto = await projetoService.buscarPorId(req.params.id);

  if (!projeto) {
    return naoEncontrado(res, "Projeto não encontrado");
  }

  return res.send(projeto);
};

const criar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.body.pessoaId);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const projeto = await projetoService.criar(req.body);
  return res.status(201).send(projeto);
};

const atualizar = async (req, res) => {
  const projeto = await projetoService.buscarPorId(req.params.id);

  if (!projeto) {
    return naoEncontrado(res, "Projeto não encontrado");
  }

  const projetoAtualizado = await projetoService.atualizar(projeto, req.body);
  return res.send(projetoAtualizado);
};

const apagar = async (req, res) => {
  const projeto = await projetoService.buscarPorId(req.params.id);

  if (!projeto) {
    return naoEncontrado(res, "Projeto não encontrado");
  }

  await projetoService.apagar(projeto);
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
