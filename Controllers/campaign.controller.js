const {Campaign} = require("../Models/campaign");


async function getCampaign(req, res){
    try{
        const foundCampaign = await Campaign.findById(req.params.id);
        res.status(200).json(foundCampaign);
    }catch(e){
        res.status(500).json(e);
    }
}

async function addCampaign(req, res){
    try{
        const uploadedCampaign = await Campaign.create(req.body);
        res.status(200).json(uploadedCampaign);
    }catch(e){
        res.status(500).json(e);
    }
}

async function getAllCampaigns(req, res){
    try{
        const allCamp = await Campaign.find({});
        res.status(200).json(allCamp);
    }catch(e){
        res.status(500).json(e);
    }
}

async function editCampaign(req, res){
    try{
        const newCamp = await Campaign.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200).json(newCamp);
    }catch(e){
        res.status(500).json(e);
    }
}

module.exports = {
    getCampaign,
    addCampaign, 
    getAllCampaigns,
    editCampaign
}


