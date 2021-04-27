'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    artwork: DataTypes.TEXT,
    audioSrc: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.belongsTo(models.User, { foreignKey: 'artistId' }),
    Track.belongsTo(models.Genre, { foreignKey: 'genreId' }),
    Track.hasMany(models.Comment, { foreignKey: 'trackId' })
  };
  return Track;
};