let token = null;
let _id = null;
let userName = null;


export const setToken = (new_token) => {
    token = new_token;
}

export const getToken = () =>{
    return token;
}

export const setId = (new_id) =>{
    _id = new_id;
}

export const getId = () =>{
    return _id;
}

export const setUserName = (new_userName) => {
    userName = new_userName;
}

export const getUserName = ()=>{
    return userName;
}
