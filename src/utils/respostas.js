// Respostas de erro padronizadas, usadas pelos controllers e middlewares
export const naoEncontrado = (res, mensagem) => {
  return res.status(404).send({ erro: mensagem });
};

export const pedidoInvalido = (res, mensagem) => {
  return res.status(400).send({ erro: mensagem });
};
