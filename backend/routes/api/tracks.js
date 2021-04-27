const express = require('express');
const asyncHandler = require('express-async-handler');

const { Track } = require('../../db/models');

const router = express.Router();

router.get('/genre/:id(\\d+)', asyncHandler(async (req, res, next) => {
    let genreId = parseInt(req.params.id, 10);
    let tracks = await Track.getPlaylistByGenre(genreId);
    console.log(tracks)

    return res.json(tracks)
}))

module.exports = router;