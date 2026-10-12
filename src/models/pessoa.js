const getPessoaModel = (sequelize, { DataTypes }) => {
  const Pessoa = sequelize.define("pessoa", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    telefone: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    resumo: {
      type: DataTypes.TEXT,
    },
  });

  Pessoa.associate = (models) => {
    Pessoa.hasMany(models.Experiencia, { onDelete: "CASCADE" });
    Pessoa.hasMany(models.Formacao, { onDelete: "CASCADE" });
    Pessoa.hasMany(models.Projeto, { onDelete: "CASCADE" });
  };

  return Pessoa;
};

export default getPessoaModel;
