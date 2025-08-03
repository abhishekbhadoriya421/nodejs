const express = require('express');
const connectDb = require('./config/database');
const router = require('./router/userRouter');
const app = express();
const port = 3000;
require('dotenv').config();


connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/',router);

app.use((err,req,res,next)=>{
    return res.status(500).render('error-file',{
        'message': err.message
    })
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});