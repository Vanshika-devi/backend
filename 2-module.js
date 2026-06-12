const {john,peter}=require('./1-module')//distructuring
const sayHi = require('./3-module')
const fun =require('./3-module')
const val=require('./4-alternative')
require('./5-mind-granade')
fun(john)
fun(peter)
console.log(val.people)
console.log(val.person)
console.log(val.items)

// sayHi(john)
// sayHi(peter) same dunctionname as other file