const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo connected");
    }
    catch(err){
        console.log(`Connection faild :${err.message}`);
        process.exit(1);
    }
}
module.exports ={connectDB};