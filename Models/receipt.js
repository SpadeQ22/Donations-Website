const mongoose = require('mongoose');
const receiptSchema = new mongoose.Schema({
    amount: {
        type: Number, 
        min: 1, 
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    },
    campaignId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Campagin'
    }
}, {timestamps:true})

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = {Receipt};

