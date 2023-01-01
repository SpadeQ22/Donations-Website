import axios from 'axios';

export const getAllCampaigns = async()=>{
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/campaigns',
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

