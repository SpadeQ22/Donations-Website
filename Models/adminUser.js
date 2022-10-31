const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    id: {type: ObjectId},
    email: {type: String, requried: true},
    pass: {type: String, required: true}
})

const Admin = mongoose.model('Admin', adminUserSchema);
module.exports = {Admin};
