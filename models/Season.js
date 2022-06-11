const mongoose = require('mongoose');
const { Schema } = mongoose;

const seasonSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  numberOfEpisodes: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: String // String
  }
})

const Season = mongoose.model('Season', seasonSchema);

module.exports = Season;