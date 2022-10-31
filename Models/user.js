const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: ObjectId},
    name: {type: String, requried: true},
    email:{type:String, requried: true},
    birthdate: {type: Date, required: true},
    password:{type: String, required:true}
});

const User = mongoose.model('User', userSchema);
module.exports = {User};