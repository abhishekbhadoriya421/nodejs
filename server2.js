const  http = require('http')
const fs = require('fs')
const path = require('path')


/**
 * Create Server
 */

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log(__dirname);
        const filePath = path.join(__dirname + '/dashboard.html');
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type' : 'text/html'});
                res.end("Internal Server Error", err);
            }else{
                res.writeHead(200,{'Content-Type' : 'text/html'});
                res.end(data);
            }
        })
    }
})

server.listen(8080,()=>{
    console.log('Server running at http://localhost:8080')
})