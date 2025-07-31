const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.send("This is dashboard");
});

app.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname + "/dashboard.html"))
})

app.get('/post',(req,res)=>{
    console.log(req);
    res.send("this is post")
})

app.get('/like',(req,res)=>{
    res.send("this is Like")
})

app.get('/user',(req,res)=>{ // get query parameter 
    if(req.query.id == 1){
        res.send("this is user 1");
    }else{
        res.send("this is user");
    }
})

app.get('/hello/:id',(req,res)=>{
    return res.send("This ID" +req.params.id);
})
app.listen(3000, () => console.log('Server running at http://localhost:3000'));