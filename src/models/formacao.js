// Experiência acadêmica (graduação, curso técnico, especialização...)
const getFormacaoModel = (sequelize, { DataTypes }) => {
  const Formacao = sequelize.define(
    "formacao",
    {
      instituicao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      curso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      nivel: {
        type: DataTypes.STRING,
      },
      dataInicio: {
        type: DataTypes.DATEONLY,
      },
      dataFim: {
        type: DataTypes.DATEONLY,
      },
      situacao: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "formacoes",
      name: { singular: "formacao", plural: "formacoes" },
    },
  );

  Formacao.associate = (models) => {
    Formacao.belongsTo(models.Pessoa);
  };

  return Formacao;
};

export default getFormacaoModel;
