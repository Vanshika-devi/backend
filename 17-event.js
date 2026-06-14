//i , =
const http=require("http")
http
const EventEmitter= require('events')
const custom = new EventEmitter('events');
//on - listen for an event 
//emit- emit an event
custom.on('response',(name,age)=>{
    console.log("Data received of user "+name+ " "+ age)
})
custom.on('response',()=>{
    console.log("some ")
})
custom.emit('response','john',34)
