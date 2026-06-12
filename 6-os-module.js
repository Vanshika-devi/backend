const os=require('os')
//info about cuurent user
const user=os.userInfo()
console.log(user)
//method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()}`)
//
const current={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemem:os.freemem(),
}
console.log(current)
