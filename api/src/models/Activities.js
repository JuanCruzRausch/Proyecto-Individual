const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('activities', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
        },
        difficulty: {
            type: DataTypes.ENUM("1","2","3","4","5"),
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM("Summer","Autumn","Winter","Spring"),
            allowNull: false
        }
    });
};