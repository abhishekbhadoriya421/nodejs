const { timeStamp } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use((req,res,next)=>{
    url = req.url;
    method = req.method
    timestamp = new Date().toISOString();
    console.log(`URL : [${url}], METHOD : [${method}], TIME : [${timestamp}]`);
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
   return res.status(200).send('Welcome');
})

app.get('/contact',(req,res)=>{
   return res.status(200).send('Contact Us');
})

app.post('/login',(req,res)=>{
    const {name,pass} = req.body;
    if(name == 'abhi' && pass == '1234'){
        return res.status(200).send('Login Successfull');
    }else{
        return res.status(403).send('Invalid Credentials');
    }
});

app.use((req,res,next)=>{
    return res.status(404).send("Page Not Found");
});

app.use((err,req,res,next)=>{
    console.error(err);
    return res.status(500).send('Internal Server Error');
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});