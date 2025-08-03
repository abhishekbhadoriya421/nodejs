const mongoose = require('mongoose');

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Database Connection Failed: ",err.message);
        process.exit(1);
    }
}

module.exports = connectDb;