require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport")
const { default: mongoose } = require("mongoose");
const routes = require("./routes");

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise; 
try {
    mongoose.connect("mongodb://localhost:27017/donationWebApi")
} catch (err) {
    mongoose.createConnection("mongodb://localhost:27017/donationWebApi");
}
mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
    throw e;
})



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());


app.use("/", routes)

const port = 3001;
app.listen(port, (err)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(`Server is Listening on port ${port}`);
    }
})
