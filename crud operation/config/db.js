const mongoose = require('mongoose');

const db = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://abhishek:abhi22447435@cluster0.skgaxjz.mongodb.net/myAppDB')
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err);
        return 
    }
}

module.exports = db