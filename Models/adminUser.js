const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
    firstName: {
        type: String,
        required: [true, 'FirstName is required!'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'LastName is required!'],
        trim: true,
    },
    userName: {
        type: String,
        required: [true, 'UserName is required!'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [8, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return validator.isStrongPassword(password);
            },
            message: '{VALUE} is not a valid password!',
        },
    },
});

AdminSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = this._hashPassword(this.password);
    }
    return next();
})


AdminSchema.methods = {
    _hashPassword(password){
        return bcrypt.hashSync(password, 10);
    },
    authenticateAdmin(password){
        return bcrypt.compareSync(password, this.password);
    },
    createToken(){
        return jwt.sign({
            _id: this._id,
            admin: 1,
        }, "thisisasecret", {expiresIn: "1d"});
    },
    toAuthJSON(){
        return {
            _id: this._id,
            userName: this.userName,
            token:`Bearer ${this.createToken()}`,
        };
    }
}

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = {Admin};
