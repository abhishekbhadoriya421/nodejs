const express = require('express');
const path = require('path');
const app = express();


app.use((req,res,next)=>{
    console.log("URL: ",req.url,"\n METHOD",req.method);
    next();
});


app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());

/**
 * Static page rendering
 */
app.get('/about',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,'public','about.html'));
});

app.get('/home',(req,res)=>{
    return res.status(200).render('home',{
        name:'Abhishek',
        time: new Date().toLocaleTimeString()
    })
});


app.get("/",(req,res)=>{
    return res.status(200).send("<h1>Home</h1>");
});

app.get('/error',(req,res)=>{
    console.log('ererer');
    throw new Error("Something went wrong");
})

app.use((req,res)=>{
    return res.status(404).send("<h1>Page Not Found</h1>");
});

app.use((err,req,res,next)=>{
    return res.status(500).send("Unexpected Error Occurred");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});