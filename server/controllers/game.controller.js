const Game = require('../models/game.model');

//seperate modules for each function 
module.exports.findAllGames = (req, res) => {
    Game.find()
    .then((allGames) => {
        res.json({games: allGames})
    })
    .catch((err) => {
        res.json({message: 'error in get all function', err});
        res.status(400).json({message: 'something is wrong within find All function', error: err});
    }); 
}

//find one 
module.exports.findOneGame = (req, res) => {
    Game.findOne({_id: req.params.id})
    .then((game) => {
        res.json({game: game})
    })
    .catch((err) => {
        res.json({message: 'error in get one function', err});
        res.status(400).json({message: 'something is wrong within find one function', error: err})
    })
}

//create
module.exports.createOneGame = (req, res) => {
    Game.create(req.body)
    .then((newGame) =>{
        res.status(201).json(newGame)
    })
    .catch((err) => {
        res.json({message: 'error in create function', err});
        res.status(400).json({message: 'something is wrong in the create function', errors: err.errors});
    })
}

//update
module.exports.updateAGame = (req, res) => {
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((game) => {
        res.json(game);
    })
    .catch((err) => {
        res.json({message: 'error in update function', err});
        res.status(400).json({message: 'something is wrong in the update function', error: err});
    })
}

//delete
module.exports.deleteOneGame = (req, res) => {
    Game.deleteOne({_id: req.params.id})
    .then((game) => {
        res.json(game)
    })
    .catch((err) => {
        res.json({message: 'error in delete function', err});
        res.status(400).json({message: 'something is wrong in the delete function', error: err});
    })
}

