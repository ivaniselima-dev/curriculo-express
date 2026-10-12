// Experiência profissional
const getExperienciaModel = (sequelize, { DataTypes }) => {
  const Experiencia = sequelize.define(
    "experiencia",
    {
      empresa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
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
    },
    {
      // nome usado quando a pessoa é buscada junto com suas experiências
      name: { singular: "experiencia", plural: "experiencias" },
    },
  );

  Experiencia.associate = (models) => {
    Experiencia.belongsTo(models.Pessoa);
  };

  return Experiencia;
};

export default getExperienciaModel;
