const gameController = require('../controllers/game.controller');

module.exports = (app) => {
    app.get('/api/games', gameController.findAllGames);
    app.get('/api/games/:id', gameController.findOneGame);
    app.post('/api/games/', gameController.createOneGame);
    app.put('/api/games/:id', gameController.updateAGame);
    app.delete('/api/games/:id', gameController.deleteOneGame);
};