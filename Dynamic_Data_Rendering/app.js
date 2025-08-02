const express = require('express');
const path = require('path');
const app = express();
const routesIndex = require('./routes/mainRoute');


app.use((req,res,next)=>{
    console.log("URL: ",req.url,"\n METHOD",req.method);
    next();
});


app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());

app.use('/',routesIndex);

app.use((req,res)=>{
    return res.status(404).send("<h1>Page Not Found</h1>");
});


app.use((err,req,res,next)=>{
    return res.status(500).send("Unexpected Error Occurred");
});


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});