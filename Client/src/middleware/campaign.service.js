const axios = require('axios');

const getAllCampaigns = async()=>{
    let config = {
        method: 'get',
        url: 'http://localhost:3000/campaigns',
        headers: { }
    };
    try{
        const response = await axios(config);
        return({
            'status':'success',
            'data': response.data,
        });
    }catch(e){
        return({
            'status':'failure',
            'errMsg': e,
        });
    }
}

module.exports = {getAllCampaigns}