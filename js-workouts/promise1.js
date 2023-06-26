/*
print out program started at the start of your code.
create a promise that resolves after 3 seconds.
Log out the promise while its pending.
print out 'program in progress' as well.
print out program complete when the promise completes after 3 seconds.

*/

console.log('program started')
let promise1 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve('promise completed')
},3000)

})
console.log(promise1)
promise1.then((value)=>{
console.log(value)
})

