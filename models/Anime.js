const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
Anime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: { // getAnimePictures
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    apiReviews: { // getAnimeReviews
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'anime',
  }
);

module.exports = Anime;
