const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  comment: {
    type: String
  },
  username: {
    type: String
  },
  show: {
    type: Schema.Types.ObjectId,
    ref: 'Show'
  }
  })

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;