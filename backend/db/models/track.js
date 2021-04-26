'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    artwork: DataTypes.TEXT,
    audioSrc: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};