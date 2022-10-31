//product

const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    id: {type: ObjectId},
    totalDonations: {type: Number, min: 0, default: 0},
    campaignTitle: {type: String, required: true},
    campaignDescription: {type: String, required: true},
    targetFund: {type: Number, min:0}
})

const Campaign = mongoose.model('Campagin', campaignSchema);

module.exports = {Campaign};