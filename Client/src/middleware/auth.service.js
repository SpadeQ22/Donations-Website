import axios from 'axios';
import * as qs from 'qs';
import  * as tokenManager  from './config.service'




export const loginAuthUser = async(email, password)=>{
    let data = await qs.stringify({
        'email': email,
        'password': password
    })
    console.log(data);
    let config = {
        method: 'POST',
        url: 'http://www.localhost:3001/login-user/',
        crossdomain: true,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        data: data
    };
    try{
        const response = await axios(config);
        tokenManager.setToken(response.token);
        tokenManager.setId(response.data._id);
        tokenManager.setUserName(response.data.userName);
        return({
            "status": "success", 
            "auth": true, 
            "err": false, 
            "errMsg":""
        })
    } catch(e){
        console.log(e);
        return({
            "status":"failure",
            "auth": false,
            "err": true,
            "errMsg": e
        });
    }
}


export const registerAuthUser = async(userInfo)=>{
    let data = await qs.stringify(userInfo);
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/signup/',
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


export const loginAuthAdmin = async(email, password)=>{
    let data = await qs.stringify({
        'email': email,
        'password': password
    })
    let config = {
        method: 'get',
        url: 'http://localhost:3001/login-admin/',
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


