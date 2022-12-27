const Manager = require('./config.service');
const axios = require('axios');
const qs = require('qs');


const addReceipt = async(amount, campaignId) => {
    let data = qs.stringify({
        'amount': amount,
        'campaignId': campaignId,
        'userId': Manager.getId() 
    });
    let config = {
        method: 'post',
        url: 'http://localhost:3000/payment/receipt',
        headers: { 
          'Authorization': Manager.getToken(),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
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

const getAllReceipts = async() => {
    let config = {
        method: 'get',
        url: 'http://localhost:3000/admin/receipts',
        headers: { 
          'Authorization': Manager.getToken(),
        }
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
            'errMsg':e,
        });
    }
}

const getReceiptData = async(receipt_id) => {
    let config = {
        method: 'get',
        url: 'http://localhost:3000/receipts/'+receipt_id,
        headers: { 
          'Authorization': Manager.getToken(),
        }
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
            'errMsg':e,
        });
    }
}

module.exports={
    getAllReceipts,
    getReceiptData,
    addReceipt
}
