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

  Track.getPlaylistByGenre = async function (genreId) {
    let tracks = await Track.findAll({
      where: {
        genreId: genreId 
      },
      include:['User', 'Genre'],
      }
    )
    return tracks;
  }

  Track.getAllPlaylistsByGenre = async function () {
    let playlistArr = [];
    for (let i = 1; i < 5; i++){
      let subArr = await Track.getPlaylistByGenre(i);
      playlistArr.push(subArr);
    }
    return playlistArr;
  }

  Track.getMostRecentTracks = async function () {
    let tracks = await Track.findAll({
      order: [['createdAt', 'DESC']],
      limit: 12,
      include:['User', 'Genre'],
    });
    return tracks;
  }

  Track.getTrackById = async function (id) {
    let track = await Track.findByPk(id, {
      include: ['Genre', 'User']
    })
    return track;
  }

  return Track;
};