const {readFile} = require('fs');
//promse
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
getdata("./constent/first.txt").then((result)=>{
  console.log(result);
  return getdata("./constent/sunfolder/text.txt");
  }).then((result1)=>{
    console.log(result1);
  }).catch(error=>{
    console.log(error);
  })
  
//   getdata("./constent/first.txt").then((result)=>{
//   console.log(result);
//   return getdata("./constent/sunfolder/text.txt");
//   }).then(result=>{
//     console.log(result);
//   }).catch((error)=>{
//   console.log(error);
// })