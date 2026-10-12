import { pessoaService, experienciaService } from "../services/index.js";
import { naoEncontrado } from "../utils/index.js";

const listar = async (req, res) => {
  const experiencias = await experienciaService.listar();
  return res.send(experiencias);
};

// Relacionamento: experiencias de uma pessoa (GET /pessoas/:id/experiencias)
const listarPorPessoa = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.params.id);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const experiencias = await experienciaService.listarPorPessoa(pessoa.id);
  return res.send(experiencias);
};

const buscar = async (req, res) => {
  const experiencia = await experienciaService.buscarPorId(req.params.id);

  if (!experiencia) {
    return naoEncontrado(res, "Experiência não encontrada");
  }

  return res.send(experiencia);
};

const criar = async (req, res) => {
  const pessoa = await pessoaService.buscarPorId(req.body.pessoaId);

  if (!pessoa) {
    return naoEncontrado(res, "Pessoa não encontrada");
  }

  const experiencia = await experienciaService.criar(req.body);
  return res.status(201).send(experiencia);
};

const atualizar = async (req, res) => {
  const experiencia = await experienciaService.buscarPorId(req.params.id);

  if (!experiencia) {
    return naoEncontrado(res, "Experiência não encontrada");
  }

  const experienciaAtualizada = await experienciaService.atualizar(experiencia, req.body);
  return res.send(experienciaAtualizada);
};

const apagar = async (req, res) => {
  const experiencia = await experienciaService.buscarPorId(req.params.id);

  if (!experiencia) {
    return naoEncontrado(res, "Experiência não encontrada");
  }

  await experienciaService.apagar(experiencia);
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
