const https = require('http');

const server = https.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({
        'data' : "Hello World"
    }))
});

server.listen(8080,()=>{
    console.log("Server is running at",8080);
})