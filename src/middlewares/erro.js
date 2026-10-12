import { pedidoInvalido } from "../utils/index.js";

// Último middleware: recebe qualquer erro lançado nas rotas.
// O Express 5 encaminha para cá os erros das funções async automaticamente.
const erroMiddleware = (err, req, res, next) => {
  if (err.name === "SequelizeUniqueConstraintError") {
    return pedidoInvalido(res, "Já existe um registro com esse valor");
  }

  if (err.name === "SequelizeValidationError") {
    const campos = err.errors.map((e) => e.path).join(", ");
    return pedidoInvalido(res, `Campos inválidos ou obrigatórios: ${campos}`);
  }

  if (err.name === "SequelizeForeignKeyConstraintError") {
    return pedidoInvalido(res, "pessoaId informado não existe");
  }

  if (err.name === "SequelizeDatabaseError") {
    return pedidoInvalido(res, "Dados em formato inválido");
  }

  console.error(err);
  return res.status(500).send({ erro: "Erro interno no servidor" });
};

export default erroMiddleware;
