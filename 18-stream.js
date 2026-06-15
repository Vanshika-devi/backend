// //there are many types streams writeable readable duplex and transformation
//there are many types streams writeable readable duplex and transformation
const {writeFileSync}=require('fs')
for(let i=0;i<100;i++){
    writeFileSync('./constent/sunfolder/file.txt',`hello world ${i}\n`,{flag:'a'})
}
const {createReadStream}=require('fs');
const stream=createReadStream('./constent/sunfolder/file.txt',{highWaterMark:9000,encoding:'utf-8'});
stream.on('data',(result)=>{
console.log(result)
})
stream.on('error',(error)=>{
  console.log(error)
})