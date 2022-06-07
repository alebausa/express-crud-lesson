const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  description: {
    type: String,
  },
  genre: {
    type: String
  },
  image: {
    type: String,
    default: 'https://www.formate.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png'
  }, 
  cast: {
    type: String,
  },
  director: {
    type: String
  }
})

const Show = mongoose.model('Show', showSchema);

module.exports = Show;