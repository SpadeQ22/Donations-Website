let token = null;
let _id = null;
let userName = null;


const setToken = (new_token) => {
    token = new_token;
}

const getToken = () =>{
    return token;
}

const setId = (new_id) =>{
    _id = new_id;
}

const getId = () =>{
    return _id;
}

const setUserName = (new_userName) => {
    userName = new_userName;
}

const getUserName = ()=>{
    return userName;
}

module.exports = {
    setToken, 
    setId, 
    getToken,
    getId, 
    setUserName, 
    getUserName
}