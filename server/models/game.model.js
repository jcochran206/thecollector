const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'game title is required'],
    maxlength: [40, 'length max is 40 chars']
  },
  boxArt: {
    type: String
  },
  rating: {
    type: String,
    required: [true, 'game rating is needed'],
    enum: ['E', 'E10', 'T', 'M', 'AO','RP' ]
  },
  platform: {
    type: String,
    required: [true, 'platform is needed'],
  },
  edition: {
    type: String,
  },
  price: {
    type: String,
    default: 'N/A'
  },
  manufacturer: {
    type: String,
  },
  releaseYear: {
    type: Number,
    min: [1960, 'too old']
  }

}, {timestamps: true})

const Game = mongoose.model('game', GameSchema);

module.exports = Game;