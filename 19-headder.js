const http=require('http');
let server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("home page");
    }
    else if(req.url==='./about'){
        res.end('about page');
    }
    else{
        res.end('page not found');
    }
})
server.listen(4000,()=>{
    console.log("port is running on 4000")
})