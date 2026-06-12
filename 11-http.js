/* This code snippet is creating a simple HTTP server using Node.js. It imports the built-in Node.js
`http` module, creates a server instance using the `createServer` method, and defines a callback
function that will be executed whenever a request is made to the server. */
const http=require("http")
const server = http.createServer((req,res)=>{
 if(req.url==='/'){
    res.end('Welcome to our webpage')
 }
 if(req.url==='/about'){
    res.end(`<h1>oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
 }
})
server.listen(5000)