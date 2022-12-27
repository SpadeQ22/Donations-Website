import axios from 'axios';
import qs from 'qs';
import  * as Manager from './config.service'


export const getAllUsers = async() => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/users',
        headers: { 
            'Authorization': Manager.getToken()
        }
    };
    try{
        const response = await axios(config);
        return({
            'status':'success',
            'data': response.data,
        });
    } catch(e){
        return({
            'status':'failure',
            'errMsg': e,
        });
    }   
}

export const getUserData = async(userId) => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/users/'+userId,
        headers: { 
            'Authorization': Manager.getToken()
        }
    };
    try{
        const response = await axios(config);
        return({
            'status':'success',
            'data': response.data,
        });
    } catch(e){
        return({
            'status':'failure',
            'errMsg': e,
        });
    }   
}

export const editUserData = async(new_data, userId) => {
    let data = qs.stringify(new_data);
    let config = {
        method: 'put',
        url: 'http://localhost:3001/admin/users/'+userId,
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
    } catch(e){
        return({
            'status':'failure',
            'errMsg': e,
        });
    }   
}
