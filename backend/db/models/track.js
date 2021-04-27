'use strict';
const { User, Genre} = require('./index')
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artwork: {
      type: DataTypes.TEXT
    },
    audioSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.belongsTo(models.User, { foreignKey: 'artistId' }),
    Track.belongsTo(models.Genre, { foreignKey: 'genreId' }),
    Track.hasMany(models.Comments, { foreignKey: 'trackId' })
  };

  Track.getSongById = async function (id) {
    
    return await Track.findByPk(id);
  }

  Track.getPlaylistByGenre = async function (genreId) {
    let tracks = await Track.findAll({
      where: {
        genreId: genreId 
      },
      // include: {
      //   model: User,
      //   required: true,
      // }
    })
    console.log(tracks);
    return tracks;
  }

  return Track;
};