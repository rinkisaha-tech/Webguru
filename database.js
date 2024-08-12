const mongoose = require('mongoose');

module.exports = () =>{
    try{
    mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB connected sucessfully!')
    }catch(err){
        console.log('MongoDB connected err',err)
    }
}