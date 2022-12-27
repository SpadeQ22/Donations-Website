const Manager = require('./config.service');
const axios = require('axios');
const qs = require('qs');


const getAllUsers = async() => {
    let config = {
        method: 'get',
        url: 'http://localhost:3000/admin/users',
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

const getUserData = async(userId) => {
    let config = {
        method: 'get',
        url: 'http://localhost:3000/admin/users/'+userId,
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

const editUserData = async(new_data, userId) => {
    let data = qs.stringify(new_data);
    let config = {
        method: 'put',
        url: 'http://localhost:3000/admin/users/'+userId,
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


module.exports = {
    getAllUsers,
    getUserData,
    editUserData
}
