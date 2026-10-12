# Currículo Express

API REST para um app de currículos, feita com **Express + PostgreSQL (NeonDB)** na disciplina de Aplicações Orientadas a Serviços (UNICAP, 2026.2).

## Entidades e relacionamentos

| Entidade | Campos principais | Relação |
|---|---|---|
| Pessoa | nome, email, telefone, cidade, resumo | tem muitas experiências, formações e projetos |
| Experiência profissional | empresa, cargo, dataInicio, dataFim, descricao | pertence a uma pessoa (`pessoaId`) |
| Formação acadêmica | instituicao, curso, nivel, dataInicio, dataFim, situacao | pertence a uma pessoa (`pessoaId`) |
| Projeto | nome, descricao, tecnologias, link | pertence a uma pessoa (`pessoaId`) |

Ao apagar uma pessoa, as experiências, formações e projetos dela são apagados junto (`ON DELETE CASCADE`).

## Rotas

Cada entidade tem CRUD completo:

| Método | Rota | O que faz |
|---|---|---|
| GET | `/pessoas` | lista todas |
| GET | `/pessoas/:id` | busca uma |
| POST | `/pessoas` | cria |
| PUT | `/pessoas/:id` | altera |
| DELETE | `/pessoas/:id` | apaga |

O mesmo vale para `/experiencias`, `/formacoes` e `/projetos`. Para criar um desses, envie o `pessoaId` no corpo.

Rotas de relacionamento:

| Método | Rota | O que faz |
|---|---|---|
| GET | `/pessoas/:id/curriculo` | pessoa com todas as seções do currículo |
| GET | `/pessoas/:id/experiencias` | experiências da pessoa |
| GET | `/pessoas/:id/formacoes` | formações da pessoa |
| GET | `/pessoas/:id/projetos` | projetos da pessoa |

## Estrutura

```
src/
├── index.js        servidor, middlewares e rotas
├── routes/         endereços de cada recurso
├── controllers/    recebem o pedido e montam a resposta
├── services/       acesso ao banco com o Sequelize
├── models/         tabelas e relacionamentos
├── middlewares/    cors, log e tratamento de erros
└── utils/          respostas padronizadas e cadastro inicial dos currículos
```

## Como rodar

1. `npm install`
2. Copie o `.env.sample` para `.env` e coloque a connection string do Neon em `DATABASE_URL`.
3. `npm run dev`

Para recriar o banco com os dois currículos de exemplo (apaga os dados atuais):

```
ERASE_DATABASE_ON_SYNC=true node src/index.js
```

## Testes

O arquivo `curriculo-express.postman_collection.json` tem todos os comandos. Depois de importar no Postman, ajuste as variáveis da coleção: `baseUrl` (endereço do servidor) e os ids (`pessoaId`, `experienciaId`, `formacaoId`, `projetoId`).
