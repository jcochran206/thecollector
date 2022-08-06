require('./config/mongoose.config');
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('../server/routes/game.route')(app);

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
