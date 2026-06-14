const {readFile, read}= require('fs');
const utl=require('util')

//the util contains a functon that 
// help us in first eading the file and then converting the file 
// into a function that returns the file
const read=util.promisify(read)
const getdata=(path)=>{
return new Promise((resolve,reject)=>{
  readFile(path,'utf-8',(err,data)=>{
  if(err){
    reject(err);
  }
  else{
    resolve(data)
  }
})
})
}
//i =
const start=async()=>{
  try{
  const frst= await getdata('./constent/first.txt');
  console.log(frst)
  const second = await getdata('./constent/sunfolder/text.txt');
  console.log(second)
  }
  catch(error){
    console.log(error);
  }
}
start();