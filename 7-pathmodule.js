const path=require('path');
console.log(path.sep)
const filepath=path.join('/constent','sunfolder','text.txt')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const result=path.resolve(__dirname,"constent",'sunfolder','text.txt')//shows the absolute
console.log(result)