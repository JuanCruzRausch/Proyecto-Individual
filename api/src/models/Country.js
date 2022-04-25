const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://100percentenglish.net/wp-content/uploads/2020/08/Flag.jpg"
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Not defined"
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Not defined"
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    googleMaps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
