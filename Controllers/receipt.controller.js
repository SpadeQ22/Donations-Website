const {Receipt} = require("../Models/receipt")
const {Campaign} = require("../Models/campaign")



//getAllReceipts

async function getAllReceipts(req, res){
    try{
        const allReceipts = await Receipt.find({});
        res.status(200).json(allReceipts);
    }catch(e){
        res.status(500).json(e);
    }
}

//Add a Receipt
//modify totalDonations value in campaign
async function addReceipt(req, res){
    try {
        const updatedCampaign = await Campaign.findOneAndUpdate({_id: req.body.campaignId}, {'$inc':{'totalDonations': req.body.amount}});
        const newReceipt = await Receipt.create(req.body);
        res.status(200).json(newReceipt);
    }catch(e){
        res.status(500).json(e);
    }
}



//GetReceipt
async function getReceipt(req, res){
    try{
        const receipt = await Receipt.find({_id:req.params.id}).populate(["userId", "campaignId"]);
        res.status(200).json(receipt);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

module.exports = {
    getAllReceipts,
    getReceipt,
    addReceipt
}