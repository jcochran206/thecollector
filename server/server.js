require('./config/mongoose.config');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('app is running');
})

require('./routes/game.routes')(app);

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
