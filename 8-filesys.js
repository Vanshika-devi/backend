const {readFileSync,writeFileSync}=require("fs")
const first=readFileSync('./constent/first.txt','utf-8')
const second=writeFileSync('./constent/sunfolder/text.txt','utf-8')
console.log(first)
console.log(second)
writeFileSync('./constent/sunfolder/text1.txt',
    `here is the result ${first} and ${second}`,{flag:'a'}
)//it will overwrite the file if there is another values 
//  but if we hav flag :a then it will append the valus at the nd of the file
