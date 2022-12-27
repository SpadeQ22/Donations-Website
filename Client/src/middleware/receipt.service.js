import axios from 'axios';
import qs from 'qs';
import  * as Manager from './config.service'


export const addReceipt = async(amount, campaignId) => {
    let data = qs.stringify({
        'amount': amount,
        'campaignId': campaignId,
        'userId': Manager.getId() 
    });
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/payment/receipt',
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

export const getAllReceipts = async() => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/receipts',
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

export const getReceiptData = async(receipt_id) => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/receipts/'+receipt_id,
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

