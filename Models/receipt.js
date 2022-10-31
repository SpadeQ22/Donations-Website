const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    id: {type: ObjectId},
    amount: {type: Number, min: 1, required: true},
    timestamps: true,
    userId: {type: String, required: true},
    campaignId: {type: String, required: true}
})

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = {Receipt};

