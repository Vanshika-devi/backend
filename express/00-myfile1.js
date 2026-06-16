const express=require('express');//mostly used convention to name it as express
// const app=require('express')() 
const app=express();
app.get('/',(req,res)=>{
    console.log("user hit the resource")
    res.status(200).send('home page')//convention and method for express js
})
app.get('/about',(req,res)=>{
    console.log("user hit the about resource")
    res.status(200).send('about page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
})
app.listen(5000,()=>{
    console.log("post 5000 is currently listening.....")
})
//app.get:- this is the http method to get the data from the server
//app.post:- this is the http method to send the data to the server
//app.put:- these are the http method to update the data on the server
//app.delete:- these are the http method to delete the data from the server
//app.all:- it will listen to all the http methods
//app.use:-responsible for middleware;
//app.listen:- it will listen to the port and callback function will be called when the server is ready to accept the request