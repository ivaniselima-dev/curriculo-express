const getExperienciaModel = (sequelize, { DataTypes }) => {
  const Experiencia = sequelize.define("experiencia", {
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataFim: {
      type: DataTypes.DATEONLY,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  });

  Experiencia.associate = (models) => {
    Experiencia.belongsTo(models.Pessoa);
  };

  return Experiencia;
};

export default getExperienciaModel;