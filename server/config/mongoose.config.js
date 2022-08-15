const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const uri = `mongodb+srv://${username}:${password}@mernprojects.blegnam.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('established connection to mongodb'))
.catch((err) => console.log('error in connection', err))