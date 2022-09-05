const mongoose = require('mongoose');
require('dotenv').config();

// const username = process.env.MONGO_USER;
// const password = process.env.MONGO_PASS;
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('established connection to mongodb'))
.catch((err) => console.log('error in connection', err))