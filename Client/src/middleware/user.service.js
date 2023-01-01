import axios from 'axios';
import qs from 'qs';


export const getAllUsers = async(Auth) => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/users',
        headers: { 
            'Authorization': Auth
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

export const getUserData = async(userId, Auth) => {
    let config = {
        method: 'POST',
        url: 'http://localhost:3001/admin/users/'+userId,
        headers: { 
            'Authorization': Auth
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

export const editUserData = async(new_data, userId, Auth) => {
    let data = qs.stringify(new_data);
    let config = {
        method: 'put',
        url: 'http://localhost:3001/admin/users/'+userId,
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
    } catch(e){
        return({
            'status':'failure',
            'errMsg': e,
        });
    }   
}
