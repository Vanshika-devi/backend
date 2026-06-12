//asynchronus file
const {readFile ,writeFile }=require('fs')
readFile('./constent/first.txt','utf-8',(error,result)=>{
    if (error){
        console.log(err)
        return;
    }
    const first=result;
    console.log(first+"\n")
    readFile('./constent/sunfolder/text1.txt',
        'utf-8' 
        ,(error,result)=>{
        if(error){
            console.log(error)
            return
        }
        const result1=result;
        console.log(result1+"\n")
        readFile('./constent/sunfolder/text.txt','utf-8',(error,result)=>{
            if(error){
                console.log(error)
                return
            }
            let result3=result
            console.log(result3+"\n")
        })
    })
})
//callback hell is the problem of asynchronus file read and write