const express = require('express');
const asyncHandler = require('express-async-handler');

const { Track, Comments } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) =>{
    let trackId = parseInt(req.params.id, 10);
    let track = await Track.getTrackById(trackId);
    return res.json(track);
}))

router.get('/genre', asyncHandler(async (req, res, next) => {
    let playlists = await Track.getAllPlaylistsByGenre();
    return res.json(playlists)
}))

router.get('/genre/:id(\\d+)', asyncHandler(async (req, res, next) => {
    let genreId = parseInt(req.params.id, 10);
    let tracks = await Track.getPlaylistByGenre(genreId);
    return res.json(tracks)
}))

router.get('/recent', asyncHandler(async (req, res, next) => {
    let tracks = await Track.getMostRecentTracks();
    return res.json(tracks);
}))

router.get('/:id(\\d+)/comments', asyncHandler(async(req, res, next) => {
    let trackId = parseInt(req.params.id, 10);
    let comments = await Comments.getCommentsByTrack(trackId);
    return res.json(comments);
}))

router.get('/related/:id(\\d+)/:trackId(\\d+)', asyncHandler( async (req, res, next) => {
    let genreId = parseInt(req.params.id, 10);
    let trackId = parseInt(req.params.trackId, 10);
    let tracks = await Track.getRelatedTracks(genreId, trackId);
    return res.json(tracks);
}))

router.post('/comment', asyncHandler( async (req, res, next) => {
    const { userId, trackId, content } = req.body;
    let comment = await Comments.createComment(userId, trackId, content);

    let newComment = await Comments.findByPk(comment.id, {
        include:['User']
    });

    return res.json(newComment)
}))


module.exports = router;