//the util contains a functon that 
// help us in first eading the file and then converting the file 
// into a function that returns the file
const {readFile, writeFile}= require('fs');
const util=require('util')
const write=util.promisify(writeFile)
const readfile=util.promisify(readFile)

const start=async()=>{
  try{
  const first= await readfile('./constent/first.txt','utf-8');
  const second = await readfile('./constent/sunfolder/text.txt','utf-8');
  console.log(first,"\n",second)
  await write('./constent/sunfolder/text2.txt',`This is awesome :${first} ${second}`,'utf-8')
  }
  catch(error){
    console.log(error);
  }
}
start();