const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/movies', async (req, res) => {
    allMovies = await Movie.find({});

    res.render('movies', {movies : allMovies});
});

router.get('/movies/:id', async (req, res) => {
    movieId = req.params.id;
    movieFromDB = await Movie.findById(movieId);

    res.render('movie-details', {movie: movieFromDB});
});

module.exports = router;