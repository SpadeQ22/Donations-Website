const express = require('express');
const userController = require('./Controllers/user.controller');
const adminController = require('./Controllers/admin.controller');
const campaignController = require('./Controllers/campaign.controller');
const receiptController = require('./Controllers/receipt.controller');
const {authLocalUser, authLocalAdmin, jwtAuth} = require("./services/auth.services");

const routes = new express.Router();
routes.post('/signup', userController.signUp);
routes.get('/login', authLocalUser, userController.login);


routes.get('/login-admin', authLocalAdmin, adminController.login);
routes.get('/admin/users', jwtAuth, userController.getAllUsers);
routes.get('/admin/users/:id', jwtAuth, userController.getUserData);
routes.put('/admin/users/:id', jwtAuth, userController.editUser);
routes.put('/admin/campaigns/:id', jwtAuth, campaignController.editCampaign);
routes.post('/admin/campaigns/add', jwtAuth, campaignController.addCampaign);
routes.get('/admin/receipts', jwtAuth, receiptController.getAllReceipts);
routes.get('/receipts/:id', jwtAuth, receiptController.getReceipt);


routes.post('/payment/receipt', jwtAuth, receiptController.addReceipt);
routes.get('/campaigns/:id', campaignController.getCampaign);
routes.get('/campaigns', campaignController.getAllCampaigns);

module.exports = routes





// // routes.post('/signup-admin', adminController.signUp);
// routes.get('/hello', jwtAuthUser, function (req, res){
//     console.log(req.user);
//     res.status(200).send("Success");
// });