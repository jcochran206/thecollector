require('./config/mongoose.config');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('./routes/game.routes')(app);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}else {
    app.get('/', (req, res) => {
        res.send('api is running')
    })
}

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
