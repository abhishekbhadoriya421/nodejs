const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use((req,res,next)=>{ //Custom Middleware 
    console.log(`request method: ${req.method}: request url: ${req.url}`);
    console.log('Log In.....');
    next();
});


// app.use(express.static('public')); // Built in middleware

app.get('/about',(req,res)=>{ // Route level middleware
    throw new Error('Unexpected crash!');  // This will trigger the Error Handler Middleware
    return res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/form',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/public/form.html'))
});

app.use(express.urlencoded({'extended':true}));
app.use(express.json());

app.post('/submit',(req,res)=>{
    if(req.body.name == "Abhishek" && req.body.pass == "1234"){
        return res.status(200).send("Login Success");
    }else{
        console.log(req.body)
        return res.status(401).send("Invalid Credentials");
    }
});




// 4️⃣ 404 handler (when no route matches)
app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.use((err,req,res,next)=>{ // Error Handle Middleware
    console.error(err.stack);
    return res.status(404).send('Error');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})