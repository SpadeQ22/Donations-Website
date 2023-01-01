import axios from 'axios';
import qs from 'qs';


export const addReceipt = async(amount, campaignId, Auth, userId) => {
    let data = qs.stringify({
        'amount': amount,
        'campaignId': campaignId,
        'userId': userId
    });
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/payment/receipt',
        headers: { 
          'Authorization': Auth,
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

export const getAllReceipts = async(Auth) => {
    // console.log(context.token)
    // console.log(Manager.get)
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/receipts',
        headers: { 
          'Authorization': Auth,
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

export const getReceiptData = async(receipt_id, Auth) => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/receipts/'+receipt_id,
        headers: { 
          'Authorization': Auth,
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

