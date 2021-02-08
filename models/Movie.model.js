const mongoose = require('mongoose');
const {Schema, model} = mongoose; //avoid the need of write mongoose.Schema and mongoose.model

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
    },
    {
        timestamps: true
    }
);

module.exports = model('Movie', movieSchema);