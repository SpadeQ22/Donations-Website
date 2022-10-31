require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require('passport');
const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.listen(port, (err)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(`Server is Listening on port ${port}`);
    }
})
