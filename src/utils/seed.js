import models from "../models/index.js";

// Cadastra os dois currículos de exemplo.
// Só é chamado quando ERASE_DATABASE_ON_SYNC=true (o banco é recriado do zero).
const criarCurriculos = async () => {
  const incluir = {
    include: [models.Experiencia, models.Formacao, models.Projeto],
  };

  await models.Pessoa.create(
    {
      nome: "Ivanise Lima",
      email: "ivanise@email.com",
      telefone: "81988887777",
      cidade: "Recife - PE",
      resumo:
        "Analista de Controladoria com experiência em auditoria operacional, melhoria de processos, automação e análise de dados. Em transição para a área de Produto, buscando conectar negócio, processos, dados e tecnologia.",
      experiencias: [
        {
          empresa: "Shineray BR",
          cargo: "Analista de Controladoria Pleno",
          dataInicio: "2024-01-01",
          descricao:
            "Análises de controladoria, acompanhamento de indicadores e melhoria de processos.",
        },
        {
          empresa: "Grupo BCI",
          cargo: "Assistente de Controladoria",
          dataInicio: "2022-01-01",
          dataFim: "2024-01-01",
          descricao:
            "Parametrização de ERP, integração de processos e apoio à governança.",
        },
        {
          empresa: "Grupo BCI",
          cargo: "Jovem Aprendiz de TI",
          dataInicio: "2020-01-01",
          dataFim: "2022-01-01",
          descricao: "Suporte às rotinas da área de tecnologia.",
        },
      ],
      formacoes: [
        {
          instituicao: "UNICAP",
          curso: "Sistemas para Internet (Embarque Digital)",
          nivel: "Tecnólogo",
          situacao: "Em andamento",
        },
        {
          instituicao: "UNINASSAU",
          curso: "Análise e Desenvolvimento de Sistemas",
          nivel: "Tecnólogo",
          situacao: "Concluído",
        },
      ],
      projetos: [
        {
          nome: "Avança Fácil",
          descricao:
            "Startup em pré-incubação no Porto Digital: Product Discovery, Lean Canvas, MVP, pitch e roadmap.",
          tecnologias: "Product Discovery, Lean Canvas, MVP",
        },
        {
          nome: "Projeto BNB",
          descricao:
            "Parametrização de ERP, integração de processos, automação e governança no Grupo BCI.",
          tecnologias: "ERP, automação de processos",
        },
        {
          nome: "Currículo Express",
          descricao: "API REST deste currículo, feita para a disciplina de AOS.",
          tecnologias: "Node.js, Express, PostgreSQL, Sequelize",
          link: "https://github.com/ivaniselima-dev/curriculo-express",
        },
      ],
    },
    incluir,
  );

  await models.Pessoa.create(
    {
      nome: "Juarês Santos",
      email: "juares@email.com",
      telefone: "81555550000",
      cidade: "Recife - PE",
      resumo:
        "Analista Contábil com foco em rotinas fiscais, conciliações e fechamento mensal.",
      experiencias: [
        {
          empresa: "Escritório Contábil Exemplo",
          cargo: "Analista Contábil",
          dataInicio: "2023-03-01",
          descricao: "Fechamento contábil, conciliações bancárias e apuração de impostos.",
        },
        {
          empresa: "Comércio Exemplo Ltda",
          cargo: "Auxiliar Contábil",
          dataInicio: "2021-02-01",
          dataFim: "2023-02-28",
          descricao: "Lançamentos contábeis e organização de documentos fiscais.",
        },
      ],
      formacoes: [
        {
          instituicao: "Faculdade Exemplo",
          curso: "Ciências Contábeis",
          nivel: "Bacharelado",
          situacao: "Concluído",
        },
      ],
      projetos: [
        {
          nome: "Planilha de conciliação automática",
          descricao: "Planilha que cruza extratos bancários com os lançamentos contábeis.",
          tecnologias: "Excel, Power Query",
        },
      ],
    },
    incluir,
  );
};

export default criarCurriculos;
