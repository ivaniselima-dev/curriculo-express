const getProjetoModel = (sequelize, { DataTypes }) => {
  const Projeto = sequelize.define("projeto", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    tecnologias: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
  });

  Projeto.associate = (models) => {
    Projeto.belongsTo(models.Pessoa);
  };

  return Projeto;
};

export default getProjetoModel;
