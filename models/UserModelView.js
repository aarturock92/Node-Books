let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let UserSchema = mongoose.Schema({
    Name: String,
    FirstLastName: String,
    SecondLastName: String,
    Email: String,
    User: String,    
    Password: String
})

UserSchema.plugin(mongoosePaginate)


let User = module.exports = mongoose.model('User', UserSchema);