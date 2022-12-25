const mongoose = require('mongoose');
const passport = require('passport');


const campaignSchema = new mongoose.Schema({
    totalDonations: {type: Number, min: 0, default: 0},
    campaignTitle: {type: String, required: true, unique: true},
    campaignDescription: {type: String, required: true},
    targetFund: {type: Number, min:0}
})

const Campaign = mongoose.model('Campagin', campaignSchema);

module.exports = {Campaign};