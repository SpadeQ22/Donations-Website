const {Admin} = require("../Models/adminUser")

async function signUp(req, res) {
    try {
        console.log(req.body);
        const newAdmin = await Admin.create(req.body);
        console.log(newAdmin);
        res.status(201).json(newAdmin);
    } catch (e) {
        res.status(500).json(e);
    }
}

function login(req, res, next) {
    res.status(200).json(req.user.toAuthJSON());
    return next();
}

module.exports = {signUp, login};