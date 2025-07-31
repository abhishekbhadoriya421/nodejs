const express = require('express');
const path = require('path');
const app = express();
const app2 = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Express!</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>About Us</h1>');
});

app.get('/year/:id',(req,res)=>{
    const id = req.params.id
    if(id == 2025){
        res.send('<h1>Profile of 2025</h1>');
    }else if(id > 2025){
        res.send('<h1>You Are Coming From Future</h1>');
    }
    else{
        res.send('<h1>You Are Coming From Past</h1>');
    }
})

app.get('/search',(req,res)=>{
    const {name,pass} = req.query;
    if(name && pass){
        console.log(name," ", pass);
        (name === 'Abhishek' && pass == 1234)?
        res.send("<h1>You are logged in successfully</h1>"): 
        res.send("<h1>Invalid username and password</h1>");
    }else{
        res.send("<h1>Invalid Request</h1>");
    }
})

app.get('/home',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname+'/index.html'))
});

app2.use(express.static('public'));

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
});

app2.listen(3030,()=>{
    console.log('Server running at http://localhost:3030');
});
