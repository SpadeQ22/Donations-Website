const express = require('express');
const userController = require('./Controllers/user.controller');
const adminController = require('./Controllers/admin.controller');
const campaignController = require('./Controllers/campaign.controller');
const receiptController = require('./Controllers/receipt.controller');
const {authLocalUser, authLocalAdmin, jwtAuth} = require("./services/auth.services");

const routes = new express.Router();
routes.post('/signup', userController.signUp);
routes.post('/login-user', authLocalUser, userController.login);


routes.post('/login-admin', authLocalAdmin, adminController.login);
routes.post('/admin/users', jwtAuth, userController.getAllUsers);
routes.post('/admin/users/:id', jwtAuth, userController.getUserData);
routes.put('/admin/users/:id', jwtAuth, userController.editUser);
routes.put('/admin/campaigns/:id', jwtAuth, campaignController.editCampaign);
routes.post('/admin/campaigns/add', jwtAuth, campaignController.addCampaign);
routes.post('/admin/receipts', jwtAuth, receiptController.getAllReceipts);
routes.post('/receipts/:id', jwtAuth, receiptController.getReceipt);


routes.post('/payment/receipt', jwtAuth, receiptController.addReceipt);
routes.post('/campaigns/:id', campaignController.getCampaign);
routes.post('/campaigns', campaignController.getAllCampaigns);

module.exports = routes





// // routes.post('/signup-admin', adminController.signUp);
// routes.get('/hello', jwtAuthUser, function (req, res){
//     console.log(req.user);
//     res.status(200).send("Success");
// });