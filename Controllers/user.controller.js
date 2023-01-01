const {User} = require("../Models/user")

async function signUp(req, res) {
    try {
        console.log(req.body);
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(201).json(newUser.toAuthJSON());
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

function login(req, res, next) {
    console.log(req);
    res.status(200).json(req.user.toAuthJSON());
    return next();
}

async function editUser(req, res){
    try{
        const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new :true});
        res.status(200).json(updatedUser);
    } catch(e){
        res.status(500).json(e);
    }    
}

async function getUserData(req, res){
    try{
        const userData = await User.findById(req.params.id);
        res.status(200).json(userData);
    } catch(e){
        res.status(500).json(e);
    }
}


async function getAllUsers(req, res){
    try{
        const userArray = await User.find({});
        res.status(200).json(userArray);
    } catch(e){
        res.status(500).json(e);
    }
}



module.exports = {signUp, login, editUser, getAllUsers, getUserData};