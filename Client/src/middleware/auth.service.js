const tokenManager = require('./config.service');
const axios = require("axios");
const qs = require('qs')



const loginAuthUser = async(email, password)=>{
    let data = await qs.stringify({
        'email': email,
        'password': password
    })
    let config = {
        method: 'get',
        url: 'http://localhost:3000/login/',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    try{
        const response = await axios(config);
        tokenManager.setToken(response.data.token);
        tokenManager.setId(response.data._id);
        tokenManager.setUserName(response.data.userName);
        return({
            "status": "success", 
            "auth": true, 
            "err": false, 
            "errMsg":""
        })
    } catch(e){
        return({
            "status":"failure",
            "auth": false,
            "err": true,
            "errMsg": e
        });
    }
}


const registerAuthUser = async(userInfo)=>{
    let data = await qs.stringify(userInfo);
    let config = {
        method: 'post',
        url: 'http://localhost:3000/signup/',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    try{
        const response = await axios(config);
        tokenManager.setToken(response.data.token);
        tokenManager.setId(response.data._id);
        tokenManager.setUserName(response.data.userName);
        return({
            "status": "success", 
            "auth": true, 
            "err": false, 
            "errMsg":""
        })
    } catch(e){
        return({
            "status":"failure",
            "auth": false,
            "err": true,
            "errMsg": e
        });
    }
}


const loginAuthAdmin = async(email, password)=>{
    let data = await qs.stringify({
        'email': email,
        'password': password
    })
    let config = {
        method: 'get',
        url: 'http://localhost:3000/login-admin/',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    try{
        const response = await axios(config);
        tokenManager.setToken(response.data.token);
        tokenManager.setId(response.data._id);
        tokenManager.setUserName(response.data.userName);
        return({
            "status": "success", 
            "auth": true, 
            "err": false, 
            "errMsg":""
        })
    } catch(e){
        return({
            "status":"failure",
            "auth": false,
            "err": true,
            "errMsg": e
        });
    }
}


module.exports = {
    loginAuthAdmin,
    loginAuthUser,
    registerAuthUser
}

