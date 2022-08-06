const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    
}, {timestamps: true})

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;