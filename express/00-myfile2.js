const express=require('express');
const path=require('path')
const app=express();
//setup static and middleware
app.use(express.static('./public'))//it will look for the file in the navbar-app folder and if it is not found then it will look for the file in the current directory
// app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,"./public/index.html"))//can aslo use path.join(__dirname,"./public
//    // /index.html") to get the path of the file
// })
app.all('*',(req,res)=>{
    res.status(404).send("This Page is not found")
})
app.listen(5000,()=>{
    console.log("port 5000 is currently listening.....")
})
//we can add assests by two methods first is the app.use(express.static('./public')) and second is by using the sendFile method to send the file to the browser and 
//by using the server side rendering we can send the data to the browser and we can also use the template engine to render the data to the browser
//templete emgine is more popular in the modern day applications and it is used to render the data to the browser and it is also used to create the dynamic web pages and
//  it is also used to create the single page applications and it is also used to create the multi page applications
//  and it is also used to create the server side rendering applications and it is also used to create the client side rendering applications 
// and it is also used to create the full stack applications and it is also used to create the microservices applications and it is also used to create the serverless applications 
// and it is also used to create the cloud native applications and it is also used to create the containerized applications and it is also used to create the dockerized applications and
//  it is also used to create the kubernetes applications and it is also used to create the devops applications and it is also used to create the ci/cd applications and it is also used to 
// create the agile applications and it is also used to create the scrum applications and it is also used to create the kanban applications and it is also used to create the lean applications 
// and it is also used to create the six sigma applications and it is also used to create the itil applications and it is also used to create the cobit applications and it is also used to create the prince2 applications and it is also used to create the pmp applications