const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = require('./app')

mongoose.connect('mongodb://localhost:27017/ServiceBook');
const db = mongoose.connection;
app.listen(3000);
console.log('Running on port 3000');
