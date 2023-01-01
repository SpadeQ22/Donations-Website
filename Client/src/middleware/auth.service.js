import axios from 'axios';
import * as qs from 'qs';






export const loginAuthUser = async(email, password, setCookie)=>{
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
        setCookie('user', response.data);
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


export const registerAuthUser = async(userInfo, setCookie)=>{
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
        setCookie(response.data);
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


export const loginAuthAdmin = async(email, password, setCookie)=>{
    let data = await qs.stringify({
        'email': email,
        'password': password
    })
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/login-admin/',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    try{
        const response = await axios(config);
        setCookie(response.data);
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


