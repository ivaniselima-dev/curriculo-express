const getPessoaModel = (sequelize, { DataTypes }) => {
  const Pessoa = sequelize.define("pessoa", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    resumo: {
      type: DataTypes.TEXT,
    },
  });

  return Pessoa;
};

export default getPessoaModel;