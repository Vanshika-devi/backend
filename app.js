console.log('stream example http ')
const http=require('http')
const stream=require('stream')
const fs=require('fs')
let server=http.createServer((req,res)=>{
  const text=fs.createReadStream('./constent/sunfolder/file.txt','utf-8');
  text.on('open',()=>{  
    text.pipe(res)
  })
  text.on('error',(err)=>{
    console.log(err)
  })
})
server.listen(5000)
//mime types important 
//http important 
//status codes importtant