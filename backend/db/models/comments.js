'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
    Comments.belongsTo(models.User, { foreignKey: 'userId' }),
    Comments.belongsTo(models.Track, { foreignKey: 'trackId' })
  };

  Comments.getCommentsByTrack = async function(id) {
    let comments = await Comments.findAll({
      where: {
        trackId: id
      },
      include: ['User'],
      order: [['createdAt', 'ASC']]
    });
    return comments;
  }

  Comments.getCommentsByUser = async function(id) {
    let comments = await Comments.findAll({
      where: {
        userId: id
      },
      include: ['Track'],
      order: [['createdAt', 'DESC']]
    });
    return comments;
  }

  Comments.createComment = async function(userId, trackId, content) {
    let comment = await Comments.create({
      userId,
      trackId,
      content
    })

    return comment;
  }

  return Comments;
};